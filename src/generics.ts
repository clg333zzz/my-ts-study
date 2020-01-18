// 泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定

// 这里有一个打印日志的方法，可以接口任何类型的参数
/*
function log(value: any) {
  console.log(value);
  return value;
}
*/

// 下面改为泛型函数
function log<T>(value: T): T {
  console.log(value);
  return value;
}

log<string[]>(['a', 'b'])

// 定义一个泛型函数类型
type Log = <T>(value: T) => T
let myLog: Log = log

// 泛型接口
interface mlog {
  <T>(value: T): T
}

// 接口所有成员接受泛型约束
interface nlog<T> {
  (value: T): T
}
let nlog1: nlog<number> = log
nlog1(1)

// 我们也可以在泛型中直接指定类型
interface zlog<T = string> {
  (value: T): T
}
let zlog1: zlog = log
zlog1('a')

// 泛型类
// 里面不能静态成员
class LogA<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}
let loga = new LogA<number>()
loga.run(100)
// 如果不指定类型，可以传任意类型的参数
// 例如下面可以传入一个对象
let logaa = new LogA()
logaa.run({a: 1})

// 下面这个方法我们想打印出length属性
// 我们可以定义一个Length接口，然后用泛型T继承这个接口
// 这样就不会报错了
interface Length {
  length: number
}
function logB<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}
logB([1,3,4,5])
logB('abcde')
logB({a: 100, length: 10})

// 1.函数和类可以轻松地支持多种类型，增强程序的扩展性。
// 2.不必写多条函数重载，冗长的联合类型声明，增强代码可读性
// 3.灵活控制类型之间的约束。

// 感觉泛型才是最重要的，前面的都是最基础的 