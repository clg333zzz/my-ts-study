const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CheckerPlugin } = require("awesome-typescript-loader")

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "app.js"
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    // loader: 'ts-loader',
                    loader: 'awesome-typescript-loader',
                    options: {
                        transpileOnly: true // 打包时仅编译，而不进行类型校验，这样打包速度会更快
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/tpl/index.html"
        }),
        // CheckerPlugin会进行类型检测
        new CheckerPlugin()
    ]
}