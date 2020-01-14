
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
