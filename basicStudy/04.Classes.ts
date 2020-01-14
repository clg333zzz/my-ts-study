/**
 * 简单例子
 */
// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message
//   }
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }
// let greeter = new Greeter("world");
// let res = greeter.greet()
// console.log(res)

//========================================================================

/**
 * 继承
 */
// class Animal {
//   move(distanceInMeters: number = 0) {
//     console.log(`Animal moved ${distanceInMeters}m`);
//   }
// }
// class Dog extends Animal {
//   bark() {
//     console.log("woof! woof!");
//   }
// }
// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

//========================================================================

/**
 * 继承
 * 更复杂的例子
 * 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
 * 而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。
 */
// class Animal {
//   name: string;
//   constructor(theName: string) {
//     this.name = theName
//   }
//   move(distanceInMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`)
//   }
// }
// class Snake extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters = 5) {
//     console.log("Slithering...")
//     super.move(distanceInMeters)
//   }
// }
// class Horse extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters = 45) {
//     console.log("Galloping...")
//     super.move(distanceInMeters)
//   }
// }
// let sam = new Snake("Sammy the python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move()
// tom.move(34)

//========================================================================

/**
 * 公共，私有与受保护的修饰符
 * 默认为 public
 * 上面例子 Animal 所有成员前面均可加上 public 
 */
// class Animal {
//   public name: string;
//   public constructor(theName: string) {
//     this.name = theName;
//   }
//   public move(distanceInMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

//========================================================================

/**
 * 公共，私有与受保护的修饰符
 * 理解 private
 * 当成员被标记为 private 时，它就不能在声明它的类的外部访问。
 */
// class Animal {
//   private name: string;
//   constructor(theName: string) {
//     this.name = theName
//   }
// }
// // 属性“name”为私有属性，只能在类“Animal”中访问。
// new Animal("Cat").name

//========================================================================

/**
 * 公共，私有与受保护的修饰符
 * 理解 private
 * TypeScript使用的是结构性类型系统。 
 * 当我们比较两种不同的类型时，并不在乎它们从何处而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。
 * 
 * 当比较带有 private 或 protected 成员的类型的时候， 
 * 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 
 * 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 
 * 对于 protected成员也使用这个规则。
 */
// class Animal {
//   private name: string;
//   constructor(theName: string) {
//     this.name = theName
//   }
// }

// class Rhino extends Animal {
//   constructor() {
//     super("Rhino")
//   }
// }

// class Employee {
//   private name: string;
//   constructor(theName: string) {
//     this.name = theName
//   }
// }

// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");

// animal = rhino
// // 不能将类型“Employee”分配给类型“Animal”。类型具有私有属性“name”的单独声明。
// // 这里如果把类的 private 去掉，就不会出现错误提示了。
// animal = employee

//========================================================================

/**
 * 公共，私有与受保护的修饰符
 * 理解 protected
 * protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
 */
// class Person {
//   protected name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Employee extends Person {
//   private department: string;
//   constructor(name: string, department: string) {
//     super(name)
//     this.department = department
//   }
//   public getElevatorPitch() {
//     return `Hello, my name is ${this.name} and I work in ${this.department}`;
//   }
// }

// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch())
// console.log(howard.name) // 属性“name”受保护，只能在类“Person”及其子类中访问。

//========================================================================

/**
 * 公共，私有与受保护的修饰符
 * 理解 protected
 * 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
 */
// class Person {
//   protected name: string;
//   protected constructor(name: string) {
//     this.name = name;
//   }
// }
// class Employee extends Person {
//   private department: string;
//   constructor(name: string, department: string) {
//     super(name)
//     this.department = department
//   }
//   public getElevatorPitch() {
//     return `Hello, my name is ${this.name} and I work in ${this.department}`;
//   }
// }

// let howard = new Employee("Howard", "Sales");
// let john = new Person("John"); // 类“Person”的构造函数是受保护的，仅可在类声明中访问。

//========================================================================

/**
 * readonly修饰符
 */
