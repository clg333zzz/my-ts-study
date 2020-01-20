// 原始类型：boolean, number, string
// 注意，如果开启"strictNullChecks": true（默认值）
// 而原始类型有想可以赋值为undefined、null，则加上联合类型
let bool: boolean = true
let num: number | undefined | null = 1
let str: string | undefined | null = 'abc'

// 数组 array
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, 'abc']

// 元组 tuple
// 限定长度，限定对应位置类型
// 注意：这里可以使用push方法添加新成员，但是无法越界访问
let tup: [number, string]  = [0, '1']
tup.push(2)
console.log(tup)
// tup.push[2]


// 函数
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute= (a, b) => a + b;

// 对象
// let obj: object = {x: 1, y: 2}
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 3;

// symbol
// 两种声明方式都可以
let s1: symbol = Symbol()
let s2 = Symbol()
// s1 === s2 // false

// undefined, ull
// undefined 只能赋值给本身
// 如果配置项"strictNullChecks": true(默认值)，其他类型也不能赋值为undefined, ull
// 如果配置项"strictNullChecks": false，允许其他类型可以赋值为undefined, null
let un: undefined = undefined
let nu: null = null
// num = undefined
// str = null
// 建议开启"strictNullChecks": true约束代码
// 然后给num, str开启联合类型

// void
// js中void是一个操作符，用于返回undefined，例如void 0 === undefined
// js中undefined不是保留关键字，所以经常用void 0来代替undefined
// ts中用void表示没有任何返回值的类型
let noReturn = () => {}

// any 任意类型
// 不建议使用
let x
x = 1
x = []
x = () => {}

// never 永远不会有返回值的类型
// 比如函数抛出错误，还有死循环
let err = () => {
  throw new Error('error')
}
let endless = () => {
  while(true) {}
}