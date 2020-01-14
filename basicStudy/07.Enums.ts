/**
 * Enums
 */

/**
 * Numberic enums
 */
enum Direction {
  Up,
  Down,
  Left,
  Right
}
console.log(Direction.Up); // 0
// 可以指定初始值
enum Direction2 {
  Up = 5,
  Down,
  Left,
  Right
}
console.log(Direction2.Left); // 7
console.log(Direction2[6]); // Down

/**
 * 字符串枚举
 */
enum Direction3 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

console.log(Direction3["Left"]); // LEFT

/**
 * 异构枚举
 * 除非你真的想要利用JavaScript运行时的行为，否则我们不建议这样做。
 */
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}
console.log(BooleanLikeHeterogeneousEnum.No);
console.log(BooleanLikeHeterogeneousEnum.Yes);

/**
 * 计算与常量枚举 Computed and constant members
 */
// 1. 它是枚举的第一个成员且没有初始化器，这种情况被赋值为 0
enum E {
  x
}
console.log(E.x); // 0

// 2. 它没有初始化器，且它之前的枚举成员是一个数字常量。这种情况下，当前枚举值是它上一个枚举值加 1。
enum E1 {
  x, // 0
  y, // 1
  z  // 2
}

enum E2 {
  A = 1, // 1
  B, // 2
  c  // 3
}

// 3. 枚举成员使用 常量枚举表达式
/**
 * 常里枚举表达式
 * 3.1 一个枚举表达式字面量（主要是字符串字面量和数字字面量）。
 * 3.2 一个对之前定义的常量枚举成员的引用。
 * 3.3 带括号的常量枚举表达式。
 * 3.4 一元运算符 +, -, ~其中之一应用在了常量枚举表达式。
 * 3.5 常量枚举表达式做为二元运算符 (+, -, *, /, %, <<, >>, >>>, &, |, ^)的操作对象
 *     若常数枚举表达式求值后为 NaN 或 Infinity，则会在编译阶段报错。
 */
enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  G = "123".length
}
console.log("===========FileAccess==========")
console.log(FileAccess.None)
console.log(FileAccess.Read)
console.log(FileAccess.Write)
console.log(FileAccess.ReadWrite)
console.log(FileAccess.G)

/**
 * 联合枚举与枚举成员的类型
 * 
 * 存在一种特殊的非计算的常量枚举成员的子集：字面量枚举成员，
 * 字面量枚举成员是指不带有初始值的常量枚举成员，或者是值被初始化为。
 * 1. 任何字面量字符串
 * 2. 作何数字字面量
 * 3. 应用了一元 - 符号的数字字面量
 * 
 * 当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义。
 * 首先，枚举成员成为了类型！ 例如，我们可以说某些成员 只能是枚举成员的值：
 */

 enum ShapeKind {
   Circel,
   Square
 }
 interface Circel {
   kind: ShapeKind.Circel;
   radius: number;
 }
 interface Square {
   kind: ShapeKind.Square;
   sideLength: number;
 }

//  let c: Circel = {
//    kind: ShapeKind.Square, // 报错，不能将类型“ShapeKind.Square”分配给类型“ShapeKind.Circel”。
//    radius: 100
//  }

/**
 * 枚举类型本身变成了每个枚举成员的 联合
 * 这个例子看不懂
 * 
 */
enum E3 {
  x, // 0
  y, // 1
}

function f(x: E3) {
  console.log(x)
  // 这里x属于E3，x只能是E3.x或者E3.y，
  // if (x !== E3.x || x !== E3.y)
}


/**
 * 运行时的枚举
 * 枚举是在运行时真正存在的对象
 */
enum E4 {
  x,
  y,
  z
}
function f4(object: {x: number}) {
  console.log("object.x = ", object.x)
}
f4(E4)

/**
 * 反向映射
 * 仅限数字枚举
 */

 /**
  * const 枚举
  * 编译时会被删除，其他地方会直接使用其成员的值。
  */
 const enum EnumA {
   A = 1,
   B = A * 99
 }
 let arraya = [EnumA.A, EnumA.B]
 console.log("const 枚举 ", arraya)

 /**
  * 外部枚举
  * 查询资料好像是说这个是用于d.ts文件中用于描述已经存在的枚举结构
  */
 declare enum EnumB {
   A = 1,
   B,
   C = 2
 }
