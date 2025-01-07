
// Assignment: Function composition
// Attempt number 1 of at most 3 attempts
// JavaScript is functional and functional languages should provide function composition.
// Let's assume we have functions like
//   const inc    = x => x + 1;
//   const double = x => x * 2;
// Provide a general function 'then' that can combine _any_ such functions such that
//   inc.then(double).then(double)
// can be used like
//   inc.then(double).then(double) (1) === 8
// Note: you cannot assume what the functions are actually doing.
//     It must work for all functions!
//     Remaining chars: 512
// Your solution will be tested against:
//     add.then(mult).then(add) (1) === (1 + add_) * factor_ + add_


const q16a = () => {
    // my input
    // the idea is to pass the output of the current function as the input to the next function!
    Function.prototype.then = function (next) {
        return x => next(this(x));
    };
    
    // test code
    const inc    = x => x + 1;
    const double = x => x * 2;
    
    const test = inc.then(double).then(double) (1); // === 8;
    
    document.writeln(test);

    const add_ = 2;
    const factor_ = 3;
    const add = x => x + add_;
    const mult = x => x * factor_; 

    const output = add.then(mult).then(add)(1); // Should evaluate to (1 + 2) * 3 + 2 = 11
    document.writeln(output); // Output: 11
    
    const result = add.then(mult).then(add) (1) === (1 + add_) * factor_ + add_;
    document.writeln(result);
};

const solveAll16 = () => {
    printQuizSection(16);
    
    solveQuiz(q16a, "q16a");
}
