
const q23_1 = () => {
    // is exact same as 6? yes, but with other evaluation
    const idPromise = x => new Promise(resolve => resolve(x));
    
    const writer = x => {
        document.writeln("q23_1: " + x);
        return idPromise(x);
    };
    
    idPromise(1)
        .then(writer)
        .then(it => it + 1)
        .then(writer);
    
    // shows '1 2'?
};

const q23_2 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    idPromise(1)
        .then(it => { document.writeln("q23_2: " + it); return idPromise(it); })
        .then(it => document.writeln("q23_2: " + it));

    // shows '1 1'?
};

const q23_3 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    idPromise(1)
        .then(it => document.writeln("q23_3: " + it));

    // shows '1'?
};

const q23_4 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    const writer = x => {
        document.writeln("q23_4: " + x);
        return idPromise(x);
    };

    idPromise(1)
        .then(writer)
        .then(it => document.writeln("q23_4: " + it));

    // shows '1 1'?
};

const q23_5 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    idPromise(1)
        .then(it => { document.writeln("q23_5: " + it); return it; })
        .then(it => document.writeln("q23_5: " + it));

    // shows '1 1'?
};

const q23_6 = () => {
    // is exact same as 1? yes, but with other evaluation
    const idPromise = x => new Promise(resolve => resolve(x));

    const writer = x => {
        document.writeln("q23_6: " + x);
        return idPromise(x);
    };

    idPromise(1)
        .then(writer)
        .then(it => it + 1)
        .then(writer);

    // shows '1 1'?
};

const q23_7 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    const writer = x => {
        document.writeln("q23_7: " + x);
        return idPromise(x);
    };
    
    const filterEven = n => n % 2 === 0 ? n : undefined;

    idPromise(1)
        .then(writer)
        .then(filterEven)
        .then(writer);

    // shows '1'?
};

const q23_8 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    const writer = x => {
        document.writeln("q23_8: " + x);
        return idPromise(x);
    };

    const filterEven = n => n % 2 === 0 ? n : undefined;

    idPromise(1)
        .then(writer)
        .then(filterEven)
        .then(writer);

    // shows '1 undefined'?
};

const q23_9 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    idPromise(1)
        .then(it => document.writeln("q23_9: " + it))
        .then(it => document.writeln("q23_9: " + it));

    // shows '1 1'?
};

const q23_10 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    const writer = x => {
        document.writeln("q23_10: " + x);
        return idPromise(x);
    };

    const filterEven = n => n % 2 === 0 ? n : undefined;

    idPromise(1)
        .then(writer)
        .then(filterEven)
        .then(writer);

    // shows an error in the console?
};

const q23_11 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    const writer = x => {
        document.writeln("q23_11: " + x);
        return idPromise(x);
    };

    const filterEven = n => {
        if (n % 2 === 0) return n; else throw Error("not even");
    };

    idPromise(1)
        .then(writer)
        .then(filterEven)
        .then(writer)
        .catch(err => {}); // do nothing

    // shows more than '1'?
};

const q23_12 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    document.writeln(idPromise(1))

    // shows '1'?
};

const q23_13 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    const writer = x => {
        document.writeln("q23_13: " + x);
        return idPromise(x);
    };

    const filterEven = n => {
        if (n % 2 === 0) return n; else throw Error("not even");
    };

    idPromise(1)
        .then(writer)
        .then(filterEven)
        .then(writer)
        .catch(err => {}); // do nothing

    // shows only '1'?
};

const q23_14 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    const writer = x => {
        document.writeln("q23_14: " + x);
        return idPromise(x);
    };

    const inc = n => n + 1;
    const filterEven = n => n % 2 === 0 ? n : undefined;

    idPromise(1)
        .then(writer)
        .then(inc)
        .then(filterEven)
        .then(writer)
        .catch(err => {}); // do nothing

    // shows '1 2 2'?
};

const q23_15 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    idPromise(1)
        .then(it => it)
        .then(it => document.writeln("q23_15: " + it));

    // shows '1 1'?
};

const q23_15b = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    return idPromise(1)
        .then(it => it)
        .then(it => document.writeln("q23_15b: " + it));

    // shows '1 1'?
};

const solveAll23 = async () => {
    printQuizSection(23);
    
    solveQuiz(q23_1, "q23_1");
    solveQuiz(q23_2, "q23_2");
    solveQuiz(q23_3, "q23_3");
    solveQuiz(q23_4, "q23_4");
    solveQuiz(q23_5, "q23_5");
    solveQuiz(q23_6, "q23_6");
    solveQuiz(q23_7, "q23_7");
    solveQuiz(q23_8, "q23_8");
    solveQuiz(q23_9, "q23_9");
    solveQuiz(q23_10, "q23_10");
    solveQuiz(q23_11, "q23_11");
    solveQuiz(q23_12, "q23_12");
    solveQuiz(q23_13, "q23_13");
    solveQuiz(q23_14, "q23_14");
    solveQuiz(q23_15, "q23_15");
    
    await solveQuizAsync(q23_15b, "q23_15b");
}
