export let a = 1
let b = 2
let c = 3
export {b, c}

export interface P12 {
  name: string,
  age: number
}

export function f() {
  console.log("function f")
}

// 导出时使用别名
function g() {
  console.log("function g")
}
export { g as G }

// 默认导出
export default function() {
  console.log("I'm default")
}

// 引入外部模块，重新导出
export { str as hello } from './b'