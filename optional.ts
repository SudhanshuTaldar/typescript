// function getSchool(name: string, address?: string, pinCode?: string): string | boolean {
//     if (address == undefined) {
//     console.log('address not defined');
//     // return 'address not defined';
//     }
//     if (pinCode == undefined) {
//     console.log('pincode not defined');
//     // return 'pincode not defined';
//     }
//     if(address !== undefined && pinCode !== undefined)
//     console.log(name+address+pinCode );
    
//     return true;
//     }
    
//     var school3 = getSchool("Rose Tree School", "US", "99501")
    
//     console.log(school3);


function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
    }
    
    let myNumArr = getArray<number>([100, 200, 300]);
    let myStrArr = getArray<string>(["Hello", "World"]);
    
    myNumArr.push(400);
    myStrArr.push("Hello TypeScript");
    
    myNumArr.push(400);
    myStrArr.push('sunny');
    
    // **********************************
    
    function displayType<T, U>(id:T, name:U): void {
    console.log(typeof(id) + ", " + typeof(name));
    }
    
    displayType<number, string>(1, "Steve");
    
    