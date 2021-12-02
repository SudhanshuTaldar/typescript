//instanceof narrowing

function logValue(x: Date | string) {
    if (x instanceof Date) {
    console.log(x.toUTCString());
    
    } else {
    console.log(x.toUpperCase());
    
    }
    }
    
    logValue(new Date());
    logValue("hello world");


    //truthiness narrowing

    function printAll(strs: string | string[] | null) {
        if (strs && typeof strs === "object") {
        for (const s of strs) {
        console.log(s);
        }
        } else if (typeof strs === "string") {
        console.log(strs);
        }
        }
        printAll('hie');
        printAll(['hello','world']);


    //equality narrowing

        function example(x: string | number, y: string | boolean) {
            if (x === y) {
            //console.log('hie');
            // We can now call any 'string' method on 'x' or 'y'.
            console.log(x.toUpperCase());
            
            console.log(y.toLowerCase());
            
            } else {
            console.log(x);
            
            console.log(y);
            
            }
            }
            
            example('hello','hello');

    //inoperator narrowing
    interface Container {
        value: number;
        }
        
        interface Admin{
        name: string | string[];
        }
        
        interface superE extends Admin ,Container{}
        
        type mult = Container | Admin;
        
        let add:mult ={
        name:'smk',
        value:23
        };
        
        function multiV( add:mult) {
        if('value' in add)
        {
        console.log(add.value);
        }
        if('name' in add)
        {
        console.log(add.name);
        }
        
        
        }
        
        multiV(add);
        
        
        
        //for type
        type combinable= number | string;
        type numeric = number | boolean;
        
        type universal = combinable & numeric;
        
        function getA(a:combinable , b:combinable) {
        if(typeof a === 'string' || typeof b ==='string')
        {
        return a.toString()+b.toString();
        }
        return a + b;
        
        }
        
        console.log(getA('hello','world'));
        console.log(getA(23,45));