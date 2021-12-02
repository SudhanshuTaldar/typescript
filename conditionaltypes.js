//Conditional Types
//A conditional type selects one of two possible types based on a condition expressed as a type relationship test:
function someFunction(value) {
    var someOtherFunction = function (someArg) { };
    return someOtherFunction;
}
var result = someFunction(true);
console.log(result);
