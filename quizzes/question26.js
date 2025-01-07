
/**
 * @callback onResolveCallback
 * @impure   sets the surrounding {@link Promise} to the "resolved" state.
 * @type { () => void }
 */
/**
 * @typedef { (onResolveCallback) => void } Task
 * @impure  can produce arbitrary side effects and must use the {@link onResolveCallback} to signal completion.
 */
/**
 * @typedef  { object } SchedulerType
 * @property { (Task) => void } add   - schedule the task for execution.
 *                                      The {@link Task} must call its {@link onResolveCallback} when finished.
 * @property { Function }       addOk - convenience function that adds the {@link Task} for execution
 *                                      and calls "ok" {@link onResolveCallback} after execution no matter what.
 */
/**
 * Constructing a new {@link SchedulerType } where {@link Task}s can be added for asynchronous but sequence-preserving
 * execution. That means that even though the scheduled tasks can run asynchronously, it is still guaranteed that
 * when first task A and then task B is added, tasks B will not be started before task A has finished.
 * Note that this scheduler has no timeout facility and an async {@link Task} that never calls its
 * {@link onResolveCallback} will stall any further task execution.
 * @return { SchedulerType }
 * @constructor
 * @example
 *     const scheduler = Scheduler();
 *     scheduler.add( ok => {
 *         setTimeout( _ => {
 *             console.log("A");
 *             ok();
 *         }, 100);
 *     });
 *     scheduler.addOk ( () => console.log("B"));
 *     // log contains first A, then B
 */
const Scheduler = () => {
    let inProcess = false;
    const tasks = [];
    function process() {
        if (inProcess) return;
        if (tasks.length === 0) {
            inProcess = false;
            return;
        }
        inProcess = true;
        const task = tasks.pop();
        const prom = new Promise( ok => task(ok) );
        prom.then( _ => {
            inProcess = false;
            process();
        });
    }
    function add(task) {
        tasks.unshift(task);
        process();
    }
    return {
        add:   add,
        addOk: task => add( ok => { task(); ok(); }), // convenience
    }
};

// above is scheduler from lecture

const q26_1 = () => {
    // Scheduler as defined in the lecture
    let state = [0];

    const scheduler = Scheduler();
    scheduler.add(ok => {
        setTimeout(_ => {
            state.push(1);
            ok();
        }, 100);
    });

    scheduler.add(ok => {
        state.push(2);
        ok();
    });

    scheduler.add(ok => {
        document.writeln(state);
        ok();
    });

    return scheduler;
    // shows '0,1'?
};

const q26_2 = () => {
    // Scheduler as defined in the lecture
    let state = [0];

    const scheduler = Scheduler();
    scheduler.add(ok => {
        setTimeout(_ => {
            state.push(1);
            ok();
        }, 100);
    });

    scheduler.add(ok => {
        state.push(2);
        ok();
    });

    document.writeln(state);

    // shows '0,2'?
};

const q26_3 = () => {
    // Scheduler as defined in the lecture
    let state = [0];

    const scheduler = Scheduler();
    scheduler.add(ok => {
        setTimeout(_ => {
            state.push(1);
            ok();
        }, 100);
    });

    scheduler.add(ok => {
        state.push(2);
        ok();
    });

    document.writeln(state);

    // shows '0,1,2'?
};

const q26_4 = () => {
    // Scheduler as defined in the lecture
    let state = [0];

    const scheduler = Scheduler();
    scheduler.add(ok => {
        setTimeout(_ => {
            state.push(1);
            ok();
        }, 100);
    });

    scheduler.add(ok => {
        state.push(2);
        ok();
    });

    scheduler.add(ok => {
        document.writeln(state);
        ok();
    });

    // shows '0'?
};

const q26_5 = () => {
    // Scheduler as defined in the lecture
    let state = [0];

    const scheduler = Scheduler();
    scheduler.add(ok => {
        setTimeout(_ => {
            state.push(1);
            ok();
        }, 100);
    });

    scheduler.add(ok => {
        state.push(2);
        ok();
    });

    document.writeln(state);

    // shows '0,1'?
};

const q26_6 = () => {
    // Scheduler as defined in the lecture
    let state = 3;

    const scheduler = Scheduler();
    scheduler.add(ok => {
        setTimeout(_ => {
            state = state - 2;
            ok();
        }, 100);
    });

    scheduler.add(ok => {
        state = state - 1;
        ok();
    });

    scheduler.add(ok => {
        console.log(state);
        document.writeln(state); // this is not in question but helps solving
        ok();
    });
    
    console.log('x');
    document.writeln('x'); // this is not in question but helps solving

    // logs 'x' and '0'?
};

