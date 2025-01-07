
// For Schleifen in javascript

for (let i=0; i<5; i++) { console.log(i); }
// -> 0,1,2,3,4

for (let i=0; i<5; i++) { i++; console.log(i); }
// -> 1,3,5

[0,1,2,3,4].forEach(i => console.log(i++));
// -> 0,1,2,3,4

[0..4].forEach(i => console.log(i++));
// 0,1,2,3,4


for (const i of [0,1,2,3,4] ) { console.log(i); }
// - of ist friend, da dadurch i nicht veränderbar
