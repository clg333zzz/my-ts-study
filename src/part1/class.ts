// 类中有个很更要的点要注意：
// 类成员的属性是实例属性，而方法是原型方法
// 实例属性必须有初始值，或者被构造函数初始化，（可选属性不用）

// 抽象类
// 只能被继承，不能被实例化
abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void // 抽象方法，子类可以单独再去实现自己的方法
}
// let animal = new Animal() // 报错，无法被继承

class Dog extends Animal {
  // 如果constructor也使用了private修饰，
  // 那么这个类不能实例化，也不能被继承
  // 如果constructor也使用了protected修饰，
  // 那么这个类不能实例化，只能被继承，也就下一个基类
  constructor(name: string) {
    super() // 记得选运行super，代表调用父类的构造函数
    this.name = name
  }
  name: string
  run() {}
  private pri() {} // private 私有成员不能在实例及子类中访问
  protected pro() {} // protected 只能在类及子类中访问
  readonly legs: number = 4 // 只读属性，不可被更改，一定要被初始化
  static food: string = 'bones' // 静态成员，只能通过类名来访问，不能通过实例或者子类访问，可被子类继承
  sleep() {
    console.log('dog sleep')
  }
}
console.log(Dog.prototype)

let dog = new Dog('wangwang')
console.log(dog)
// dog.pri() // 报错
// dog.pro() // 报错
// console.log(dog.food) // 报错
console.log(Dog.food) // 直接用类访问静态成员
dog.eat();
dog.sleep(); 

class Husky extends Dog {
  // 构造函数参数也可以添加修饰符，这样就直接变成实例属性
  // 可以更加方便，简洁
  constructor (name: string, public color: string) {
    super(name) // 继承必须先用super，后续才可以用this
    this.color = color;
    // this.pri() // 报错
    this.pro() // 可被调用
  }
  // color: string
}
console.log(Husky.food) // 继承的静态属性也可以通过子类直接访问

// 多态，这里Cat子类也实现自己的sleep方法
class Cat extends Animal {
  sleep() {
    console.log('Cat sleep')
  }
}
let cat = new Cat()

let animals: Animal[] = [dog, cat]
animals.forEach(i => i.sleep());

// 实现方法链式调用
class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}
new WorkFlow().step1().step2()

class Myflow extends WorkFlow {
  next() {
    return this;
  }
}
// 这里next, step1, step2都可以链接调用，相当于实现了this的多态
new Myflow().next().step1().next().step2();