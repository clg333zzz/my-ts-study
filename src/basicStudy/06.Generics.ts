/**
 * Generics 泛型
 */


 /**
  * 泛型的例子：identity函数。 这个函数会返回任何传入它的值。 你可以把这个函数当成是 echo命令。
  */
 // 不用泛型,函数可能如下
 function identity(arg: number): number {
   return arg
 }
 // 或者使用 any 类型
 // 使用any类型会有个问题：理论传入的类型与返回的类型应该是相同的。
 // 但是如果我们这里传入一个数字，那么任何类型的值都有可能被返回。
 function identity1(arg: any): any {
   return arg
 }

 /**
  * 因此我们需要一种方法使返回值的类型与传入参数的类型是相同的，我们使用 类型变量，只用于表示类型而不是值。
  * 这个就是泛型，可适用于多个类型。不同于 any，它不会丢失信息。
  * 传入数值，返回数值，传入字符返回字符。
  */
 function identity3<T>(arg: T): T {
   return arg;
 }

 let outputa = identity3<string>("myString") // 第一种 传入所有的参数，包含类型参数：
 let outputb = identity3("myString outputb") // 第二种 类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型

 console.log("outputa = ", outputa)
 console.log("outputb = ", outputb)

 /**
  * 使用泛型变量
  */
// 如果我们想获取 arg 参数的长度，我们可能会这样做：
//  function loggingIdentity<T>(arg: T): T {
//    console.log(arg.length);
//    return arg
//  }

// 这样会有错误提示：类型 T 上没有 length 属性
// 我们可以改成如下
function loggingIdentity1<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg;
}

// 如何理解 logginIdentity1 的类型：泛型函数 loggingIdentity1 ,
// 接收类型参数 T 和参数 arg，它是一个元素类型是 T 的数组，并返回元素类型是 T 的数组。
let outputc = loggingIdentity1<number>([1, 2, 3, 4, 5])
let outputd = loggingIdentity1<string>(["a", "b", "c", "d"])
console.log("outputc = ", outputc)
console.log("outputd = ", outputd)

// 我们也可以这样实现上面的例子
function logginIdentity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg
}
let outpute = loggingIdentity1<number>([6, 7, 8, 9, 10, 11])
let outputf = loggingIdentity1<string>(["aa", "bb", "cc", "dd", "ee"])
console.log("outpute = ", outpute)
console.log("outputf = ", outputf)

/**
 * 泛型类型
 */
// 泛型函数与非泛型函数没什么不同，只是有一个类型参数在最前面，像函数声明一样
function identity4<T>(arg: T): T {
  return arg
}
let myIdentity: <T>(arg: T) => T = identity4

// 也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以
let myIdentity2: <U>(arg: U) => U = identity4
let output21 = myIdentity2(123)
console.log("output21 = ", output21)

// 还可以使用带有调用签名的对象字面量来定义泛型函数
let myIdentity3: {<T>(arg: T): T} = identity4
let output22 = myIdentity3("myIdentity3")
console.log("output22 = ", output22)

// 我们把上面的例子里的对象字面量拿出来做为一个接口
interface GenericIdentityFn {
  <T>(arg: T): T
}
function identity5<T>(arg: T): T {
  return arg
}
let myIdentity5: GenericIdentityFn = identity5
let output51 = myIdentity5("myIdentity5")
console.log("output51 = ", output51)


// 我们可能想把泛型参数当作整个接口的一个参数
interface GenericIdentityFn2<T> {
  (arg: T): T;
}
function identity6<T>(arg: T): T {
  return arg;
}
let myIdentity6: GenericIdentityFn2<number> = identity6;
let output61 = myIdentity6(9527)
console.log("output61 = ", output61)

/**
 * 泛型类
 */
class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {return x+y}

let output71 = myGenericNumber.add(myGenericNumber.zeroValue, 9)
console.log("output71", output71)

let stringNumric = new GenericNumber<string>();
stringNumric.zeroValue = "";
stringNumric.add = function(x, y) {return x + y}

let output81 = stringNumric.add(stringNumric.zeroValue, "test")
console.log("output81", output81)

/**
 * 泛型约束
 */
// 我们想要限制函数去处理任意带有.length属性的所有类型。 
// 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。
interface Lengthwise {
  length: number;
}
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

let outputa1 = loggingIdentity2({length: 10, value: 3});
console.log("outputa1 = ", outputa1)

/**
 * 在泛型约束中使用类型参数
 * 这部分在“高级类型”里面可以查看到
 */
function getPropery<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
let x = {a: 1, b: 2, c: 3, d: 4}

getPropery(x, "a")
// getPropery(x, 'ff') // 对象中没有“ff”

/**
 * 在泛型里使用类类型
 */
// 使用泛型创建工厂函数时，需要引用构造函数的类类型。
function create<T>(c: {new(): T;}): T {
  return new c();
}

// 一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
class BeeKeeper {
  hasMask: boolean = false;
}
class ZooKeeper {
  nametag!: string;
}
class Animal {
  numLegs!: number;
}
class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper;
}
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper;
}
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

// let a = createInstance(Lion)
// let b = createInstance(Bee)
// console.log(a)
// console.log(b)

let aa = createInstance(Lion).keeper.nametag = 'nametagAAA';
let bb = createInstance(Bee).keeper.hasMask = true;
console.log("aa = ", aa);
console.log("bb = ", bb);

