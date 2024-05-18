//union practice in typescript
// let country: number|string = 1
// console.log(country);
// country = "pakistan";
// console.log(country);
//union in Array
// let level: (string[]|number[]) = [1,2,3]
// console.log(level)
// level = ["1st","2nd","3rd"]
// console.log(level);
//union in function
function playersName(w1, w2) {
    return w1 + " " + w2;
}
console.log(playersName(1, "huzaifa"));
console.log(playersName(2, "ashir"));
