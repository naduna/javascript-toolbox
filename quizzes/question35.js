

// Assignment: Iterator of odd numbers
// Attempt number 1 of at most 3 attempts
// Given the Iterator constructor as in the lectures:
//     const Iterator = (startValue, whileFn, incrementFn) => {
//         const next = () => {
//             const proceed = whileFn(startValue);
//             let   value = undefined;
//             if (proceed) {
//                 value = startValue;
//                 startValue = incrementFn(startValue);
//             }
//             return { value: value, done: !proceed };
//         };
//         return {
//             [Symbol.iterator]: () => ({ next })
//         };
//     };
// provide code like
// const startValue  = ____;
// const whileFn     = ____;
// const incrementFn = ____;
// such that
// Iterator(startValue, whileFn, incrementFn);
// produces all odd numbers between 10 and 20.
// Remaining chars: 512
// Your solution will be tested against:
//     ;
// const Iterator = (startValue, whileFn, incrementFn) => {
//     const next = () => {
//         const proceed = whileFn(startValue);
//         let   value = undefined;
//         if (proceed) {
//             value = startValue;
//             startValue = incrementFn(startValue);
//         }
//         return { value: value, done: !proceed };
//     };
//     return {
//         [Symbol.iterator]: () => ({ next })
//     };
// };
// [...Iterator(startValue, whileFn, incrementFn)].toString() === "11,13,15,17,19"

const q35a = () => {
    const Iterator = (startValue, whileFn, incrementFn) => {
        const next = () => {
            const proceed = whileFn(startValue);
            let   value = undefined;
            if (proceed) {
                value = startValue;
                startValue = incrementFn(startValue);
            }
            return { value: value, done: !proceed };
        };
        return {
            [Symbol.iterator]: () => ({ next })
        };
    };
    
    // my input
    const startValue  = 11;
    const whileFn     = n => n < 20;
    const incrementFn = n => n + 2;
    
    for (let x of Iterator(startValue, whileFn, incrementFn)) {
        document.write(x + ',');
    }
    document.writeln();
    
    // test code
    const result = [...Iterator(startValue, whileFn, incrementFn)].toString() === "11,13,15,17,19";
    
    document.writeln(result);
};


// Assignment: infinite Iteration
// Attempt number 1 of at most 3 attempts
// Given an __infinite__ Iterator over all positive odd numbers named "oddNumbers"
// Provide a function "collect" like
// const collect = n => oddNumbers =>  ____;
// that returns the sum of the first n odd numbers.
//     Remaining chars: 512
// Your solution will be tested against:
//     ;
// const Iterator = (startValue, whileFn, incrementFn) => {
//     const next = () => {
//         const proceed = whileFn(startValue);
//         let   value = undefined;
//         if (proceed) {
//             value = startValue;
//             startValue = incrementFn(startValue);
//         }
//         return { value: value, done: !proceed };
//     };
//     return {
//         [Symbol.iterator]: () => ({ next })
//     };
// };
// const oddNumbers = () => Iterator(1, x => true, x => x + 2);
// const _x = Math.floor( 1 + Math.random() * 100);
// collect(3)(oddNumbers())  ===  9 &&
// collect(6)(oddNumbers())  === 36 &&
// collect(_x)(oddNumbers()) === _x * _x

const q35b = () => {
    const Iterator = (startValue, whileFn, incrementFn) => {
        const next = () => {
            const proceed = whileFn(startValue);
            let   value = undefined;
            if (proceed) {
                value = startValue;
                startValue = incrementFn(startValue);
            }
            return { value: value, done: !proceed };
        };
        return {
            [Symbol.iterator]: () => ({ next })
        };
    };

    // my input
    const collect = n => oddNumbers =>  {
        let sum = 0;
        let c = n;
        for (const x of oddNumbers){
            sum += x;
            c--;
            if (c == 0) { break; }
        }

        return sum;
    };

    // test code
    const oddNumbers = () => Iterator(1, x => true, x => x + 2);
    const _x = Math.floor( 1 + Math.random() * 100);
    console.log(collect(3)(oddNumbers())  ===  9)
    console.log(collect(6)(oddNumbers())  === 36)
    console.log(collect(_x)(oddNumbers()) === _x * _x)
    
    const result = collect(3)(oddNumbers())  ===  9
        && collect(6)(oddNumbers())  === 36
        && collect(_x)(oddNumbers()) === _x * _x;

    document.writeln(result);
};



// Assignment: xmasTree
// Attempt number 1 of at most 3 attempts
// Provide a function "xmasTree" that takes a number "n" and produces an
// array of strings such that for example.
// xmasTree(1) === [
//     "*"
// ];
//                                xmasTree(4) === [
//                                    "   *   ",
//                                    "  ***  ",
//                                    " ***** ",
//                                    "*******",
//                                ];
//                                This should work for all integer values of "n" between 2 and 10.
// Please note the proper amount of space characters.
//     Remaining chars: 512
// Your solution will be tested against:
//     const n_=Math.random()*8|0;
// [...String(9*(n_+2))].map(xmasTree(n_)&&Number).reduce((a,b)=>a+b)===9;

const q35xmas = () => {
    // my input
    const xmasTree = n => {
        const starsCount = 2 * n - 1;
        const ary = [];
        for (let i = 0; i < n; i++) {
            const stars = "*".repeat(2 * i + 1);
            const starLine = stars.padStart(n + i).padEnd(starsCount, " ");
            ary.push(starLine);
        }
        
        return ary;
    };

    const printTree = t => {
        console.log(t);
        for (let line of t) {
            document.writeln(line);
        }
    };
    
    printTree(xmasTree(1));
    printTree(xmasTree(4));

    // test code
    const n_=Math.random()*8|0;
    const treeTest = xmasTree(n_);
    const result = [...String(9*(n_+2))].map(treeTest&&Number).reduce((a,b)=>a+b)===9;

    document.writeln(result);
    printTree(treeTest);
};



const solveAll35 = () => {
    printQuizSection(35);
    
    solveQuiz(q35a, "q35a");
    solveQuiz(q35b, "q35b");
    solveQuiz(q35xmas, "q35xmas");
}
