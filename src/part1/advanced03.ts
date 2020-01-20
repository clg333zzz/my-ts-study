// 类型保护
enum Type {Strong, Week}

class Java {
    helloJava() {
        console.log('Hello Java')
    }
    java: any
}

class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript')
    }
    javascript: any
}

// 此片lang会被推断为 (Java | JavaScript)，
// 所以下面的 lang.helloJava 中的lang一定是某种类型，我们这里加上断言
// 否则就会报错。
// 不建议使用此方法，代码不易阅读，而且臃肿
/*
function getLanguage(type: Type) {  
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    if ((lang as Java).helloJava) {
        (lang as Java).helloJava()
    } else {
        (lang as JavaScript).helloJavaScript()
    }
    return lang
}
getLanguage(Type.Strong)
*/

// 类型保护的方法
// ====1. instanceof====
function getLanguage(type: Type) {  
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    if (lang instanceof Java) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }
    return lang
}
getLanguage(Type.Strong)

// ====2. in关键字====
function getLanguage2(type: Type) {  
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    if ('java' in lang) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }
    return lang
}
getLanguage2(Type.Strong)

// ====3. typeof====
function getLanguage3(type: Type, x: string | number) {  
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    if (typeof x === 'string') {
        x.length
    } else {
        x.toFixed(2)
    }
    return lang
}

// ====4. 类型保护函数====
function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
}
function getLanguage4(type: Type) {  
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    if (isJava(lang)) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }
    return lang
}

// 类型推断
// 类型兼容性
// 类型保护