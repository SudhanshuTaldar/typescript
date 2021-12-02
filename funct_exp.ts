// //ex1
// let greet : (a:string , b:string) =>void;

// greet = (name:string , greeting:string)=>{
//     console.log(`${name} says ${greeting}`);
// }

// //ex2
// let calc : (a:number , b:number , c:string) =>number;

// calc = (num1:number , num2:number , action:string)=>{
//     if(action==='add'){
//         return num1+num2;
//     }else{
//         return num1-num2;
//     }
// }



//*Function Type Expressions*
//The simplest way to describe a function is with a function type expression. These types are syntactically similar to arrow functions:
// function greeter(fn: (a: string) => void) {
//     fn("Hello, World");
//   }
   
//   function printToConsole(s: string) {
//     console.log(s);
//   }
   
//   greeter(printToConsole);

  //The syntax (a: string) => void means “a function with one parameter, named a, of type string, that doesn’t have a return value”. Just like with function declarations, if a parameter type isn’t specified, it’s implicitly any.




//Call Signatures
//If we want to describe something callable with properties, we can write a call signature in an object type:
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }
  doSomething({description:"dsfd",});


  //Construct Signatures
  //You can write a construct signature by adding the new keyword in front of a call signature:

//   type SomeConstructor = {
//     new (s: string): SomeObject;
//   };
//   function fn(ctor: SomeConstructor) {
//     return new ctor("hello");
//   }