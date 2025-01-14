
/**
 * @callback createValueCallback
 * @template _T_
 * @type { () => _T_ }
 */
/**
 * A dataflow abstraction that takes a function that specifies how to create a value and returns a
 * function that returns that value. The callback will be only called when needed and not more than once.
 * In other contexts known as "lazy" or "thunk".
 * @template _T_
 * @param { !createValueCallback } createValue - will be called when needed and not more than once. Mandatory.
 * @return { () => _T_ }
 * @constructor
 * @example
 *     const x = DataFlowVariable(() => y() + 1);
 *     const y = DataFlowVariable(() => 1);
 *     x() === 2
 */
const DataFlowVariable = createValue => {
    let value = undefined;
    return () => {
        if (value !== undefined) { return value }
        value = createValue();
        return value;
    }
};

// above is dataflowvariable from lecture

const q27_1 = () => {
    // DataFlowVariable as defined in the lecture
    
    const x = DataFlowVariable(() => y() * 2);
    let y = DataFlowVariable(() => 1);

    x();
    y = DataFlowVariable(() => 2);
    
    document.writeln(x());
    // shows '2'? -- same as 3, but other question
};

const q27_2 = () => {
    // DataFlowVariable as defined in the lecture

    const x = DataFlowVariable(() => y() * 2);
    let y = DataFlowVariable(() => 1);
        y = DataFlowVariable(() => 2);

    document.writeln(x());

    // shows '4'? -- same as 5, but other question
};

const q27_3 = () => {
    // DataFlowVariable as defined in the lecture

    const x = DataFlowVariable(() => y() * 2);
    let y = DataFlowVariable(() => 1);

    x();
    y = DataFlowVariable(() => 2);

    document.writeln(x());
    
    // shows '4'? -- same as 1, but other question
};

const q27_4 = () => {
    // DataFlowVariable as defined in the lecture

    const x = DataFlowVariable(() => y() * 2);
    let y = DataFlowVariable(() => 1);

    document.writeln(x());

    // shows '2'?
};

const q27_5 = () => {
    // DataFlowVariable as defined in the lecture

    const x = DataFlowVariable(() => y() * 2);
    let y = DataFlowVariable(() => 1);
        y = DataFlowVariable(() => 2);

    document.writeln(x());

    // shows '2'? -- same as 2, but other question
};

const solveAll27 = async () => {
    printQuizSection(27);
    
    solveQuiz(q27_1, "q27_1");
    solveQuiz(q27_2, "q27_2");
    solveQuiz(q27_3, "q27_3");
    solveQuiz(q27_4, "q27_4");
    solveQuiz(q27_5, "q27_5");
}