const q26_7 = () => {
    // Scheduler as defined in the lecture
    let state = 3;

    const scheduler = Scheduler();
    scheduler.add(ok => {
        setTimeout(_ => {
            state = state - 2;
            ok();
        }, 100);
    });

    scheduler.add(ok => {
        state = state - 1;
        ok();
    });

    scheduler.add(ok => {
        document.writeln(state);
        ok();
    });

    // might show '0' but might just as well show nothing or '3' or '1'
};

const q26_8 = () => {
    // Scheduler as defined in the lecture
    let state = 3;

    const scheduler = Scheduler();
    scheduler.add(ok => {
        setTimeout(_ => {
            state = state - 2;
            ok();
        }, 100);
    });

    scheduler.add(ok => {
        state = state - 1;
        ok();
    });

    scheduler.add(ok => {
        document.writeln(state);
        ok();
    });

    // shows '0' eventually amd no other value
};

const q26_9 = () => {
    // Scheduler as defined in the lecture
    let state = [0];

    const scheduler = Scheduler();
    scheduler.add(ok => {
        setTimeout(_ => {
            state.push(1);
            ok();
        }, 100);
    });

    scheduler.add(ok => {
        state.push(2);
        ok();
    });

    document.writeln(state);

    // shows '0'?
};

const q26_10 = () => {
    // Scheduler as defined in the lecture
    let state = [0];

    const scheduler = Scheduler();
    scheduler.add(ok => {
        setTimeout(_ => {
            state.push(1);
            ok();
        }, 100);
    });

    scheduler.add(ok => {
        state.push(2);
        ok();
    });

    scheduler.add(ok => {
        document.writeln(state);
        ok();
    });

    // shows '0,1,2'?
};

const q26_11 = () => {
    // Scheduler as defined in the lecture
    let state = [0];

    const scheduler = Scheduler();
    scheduler.add(ok => {
        setTimeout(_ => {
            state.push(1);
            ok();
        }, 100);
    });

    scheduler.add(ok => {
        state.push(2);
        ok();
    });

    scheduler.add(ok => {
        document.writeln(state);
        ok();
    });

    // question missing in screenshot, damn
};

const q26_12 = () => {
    // Scheduler as defined in the lecture
    let state = [0];

    const scheduler = Scheduler();
    scheduler.add(ok => {
        setTimeout(_ => {
            state.push(1);
            ok();
        }, 100);
    });

    scheduler.add(ok => {
        state.push(2);
        ok();
    });

    scheduler.add(ok => {
        document.writeln(state);
        ok();
    });

    // shows '0,2'?
};


// Save the original document.writeln bound to its context
const originalWriteLn = document.writeln.bind(document);

// Create a buffer to store output
let writeBuffer = [];

// Utility to redirect document.writeln to the buffer
const redirectWriteLn = () => {
    document.writeln = (text) => {
        writeBuffer.push(text); // Append output to the buffer
    };
};

// Restore the original document.writeln
const restoreWriteLn = () => {
    document.writeln = originalWriteLn; // Restore the original method
    writeBuffer.forEach(line => document.writeln(line)); // Print buffered output
    writeBuffer = []; // Clear the buffer
};

const solveQuizWrappedInPromiseAsync = (quizFn, quizName) => new Promise(resolve => {
    redirectWriteLn();
    solveQuiz(quizFn, quizName);
    resolve();
    restoreWriteLn();
});

// todo! instead of this, do a printWithoutSolving thing and then i can do the solve separarently
const solveAll26 = async () => {
    printQuizSection(26);
    
    await solveQuizWrappedInPromiseAsync(q26_1, "q26_1");
    await solveQuizWrappedInPromiseAsync(q26_2, "q26_2");
    await solveQuizWrappedInPromiseAsync(q26_3, "q26_3");
    await solveQuizWrappedInPromiseAsync(q26_4, "q26_4");
    await solveQuizWrappedInPromiseAsync(q26_5, "q26_5");
    await solveQuizWrappedInPromiseAsync(q26_6, "q26_6");
    await solveQuizWrappedInPromiseAsync(q26_7, "q26_7");
    await solveQuizWrappedInPromiseAsync(q26_8, "q26_8");
    await solveQuizWrappedInPromiseAsync(q26_9, "q26_9");
    await solveQuizWrappedInPromiseAsync(q26_10, "q26_10");
    await solveQuizWrappedInPromiseAsync(q26_11, "q26_11");
    await solveQuizWrappedInPromiseAsync(q26_12, "q26_12");
}
