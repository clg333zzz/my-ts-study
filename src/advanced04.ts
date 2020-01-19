interface DogInterface {
  run(): void
}
interface CatInterface {
  jump(): void
}
// 交叉类型
// 将多个类型合为一个类型，取并集
let pet: DogInterface & CatInterface

// 联合类型
// 可以不同类型，也可以不同的值
let ad1: number | string = 1
let ad2: 'a' | 'b' | 'c'
let ad3: 1 | 2 | 3


// 对象的联合类型
class DogA implements DogInterface {
  run() {}
  eat() {}
}
class CatA implements CatInterface {
  jump() {}
  eat() {}
}
enum Master {Boy, Girl}
function getPet(master: Master) {
  let pet = master === Master.Boy ? new DogA() : new CatA();
  pet.eat(); // 只能访问共有成员
  // pet.run(); // 无法访问
  // pet.jump(); // 无法访问
  // 这里pet就是联合类型，只能取DogA与CatA的交集
  return pet;
}

// 可区分的联合类型
// 核心思想：这些类型都有一个同样的属性
interface Suqare {
  kind: "square";
  size: number
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number
}
interface Circle {
  kind: "circle",
  r: number
}
type Shape = Suqare | Rectangle | Circle
// function area(s: Shape): number { // 第一种：指定函数返回类型
function area(s: Shape) {
  switch(s.kind) {
    case "square":
      return s.size + s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.r ** 2;
    default:
      // 检查s是否为never类型，这里如要s报错，说明前面的逻辑有遗漏
      // 我们要把circle的逻辑添加上去
      // 第2种：利用never类型提示
      return ((e: never) => {throw new Error(e)})(s)
  }
}
let shape01: Suqare = {
  kind: "square",
  size: 10
}
let shape02: Rectangle = {
  kind: "rectangle",
  width: 20,
  height: 30
}
let shape03: Circle = {
  kind: "circle",
  r: 2
}
let shape1Res = area(shape01)
let shape2Res = area(shape02)
// 如果我们内部没有声明circle的实现逻辑，那么这里shape3Res会返回undefined
// 这不是我们想要的，至少要报个错
// 如何约束？
// 第1种：给函数指定返回类型
// 第2种：利用never类型提示
let shape3Res = area(shape03)
console.log(shape1Res)
console.log(shape2Res)
console.log(shape3Res)

// 索引类型
let objA = {
  a: 1,
  b: 2,
  c: 3
}
function getValueA(obj: any, keys: string[]) {
  return keys.map(key => obj[key])
}
let getValue01Res = getValueA(objA, ['a', 'b'])
// 如果我们指定两个不存在的属性'e','f'，编译器不会报错，而且返回了两个undefined
let getValue02Res = getValueA(objA, ['e', 'f'])
console.log(getValue01Res)
console.log(getValue02Res)

// ======索引类型=====
// keyof T
interface ObjB {
  a: number,
  b: string
}
let keyB: keyof ObjB

// T[k]
let valueBa: ObjB['a']

// T extends U

function getValueB<T, K extends keyof T>(obj: T, keys: K[]): T[K][]  {
  return keys.map(key => obj[key])
}
let getValue03Res = getValueB(objA, ['a', 'b'])
// 使用索引类型之后，这里就会指出错误
// let getValue04Res = getValueB(objA, ['e', 'f'])
console.log(getValue03Res)
// console.log(getValue04Res)

//=====映射类型======
interface ObjC {
  a: number;
  b: number;
  c: number
}

// 全部映射为readonly属性
type ReadonlyObjC = Readonly<ObjC>
// 全部映射为可选属性
type PartialObjC = Partial<ObjC>
// 映射指定的属性
type PickObjC = Pick<ObjC, 'a' | 'b'>
// 上面三种是同态类型

type RecordObjc = Record<'x' | 'y', ObjC>

//=====条件类型=====
// T extends U ? X : y

type TypeName<T> = 
  T extends string ? "string":
  T extends number ? "number":
  T extends boolean ? "boolean":
  T extends undefined ? "undefined":
  T extends Function ? "function":
  "object";

  type T1 = TypeName<string> // T1 就是string类型
  type T2 = TypeName<string[]> // T2 是object类型

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)

type T3 = TypeName<string | string[]> // string | string[]

type Diff<T, U> = T extends U ? never : T
type T4 = Diff<"a" | "b" | "c", "a" | "e"> // "b" | "c"
// 可以从类型T中剔除类型U中的类型
// Diff<"a", "a" | "e"> |  Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// never | "b" | "c"
// "b" | "c"

// 从T中剔除掉undefined、null
type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null> // string | number

// Diff的官方类型 Exclude<T, U>
// NotNull的官方类型 NotNullable<T>

// Extract<T, U> 可以从T中抽取U中含有的类型
type T6 = Extract<"a" | "b" | "c", "a" | "e"> // "a"

// ReturnType<T> 可以获取一个函数返回值的类型
type T7 = ReturnType<() => number> // string

// ts类库中还有更多丰富的映射类型，可以多去看看源码，学习其思维