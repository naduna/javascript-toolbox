
// Assignment: Array equivalence
// Attempt number 1 of at most 3 attempts
// JavaScript has no standard way of comparing arrays for equivalence.
//     We cannot overload the '===' operator for arrays.
//     But we can provide a function 'eq' such that for all arrays 'xs' and 'ys'
// 'xs.eq(ys)' is true if and only if for all valid indexes 'i' the condition
// 'xs[i] === ys[i]' is true.
//     Provide the 'eq' function. Only arrays of the same length can be equal.
//     You can ignore errors that arise from 'xs' or 'ys' not being of type array.
//     Remaining chars: 512
// Your solution will be tested against:
//     xs1_.eq(ys1_) && ! xs2_.eq(ys2_) && xs3_.eq(ys3_) && ! xs3_.eq(ys4_) && ! xs4_.eq(ys3_)

const q14a = () => {
    // my input
    const eq = (xs, ys) => {
        if (xs.length !== ys.length) {
            return false;
        }
        
        return xs.every((x, i) => x === ys[i]);
    };

    Array.prototype.eq = function(other) {
        return eq(this, other);
    };
    
    // test code
    const xs1_ = [1,2,3];
    const ys1_ = [1,2,3];
    const xs2_ = [1,3,3];
    const ys2_ = [1,2,3];
    const xs3_ = ['1','2','3'];
    const ys3_ = ['1','2','3'];
    const xs4_ = ['1','3','3', 3];
    const ys4_ = ['1','3','3', 3, 5];
    const result = xs1_.eq(ys1_) && ! xs2_.eq(ys2_) && xs3_.eq(ys3_) && ! xs3_.eq(ys4_) && ! xs4_.eq(ys3_);
    
    document.writeln(result);
};

const solveAll14 = () => {
    printQuizSection(14);
    
    solveQuiz(q14a, "q14a");
}
