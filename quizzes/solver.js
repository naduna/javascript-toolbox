
// "Quiz solver" logic
const solveQuiz = (quizFn, quizName) => {
    document.writeln("-------------")
    
    // Print the quiz name
    document.writeln(`Solving quiz: ${quizName}`);

    try {
        // Print the function code
        document.writeln(`Function Code:\n${quizFn.toString()}`);

        // Capture the result of running the function (if it writes output)
        document.writeln("Result:");
        return quizFn(); // Execute the function (this will execute document.writeln)
    }
    catch (ex){
        document.writeln(ex);
    }
};

const solveQuizAsync = async (quizFn, quizName) => {
    document.writeln("-------------")
    
    // Print the quiz name
    document.writeln(`Solving quiz: ${quizName}`);

    try {
        // Print the function code
        document.writeln(`Function Code:\n${quizFn.toString()}`);

        // Capture the result of running the function (if it writes output)
        document.writeln("Result:");
        return await quizFn(); // Execute the function (this will execute document.writeln)
    }
    catch (ex){
        document.writeln(ex);
    }
};

const printQuizSection = nr => {
    document.writeln();
    document.writeln("----------------------------");
    document.writeln("-- QUESTION " + nr);
    document.writeln("----------------------------");
    document.writeln();
}