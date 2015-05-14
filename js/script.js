var userNum = prompt("Enter a number");
//   if (+userNum === NaN) {
//        console.log("I said a number, please.");

for (var i = 0; i <= +userNum; i++) {
    if (userNum = NaN) {
        console.log("I said a number, please.");
    } else if ((i % 3) === 0 && (i % 5) === 0) {
        console.log("FizzBuzz");
    } else if ((i % 5) === 0) {
        console.log("Buzz");
    } else if ((i % 3) === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
};
