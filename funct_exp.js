// //ex1
// let greet : (a:string , b:string) =>void;
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
//Construct Signatures
//You can write a construct signature by adding the new keyword in front of a call signature:
//   type SomeConstructor = {
//     new (s: string): SomeObject;
//   };
//   function fn(ctor: SomeConstructor) {
//     return new ctor("hello");
//   }
