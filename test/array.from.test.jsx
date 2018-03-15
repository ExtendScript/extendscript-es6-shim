#include "../Array/from.js"
$.writeln(Array.from("foo"));
// => f,o,o
#target "indesign"
var doc = app.documents.add();
doc.pages.add();
$.writeln(Array.from());
// => [object Page], [object Page]
