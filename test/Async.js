import fs from "fs";
import path from "path";
import os from "os"

//1
// fs.readFile("./text.txt","utf-8",(err,data)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log("file content:");
//     console.log(data);

//     fs.stat("./text.txt",(err,stats)=>{
//         if (err){
//             console.log('err');
//             return
//         }
//         console.log(`size:${stats.size} bytes`);
//         console.log(`created at:${stats.birthtime.toLocaleString('he-IL')}`);
//     })
// })

//2
const lst = fs.readdirSync("./", { withFileTypes: true })
const fileList = [];
for (let i = 0; i < lst.length; i++) {
    if (lst[i].isFile()) {
        fileList.push(lst[i])
    }
}
// console.log(fileList.map(item => item.name));

//3

function counterDown(num) {
    if (num >= 0) {
        console.log(num);
        // return counterDown(num-1)
        setTimeout(() => {
            counterDown(num - 1)
        }, 1000)
    }
    else {
        console.log("Time's up");
    }
}
// counterDown(5)

//4
// fs.readFile("./quotes.txt","utf-8",(err,data)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
//     const lstLine = data.split("\n")
//     const rand = Math.floor(Math.random() * lstLine.length);
//     // console.log(rand);
//     // console.log(lstLine);
//     if (lstLine[rand] !== "\r"){
//         console.log(lstLine[rand]);
//     }
//     else{
//         console.log('---empty line---');
//     }
// })

//5
function getFreeMemory() {
    const FMB = os.freemem()
    const FMKB = FMB / 1024
    const FMMB = FMKB / 1024
    const FMGB = FMMB / 1024
    const TMB = os.totalmem()
    const TMKB = TMB / 1024
    const TMMB = TMKB / 1024
    const TMGB = TMMB / 1024
    const freeMemory = (((TMGB - FMGB) / TMGB) * 100).toFixed(2)
    console.log(`${freeMemory}%`)
}
function counter() {
    let interval;
    let count = 0;
    interval = setInterval(() => {
        getFreeMemory()
        count++
        if (count > 5) {
            clearInterval(interval)
            console.log('memory loging complete');
        }
    }, 2000);
}
// counter();

//6
const date = new Date().toLocaleString()
fs.appendFile("./log.txt", `log entry: ${date}\n`, "utf-8", (err) => {
    if (err) {
        console.log(err.message);
    }
})

//7
// const dir = "backup";
// const newPath = path.join("./",dir)

// if(!fs.existsSync(newPath)){
//     fs.mkdirSync(newPath)
//     console.log("Folder created successfully.");
// }
// else{
//     console.log("Folder already exists.");
// }

//8
// const file = "hb.txt";
// const newPath = path.join("./", file)
// if (!fs.existsSync(newPath)) {
//     console.log("File not found");
// }
// else {
//     fs.unlink(newPath, (err) => {
//         if(err){
//             console.log(err);
//         }
//     })
//     console.log("File deleted.");
// }

//9
const arrKernl = os.cpus()
os.cpus().forEach((cpu, i) => {
    console.log(`spu ${i + 1}: ${cpu.model}`);
})
// console.log(`total cores: ${arrKernl.length}`);

//10
// setTimeout(()=>{
//     console.log("hello");
//     setTimeout(()=>{
//         console.log("to");
//         setTimeout(()=>{
//             console.log("you");
//         },1000)
//     },1000)
// },1000)

//11

// const dir = "fixTheCode";
// const fullPath = path.join("./", dir)
// const listFiles = fs.readdirSync(fullPath, { withFileTypes: true })

// if (listFiles.isDirectoty) {
//     fs.stat()
// }todo

//12
