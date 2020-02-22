class A {
    a: number = 1
}

let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4}
let n = {x, y, ...z}

// babel中使用ts，四个注意
// 1. 命名空间不能使用
// namespace N {
//     export const n = 1
// }
// 2. 断言要使用as
let s = {} as A
s.a = 1

// 3. 不支持常量枚举
// const enum E {A}

// 4. export
// export = s

// ----------
let greetingStr = 'Hello world!'
let app = document.getElementById("app")
if (app) {
    app.textContent = greetingStr
}

let hello: string = 'Hello TypeScript'
document.querySelectorAll('.app')[0].innerHTML = hello