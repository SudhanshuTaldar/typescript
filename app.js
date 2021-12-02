var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Please enter the first number : ', function (answer1) {
    rl.question('Please enter the second number : ', function (answer2) {
        var result = (+answer1) + (+answer2);
        console.log("The sum of above two numbers is " + result);
        rl.close();
    });
});
