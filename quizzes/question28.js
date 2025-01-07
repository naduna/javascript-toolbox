
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


// Assignment: map/filter/reduce refresher
// Attempt number 1 of at most 3 attempts
// Implement a function named 'palindrome' that tells whether a given string
// is the same when read left-to-right and right-to-left, ignoring upper/lowercase differences
// and any characters outside 'a' to 'z'. For example
// palindrome('ABBA')  // true
// palindrome('Abba')  // true
// palindrome('A man, a plan, a canal: Panama!') // true
// You must use the following helper functions (they are provided):
// const str2chars = str  => [...str];            // convert a string to an array of chars
// const isAlpha   = char => char.match(/[a-z]/); // char is in the alphabet
// The question title contains implementation hints.
//     Remaining chars: 512
// Your solution will be tested against:
//     palindrome("Amore, Roma!")
//     && palindrome("Madam, I'm Adam!")
//     && palindrome("Never odd or even.")
//     && ! palindrome("Amore")

const q28a = () => {
    const str2chars = str  => [...str];            // convert a string to an array of chars
    const isAlpha   = char => char.match(/[a-z]/); // char is in the alphabet
    
    // my input
    const palindrome = (s) => {
        const lowerChars = str2chars(s.toLowerCase()).filter(isAlpha).map(char => char);
        const forwards = lowerChars.reduce((prev, curr) => prev + curr, '');
        const backwards = lowerChars.reduce((prev, curr) => curr + prev, '');

        return forwards === backwards;
    };

    document.writeln(palindrome('ABBA'));  // true
    document.writeln(palindrome('Abba'));  // true
    document.writeln(palindrome('A man, a plan, a canal: Panama!')); // true
    document.writeln(palindrome('this is 3 si not haha'));

    // test code
    const result = palindrome("Amore, Roma!")
    && palindrome("Madam, I'm Adam!")
    && palindrome("Never odd or even.")
    && ! palindrome("Amore");

    document.writeln(result);
};


const solveAll28 = () => {
    printQuizSection(28);
    
    solveQuiz(q28_1, "q28_1");
    solveQuiz(q28_2, "q28_2");
    solveQuiz(q28_3, "q28_3");
    solveQuiz(q28_4, "q28_4");
    
    solveQuiz(q28a, "q28a");
}
