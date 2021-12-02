var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter Id of students: ", function (demo) {
    rl.question("Enter Name of students: ", function (demo1) {
        rl.question("Enter Marks of students: ", function (demo2) {
            console.log("Student Id is: ", demo);
            console.log("Student name is: ", demo1);
            console.log("Student marks is: ", demo2);
            rl.close();
        });
    });
});
