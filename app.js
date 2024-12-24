"use strict";
console.log("OOP");
// 1. Inheritance
class Person {
    constructor(name, age, isMarried) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }
    getInfo() {
        return `${this.name} is ${this.age} year${this.age > 1 ? "s" : ""} old`;
    }
}
class Student extends Person {
    constructor(name, age, kurs, isMarried) {
        super(name, age, isMarried);
        this.course = kurs;
    }
}
class Teacher extends Person {
    constructor(name, age, subject, isMarried) {
        super(name, age, isMarried);
        this.subject = subject;
    }
}
let teacher = new Teacher("Ali", 30, "Math", true);
console.log(teacher.getInfo());
let student = new Student("John", 1, "N72", false);
console.log(student.getInfo());
// 2. Encapsulation
class Car {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
let car = new Car("BMW", 40000, 2022);
// car.name = "Audi" // write - xato
// console.log(car.name); // read - xato
// car.year = 2023 // write - xato
console.log(car.year); // read
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
let user = new User("John");
console.log(user.name);
// 3. Abstraction 
class Shape {
}
class Rect extends Shape {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    calculatePerimetr() {
        return 2 * (this.a + this.b);
    }
}
let rectangle = new Rect(5, 6);
console.log(rectangle.calculatePerimetr());
class Animal {
}
class Dog extends Animal {
    makeSound() {
        return "Gav";
    }
    constructor() {
        super();
    }
}
let dog = new Dog();
console.log(dog.makeSound());
// 4. Polymorphism
class Payment {
    pay(amount) {
        return `${amount} so'm to'landi`;
    }
}
class CardPayment extends Payment {
    pay(amount) {
        return `${amount} so'm karta orqali to'landi`;
    }
}
class CashPayment extends Payment {
    pay(amount) {
        return `${amount} so'm naqd pul orqali to'landi`;
    }
}
let payment = new Payment();
let cardPayment = new CardPayment();
console.log(payment.pay(50000));
console.log(cardPayment.pay(30000));
class CarPayment extends Payment {
    pay(amount) {
        return `${amount} so'm avtomobil orqali to'landi`;
    }
}
class HomePayment extends Payment {
    pay(amount) {
        return `${amount} so'm uy orqali to'landi`;
    }
}
class PhonePayment extends Payment {
    pay(amount) {
        return `${amount} so'm telefon orqali to'landi`;
    }
}
let carPayment = new CarPayment();
let homePayment = new HomePayment();
console.log(carPayment.pay(100000));
console.log(homePayment.pay(200000));
