var userNum = prompt("Enter a number");
// Where does this statement go?
//  if (+userNum === NaN) {
//       var userNum = prompt("I said a number, please.");
//}
//  okay, not here

for (var i = 0; i < +userNum; i++) {
    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log("FizzBuzz");
    } else if ((i % 5) === 0) {
        console.log("Buzz");
    } else if ((i % 3) === 0) {
        console.log("Fizz");
//    } else if (+userNum === NaN) {
//         var userNum = prompt("I said a number, please."); not here either
    } else {
        console.log(i);
    }
};

// if (+userNum === NaN) {
//       var userNum = prompt("I said a number, please.");
//} not here either... Where?
