// global.name = 'The Window'
// 　　var object = {
// 　　　　name : "My Object",
// 　　　　getNameFunc : function(){
// 　　　　　　return function(){
// 　　　　　　　　return this.name;
// 　　　　　　};
// 　　　　}
// 　　};
// console.log(object.getNameFunc()());

module.exports.name = "The exports"
global.name = 'The Window';
var object = {
  name: "My Object",
  getNameFunc: () => {
    let that = this;
    return () => {
      console.log('that', that === this);
      let there = this;
      return () => {
        console.log('there', there === this)
        console.log('that, there', that === there);
        return this
      }
    }
  }
};
console.log(object.getNameFunc()()());

// const a = {}

// const b = {}

// console.log('a, b', a === b);

// var name = "The Window";
// 　　var object = {
// 　　　　name : "My Object",
// 　　　　getNameFunc : function () {
// 　　　　　　var that = this;
// 　　　　　　return function(){
// 　　　　　　　　return that.name;
// 　　　　　　};
// 　　　　}
// 　　};
// console.log(object.getNameFunc()());