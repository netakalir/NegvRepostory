//1
// let a = "some stirng";
// let b = "other string";
// console.log(a,b);

// b = b + a;
// a = b.substring(0,12)
// b = b.substring(12,-1)
// console.log(a,b);

//2
// const matrix = [["x","X","x","x","x"],["x","x","X","x","x"],["x","x","X","x","x"],["x","x","X","x","x"],["x","x","X","x","x"]];
// let indexOfX = [];
// let countApperCace = 0;
// for (let i = 0; i < matrix.length; i++)
// {
//     for (let j = 0; j < matrix[i].length; j++)
//     {
//         if (matrix[i][j].charCodeAt() === 88)
//         {
//             countApperCace++
//             indexOfX.push(j)
//         }
//     }
// }
// console.log(countApperCace);
// console.log(indexOfX);
    
//3
// let family = { parents:{}, children: [{name:"Ali"},{name:"Lea"},{name:"Mona"}]};
// console.log(family.children[2].name)
// let names = "";
// for(let i = 0; i < family.children.length; i++)
// {
//     names = names + family.children[i].name + ",";
// }
// console.log(names);

//4
// const arr1 = [1,2,3,4];
// let arr2 = [];
// for(let i = arr1.length-1; i!==-1; i--)
// {
//     arr2.push(arr1[i])
// }
// console.log(arr1);
// console.log(arr2);

//5
let countOfString = 0;
let countOfNumber = 0;
let countOfObject = 0;
let countOfBoolean = 0;
let countOfNull = 0;
const array = ["A",2,{name:"neta"},true,null]
for(let i = 
    0; i < array.length; i++)
{
    if(typeof(array[i]) === "object" && array[i] !== null)
    {
        countOfNull++
    }

    else if(typeof(array[i])=="number")
    {
        countOfNumber++
    }

    else if(typeof(array[i])=="object")
    {
        countOfObject++
    }

    else if(typeof(array[i])=="boolean")
    {
        countOfBoolean++
    }

    else if (typeof(array[i])=="string")
    {
        countOfString++
    }
}
let obj = [{strings:countOfString},{numbers:countOfNumber},{objects:countOfObject},{booleans:countOfBoolean},{nulls:countOfNull}]
console.log(obj)
