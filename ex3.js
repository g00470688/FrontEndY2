function isDivisible(value) {
    var test;
    if (value % 2 == 0) {
        test = true;
    }
    else {
        test = false;
    }
    return test;
}
var value = 20;
var message = "is ".concat(value, " divisible by 2? ").concat(isDivisible(value)); // type string
console.log(message);
