// 类型推断

//====第一类====
// 从表达式右侧的值来推断左侧的类型
let a = 1
// a被推断为number

// 注意数组的推断
let aa = [1, null]
// 默认配置"stricNullChecks: true"
// aa被推动为(number | null)[]

// 设置"stricNullChecks: false"
// 这里aa将会真接被推断为number[]

//====上下文推断====
// 这里与视频教程不一样，教程中这里会自动推断
// 我这里typescript是3.7.4版本，
// 下面的event事件无法自动推断了，要加上类型，这里加上any类型
window.onkeydown = (event: any) => {
  console.log(event.code);
  // console.log(event.button)
}
window.onmousedown = function(mouseEvent: any) {
  console.log(mouseEvent.button);
};


interface Foo {
  bar: number
}
// let foo = {} as foo // 类型断言，注意这种方法会可能会遗漏foo.bar的声明，导致foo并没有按照接口来定义
// foo.bar = 1

// 这里还是尽量直接在定义时就加上Foo类型
let foo: Foo = {
  bar: 1
}

// 类型断言不要滥用
