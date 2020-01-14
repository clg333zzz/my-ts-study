// 布尔 boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

// 数字 number
let decliteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octLiteral: number = 0o744;

// 字符串 string
let userName: string = 'Genen';
let greeting: string = `hello, my name is ${userName}.`

// 数组 type[] | Array<type>
// 任意类型数组 any[] | Array<any>
let arr01: number[] = [1, 2, 3]
let arr02: Array<number> = [10, 11, 12]

// 元组 tuple
// 表示一个已知元素数量和类型的数组，各元素的类型不必相同。
console.log('--------------Tuple 元组--------------')
let tuple01: [string, number];
tuple01 = ['hello', 10];
console.log('tuple01: [string, number] = ', tuple01);

// 如果访问越界的元素，则会使用联合类型，这里是(string | number)类型
// 经测试，这里无法给添加新的元素，会报错。
// 查看:https://segmentfault.com/q/1010000018247438
// http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html
// 官方文档关于这一点上没有更新。
// 事实上在 Typescript 2.7（Fixed Length Tuples 一节中） 之后， Tuple 的定义已经变成了有限制长度的数组了。
// tuple01[2] = 100

// 枚举
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。
// 枚举值默认从0开始，也可以指定从某个数开始
console.log('--------------Enum 枚举--------------')
enum Color {Red = 1, Green = 2, Blue = 4};
// c1是枚举值
let c1: Color = Color.Blue;
let c2: string = Color[4]
console.log('枚举值：', c1)
console.log('枚举值名字：', c2)

// any
// any类型，在编程阶段还不清楚类型的变量指定一个类型
// any类型它允许你在编译时可选择地包含或移除类型检查
// Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
console.log('--------------Any 任意类型--------------')
let notSure: any = 4;
notSure = 'maybe a string instead';
console.log('--any notSure--', notSure);
notSure = false; // okay, definitely a boolean
console.log('--any notSure--', notSure);
notSure = 9.678
console.log('--any notSure--', notSure);
let notSureRes1 = notSure.toFixed(2);
console.log('--any notSureRes1--', notSureRes1);

// 当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
let list: any[] = [1, true, 'abc'];
let list2: Array<any> = ['efaa', 9, false];
console.log('--list: any[] = --', list);
console.log('--list2: Array<any> = --', list2);


console.log('--------------Void 空值--------------')
// void 类型只能赋于 undefined或者null
// 函数warnUser无返回值
function warnUser(): void {
    console.log("This is my warning message");
}
console.log('warnUser: void = ', warnUser());
let v02: void = undefined;
console.log('v02: void = ', v02);
// 只有 strictNullChecks 选荐没有开启时，下面v02 = null才允许赋值，否则报错
// v02 = null;
// null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量。

console.log('--------------Null and Undefined--------------')
let u: undefined = undefined;
let n: null = null;
console.log('u: undefined = ', u);
console.log('n: null = ', n);

console.log('--------------Never 永不存在的值的类型--------------')
/**
 * 那些总是会抛出异常、根本就不会有返回值的函数表达式
 * 箭头函数表达式的返回值类型
 * 变量也可能是never类型，当它们被永不为真的类型保护所约束时。
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

console.log('-----------Object 非基本类型以外的其他类型-----------')
// 非基本类型以外的其他类型
// declare function create(o: object | null): void;
// let createRes0 = create({ prop: 0 });
// let createRes1 = create(null);


// 类型断言，两种形式
// "尖括号"语法
console.log('---------<type>val | (val as type) 类型断言---------')
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log('(<string>someValue).length = ', strLength);
// as 语法
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;
console.log('(someValue2 as string).length = ', strLength);

console.log('----尽量使用 let 来定义变量----')