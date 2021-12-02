function start(arg) {
    // this is super common in JavaScript
    if (typeof arg === "string") {
        return commonCase(arg);
    }
    else if (Array.isArray(arg)) {
        return arg.map(commonCase).join(",");
    }
    else if (typeof arg === "function") {
        return commonCase(arg());
    }
    else {
        return commonCase(arg.s);
    }
    function commonCase(s) {
        // finally, just convert a string to another string
        return s;
        // console.log(s);
    }
}
// var a = [1,2,3,4,5];
console.log(start(['hy', 'hello', 'namste']));
console.log(("Hello"));
console.log(start(["1", "2"]));
console.log(start(function () { return "hello"; }));
console.log(start({ s: "sunny" }));
