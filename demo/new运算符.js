function Person(name, age) {
  this.name = name
  this.age = age
}

// 实现 `new` 运算符
function _new() {
  // 1. 拿到传入的参数中第一个参数, 即构造函数名fn
  const fn = [].shift.call(arguments)
  //2.创建一个空对象obj,并让其继承fn.prototype
  const obj = Object.create(fn.prototype)
  //第二步也可以这样写
  // var obj = {}
  // obj.__proto__ = Func.prototype

  //3.执行构造函数，并将this指向创建的空对象obj
  const result = fn.apply(obj, arguments)

  //4.如果构造函数返回的值是对象则返回，不是对象则返回创建的对象obj
  return typeof result === 'object' ? result : obj
}

const p1 = _new(Person, 'xy', 19)
console.log(p1)
