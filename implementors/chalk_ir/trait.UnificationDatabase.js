(function() {var implementors = {};
implementors["chalk_integration"] = [{"text":"impl <a class=\"trait\" href=\"chalk_ir/trait.UnificationDatabase.html\" title=\"trait chalk_ir::UnificationDatabase\">UnificationDatabase</a>&lt;<a class=\"struct\" href=\"chalk_integration/interner/struct.ChalkIr.html\" title=\"struct chalk_integration::interner::ChalkIr\">ChalkIr</a>&gt; for <a class=\"struct\" href=\"chalk_integration/db/struct.ChalkDatabase.html\" title=\"struct chalk_integration::db::ChalkDatabase\">ChalkDatabase</a>","synthetic":false,"types":["chalk_integration::db::ChalkDatabase"]},{"text":"impl <a class=\"trait\" href=\"chalk_ir/trait.UnificationDatabase.html\" title=\"trait chalk_ir::UnificationDatabase\">UnificationDatabase</a>&lt;<a class=\"struct\" href=\"chalk_integration/interner/struct.ChalkIr.html\" title=\"struct chalk_integration::interner::ChalkIr\">ChalkIr</a>&gt; for <a class=\"struct\" href=\"chalk_integration/program/struct.Program.html\" title=\"struct chalk_integration::program::Program\">Program</a>","synthetic":false,"types":["chalk_integration::program::Program"]}];
implementors["chalk_solve"] = [{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>, DB:&nbsp;<a class=\"trait\" href=\"chalk_solve/trait.RustIrDatabase.html\" title=\"trait chalk_solve::RustIrDatabase\">RustIrDatabase</a>&lt;I&gt;&gt; <a class=\"trait\" href=\"chalk_ir/trait.UnificationDatabase.html\" title=\"trait chalk_ir::UnificationDatabase\">UnificationDatabase</a>&lt;I&gt; for <a class=\"struct\" href=\"chalk_solve/display/stub/struct.StubWrapper.html\" title=\"struct chalk_solve::display::stub::StubWrapper\">StubWrapper</a>&lt;'_, DB&gt;","synthetic":false,"types":["chalk_solve::display::stub::StubWrapper"]},{"text":"impl&lt;I, DB, P&gt; <a class=\"trait\" href=\"chalk_ir/trait.UnificationDatabase.html\" title=\"trait chalk_ir::UnificationDatabase\">UnificationDatabase</a>&lt;I&gt; for <a class=\"struct\" href=\"chalk_solve/logging_db/struct.LoggingRustIrDatabase.html\" title=\"struct chalk_solve::logging_db::LoggingRustIrDatabase\">LoggingRustIrDatabase</a>&lt;I, DB, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"chalk_solve/trait.RustIrDatabase.html\" title=\"trait chalk_solve::RustIrDatabase\">RustIrDatabase</a>&lt;I&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;DB&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>,&nbsp;</span>","synthetic":false,"types":["chalk_solve::logging_db::LoggingRustIrDatabase"]},{"text":"impl&lt;I, W, DB, P&gt; <a class=\"trait\" href=\"chalk_ir/trait.UnificationDatabase.html\" title=\"trait chalk_ir::UnificationDatabase\">UnificationDatabase</a>&lt;I&gt; for <a class=\"struct\" href=\"chalk_solve/logging_db/struct.WriteOnDropRustIrDatabase.html\" title=\"struct chalk_solve::logging_db::WriteOnDropRustIrDatabase\">WriteOnDropRustIrDatabase</a>&lt;I, W, DB, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"chalk_solve/trait.RustIrDatabase.html\" title=\"trait chalk_solve::RustIrDatabase\">RustIrDatabase</a>&lt;I&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;DB&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["chalk_solve::logging_db::WriteOnDropRustIrDatabase"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()