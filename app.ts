console.log("OOP");

// 1. Inheritance
class Person {
    name: string
    age: number
    isMarried: boolean
    constructor(name: string, age: number, isMarried: boolean) {
        this.name = name
        this.age = age
        this.isMarried = isMarried
    }
    getInfo():string {
        return `${this.name} is ${this.age} year${this.age > 1 ? "s" : ""} old`
    }
}

class Student extends Person {
    course: string
    constructor(name: string, age: number, kurs: string, isMarried: boolean) {
        super(name, age, isMarried)
        this.course = kurs
    }
}

class Teacher extends Person {
    subject: string
    constructor(name: string, age: number, subject: string, isMarried: boolean) {
        super(name, age, isMarried)
        this.subject = subject
    }
}

let teacher = new Teacher("Ali", 30, "Math", true)
console.log(teacher.getInfo());


let student = new Student("John", 1, "N72", false)
console.log(student.getInfo());


// 2. Encapsulation
class Car {
    private name: string // write-read qilolmaymiz
    public price: number // write-read qila olamiz
    readonly year: number // faqat read qila olamiz
    constructor(name: string, price: number, year: number) {
        this.name = name
        this.price = price
        this.year = year
    }
}

let car = new Car("BMW", 40_000, 2022)
// car.name = "Audi" // write - xato
// console.log(car.name); // read - xato

// car.year = 2023 // write - xato
console.log(car.year); // read

class User {
    private _name: string
    constructor(name: string) {
        this._name = name
    }
    get name():string {
        return this._name
    }
    set name(name: string) {
        this._name = name
    }
}

let user = new User("John")
console.log(user.name);


// 3. Abstraction 
abstract class Shape {
    abstract calculatePerimetr():number
}

class Rect extends Shape{
    a: number
    b: number
    constructor(a: number, b: number) {
        super()
        this.a = a
        this.b = b
    }
    calculatePerimetr():number {
        return 2 * (this.a + this.b)
    }
}
let rectangle = new Rect(5, 6)
console.log(rectangle.calculatePerimetr());

abstract class Animal {
    abstract makeSound():string
}

class Dog extends Animal {
    makeSound():string {
        return "Gav"
    }
    constructor() {
        super()
    }
}
let dog = new Dog()
console.log(dog.makeSound());



// 4. Polymorphism
class Payment {
    pay(amount: number):string {
        return `${amount} so'm to'landi`
    }
}

class CardPayment extends Payment {
    pay(amount: number):string {
        return `${amount} so'm karta orqali to'landi`
    }
}

class CashPayment extends Payment {
    pay(amount: number):string {
        return `${amount} so'm naqd pul orqali to'landi`
    }
}

let payment = new Payment()
let cardPayment = new CardPayment()
console.log(payment.pay(50_000));
console.log(cardPayment.pay(30_000));

class CarPayment extends Payment {
    pay(amount: number):string {
        return `${amount} so'm avtomobil orqali to'landi`
    }
}

class HomePayment extends Payment {
    pay(amount: number):string {
        return `${amount} so'm uy orqali to'landi`
    }
}

class PhonePayment extends Payment {
    pay(amount: number):string {
        return `${amount} so'm telefon orqali to'landi`
    }
}

let carPayment = new CarPayment()
let homePayment = new HomePayment()
console.log(carPayment.pay(100_000));
console.log(homePayment.pay(200_000));

