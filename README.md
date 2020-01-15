# typescript学习

## 搭建webpack环境

### 安装插件

- typescript
- webpack
- webpack-cli
- webpack-dev-server
- webpack-merge
- html-webpack-plugin
- clean-webpack-plugin
- ts-loader

安装命令，下面示例webpack常用的基本插件：

```bash
npm install -D webpack webpack-cli webpack-dev-server webpack-merge
```

`typescript`包全局也安装一次，这样`tsc`命令在任何地方都可以使用。

```bash
npm install -g typescript
```

其余的包自行安装

### 添加`tsconfig.json`配置文件

```bash
tsc --init
```

### 配置命令

添加`start`、`build`两个命令
```json
"scripts": {
  "start": "webpack-dev-server --mode=development --config ./build/webpack.config.js",
  "build": "webpack --mode=production --config ./build/webpack.config.js",
}
```

