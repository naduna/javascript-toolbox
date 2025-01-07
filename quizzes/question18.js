
const q18_1 = () => {
    function handle(callback) {
        return callback( [] );
    }

    document.writeln(handle(it => { it.push(1); return it; }).length === 1);
};

const q18_2 = () => {
    function handle(callback) {
        const result = [];
        return callback( result );
    }

    document.writeln(handle(() => [1] ).length === 1);
}

const q18_3 = () => {
    function handle(callback) {
        const result = [];
        callback( result );
        return result;
    }

    let it = [];
    document.writeln( handle(it.push(1) ).length === 1);
}

const q18_4 = () => {
    function handle(callback) {
        const result = [];
        callback( [] );
        return result;
    }

    document.writeln( handle(it => it.push(1) ).length === 1);
}

const q18_5 = () => {
    function handle(callback) {
        const result = [];
        callback( result );
        return result;
    }

    let it = [];
    document.writeln( handle(() => it.push(1) ).length === 1);
}

const q18_6 = () => {
    function handle(count, callback) {
        const result = [];
        for (let i = 0; i < count; i++) {
            callback(result);
        }
        return result;
    }

    document.writeln( handle(3, it => it.push(1) ).length === 3);
}

const q18_7 = () => {
    function handle(callback) {
        const result = [];
        callback( result );
        return result;
    }

    document.writeln( handle(() => it.push(1) ).length === 1);
}

const q18_8 = () => {
    function handle(callback) {
        const result = [];
        callback( result );
        return result;
    }

    document.writeln( handle( it.push(1) ).length === 1);
}

const q18_9 = () => {
    function handle(callback) {
        const result = [];
        callback( result );
        return result;
    }

    document.writeln( handle( () => [1] ).length === 1);
}

const q18_10 = () => {
    function handle(callback) {
        const result = [];
        callback( result );
        return result;
    }

    let it = [];
    document.writeln( handle( it => it.push(1) ).length === 1);
}

const q18_11 = () => {
    function handle(callback) {
        const result = [];
        callback( result );
        return result;
    }
    
    document.writeln( handle( it => it.push(1) ).length === 1);
}

const q18_12 = () => {
    function handle(callback) {
        const result = [];
        callback( result );
        callback( result );
        return result;
    }
    
    document.writeln( handle( it => it.push(1) ).length === 2);
}



// Assignment: failsafe callback
// Attempt number 1 of at most 3 attempts
// Provide a function 'failSafe' that - in curried style - takes
// - a default value
// - a callback function
// - an argument to the callback function
// that returns whatever the callback function returns given its argument
// or the default value if the callback function throws an Error.
//     Note: see how the tests make use of failSafe.
//     Remaining chars: 512
// Your solution will be tested against:
//     const doError    = x => { throw new Error() };
// const errorCount = failSafe (1) (doError);
// failSafe (false) (x=>x) (true) && failSafe (true) (doError) (null) && errorCount(null) === 1

const q18a = () => {
    // my input
    const failSafe = d => f => i => {
      try {
          return f(i);
      }
      catch (e) {
          return d;
      }
    };

    // test code
    const doError    = x => { throw new Error() };
    const errorCount = failSafe (1) (doError);

    const result = failSafe (false) (x=>x) (true) && failSafe (true) (doError) (null) && errorCount(null) === 1;
    document.writeln(result);
};


const solveAll18 = () => {
    printQuizSection(18);
    
    solveQuiz(q18_1, "q18_1");
    solveQuiz(q18_2, "q18_2");
    solveQuiz(q18_3, "q18_3");
    solveQuiz(q18_4, "q18_4");
    solveQuiz(q18_5, "q18_5");
    solveQuiz(q18_6, "q18_6");
    solveQuiz(q18_7, "q18_7");
    solveQuiz(q18_8, "q18_8");
    solveQuiz(q18_9, "q18_9");
    solveQuiz(q18_10, "q18_10");
    solveQuiz(q18_11, "q18_11");
    solveQuiz(q18_12, "q18_12");
    
    solveQuiz(q18a, "q18a");
}
