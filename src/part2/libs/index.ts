// 这里引入jquery，也要把声明文件下载下来
// @types/jquery
import $ from 'jquery'

$('.app').css('color', 'red')


// 我们在tpl/index.html中添加了global-lib.js引用
// 没有声明文件这里会提示找不到globalLib
// 如果浏览器报找不到名称的错，重启一下服务器npm start
globalLib({x: 1})
globalLib.doSomething()

import moduleLib from "./module-lib"
moduleLib.doSomething()

import umdLib from "./umd-lib"
umdLib.doSomething()

// 我们想在moment上加上一个自定义方法
// moment已经自带d.ts文件
import m from 'moment'
declare module 'moment' {
  export function MyFuntion(): void
}
m.MyFuntion = () => {}

declare global {
  namespace globalLib {
    function doAnything():void
  }
}
globalLib.doAnything = () => {}