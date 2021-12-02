// let fst: <T, U>(a: T, b: U) => U = (a, b) => b;
// console.log(fst<string,number>("ss",21));
var obj = {
    id: 1, name: "sunny"
};
var aobj = {
    id: 2, name: "hunny"
};
var o = { n: 1, xs: [obj, aobj] };
console.log(o.xs[0]["id"]);
