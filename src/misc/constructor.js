/**
 * 1. 构造函数
 * 2. 构造函数对应的原型对象prototype
 * 3. 构造函数的实例共用原型对象的属性
 * 4. 构造函数本身也是对象，可以有属性，构造函数的属性就是静态属性
 * 5. 原型对象的属性不是实例的私有属性
 * 6. 实例的私有属性在构造函数里的this. 定义，或直接添加实例的属性
 */


const Hello = (function() {
  class Hello {
    
    constructor() {
      this.x = 'Hello';
      this.y = 'World';
    }
  
    static cry() {
      
      console.log(this.x + ' ' + this.y);
    }
  
    say() {
      console.log(this.x + ' ' + this.y);
    }
  
    
  }

  Hello.x = 'constx';

  return Hello
})();



Hello.prototype.z = 'bbb'

// Hello.x = 'HX';

// Hello.cry = () => {
//   console.log('overwritten')
// }

Hello.cry();

let a = new Hello()

Object.defineProperty(a, 'custom', {
  value: 999,
  writable: false,
  configurable: false,
  enumerable: true
})

console.log(Object.keys(a));

a.custom = 1234;
console.log(a.custom);
a.say();

console.log(a.z)

console.log(Hello.prototype);

Hello.prototype.say.call(Hello);

