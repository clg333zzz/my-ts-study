/**
 * 高级类型
 */

/**
 * 交叉类型
 * 多个类型合并为一个类型
 * 我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
 * 我们大多是在混入（mixins）或其它不适合典型面向对象模型的地方看到交叉类型的使用。
 */

//  function extend<T, U>(first: T, second: U): T & U {
//    let result = <T & U>{};
//    for(let id in first) {
//      (<any>result)[id] = (<any>first)[id];
//    }
//    for(let id in second) {
//       if (!result.hasOwnProperty(id)) {
//         (<any>result)[id] = (<any>second)[id];
//       }
//    }
//    return result;
//  }

//  class Person {
//    constructor(public name: string){}
//  }
//  interface Loggable {
//    log(): void;
//  }
//  class ConsoleLogger implements Loggable {
//    log() {
//      console.log("ConsoleLogger log()");
//    }
//  }
//  var jim = extend(new Person("Jim"), new ConsoleLogger());
//  var n = jim.name;
//  jim.log()
//  console.log(n)

function extend<First, Second>(first: First, second: Second): First & Second {
  const result: Partial<First & Second> = {};
  for (const prop in first) {
      if ((<any>first).hasOwnProperty(prop)) {
          (result as First)[prop] = first[prop];
      }
  }
  for (const prop in second) {
      if ((<any>second).hasOwnProperty(prop)) {
          (result as Second)[prop] = second[prop];
      }
  }
  return result as First & Second;
}

class Person {
  constructor(public name: string) { }
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  log(name: string) {
      console.log(`Hello, I'm ${name}.`);
  }
}

const jim = extend(new Person('Jim'), ConsoleLogger.prototype);
jim.log(jim.name);
