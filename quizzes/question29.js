
const q29d = () => {
    // my input
    const twice = n => n * 2;
    
    // test code
    const result = [1,2,3].map(twice).toString() === "2,4,6";
    
    document.writeln(result);
};

const solveAll29 = () => {
    printQuizSection(29);
    
    solveQuiz(q29d, "q29d");
}
