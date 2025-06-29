function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function () {
        console.log(this.name)
    }
    this.getAge = function () {
        console.log(this.age)
    }
    
    
}
// const person = new Person("neta",25)
// person.getName()
// person.getAge()

function Animal(name){
    this.name = name;
    this.sound = "baseic";
    this.makeSound = function(){
        console.log(`${this.name} make ${this.sound}`)
    }
}
// const cat = new Animal("Kiti")
// cat.makeSound()
// const dog = new Animal("Bob")
// dog.makeSound()

// console.log(Object.getPrototypeOf(cat))
// console.log(Object.getPrototypeOf(dog))

const users = [
    {
        username: "Moshe"
    },
    {
        username: "Bob"
    },
    {
        username: "Ben"
    }
];

function prosessUserData(input,index){
    try{
        const obj = JSON.parse(input)
        console.log(obj)
        const UN = obj.users[index].username;
        console.log(UN)
        console.log(UN.ToUpperCase)
    }
    catch(err){
        console.error(err.message)
    }
    finally{
        console.log(4)
    }
}
const usersString = JSON.stringify(users);
prosessUserData(usersString,0)