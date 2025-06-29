//1
function extractNumbers(array) {
    try {
        if (!Array.isArray(array)) {
            throw new TypeError("Input is not an array");
        }
        return array.filter(item => typeof (item) === "number" && !Number.isNaN(item))
    } catch (err) {
        console.log(err.massage);
        throw err;

    } finally {
        console.log("Finished attempting to extract numbers");
    }
}

// console.log(extractNumbers([1, "hi", 5])); 
// console.log(extractNumbers([1, NaN, 2])); 
// extractNumbers("bad");

//2
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
// console.log(sumNumbersSafe(0,5))

//3
