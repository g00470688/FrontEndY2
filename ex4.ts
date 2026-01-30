function howLong(s:string):number { //4a
let l = s.length;
return l;
}

function howLongNoSpace(s:string):number{ //4b
    let count: number = 0;
    for(const w of s){
        if(w !== " "){
            count++;
        }
    }
    return count;
}

function howLongOptional(s:string, option:string):number { //4c
    if(option === "s"){
    let l = s.length;
    return l;
    }
    else if(option === "n"){
         let count: number = 0;
    for(const w of s){
        if(w !== " "){
            count++;
        }
    }
    return count;
    }
    else{
        console.log("ERROR wrong parameter");
        return -1;
    }
}
//4a excercise output
console.log("-----------ex4b-------------");
console.log(howLong("w a"));
//4b excercise output
console.log("-----------ex4b-------------");
console.log(howLongNoSpace("w a"));
//4c excercise output
console.log("-----------ex4c-------------");
console.log(howLongOptional("w a", "s"));
console.log(howLongOptional("w a", "n"));
console.log(howLongOptional("w a", "ad"));