// Drüber iterieren:
[0,1,2,3].forEach(elem => console.log(elem));

// Drüber iterieren mit index:
[3,1,2,3].forEach((elem, i) => console.log(elem, i));

// Tests:
[0,1,2,3].every(elem => elem > 1);
[0,1,2,3].every((elem, i) => elem === i);

[3,1,2,3].some(elem => elem > 1);
[3,1,2,3].some((elem, i) => elem === i);

[3,1,2,3].some((elem, i) => {console.log("trying " + elem);return elem === i;});



// Functor: map, Mappable in Java
// (lässt die Menge der Elemente im Array unverändert, aber typ der rückgabe kann ändern)


// filter
// Menge der Elemente ist potentiell nicht unverändert, Typ aber nicht. Elemente, die nachher drin sind, waren es vorher sicher auch schon


// some examples for constant arrays

const array = [0,1,2,3,4];

const ary = [0,1,2,3,4].push(5);
// --> Syntax Error: Can't duplicate variable

ary.push(5)
// --> returns 6 (length)

ary;
// --> ist jetzt [0,1,2,3,4,5];

ary.pop();
// --> returns 5

ary;
// --> ist jetzt [0,1,2,3,4];

ary.shift();
// --> returns 0

ary;
// --> ist jetzt [1,2,3,4];

ary.unshift(0);
// --> returns 5 (length)

ary;
// --> ist jetzt [0,1,2,3,4];

// Sind alles Operationen, die den Receiver modifizieren (müsste sonst ein neues Array zurückgeben).



// some example of array methods

[0,1,2,3,4].slice(1,3); // end-index exclusive
// -> [2,3]

[0,1,2,3,4].slice(2,5); // obwohl index 5 nicht drin ist
// -> [2,3,4]

[0,1,2,3,4].slice(2); // bis am ende
// -> [2,3,4]

[0,1,2,3,4].slice();
// -> [0,1,2,3,4]

[0,1,2,3,4].slice(0,-1); // bis zum vorletzten
// -> [0,1,2,3]

[0,1,2,3,4].splice(0,1);
// -> [0]

const ary2 = [0,1,2,3,4];
ary2.splice(0,1);
// -> [0]
ary2;
// -> [1,2,3,4]

[0,1,2,3,4].splice(1,3);
// -> [1,2,3] -- end-index inclusive, bzw is not end index but length
ary2;
// -> [0,4]

const ary3 = [0,4];
ary3.splice(1,0,1,2,3); // vor welchem i beginne ich, wie viele werden gelöscht, elemente die iengefügt werden
// -> [] -- da keine gelöscht
ary3;
// -> [0,1,2,3,4]




// eta reduction trap
['8','9','10'].map(n=>Number(n));
// -> [8,9,10]

['8','9','10'].map(n=>parseInt(n));
// -> [8,9,10]

['8','9','10'].map(Number);
// -> [8,9,10]

['8','9','10'].map(parseInt);
// -> [8,NaN,2]

['8','9','10'].map((n, b)=>parseInt(n,b)); // basis wird erwartet. Reingegeben wird aber index, deswegen 0->b10, 1->??, 2->b2
// -> [8,NaN,2]
