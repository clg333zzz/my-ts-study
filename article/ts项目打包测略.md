
# `typescript`项目打包策略

## `ts-loader`与`fork-ts-checker-webpack-plugin`

1. `ts-loader`添加配置项`transpileOnly: true`

打包时仅编译，而不进行类型校验，这样打包速度会更快

```js
// ...
rules: [
    // ...
    {
        test: /\.tsx?$/i,
        use: [{
            loader: 'ts-loader',
            options: {
                transpileOnly: true // 打包时仅编译，而不进行类型校验，这样打包速度会更快
            }
        }],
        exclude: /node_modules/
    }
    // ...
]
// ...
```

此时我们如果想进行类型检测，那么就要在添加一个插件。

2. `fork-ts-checker-webpack-plugin`插件

```bash
npm install --save-dev fork-ts-checker-webpack-plugin
```

安装好后，再在`webpack.base.config.js`文件中引用此插件。

```js
// ...
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

// ...
plugins: [
    // ...
    new ForkTsCheckerWebpackPlugin()
    // ...
]
```

## `awesome-typescript-loader`

我们也可以用另外一种加载器`awesome-typescript-loader`

```js
// ...
rules: [
    // ...
    {
        test: /\.tsx?$/i,
        use: [{
            loader: 'awesome-typescript',
            options: {
                transpileOnly: true // 打包时仅编译，而不进行类型校验，这样打包速度会更快
            }
        }],
        exclude: /node_modules/
    }
    // ...
]
// ...
```
这个加载器有个自带的类型检测工具：`CheckerPlugin`。

```js
// ...
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

// ...
plugins: [
    // ...
    new CheckerPlugin()
    // ...
]
```

这种压包方式会有些错误无法检查出来，直接构建成功了，也不算完美。

上面的两种方式，还是建议使用`ts-loader`配合`fork-ts-checker-webpack-plugin`来实现更好一些。

下面我们会介绍使用babel来实现的方法。

## `使用babel7`