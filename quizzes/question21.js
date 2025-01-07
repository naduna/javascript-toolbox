
const q21_1 = () => {
    const list = ['a', 'bb', 'ccc', 'dddd'];
    const result = list.reduce((count, str) => ++count, 0);
    
    document.writeln(list.length === result);
};

const q21_2 = () => {
    const list = ['a', 'bb', 'ccc', 'dddd'];
    const result = list.reduce(count => ++count);

    document.writeln(list.length === result);
}

const q21_3 = () => {
    const list = ['a', 'bb', 'ccc', 'dddd'];
    const result = list.reduce(count => ++count, 0);

    document.writeln(list.length === result);
}

const q21_4 = () => {
    const list = ['a', 'bb', 'ccc', 'dddd'];
    const result = list.reduce(count => count++, 0);

    document.writeln(list.length === result);
}

const solveAll21 = () => {
    printQuizSection(21);
    
    solveQuiz(q21_1, "q21_1");
    solveQuiz(q21_2, "q21_2");
    solveQuiz(q21_3, "q21_3");
    solveQuiz(q21_4, "q21_4");
}
