"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'name';
        this.age = 'age';
    }
    Person.prototype.eat = function () {
        console.log(this.name + 'eat');
    };
    return Person;
}());
var a = new Person();
a.eat();
console.log(a.name + a.age);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Person.prototype.__proto__);
exports["default"] = Person;
