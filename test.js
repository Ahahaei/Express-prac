console.log("Start");

// First asynchronous operation
function firstOperation(callback) {
    setTimeout(() => {
        console.log("First operation completed");
        callback();
    }, 1500); // Simulating asynchronous operation taking 1.5 seconds
}

// Second asynchronous operation
function secondOperation(callback) {
    setTimeout(() => {
        console.log("Second operation completed");
        callback();
    }, 1000); // Simulating asynchronous operation taking 1 second
}

// Third asynchronous operation
function thirdOperation(callback) {
    setTimeout(() => {
        console.log("Third operation completed");
        callback();
    }, 2000); // Simulating asynchronous operation taking 2 seconds
}

// Nested callbacks to demonstrate callback hell
firstOperation(() => {
    console.log("after first operation")
    secondOperation(() => {
        console.log("after second operation")
        thirdOperation(() => {
            console.log("after third operation")
            console.log("All operations completed");
        });
    });
});
