// 枚举：一组有名字的常量集合

// 数字枚举
// 转译后的代码是一种反向映射
// 枚举成员的值是只读类型，不可修改 
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter, Role[0]) // 0 "Reporter"
console.log(Role)
// 数字枚举类型的反向映射
/*
{
  0: "Reporter"
  1: "Developer"
  2: "Maintainer"
  3: "Owner"
  4: "Guest"
  Reporter: 0
  Developer: 1
  Maintainer: 2
  Owner: 3
  Guest: 4
}
*/

// 下面是编译后的代码
/*
"use strict";
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Maintainer"] = 2] = "Maintainer";
    Role[Role["Owner"] = 3] = "Owner";
    Role[Role["Guest"] = 4] = "Guest";
})(Role || (Role = {}));
*/


// 字符串枚举
// 不支持反向映射
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

// 下面是编译后的代码
/*
"use strict";
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u8D25\u4E86";
})(Message || (Message = {}));
*/

// 异构类型
// 不建议使用此类型
enum Answer {
  N,
  Y = 'Yes'
}

// 内部数字成员会有反射映射，字符串没有
/*
"use strict";
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "Yes";
})(Answer || (Answer = {}));
*/

// ==========枚举成员==========
// const常量枚举成员：无初始值的成员(a)、对已有成员的引用(b = Char.a)、常量表达式(c = 1 + 3)
// computed计算枚举成员：不会在编译阶段计算，而是保留到执行阶段
// 如果在computed枚举成员后面还有其他成员，必须要有初始值
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  // computed
  d = Math.random(),
  e = '123'.length,
  f = 10 // f成员在computed成员后面，必须有初始值
}
// console.log(Char)

// 编译后的代码
// computed成员在编译后，只要页面运行了代码，计算成员就已经确定
/*
"use strict";
var Char;
(function (Char) {
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
    Char[Char["f"] = 10] = "f";
})(Char || (Char = {}));
*/

// =============常量枚举类型=========
// 如果只要值，就使用常量对象，只在转译时会用到，不会转译为实际代码
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]
// 这里转译后变为了0, 1, 2
console.log(month) // [0, 1, 2]

// ============枚举类型，枚举值类型==========
enum E {a, b}
enum F {a = 0, b = 1}
enum G {a = 'apple', b = 'banana'}

// 无指定类型枚举，都可以赋值为num类型，可以超越枚举数量，比如下面的3
let e: E = 1
let f: F = 3
// 不同类型枚举不能进行比较
// e === f // 报错
// let g: G = 4

let e1: E.a = 1
let e2: E.b = 1
// e1 === e2 // 不同枚举成员类型，无法比较
let e3: E.a = 2
// e1 === e3 // true 相同的枚举类型，可以进行比较

// 字符串枚举是能是枚举成员的类型
let g1: G = G.b // g1属于枚举类型G，只能是内部枚举成员G.a或者G.b
let g2: G.a = G.a // g2属于枚举成员G.a类型，只能赋值为G.a


// 练习，用ts枚举类型改造下面的js代码
/*
function initByRole(role) {
  if (role === 1 || role === 2) {
    // ...
  } else if (role === 3 || role === 4) {
    // ...
  } else if (role === 5) {
    // ...
  } else {
     // ...
  }
}
*/

// 代码如下
enum RoleTest {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}

function initByRole(role: RoleTest): void {
  switch(role) {
    case RoleTest.Reporter:
    case RoleTest.Developer:
      console.log("1|2 ", RoleTest[role])
      break
    case RoleTest.Maintainer:
    case RoleTest.Owner:
      console.log("3|4 ", RoleTest[role]);
      break;
    case RoleTest.Guest:
      console.log("5 ", RoleTest[role]);
      break;
    default:
      console.log("No Access");
      break;
  }
}
initByRole(1) // 1|2  Reporter
initByRole(2) // 1|2  Developer
initByRole(3) // 3|4  Maintainer
initByRole(4) // 3|4  Owner
initByRole(5) // 5  Guest
initByRole(6) // No Access

// 用ts写之后，即使后期对应名称的权限码更改也没有关系，
// 因为这里使用枚举类型，名称对应了权限码，内部逻辑不需要修改。