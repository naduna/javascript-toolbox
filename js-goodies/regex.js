
// Regular Expressions
// //> get a few to put in toolbox


"a1 b2 c3".split(/ /);
// -> ["a1", "b2", "c3"]

"a1 b2 c3.d4".split(/\b/); // word boundary

"a1 b2 c3".split(/\d/); // digit

"a1 b2 c3.d4".split(/\w/); // word character

"a1 b2 c3.d4".split(/W/); // not word character

// w+
// w*
// w{1,5}

"a1 b2     c3".search(/w3/);
// 10 // was steht for 3, gibt index zurück


"a1 b2 c3….;d4".replace(/\w3/, "**");
// -> "a1 b2 **….;d4"


"a1 b2 c3….;d4".replace(/(\w)3/, "$1$1$1");
// -> "a1 b2 ccc…;d4"

"a1 c3 b2 c3c3….;d4".replace(/(\w3)\1/, "___");
// -> "a1 c3 b2 ___…;d4"



"a1 c3 b2 c3c3….;d4".match(/(\w3)\1/);
// -> ["c3c3", "c3"] // gibt die gruppen zurück


"a1 c3 b2 c3c3….;d4".matchAll(/(\w3)\1/g);
// -> RegExp String Iterator {}


const matches = "a1 c3 b2 c3c3…,d3d3.;d4".matchAll(/(\w3)\1/g);
[...matches];
// -> [["c3c3", "c3"], ["d3d3", "d3"]]


const str = "the rain in spain stays mainly in the plains";
const matches2 = str.matchAll(/(\w\w\w)(.*?)\1/g);



const [a,b, ...rest] = "12345";
console.log(a,b,rest);
// -> 1  2  ["3","4","5"]


const foo = (a,b,c) => console.log(a,b,c);
foo(..."12345"); //> zu viel übergeben ist nich schlimm, wird ignoriert. Zu wenig führt zu undefined


// SequenceMFRTest: evaluiert von hinten nach vorne; wird nur aufgerufen wenn gebraucht

