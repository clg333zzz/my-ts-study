/**
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查。
 * 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 * 
 */
// =================================
// 
// function printLabel(labelledObj: {label: string}) {
//   console.log(labelledObj.label);
// }

// 这里要求参数 labelledObj 对象中有一个名为label类型为string的属性 

// let myObj = {
//   size: 10,
//   label: 'Size 10 object'
// };
// printLabel(myObj)

// =================================
// 使用interface
// =================================
// interface LabelledValue {
//   label: string; // 注意这里是分号，不要与js中的对象写法混淆
// }
// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label)
// }
// let myObj = {
//   size: 10,
//   label: 'Size 10 object'
// };
// printLabel(myObj)

// =================================
// 可选属性 带有"?"字符
// 可以捕获引用不存在的属性时的错误
// =================================
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): {color: String; area: number} {
//   let newSquare = {
//     color: 'white',
//     area: 100
//   };
//   // 如果这里是config.clor,会提示 SquareConfig 里面不包含clor
//   // if (config.clor) {
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquareCC = createSquare({color: 'black'});
// console.log('--可选属性-- mySquareCC = ', mySquareCC);

// 这里如果参数名错了，比如：{colour: 'black'}，那么系统就会报错。可以少，但是不能错
// 如果我就是有一个这样的参数字段名，我确认自己没有传错，的确是要一个名为“colour”的参数字段，那要怎么办
// 这要就要用到“额外的属性检查”：[propName: string]: any;后面会有介绍

// =================================
// 只读属性
// 一些对象属性只能在对象刚刚创建的时候修改其值。
// 在属性前面使用 readonly来指定只读属性
// =================================
// interface Point {
//   readonly x: number;
//   readonly y: number;
// }

// let p1: Point = {x: 10, y: 20}
// p1.x = 12 // 这里会有错误提示，当前值是只读属性

// =================================
// 只读属性 ReadonlyArray<T>类型, 确保数组创建后再也不能被修改
// =================================
// let a: number[] = [1, 2, 3, 4, 5];
// let ro: ReadonlyArray<number> = a;
// // ro[0] = 12 // 提示只读，不可修改
// // ro.push(5); // 提示只读，不可修改
// // ro.length = 100; // 提示只读，不可修改
// // a = ro; // 提示只读，不可修改
// a = ro as number[] // 可通过断言来赋值

// =================================
// 额外的属性检查
// =================================
// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }

// =================================
// 函数类型
// =================================
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;

// mySearch = function(source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }

// // 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
// mySearch = function(src: string, sub: string): boolean {
//   let result = src.search(sub);
//   return result > -1;
// }

// 这里可以不用再在参数里面添加参数类型以及函数返回类型
// 它会自动根据接口定义的函数类型去判断
// mySearch = function(src, sub) {
//   let result = src.search(sub);
//   // return result; // 如果直接返回一个值，会提示这里需要一个boolean值
//   return result > -1;
// }

// let mySearchRes01 = mySearch('xyz', 'yz');
// let mySearchRes01 = mySearch(33334, '34'); // 这里第一个参数用的number，直接报错，与接口定义的参数对应不上
// console.log('--函数类型 mySearchRes01--', mySearchRes01);

// =================================
// 可索引的类型
// =================================
// interface StringArray {
//   [index: number]: string;
// }

// let myArray: StringArray;
// myArray = ["Bob", "Fred"]

// let myStr: string = myArray[0]
//----------------------------------
// class Animal {
//   name: string
// }

// class Dog extends Animal {
//   breed: string
// }

// interface NotOkay {
//   [x: number]: Animal, // 数字索引类型“Animal”不能赋给字符串索引类型“Dog”
//   [x: string]: Dog
// }
//----------------------------------
// 字符串索引声明了 obj.property和obj["property"]两种形式都可以
// 确保这两种情况返回值类型是一样的
// interface NumberDictionary {
//   [index: string]: number,
//   length: number,
//   name: string // 错误，`name`的类型与索引类型返回值的类型不匹配
// }
//----------------------------------
// 可以将索引签名设置为只读，这样就防止了给索引赋值
// interface ReadonlyStringArray {
//   readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory" // 类型“ReadonlyStringArray”中的索引签名仅允许读取


// =================================
// 类类型
// =================================
// interface ClockConstructor {
//   new (hour: number, minute: number);
// }

// class Clock implements ClockConstructor {
//   currentTime: Date,
//   constructor(h: number, m: number) {}
// }
//----------------------------------
// interface ClockConstructor { // 为构造函数所用，注意这里后面 clockInterface，基于这个新建对象
//   new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface { // 为实例方法所用
//   tick(): void;
// }

// function createClock(Ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//   return new Ctor(hour, minute)
// }

// class DigitalClock implements ClockInterface {
//   constructor(h: number, m: number){
//     console.log("DigitalClock", h, m)
//   }
//   tick() {
//     console.log("beep beep")
//   }
// }

// class AnalogClock implements ClockInterface {
//   constructor(h: number, m: number) {
//     console.log("AnalogClock", h, m)
//   }
//   tick() {
//     console.log("tick tock")
//   }
// }

// let digital = createClock(DigitalClock, 12, 17)
// let analog = createClock(AnalogClock, 7, 32)
// digital.tick()
// analog.tick()

// =================================
// 继承接口
// =================================
// interface Shape {
//   color: string
// }
// interface Square extends Shape {
//   sideLength: number
// }
// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// console.log(square)

// 一个接口可以继承多个接口，创建出多个接口的合成接口
// interface Shape {
//   color: string
// }
// interface PenStroke {
//   penWidth: number
// }
// interface Square extends Shape, PenStroke {
//   sideLength: number
// }
// let square = <Square>{};
// square.color = "blue";
// square.penWidth = 10;
// square.sideLength = 5
// console.log(square)

// =================================
// 混合类型
// =================================
// interface Counter {
//   (start: number): string,
//   interval: number,
//   reset(): void
// }
// function getCounter(): Counter {
//   let counter = <Counter>function (start: number) {
//     console.log("Counter = ", start)
//   };
//   counter.interval = 123;
//   counter.reset = function() {
//     console.log("counter.reset")
//   };
//   return counter;
// }
// let c = getCounter();
// c(10);
// c.reset()
// c.interval = 5.0
// console.log("c.interval = ", c.interval)


/**
 * =================================
 * 接口继承类
 * =================================
 * 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 
 * 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 
 * 接口同样会继承到类的private和protected成员。 
 * 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
 * 这个接口类型只能被这个类或其子类所实现（implement）。
 */
class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() {}
}
class TextBox extends Control {
  select() {}
}
let btn1 = new Button();
let textbox1 = new TextBox();
console.log('--Control--', btn1, textbox1)

// // 报错
// //  Type 'Image' is missing the following properties from type 'SelectableControl': select, state
// class Image implements SelectableControl {
//   selecte() {}
// }
// class Location {

// }