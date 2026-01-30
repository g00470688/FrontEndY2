function isDivisible(value: number): boolean {// using primitive types number and boolean
    let test: boolean;
    if(value % 2 == 0){
        test = true;
    }
    else{
        test = false;
    }
    return test; 
}

let value: number = 20;
let message: string = `is ${value} divisible by 2? ${isDivisible(value)}`; // type string
console.log(message);