
# TypeScript

## 初始化

初始化tscconfig.json文件

```bash
tsc --init
```

选项

```json
{
  "compilerOptions": {
    "outDir": "dist/js", // 最终编译后的文件存放的地方
    "rootDir": "basicStudy", // 存放原始ts文件的地方
  }
}
```

这里我们原始文件存放在`basicStudy`文件夹，如果我们用命令`tsc`运行后，那么编译后的文件将会存放在文件夹`dist/js`。

监听文件的修改：

```bash
tsc --watch
```

文件有改动会直接编译。

## 基础

### 1.基本类型

Boolean、Number、String、Array、Tuple、Enum、Any、Void、Null & Undefined、Never、Object。

数组：`type[]`、`Array<type>`
只读数组：`ReadonlyArray<type>`

类型断言两种模式：`<type>value`、`(value as type)`。

### 3.接口

接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

可选属性：`value?: string`，在对应字段后面加上一个`?`。

只读属性：`readonly value: number`，在对应字段前面加上`readonly`。

额外的属性检查：`[propName: string]: any`

如果没有定义额外的属性检查，传参数时，只能少于或等于接口已定义的参数个数，而且参数字段名也不能错，如果一定要传入自己的参数字段，
那就一定要把额外的属性检查`[propName: string]: any`加入到接口定义里面。

定义函数类型：定义一个参数列表，以及返回值类型。

可索引的类型：描述对象索引类型，以及相应的索引返回类型。

类静态部分与实例部分的区别

继承接口：支持同持继承多个。`interface Square extends Shape, PenStroke`

混合类型：一个对象可以同时具有上面提到的多种类型，一个例子就是，一个对象可以同时做为函数和对象使用，并带有额外的属性。

接口继承类：接口可以继承类的成员，但不包括实现。可以继承到类的private和protected成员。
当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。

### 4.类

类成员默认是`public`。

`private`成员只能在声明它的类中访问。

当我们比较带有`private`与`protected`成员类型的时候，如果其中一个类型包含一个`private`成员，
那么只有当另外一个类型中也存在这样一个`private`成员，并且它们都是来自同一处声明时，我们才认为这两个类是兼容的。

也就是说，即使我们定义两个类，都有一个`private`同名属性，其他属性名与方法名都一样，那这两个类也是不兼容的。
如果都是public那就没问题。

`protected`成员在派生类中仍可以访问，在外面不能访问。

构造函数也可以被标记成`protected`。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
