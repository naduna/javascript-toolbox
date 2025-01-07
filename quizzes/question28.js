
const q28_1 = () => {
    function handle(callback) {
        const result = [];
        callback(result);
        return result;
    }

    document.writeln(handle(() => it.push(1)).length === 1);
    
    // shows 'true'?
};

const q28_2 = () => {
    function handle(callback) {
        const result = [];
        callback(result);
        return result;
    }

    document.writeln(handle(it => it.push(1)).length === 1);

    // shows 'true'?
}

const q28_3 = () => {
    function handle(callback) {
        const result = [];
        callback(result);
        return result;
    }

    document.writeln(handle(it.push(1)).length === 1);

    // shows 'true'?
}

const q28_4 = () => {
    function handle(callback) {
        const result = [];
        callback(result);
        return result;
    }

    let it = [];
    document.writeln(handle(() => it.push(1)).length === 1);

    // shows 'true'?
}

const solveAll28 = () => {
    printQuizSection(28);
    
    solveQuiz(q28_1, "q28_1");
    solveQuiz(q28_2, "q28_2");
    solveQuiz(q28_3, "q28_3");
    solveQuiz(q28_4, "q28_4");
}
