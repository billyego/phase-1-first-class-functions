// index.js

// Function that receives a callback function and calls it
const receivesAFunction = (callback) => {
    return callback();
};

// Function that returns a named function
const returnsANamedFunction = () => {
    return namedFunction;
};

// Named function
function namedFunction() {
    // Function body
}

// Function that returns an anonymous function
const returnsAnAnonymousFunction = () => {
    return () => {
        // Anonymous function body
    };
};

// Exporting functions for testing
module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};
