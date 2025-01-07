
const q22_1 = () => {
    const list = ['a', 'bb', 'ccc', 'dddd'];
    const result = list.splice(1, 0, 'x', 'y'); // 1 this is the diff

    document.writeln(  list[0] === 'a'
                    && list[1] === 'x'
                    && list[2] === 'y'
                    && list[3] === 'bb');

    // shows 'true'?
}

const q22_2 = () => {
    const list = ['a', 'bb', 'ccc', 'dddd'];
    const result = list.splice(0, 0, 'x', 'y'); // 0 this is the diff

    document.writeln(list[0] === 'a'
        && list[1] === 'x'
        && list[2] === 'y'
        && list[3] === 'bb');

    // shows 'true'?
}

const q22_3 = () => {
    const list = ['a', 'bb', 'ccc', 'dddd'];
    const result = list.splice(0, 0);

    document.writeln(list.length === 4);
    
    // shows 'true'?
};

const q22_4 = () => {
    const list = ['a', 'bb', 'ccc', 'dddd'];
    const result = list.splice(0, 1);

    document.writeln(result);

    // shows 'true'?
}

const q22_5 = () => {
    const list = ['a', 'bb', 'ccc', 'dddd'];
    const result = list.splice(0, 0);

    document.writeln(list.length === 3)

    // shows 'true'?
}

const q22_6 = () => {
    const list = ['a', 'bb', 'ccc', 'dddd'];
    const result = list.splice(0, 1);

    document.writeln(list.length === 3)

    // shows 'true'?
}

const solveAll22 = () => {
    printQuizSection(22);
    
    solveQuiz(q22_1, "q22_1");
    solveQuiz(q22_2, "q22_2");
    solveQuiz(q22_3, "q22_3");
    solveQuiz(q22_4, "q22_4");
    solveQuiz(q22_5, "q22_5");
    solveQuiz(q22_6, "q22_6");
}