// class Octopus {
//   readonly name: string;
//   readonly numberOfLegs: number = 8;
//   constructor(theName: string) {
//     this.name = theName
//     console.log(this.name)
//   }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // Cannot assign to 'name' because it is a read-only property

//========================================================================

/**
 * 参数属性
 * 我们直接在构造函数里使用 readonly name: string 参数来创建和初始化 name 成员
 * 同时也支持访问限定符 private protected public
 */
// class Octopus {
//   readonly numberOfLegs: number = 8;
//   constructor(readonly name: string) {
//     console.log(this.name)
//   }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // Cannot assign to 'name' because it is a read-only property

//========================================================================

/**
 * 存取器
 * 存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 
 * 其次，只带有 get不带有 set的存取器自动被推断为 readonly。 
 * 这在从代码生成 .d.ts文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。
 */
// let passcode = "secret passcode";

// class Employee {
//   private _fullName!: string; // 这里需要加上 ! , 赋值断言

//   get fullName(): string {
//     return this._fullName;
//   }
//   set fullName(newName: string) {
//     if (passcode && passcode === "secret passcode") {
//       this._fullName = newName;
//     } else {
//       console.log("Error: Unauthorized update of employee!");
//     }
//   }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//   console.log(employee.fullName)
// }

//========================================================================

/**
 * 静态属性
 * 可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。
 *  在这个例子里，我们使用 static定义 origin，
 * 每个实例想要访问这个属性的时候，都要在 origin前面加上类名。
 */
// class Grid {
//   static origin = {
//     x: 0,
//     y: 0
//   };
//   constructor(public scale: number) {}
//   calculateDistanceFromOrigin(point: {x: number; y: number}) {
//     let xDist = (point.x - Grid.origin.x);
//     let yDist = (point.y - Grid.origin.y);
//     return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//   }
// }

// let grid1 = new Grid(1.0)
// let grid2 = new Grid(5.0)

// let res1 = grid1.calculateDistanceFromOrigin({x: 10, y: 10})
// let res2 = grid2.calculateDistanceFromOrigin({x: 10, y: 10})
// console.log("res1 = ", res1)
// console.log("res2 = ", res2)
// console.log("res2 * 5 = ", res2 * 5)

//========================================================================

/**
 * 抽象类 abstract
 * 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。
 * abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。
 * 
 * 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 
 * 子类不能声明自己的方法
 */
// abstract class Animal {
//   abstract makeSound(): void;
//   move(): void {
//     console.log("roaming the earch...");
//   }
// }

// abstract class Department {
//   constructor(public name: string) {}
//   printName(): void {
//     console.log("Department name: " + this.name)
//   }
//   abstract printMeeting(): void; // 必须在派生类中实现
// }
// class AccountingDepartment extends Department {
//   constructor() {
//     super("Accounting and Auditing"); // 在派生类的构造函数中必须调用 super()
//   }
//   printMeeting(): void {
//     console.log("The Accounting Department meets each Monday at 10am.")
//   }
//   generateReports(): void {
//     console.log("Generating accounting reports...");
//   }
// }

// let department: Department; // 允许创建一个对抽象类型的引用
// // department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// // department.generateReports(); // 错误：方法在声明的抽象类中不存在

//========================================================================

/**
 * 高级技巧
 * 构造函数
 */
//  class Greeter {
//    static standardGreeting = "Hello, there";
//    greeting!: string;
//    greet() {
//      if (this.greeting) {
//        return "Hello, " + this.greeting;
//      } else {
//        return Greeter.standardGreeting
//      }
//    }
//  }
//  let greeter1: Greeter;
//  greeter1 = new Greeter();
//  console.log(greeter1.greet());

//  let greeterMaker: typeof Greeter = Greeter
//  greeterMaker.standardGreeting = "Hey there!";

//  let greeter2 = new greeterMaker();
//  console.log(greeter2.greet())

//========================================================================

/**
 * 高级技巧
 * 把类当做接口使用
 */

 class Point {
   x!: number;
   y!: number;
 }
 interface Point3d extends Point {
   z: number;
 }
 let point3d: Point3d = {
   x: 1,
   y: 2,
   z: 3
 }
console.log(point3d)