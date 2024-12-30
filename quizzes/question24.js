
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

const solveAll24 = async () => {
    printQuizSection(24);

    await solveQuizAsync(q24_1, "q24_1");
    await solveQuizAsync(q24_2, "q24_2");
    await solveQuizAsync(q24_3, "q24_3");
    await solveQuizAsync(q24_4, "q24_4");
    await solveQuizAsync(q24_5, "q24_5");
    await solveQuizAsync(q24_6, "q24_6");
}
