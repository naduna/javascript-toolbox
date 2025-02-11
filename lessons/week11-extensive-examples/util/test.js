/**
 * @module util/test
 * The test "framework", exports the Suite function plus a total of how many assertions have been tested
 */

export { TestSuite, total, asyncTest }

import { id, Tuple }  from "../lambda/church.js";
import { Observable } from "../observable/observable.js";

// Preamble that will later come from other modules

/**
 * Css string value for the given color. We keep values as HSL to allow easier manipulation.
 * @param hue   - 0 to 360 degrees on the color wheel, where 0 is red, then yellow, green, cyan, blue, magenta.
 * @param sat   - saturation 0 to 100, where 0 is greyscale.
 * @param light - lightness, 0 is black and 100 is white.
 * @return {`hsl(${string}, ${string}%, ${string}%)`}
 * @example
 * const fireTruckRed = hsl(0, 100, 50);
 */
const hsl  = (hue, sat, light)        => `hsl(${hue}, ${sat}%, ${light}%)`;
const accentColor  = hsl(322, 73, 52);
const okColor      = hsl(104, 89, 28);

/**
 * Create DOM objects from an HTML string.
 * @param  { String } innerString - The string representation of the inner HTML that will be returned as an HTML collection.
 * @return { HTMLCollection }
 * @pure
 * @example
 * const [label, input] = dom(`
 *      <label for="myId">
 *      <input type="text" id="myId" name="myName" value="myValue">
 * `);
 */
const dom = innerString => {
    const holder = document.createElement("DIV");
    holder.innerHTML = innerString;
    return holder.children;
};

// End of Preamble

/**
 * The running total of executed test assertions.
 * @impure the reference does not change, but the contained value. Listeners will produce side effects like DOM changes.
 * @type { IObservable<Number> }
 */
const total = Observable(0);

/** @type { (Number) => void } */
const addToTotal = num => total.setValue( num + total.getValue());

/** @typedef equalityCheckFunction
 * @template _T_
 * @function
 * @param { _T_ } actual
 * @param { _T_ } expected
 * @return void
 * */

/**
 * @typedef  { Object }  AssertType
 * @property { Array<String> }         messages - stores all assertions messages, one for each entry in "results"
 * @property { Array<Boolean> }        results  - stores all assertion results
 * @property { (Boolean)  => void }    isTrue   - assert that expression is true, side effects "results" and "messages"
 * @property { equalityCheckFunction } is       - assert that two expressions are equal,
 *                                                side effects "results" and "messages", and
 *                                                logs an error to the console incl. stack trace in case of failure.
 */

/**
 * A newly created Assert object is passed into the {@link test} callback function where it is used to
 * assert test results against expectations and keep track of the results for later reporting.
 * Follows GoF "Collecting Parameter Pattern".
 * @return { AssertType }
 * @constructor
 * @impure assembles test results.
 */
const Assert = () => {
    /** @type Array<Boolean> */ const results  = []; // [Bool], true if test passed, false otherwise
    /** @type Array<String> */  const messages = [];
    return {
        results,
        messages,
        isTrue: testResult => {
            let message = "";
            if (!testResult) {
                console.error("test failed");
                message = "not true";
            }
            results.push(testResult);
            messages.push(message);
        },
        is: (actual, expected) => {
            const testResult = actual === expected;
            let message = "";
            if (!testResult) {
                message = "Got '"+ actual +"', expected '" + expected +"'";
                console.error(message);
            }
            results.push(testResult);
            messages.push(message);
        },
        iterableEq: (actual, expected, maxElementsToConsume = 1_000) => {

            if (actual[Symbol.iterator]   === undefined) log.error("actual is not iterable!");
            if (expected[Symbol.iterator] === undefined) log.error("expected is not iterable!");

            const actualIt     = actual[Symbol.iterator]();
            const expectedIt   = expected[Symbol.iterator]();

            let iterationCount = 0;
            let testPassed     = true;
            let message        = "";

            while (true) {
                const { value: actualValue,   done: actualDone   } = actualIt.next();
                const { value: expectedValue, done: expectedDone } = expectedIt.next();

                const oneIteratorDone      = actualDone || expectedDone;
                const bothIteratorDone     = actualDone && expectedDone;
                const tooManyIterations    = iterationCount > maxElementsToConsume;

                if (bothIteratorDone) break;
                if (oneIteratorDone) {
                    testPassed = false;
                    const actualMsg = actualDone
                        ? "had no more elements but expected still had more"
                        : "still had elements but expected had no more.";
                    message = `Actual and expected do not have the same length! After comparing ${iterationCount} 
                               elements, actual ${actualMsg}!`;
                    break;
                }
                if (tooManyIterations) {
                    message = `It took more iterations than ${maxElementsToConsume}. Aborting.\n`;
                    testPassed = false;
                    break;
                }

                if (actualValue !== expectedValue) {
                    testPassed = false;
                    message = `Values were not equal in iteration ${iterationCount}! Expected ${expectedValue} but was ${actualValue}\n`;
                    break;
                }

                iterationCount++;
            }

            if (!testPassed) console.error(message);
            results.push(testPassed);
            messages.push(message);
        },
        throws: (functionUnderTest, expectedErrorMsg = "") => {
            let testResult    = false;
            let message       = "";
            const hasErrorMsg = expectedErrorMsg !== "";

            try {
                functionUnderTest();

                message = "Did not throw an error!";
                if (hasErrorMsg) {
                    message += ` Expected: '${expectedErrorMsg}'`;
                }
                console.error(message);
            } catch (e) {
                testResult = true;

                if (hasErrorMsg) {
                    testResult = expectedErrorMsg === e.message;
                }
            }
            results .push(testResult);
            messages.push(message);
        }
    }
};

