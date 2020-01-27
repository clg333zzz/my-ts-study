
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