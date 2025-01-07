
const q24_1 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));
    const failPromise = err => new Promise((resolve, reject) => reject(err));

    const writer = x => {
        document.writeln(x);
        return idPromise(x);
    };

    const foo = async i => {
        let x = await idPromise(i);
        x = await writer(x);
    };
    
    return foo(1);
    
    // shows '1'?
};

const q24_2 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));
    const failPromise = err => new Promise((resolve, reject) => reject(err));

    const writer = x => {
        document.writeln(x);
        return idPromise(x);
    };

    const inc = n => idPromise(n + 1);
    const filterEven = n => n % 2 === 0 ? idPromise(n) : failPromise("not even");

    const foo = async i => {
        let x = await idPromise(i);
        while (x < 4) {
            x = await filterEven(x);
            x = await writer(x);
            x = await inc(x);
        }
    };
    
    return foo(1);

    // shows '2'?
};

const q24_3 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));
    const failPromise = err => new Promise((resolve, reject) => reject(err));

    const writer = x => {
        document.writeln(x);
        return idPromise(x);
    };

    const inc = n => idPromise(n + 1);
    const filterEven = n => n % 2 === 0 ? idPromise(n) : failPromise("not even");

    const foo = async i => {
        let x = await idPromise(i);
        while (x < 4) {
            x = await filterEven(x).catch(err => {/* ignore */});
            x = await writer(x);
            x = await inc(x);
        }
    };

    return foo(1);

    // shows '2'?
};

const q24_4 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));
    const failPromise = err => new Promise((resolve, reject) => reject(err));

    const foo = async i => {
        let x = await idPromise(i);
        document.writeln(x)
    };

    return foo(1);

    // shows '1'?
};

const q24_5 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));
    const failPromise = err => new Promise((resolve, reject) => reject(err));

    const writer = x => {
        document.writeln(x);
        return idPromise(x);
    };

    const foo = async i => {
        let x = await idPromise(i);
        x.then(writer);
    };

    return foo(1);
    
    // shows '1'?
};

const q24_6 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));
    const failPromise = err => new Promise((resolve, reject) => reject(err));

    const writer = x => {
        document.writeln(x);
        return idPromise(x);
    };

    const inc = n => idPromise(n + 1);

    const foo = async i => {
        let x = await idPromise(i);
        while (x < 4) {
            x = await writer(x);
            x = await inc(x);
        }
    };

    return foo(1);

    // shows '1 2 3'?
};


// Assignment: Make a NullSafe monad in the Promise fashion
// Attempt number 1 of at most 3 attempts
// *Copy* the following code into the edit area and fill the ___ gaps.
//     const NullSafe = x => {
//     const isNullSafe = y => y && y.then;
//     const maywrap    = y => ___ ; // if y is not NullSafe yet, make it so
//     return {
//         then: fn => ___ // see(1)
//     }
// };
// (1) if x is not null or undefined, call fn(x); either way, make sure the result is a NullSafe
// Fill the gaps such that NullSafe objects can be chained with their "then" function
// just like Promises do, incl. auto-promotion of result values to NullSafe objects.
// NullSafe(1).then(console.log);                   // will call the log
// NullSafe(null).then(console.log);                // will not call the log
// NullSafe(2).then( x => null).then(console.log);  // will not call the log
// Remaining chars: 512
// Your solution will be tested against:
// // x_ and y_ are given. do not override.                                    
//     NullSafe(x_)
//         .then( x => x*2)          // must auto-promote
//         .then( x => NullSafe(x))  // must not auto-promote
//         .then( x => y_ = x + 1)   // store value, check no double promotion
//         .then( x => null)         // jump over rest
//         .then( x => x.mustNotBeCalled) !== null && y_ === x_ * 2 + 1

// todo! watch the relevant lecture
const q24a = () => {
    // my input
    const NullSafe = x => {
        const isNullSafe = y => y && y.then;
        const maywrap    = y => isNullSafe(y) ? y : NullSafe(y) ; // if y is not NullSafe yet, make it so
        return {
            then: fn => x ? maywrap(fn(x)) : NullSafe(x) // see(1)
        }
    };
    
    NullSafe(1).then(console.log);                   // will call the log
    NullSafe(null).then(console.log);                // will not call the log
    NullSafe(2).then( x => null).then(console.log);  // will not call the log
    NullSafe(2).then( x => x + 6).then(console.log);  // will call the log

    // test code
    let y_;
    const x_ = 4;

    const result = NullSafe(x_)
        .then( x => x*2)          // must auto-promote
        .then( x => NullSafe(x))  // must not auto-promote
        .then( x => y_ = x + 1)   // store value, check no double promotion
        .then( x => null)         // jump over rest
        .then( x => x.mustNotBeCalled) !== null && y_ === x_ * 2 + 1;
    document.writeln(result);
};

const solveAll24 = async () => {
    printQuizSection(24);

    await solveQuizAsync(q24_1, "q24_1");
    await solveQuizAsync(q24_2, "q24_2");
    await solveQuizAsync(q24_3, "q24_3");
    await solveQuizAsync(q24_4, "q24_4");
    await solveQuizAsync(q24_5, "q24_5");
    await solveQuizAsync(q24_6, "q24_6");
    
    await solveQuizAsync(q24a, "q24a");
}
