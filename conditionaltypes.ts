//Conditional Types
//A conditional type selects one of two possible types based on a condition expressed as a type relationship test:


//T extends U ? X : Y
//The type above means when T is assignable to U the type is X, otherwise the type is Y.

type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null;

function someFunction<T>(value:T){
    const someOtherFunction = (
        someArg:T extends boolean ? 'typeA' : 'typeB'
    ) => {
        const a : 'typeA' | 'typeB' = someArg;
    };
    return someOtherFunction;
}
const result = someFunction(true);
