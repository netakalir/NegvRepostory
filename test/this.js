//1
function user(name) {
    this.name = name
}
user.prototype.sayName = function () {
    console.log(`user: ${this.name}`)
}
const u1 = new user("neta")
const u2 = new user("avi")
u1.sayName()
u2.sayName()

//2
// const obj = {
//     func: function () {
//         console.log("this is methot", this);
//         const arrow = () => {
//             console.log("this in arrow:", this);
//         };
//         arrow();
//     }
// };
// obj.func()todo

//3
const obj = {
    func:()=>{console.log(12)}
}
function logger(cb){
    cb()
}
