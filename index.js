// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function

function receivesAFunction (callback) {
    callback();
}

function returnsANamedFunction () {
    return namedFunction;
}

function namedFunction() {
    console.log ("hello");
}

function returnsAnAnonymousFunction () {
    return function () {
        // code
    }
}
