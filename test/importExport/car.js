class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getDetails() {
        return `the ${this.model} make by ${this.make}`
    }
}

export {
    Car
}