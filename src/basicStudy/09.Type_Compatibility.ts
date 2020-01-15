/**
 * 在基于名义类型的类型系统中，数据类型的兼容性或等价性是通过明确的声明和/或类型的名称来决定的。
 * 这与结构性类型系统不同，它是基于类型的组成结构，且不要求明确地声明。
 * 
 * TypeScript里的类型兼容性是基于结构子类型的。 结构类型是一种只使用其成员来描述类型的方式。
 */

 interface Named {
   name: string;
 }

 let x09: Named;
 let y09 = {
   name: "Alice",
   location: "Seattle"
 }
 x09 = y09
 console.log(x09)
 // 上面的例子 y09 是包含 name: string 属性的，所以赋值成功