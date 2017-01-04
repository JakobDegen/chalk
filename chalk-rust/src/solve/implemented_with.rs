use errors::*;
use solve::Solution;
use solve::environment::Environment;
use solve::infer::{InferenceTable, Quantified};
use solve::solver::Solver;
use ir::*;

pub struct ImplementedWith<'s> {
    solver: &'s mut Solver,
    infer: InferenceTable,
    environment: Environment,
    goal: TraitRef,
    impl_id: ItemId,
}

impl<'s> ImplementedWith<'s> {
    pub fn new(&self,
               solver: &'s mut Solver,
               q: Quantified<(Environment, TraitRef)>,
               impl_id: ItemId)
               -> Self {
        let (environment, goal) = q.value;
        let infer = InferenceTable::new_with_vars(q.binders, environment.universe);
        ImplementedWith {
            solver: solver,
            environment: environment,
            infer: infer,
            goal: goal,
            impl_id: impl_id,
        }
    }

    pub fn solve(&mut self) -> Result<Solution<Quantified<TraitRef>>> {
        let universe = self.environment.universe;
        let program = self.environment.program.clone();

        // Extract the trait-ref that this impl implements and its where-clauses,
        // instantiating all the impl parameters with fresh variables.
        //
        // So, assuming `?1` is the next new variable in `self.infer`, if we had:
        //
        //     impl<T: Clone> Clone for Option<T>
        //
        // this would yield `Option<?1>: Clone` and `?1: Clone`.
        let (impl_trait_ref, mut where_clauses) = self.infer
            .instantiate(universe,
                         &(&program.impl_data[&self.impl_id].trait_ref,
                           &program.where_clauses[&self.impl_id]));

        // Unify the trait-ref we are looking for (`self.goal`) with
        // the trait-ref that the impl supplies (if we can). This will
        // result in some auxiliary normalization clauses we must
        // prove.
        let normalize_to = self.infer.unify(&self.goal, &impl_trait_ref)?;
        where_clauses.extend(normalize_to.into_iter().map(WhereClause::NormalizeTo));

        // Now try to prove the where-clauses one by one. If all of
        // them can be successfully proved, then we know that this
        // impl applies. If any of them error out, this impl does not.
        let successful = {
            let infer = &mut self.infer;
            let q_where_clauses = where_clauses.iter().map(|wc| infer.quantify(wc));
            self.solver.solve_all(q_where_clauses)?
        };
        let refined_goal = self.infer.quantify(&self.goal);
        Ok(Solution {
            successful: successful,
            refined_goal: refined_goal,
        })
    }
}