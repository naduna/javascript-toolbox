
const q17_1 = () => {
    function Todo(text) {
        let done = false;
        return {
            getText: () => text,
            isDone: () => done,
            check: () => done = true
        };
    }

    let todo = Todo("buy milk");
    todo.check();
    document.writeln(todo.isDone());
};

const q17_2 = () => {
    function Todo(text, done) {
        function check() {
            done = true;
        }

        return {
            getText: () => text,
            isDone: () => done,
            check: check
        };
    }

    let todo = Todo("buy milk", false);
    todo.check();
    document.writeln(todo.isDone());
}

const q17_3 = () => {
    function Todo(text) {
        let done = false;
        return {
            getText: () => text,
            isDone: () => done,
            check: done = true
        };
    }

    let todo = Todo("buy milk");
    todo.check();
    document.writeln(todo.isDone());
}

const q17_4 = () => {
    function Todo(text) {
        let done = false;
        const check = () => this.done = true;
        return {
            getText: () => text,
            isDone: () => done,
            check: check
        };
    }

    let todo = Todo("buy milk");
    todo.check();
    document.writeln(todo.isDone());
}

const q17_5 = () => {
    // is the exact same as 17.7??
    function Todo(text) {
        let done = false;
        const check = () => done = true;
        return {
            getText: () => text,
            isDone: () => done,
            check: check
        };
    }

    let todo = Todo("buy milk");
    todo.check();
    document.writeln(todo.isDone());
}

const q17_6 = () => {
    function Todo(text) {
        const done = false;
        return {
            getText: () => text,
            isDone: () => done,
            check: () => done = true
        };
    }

    let todo = Todo("buy milk");
    todo.check();
    document.writeln(todo.isDone());
}

const q17_7 = () => {
    // is the exact same as 17.5??
    function Todo(text) {
        let done = false;
        const check = () => done = true;
        return {
            getText: () => text,
            isDone: () => done,
            check: check
        };
    }

    let todo = Todo("buy milk");
    todo.check();
    document.writeln(todo.isDone());
}

const q17_8 = () => {
    function Todo(text, done) {
        const check = () => done = true;
        return {
            getText: () => text,
            isDone: () => done,
            check: check
        };
    }

    let todo = Todo("buy milk", false);
    todo.check();
    document.writeln(todo.isDone());
}

const solveAll17 = () => {
    printQuizSection(17);
    
    solveQuiz(q17_1, "q17_1");
    solveQuiz(q17_2, "q17_2");
    solveQuiz(q17_3, "q17_3");
    solveQuiz(q17_4, "q17_4");
    solveQuiz(q17_5, "q17_5");
    solveQuiz(q17_6, "q17_6");
    solveQuiz(q17_7, "q17_7");
    solveQuiz(q17_8, "q17_8");
}
