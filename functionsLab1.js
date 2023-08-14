//1
console.log(" Q1")
const logMyName = () => {
  const myName = "Luke";
  console.log(myName);
}
logMyName();
console.log("\n Q2");

//2
const logThisName = (nameArg) => {
  const name = nameArg;
  console.log(name);
}
logThisName("test1");
logThisName("test2");
console.log("\n Q3");

//3
const checkName = (nameArg) => {
  if (nameArg === "Joyce") {
    console.log("You are Joyce")
  } else {
    console.log("You are not Joyce :(")
  }
}
checkName("Chase");
checkName("Jerry");
checkName("Joyce");
console.log("\n Q4");

//4
const doLoop = () => {
    let n = 0;
    while (n <= 10) {
        console.log(n)
        n++;
    }
}
doLoop();
doLoop();
doLoop();

console.log("\n Q5")
//5
const doLoopWithThisNumber = (numArg) => {
    n = 0;
    while (n <= numArg) {
        console.log(n)
        n++;
    }
}
doLoopWithThisNumber(10);
doLoopWithThisNumber(100);
doLoopWithThisNumber(78);
doLoopWithThisNumber(22);
doLoopWithThisNumber(15);

console.log("\n Q6");
//6
const addTwoNums = (num1, num2) => {
    result = num1 + num2;
    console.log(result);
}
addTwoNums(2,2);
addTwoNums(5,5);
addTwoNums(10,10);

console.log("\n Q7");
//7
const isOddOrEven = (numArg) => {
    if (numArg%2 === 0){
        console.log("Even")
    } else {
        console.log("Odd")
    }
}
isOddOrEven(7);
isOddOrEven(10);

console.log("\n Q10");
//8
const logDataType = (arg) => {
    console.log(typeof arg)
}
logDataType(true);

console.log("\n Q11");
//11
const doALoopA = (length) => {
    for (let i = 0; i <= length; i++) {
        console.log(i);
    }
}

doALoopA(10);
doALoopA(20);

