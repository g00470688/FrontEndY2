function howLong(s) {
    var l = s.length;
    return l;
}
function howLongNoSpace(s) {
    var count = 0;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var w = s_1[_i];
        if (w !== " ") {
            count++;
        }
    }
    return count;
}
function howLongOptional(s, option) {
    if (option === "s") {
        var l = s.length;
        return l;
    }
    else if (option === "n") {
        var count = 0;
        for (var _i = 0, s_2 = s; _i < s_2.length; _i++) {
            var w = s_2[_i];
            if (w !== " ") {
                count++;
            }
        }
        return count;
    }
    else {
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
