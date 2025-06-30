//1
//הפרדה של המספרים במערך והןצאץם למערך חדש בתוספת בדיקה שזה מערך
function extractNumbers(array) {
    try {
        if (!Array.isArray(array)) {
            throw new TypeError("Input is not an array");
        }
        return array.filter(item => typeof (item) === "number" && !Number.isNaN(item))
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log("Finished attempting to extract numbers");
    }
    
}

// console.log(extractNumbers([1, "hi", 5])); 
// console.log(extractNumbers([1, NaN, 2])); 
// extractNumbers("bad");

//2
//סכימת מספרים בלבד על ידי שימוש ב extractNumbers 
function sumNumbersSafe(arr){
    let sum = 0;
    try{
        const validNumbers = extractNumbers(arr)
        validNumbers.forEach((num)=>{
            sum += num
        })
        return sum;

    } catch(err){
        console.warn("Invalid input:", err.message);
        return 0;
        
    }
    
}
// console.log(sumNumbersSafe(["kjn",5,["fs"]]))

//3
function filterLargeSums(arrList,minTotal){
    try{
        return arrList.filter((arr) => sumNumbersSafe(arr) >= minTotal )
        
    }
    catch(err){
        console.log(err.message)
    }
}

console.log(filterLargeSums([[1,2,3],[10,"bad",5],"fail"],10))
