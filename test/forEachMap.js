//1
function doubleValues(array) {
    return array.map((num) => {
        return num * 2
    })
}
// console.log(doubleValues([1,2,3]))

//2
function onlyEvenValues(array) {
    return array.map((num) => {
        if (num % 2 === 0) {
            return num
        }
    }).filter(item => item)
}
// console.log(onlyEvenValues([1,2,3,4,5,6]))

//3
function showFirstAndLest(array) {
    return array.filter((arg) => {
        if (typeof (arg) === "string" && (array.indexOf(arg) === 0 || array.indexOf(arg) === array.length - 1)) {
            return arg;
        }
    });
}
// console.log(showFirstAndLest([1,{ab:"df"},"hg"]))

//4
function vowelCount(str) {
    let obj = {};
    const array = str.split("");
    console.log(array);
    array.forEach((element) => {
        if (obj[element]) {
            obj[element] += 1
        }
        else {
            obj[element] = 1
        }
    });
    return obj;
}
// console.log(vowelCount("absfjlxa"))

//5
function capitalize(str) {
    const array = str.split("");
    const newArray = array.map((char) => {
        if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
            return char.toUpperCase()
        }

    })
    const newString = newArray.join("");
    return newString;
}
// console.log(capitalize("netane!l"))

//6
function shiftLetters(str) {
    //שליפה של המחרוזת ופירוק שלה לתוך מערך
    const array = str.split("");
    //ולידציה - להשאיר רק אותיות
    const onlyLetters = array.filter(char => /[a-zA-Z]/.test(char))
    //הזזת כל אות לאות הבאה 
    const shifted = onlyLetters.map((char) => {
        //lower case (b\y)
        if (char.charCodeAt() >= 97 && char.charCodeAt() < 122) {
            return String.fromCharCode(char.charCodeAt() + 1)
        }
        //upper case (B\Y)
        else if (char.charCodeAt() >= 65 && char.charCodeAt() < 90) {
            return String.fromCharCode(char.charCodeAt() + 1)
        }
        //lower z
        else if (char.charCodeAt() === 122) {
            return String.fromCharCode(97)
        }
        //upper Z
        else if (char.charCodeAt() === 90) {
            return String.fromCharCode(65)
        }
    });
    return shifted.join("");
}
// console.log(shiftLetters("CrazyZ! 123כ"))

//7


