// let fst: <T, U>(a: T, b: U) => U = (a, b) => b;

import { getMaxListeners } from "process";

// console.log(fst<string,number>("ss",21));
    let obj = {
        id:1,name:"sunny"
    }
    let aobj = {
        id:2,name:"hunny"
    }

    let o: { n: number; xs: object[] } = { n: 1, xs: [obj,aobj] };
    console.log(o.xs[0]["id"]);