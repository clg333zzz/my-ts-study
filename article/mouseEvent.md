# mouseEvent中的button与buttons属性

## `button`属性

描述了当事件发生时，哪个按键被按下或释放。

值 | 含义
-------- | ---
0 | 主按键被按下（通常为左键）或未初始化
1 | 辅助按键被按下 (通常为中键)
2 | 次按键被按下 (通常为右键)

## `buttons`属性

描述了当事件发生时哪些按键被按下。

如果同时被按下，就是对应值的和。

位域值 | 含义
-------- | ---
0 | 无按键被按下
1 | 主按键被按下 (通常为左键)
2 | 次按键被按下 (通常为右键)
4 | 辅助按键被按下 (通常为中键)
3 | 左键+右键同时按下
5 | 左键+中键同时按下
6 | 右键+中键同时按下

## 测试

这里使用的`TypeScript`来编写。

```ts
 // 枚举类型，描述了当事件发生时，哪个按键被按下或释放
enum button {"鼠标左键","鼠标中键","鼠标右键"};

// 枚举类型，描述了当事件发生时哪些按键被按下
enum buttons {
    "无按键被按下",
    "鼠标左键",
    "鼠标右键",
    "鼠标左键与右键同时按下" = 3,
    "鼠标中键" = 4,
    "鼠标左键与中键同时按下" = 5,
    "鼠标右键与中键同时按下" = 6
};

window.onmousedown = function(mouseEvent: any) {
    let buttonStr: string = button[mouseEvent.button];
    let buttonsStr: string = buttons[mouseEvent.buttons];
    let log = `${mouseEvent.type}|button: ${buttonStr}|buttons: ${buttonsStr}`;
    console.log(log);
}

// mousedown|button: 鼠标左键|buttons: 鼠标左键
// mousedown|button: 鼠标右键|buttons: 鼠标右键
// mousedown|button: 鼠标中键|buttons: 鼠标中键
// mousedown|button: 鼠标中键|buttons: 鼠标中键
// mousedown|button: 鼠标左键|buttons: 鼠标左键与中键同时按下
// mousedown|button: 鼠标右键|buttons: 鼠标右键
// mousedown|button: 鼠标中键|buttons: 鼠标右键与中键同时按下
// mousedown|button: 鼠标左键|buttons: 鼠标左键
// mousedown|button: 鼠标右键|buttons: 鼠标左键与右键同时按下
```