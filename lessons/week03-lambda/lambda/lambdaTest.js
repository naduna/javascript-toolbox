// requires lambda.js


const ok = [];
const test = result => ok.push(result);

// id
test( id(1) === 1 );
test( id(id) === id );

// konst
test( konst(42)(0) === 42 );
test( konst(42)(1) === 42 );
test( konst(42)(null) === 42 );

// kite
test( kite(null)(42) === 42 );

// true

test( T(1)(0) === 1 );
test( F(1)(0) === 0 );

// and
test( and(F)(F) === F );
test( and(T)(F) === F );
test( and(F)(T) === F );
test( and(T)(T) === T );

// or
test( or(F)(F) === F );
test( or(T)(F) === T );
test( or(F)(T) === T );
test( or(T)(T) === T );

// flip
// flip(f)(x)(y) = f(y)(x)
//
// // not
//
// // beq
//
// Pair

// const dierk = Pair("Dierk")("König"); // immutable
// test( dierk(firstname) === "Dierk");
// test( dierk(lastname)  === "König");

// const tdierk = Triple("Dierk")("König")(50); // immutable
// test( tdierk(tfirstname) === "Dierk");
// test( tdierk(tlastname)  === "König");
// test( tdierk(tage)       === 50);
//
// // tuple
// const [Person, fn, ln, ag] = Tuple(3);
// const person = Person("Dierk")("König")(50);
// test( person(fn) === "Dierk");
// test( person(ln) === "König");
// test( person(ag) === 50);
//
// // composed Tuple
//
// const [Team, lead, deputy] = Tuple(2);
// const team = Team (person) (Person("Roger")("Federer")(35));
// test( team(lead)(fn)   === "Dierk");
// test( team(deputy)(ln) === "Federer");
//
// // Pair equal
//
// // either
//


const safeDiv = num => divisor =>
    divisor === 0
    ? Left("schlecht!")
    : Right(num / divisor);

either( safeDiv(1)(0)  )
      ( x => console.error(x)) // goes as param of Left/Right to f
      ( x => console.log(x)); // goes as param of Left/Right to g

//
// const [Cash, CreditCard, Invoice, PayPal, pay] = Choice(4);
// const cash = Cash ();
// const card = CreditCard ("0000-1111-2222-3333");
// const invo = Invoice    ({name:"Roger", number:"4711"});
// const pal  = PayPal     (person);  // the payload can be a partially applied function, e.g. Tuple ctor
// const doPay = method =>
//     pay (method)
//         ( _       => "paid cash")
//         ( number  => "credit card "+number)
//         ( account => account.name + " " + account.number )
//         ( person  => "pal: " + person(fn) );
//
// test( doPay(cash) === "paid cash");
// test( doPay(card) === "credit card 0000-1111-2222-3333");
// test( doPay(invo) === "Roger 4711");
// test( doPay(pal ) === "pal: Dierk");


// standard definition of pair
const pair = a => b => f => f(a)(b);
const fst = p => p(T);
const snd = p => p(F);

const pairEq = a => b => fst(a)	=== fst(b) && snd(a) === snd(b);
const pairMap = f => p => pair (f(fst(p))) (f(snd(p)));
const oneTwo = pair(1)(2);
const square = x => x * x;
const result = pairMap (square) (oneTwo);

document.writeln(pairEq(result)(pair(1)(4)));

// fst(oneTwo) = 0;
// document.writeln(fst(oneTwo) === 0);

document.writeln(fst(oneTwo) === 1);

const pairPlus = a => b => pair (fst(a) + fst(b)) (snd(a) + snd(b));
const sum = pairPlus(oneTwo)(oneTwo);
document.writeln(pairEq(sum) (pair(2) (4))) ;


const oneTwo1 = pair(1,2);
document.writeln(fst(oneTwo1) === 1);

document.writeln("------")

const s1 = x => y => z => x; // select 1st arg
const s2 = x => y => z => y; // select 2nd arg
const s3 = x => y => z => z; // select 3rd arg

const triple = x => y => z => f => f(x)(y)(z);
const a = t => t(s1);
const b = t => t(s2);
const c = t => t(s3);

const person = triple;
const firstname = a;
const lastname = b;
const age = c;

const bran = person("Brendan");
const raven = bran("Stark")(16);
const eich = bran("Eich")(50);

document.writeln( firstname(bran) === "Brendan");
document.writeln( age(raven) === 16);

const oneTwoThree = triple(1);
document.writeln( a(oneTwoThree) === 1);

const oneTwoThreeNew = triple(1)(2)(3);
document.writeln( a(oneTwoThreeNew) === 1);

const branNew = person("Brendan")("Eich")(50);
document.writeln( firstname(branNew) === "Brendan");

document.writeln("------");


const Left1 = x => f => g => f(x);
const Right1 = x => f => g => g(x);
const either1 = e => f => g => e(f)(g);

const safeDiv1 = num => divisor =>
    divisor === 0
        ? Left1("cannot divide by 0")
        : Right1(num / divisor);

const result1 = safeDiv1(1)(0);
either1(result1)(msg => document.writeln(msg));

const result2 = safeDiv1(1)(1);
either1(result2)
    (msg => document.writeln(msg))
    (val => document.writeln(val === 1));

document.writeln("------");


// test response report
const allTestsOk = () => {
    for (let i = 0; i < ok.length; i++) { // not nice, yet. Needs improvement
        if (false === ok[i]) {
            return false;
        }
    }
    return true;
};

if (allTestsOk()) {
    document.writeln("All "+ ok.length +" tests ok.");
} else {
    document.writeln("Not all tests ok! Details:");
    for (let i = 0; i < ok.length; i++) {
        if(ok[i]) {
            document.writeln("Test "+ i +" ok");
        } else {
            document.writeln("Test "+ i +" failed");
        }
    }
}
