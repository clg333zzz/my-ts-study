// 函数定义
function add2(x: number, y: number) {
  return x + y;
}

// 下面三种方式函数类型定义，这里只是定义函数类型
// 注意这里的冒号:
let add3: (x: number, y: number) => number
// 注意这里的 type
type add4 = (x: number, y: number) => number
// 使用接口
interface add5 {
  (x: number, y: number): number
}


// ts中形参与实参必须一一对应
// 我们有时候需要可选参数

// 使用可选参数，一定要在必选参数后面
function add6(x: number, y?: number) {
  console.log(y? x + y: x)
  return y? x + y: x
}
add6(3, 4) // 7
add6(100) // 100

function add7(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q;
}
// 必选参数一定要有，不想传而想用默认值也要传入undefined
console.log(add7(1, undefined, 3))

// 剩余参数与ES6一样，使用扩展运算符...来实现，此时他的类型是一个数组
function add8(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => {
    return pre + cur
  })
}
console.log(add8(1,2,3,4,5,6,1000)); // 1021

// 函数重载
// 名称相同，参数个数不一样，功能也不一样
// 注意先些函数匹配，在最后在写实现
function add9(...rest: number[]): number;
function add9(...rest: string[]): string;
function add9(...rest: any[]): any {
  let first = rest[0];
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}
let add91 = add9(1, 2, 100, 1000)
let add92 = add9('a', 'b', 'c')
console.log(add91, add92);