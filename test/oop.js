//1
function Phone(brand, model) {
    this.brand = brand;
    this.model = model;
    this.getDetails = function () {
        console.log(`phone: ${this.brand} ${this.model}`);
    }
}
// const myPhone = new Phone("Samsung", "S22")
// myPhone.getDetails()

// //2
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function () {
        return this.width * this.height;
    }
};
// const myRectangle = new Rectangle(5,4)
// console.log(myRectangle.getArea())

//3
function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount
    }
    this.withdraw = function (amount) {
        if (amount < this.balance) {
            this.balance -= amount
        }
    }
    this.checkBalance = function () {
        console.log(`${this.owner} have ${this.balance}`)
    }
}

// const myAccount = new BankAccount("neta",1000)
// myAccount.deposit(500)
// myAccount.checkBalance()
// myAccount.withdraw(200)
// myAccount.checkBalance()

//4
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    bark() {
        console.log(`${this.name} bark`)
    }
}
// const dog  = new Dog("rex")
// dog.speak()
// dog.bark()

//5
class Vahicle {
    constructor(type) {
        this.type = type;
    }
    describe() {
        console.log(`This is a ${type}`)
    }
}

class Car extends Vahicle {
    constructor(type, brand) {
        super(type);
        this.brand = brand;
    }
    info() {
        console.log(`This is a ${this.brand} ${this.type}`)
    }
}

// const car = new Car("car","BMW")
// car.info()

//6
class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side ** 2
    }
}
// const c = new Circle(3)
// console.log(c.area())

// const s = new Square(4)
// console.log(s.area())

//7
// todo

//8
class Person {
    constructor(name) {
        this.name = name;
    }

    greet(){
        console.log(`Hello, i'm ${this.name}`)
    }
}

class Student extends Person{
    constructor(name,school){
        super(name);
        this.school = school;
    }

    study(){
        console.log(`${this.name} is studying at ${this.school}`)
    }
}

// const s = new Student("neta","idf")
// s.greet()
// s.study()

//9
//todo