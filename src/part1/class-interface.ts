interface Human {
  // new (name: string): void
  name: string;
  eat(): void;
}

// 用implements关键字来定义interface接口
// 接口不能约束构造函数
// 接口只能约束类的公有成员
// 接口定义的方法必须在类中定义
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string
  eat() {}
}

// 接口也同样支持继承
interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

// 继承多个接口用逗号分开
interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

// 接口还能继承类，接口把类的成员抽象出来，只有类的结构
// private, protected成员都抽象出来了
// 后面如果用类实现这个接口，必须也要有同样的private、protected成员
class Auto {
   state = 1
  //  private state2 = 0 
}

// 这段代码编译后如下
/*
"use strict";
class Auto {
    constructor() {
        this.state = 1;
    }
}
*/

interface AutoInterface extends Auto {

}

class C implements AutoInterface {
  // 这里AutoInterface接口抽象了Auto类中的私有成员
  // 而且C不是Auto的子类，不能包含非公用成员
  // 如果前面真的定义了 private state2 = 0 ，这里会报错
  state = 1
}

// Auto的子类Bus, 实现AutoInterface接口
class Bus extends Auto implements AutoInterface {
  // 这里的Bus是Auto的子类，用于实现AutoInterface接口
  // 如果前面定义了private state2 = 0，这里是正常的
}