class Person {
  name: string;
  age: string;
  constructor() {
    this.name = 'name';
    this.age = 'age';
  }

  eat() {
    console.log(this.name + 'eat');
  }
}
const a = new Person()
a.eat();
console.log(a.name + a.age);


export default Person;