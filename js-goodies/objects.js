
// Literale Constructors vs Funktionale Constructors

// Literal: []
// Funktional: Array()


// Funktion ist ein Objekt; Objekt kann Properties haben


// "Statische Funktionen in Java"; z.B. Properties auf Funktion Array Constructor.

Array.from("abc");
// > ["a", "b", "c"]

Array.from({length: 10}); // alles angebbar, was eine Länge hat
// > [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] (Array der Länge 10, was von JS versucht wird zu konstruieren anhand des length property's

Array.from({length: 10}).map((it, idx) => idx);
// > [0,1,2,3,4,5,6,7,8,9]

Array.from({length: 10}, (it, idx) => idx);
// > [0,1,2,3,4,5,6,7,8,9]


Object.setPrototypeOf(obj, proto);  // e.g. instanceof erlauben so bei Object.setPrototypeOf(dk, Person.prototype);



let example = { a: 1, b: 2}; // --> literaler constructor
// --> funktionaler ist unter object

let x = 1;

{ x: x };
// -> {x: 1}

{ x };
// -> {x: 1}

let obj = {a: 1, b: 2, c: 3};

let {vc} = obj;
// -> undefined

let {b,c} = obj;
// -> ok

const myFun = ( {b,c} ) => b + c;
// ^ Parameter Position

myFun(obj);
// -> 5


// Don't call us, we call you.


// Literaler deconstructor
let [x,y] = [0,1,2,3,5];
// -> undefined
x;
// -> 0
y;
// -> 1
[x,y];
// -> [0,1]
[x,y] = [y,x];
// -> [1,0]

let foo = ([a,b]) => {console.log(a,b)};

foo([0,1,2,3,4,5]);
// -> 0, 1
