
const q30_1 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    return idPromise(1)
        .then(it => document.writeln(it))
        .then(it => document.writeln(it));

    // shows '1 1'?
};

const q30_2 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    return idPromise(1)
        .then(it => { document.writeln(it); return it; })
        .then(it => document.writeln(it));

    // shows '1 1'?
};

const q30_3 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    return idPromise(1)
        .then(it => document.writeln(it));

    // shows '1'?
};

const q30_4 = () => {
    const idPromise = x => new Promise(resolve => resolve(x));

    document.writeln(idPromise(1))

    // shows '1'?
};

const solveAll30 = async () => {
    printQuizSection(30);

    await solveQuizAsync(q30_1, "q30_1");
    await solveQuizAsync(q30_2, "q30_2");
    await solveQuizAsync(q30_3, "q30_3");
    await solveQuizAsync(q30_4, "q30_4");
}
