//=======对象类型接口============
interface List {
  readonly id: number; // 5 只读属性
  name: string;
  // [x: string]: any; // 3 字符串索引签名，用任意字符串可以索引任意的类型结果
  age?: number; // 4 可选属性
}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
    // 4
    if (value.age) {
      console.log(value.age)
    }
    // 5
    // value.id ++ // 报错
  })
}
let result = {
  data: [
    {id :1, name: 'A', sex: 'male', age: 10},
    {id: 2, name: 'B'}
  ]
}
render(result)

// ===1 result独立变量===
// let result = {
//   data: [
//     {id :1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'}
//   ]
// }
// render(result)

// ===2 类型断言（建议使用这种方法）===
// render({
//   data: [
//     {id :1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'}
//   ]
// } as Result)
// ===2 <type>===
// render(<Result>{
//   data: [
//     {id :1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'}
//   ]
// })

// ===3 索引签名===
// render(<Result>{
//   data: [
//     {id :1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'}
//   ]
// })

/*
1. 
前提：这里result是独立的，然后再以参数形式传给render。
我们在返回的结果中加入 sex: 'male'，
明显不符合接口List，但是并没有报错。
这是因为ts中使用了鸭式辨形法，
因为result返回的数据中含有 id,name 就符合条件，
即使传入更多的字段也不会报错。

2.
如果我们不使用result变量，而是直接把返回值传入render方法，
这时候就会报错，sex 字段通不过。
此时可以使用断言，相当于告诉编译器，我传入的就是Result类型。
断言两种方法：as、<type>

3.
我们也可以使用“索引签名”，可以查找任意的字段

4.
如果我们在逻辑代码中添加了一个新属性 age，
此时Result里面是没有的，会直接报错。
我们需要使用可选类型：propertyName?: type

5.
readonly是只读属性，无法修改
*/

// 如果不确定接口返回的数据有多少字段，我们可以使用索引接口
// 用任意数字去索引字段
interface StringArray {
  [index: number]: string
}

let chars: StringArray = ['A', 'B']

// 用任意的字符串去索引字段
interface Names {
  [x: string]: string;
  [z: number]: string // 这里返回类型是nuber就会报错
}
// 这里也可以加上根据number去索引，
// 但是索引返回一定是字符串索引返回值的子类型，这样就能统一
// 因为js对象中用数字去索引，js会把数字转化为字符串去索引

// 函数类型接口

// 我们可以直接使用函数类型来定义一个函数，如下：
// let add1 = (x: number, y: number) => x + y

// 使用接口
// interface Add {
//   (x: number, y: number): number
// }

// 类型别名
type Add = (x: number, y: number) => number

let add1: Add = (a, b) => a + b

// 混合接口 定义 类库
interface Lib {
  (): void; // 是一个函数
  version: string; // 有一个属性
  doSomething(): void; // 有一个方法
}

// let lib1: Lib = (() => {}) as Lib // 注意这里 as Lib，类型断言
// lib1.version = '1.0'
// lib1.doSomething = () => {}

// 如果要创建多个实例
function getLib() {
  let lib1: Lib = (() => {}) as Lib
  lib1.version = '1.0'
  lib1.doSomething = () => {}
}
let lib2 = getLib()
let lib3 = getLib()