/**
 * @private data type to capture the test to-be-run. A triple of ctor and two getter functions.
 */
const [Test, name, logic] = Tuple(2);

/**
 * @callback TestCallback
 * @param { AssertType } assert
 */

/**
 * Creates a new assert object, passes it into the callback for execution, and reports the result.
 * Follows Smalltalk Best Practice Patterns: "Method Around Pattern".
 * @param { String } name - name of the test. Should be unique inside the {@link TestSuite}.
 * @param { TestCallback } callback
 * @private
 */
const test = (name, callback) => {
    const assert = Assert();
    callback(assert);
    report(name, assert.results, assert.messages)
};

/**
 * @callback AsyncTestCallback
 * @param    { AssertType } assert
 * @return   { Promise }
 */
/**
 * Testing async logic requires the testing facility to do out-of-order reporting.
 * These tests do not live in a suite but are run separately.
 * @param { String } name - name for the test report
 * @param { AsyncTestCallback } asyncCallback - test logic that returns a promise such that reporting can wait for completion
 */
const asyncTest = (name, asyncCallback) => {
    const assert = Assert();
    asyncCallback(assert) // returns a promise
        .catch( _ => {
            assert.results.unshift(false);
            assert.messages.unshift(name + " promise rejected");
        })
        .finally ( _ => {
            report(name, assert.results, assert.messages);
            addToTotal(assert.results.length);
        });
};

/**
 * @typedef { Object } TestSuiteType
 * @property { (testName:String, callback:TestCallback) => void} test - running a test function for this suite
 * @property { (testName:String, callback:TestCallback) => void} add  - adding a test function for later execution
 * @property { function(): void } run:                                - running and reporting the suite
 */
/**
 * Tests are organised in test suites that contain test functions. These functions are added before the suite
 * itself is "run", which in turn executes the tests and reports the results.
 * @param  { String } suiteName
 * @return { TestSuiteType }
 * @constructor
 * @example
 * const suite = TestSuite("mySuite");
 * suite.add("myName", assert => {
 *     assert.is(true, true);
 *  });
 *  suite.run();
 */
const TestSuite = suiteName => {
    const tests = []; // [Test]
    return {
        test: (testName, callback) => test(suiteName + "-"+ testName, callback),
        add:  (testName, callback) => tests.push(Test (testName) (callback)),
        run:  () => {
            const suiteAssert = Assert();
            tests.forEach( test => test(logic) (suiteAssert) );
            addToTotal(suiteAssert.results.length);
            if (suiteAssert.results.every( id )) { // whole suite was ok, report whole suite
                report(suiteName, suiteAssert.results, suiteAssert.messages);
            } else { // some test in suite failed, rerun tests for better error indication
                tests.forEach( testInfo => test( testInfo(name), testInfo(logic) ) )
            }
        }
    };
};

/**
 * If all test results are ok, report a summary. Otherwise, report the individual tests.
 * @param { String }         origin
 * @param { Array<Boolean> } results
 * @param { Array<String> }  messages
 * @private
 */
const report = (origin, results, messages) => {
    const okStyle     = `style="color: ${okColor};"`;
    const failedStyle = `style="color: ${accentColor};"`;

    if ( results.every( elem => elem) ) {
        write (`
            <!--suppress ALL -->
            <div>${results.length}</div>
            <div>tests in </div> 
            <div>${origin}</div>
            <div ${okStyle}">ok</div> 
        `);
        return;
    }
    write(`
            <!--suppress ALL -->
            <div></div>
            <div>tests in </div> 
            <div>${origin}</div>
            <div ${failedStyle}>failed</div> 
    `);
    results.forEach((result, idx) => {
        if (result) return;
        write(`
                <!--suppress ALL -->
                <div></div>
                <div>assertion </div> 
                <div ${failedStyle}>#${idx+1}: ${messages[idx]}</div>
                <div ${failedStyle}>failed</div> 
        `);
    });
};

/**
 * Write the formatted test results in the holding report HTML page.
 * @param { !String } html - HTML string of the to-be-appended DOM
 * @private
 */
const write = html => out.append(...dom(html));

