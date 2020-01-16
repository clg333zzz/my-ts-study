/**
 * Type Inference 类型推论
 */

/**
 * 基础
 * Typescript里，在没有明确指出类型的地方，类型推论会帮助提供类型。
 */

// let x7 = 3; // 变量 x7 被推断为数字

/**
 * 最佳通用类型
 * 如果没有找到最佳通用类型的话，类型推断的结果为联合数组类型
 */
// let zoo = [new Rhino(), new Elephant(), new Snake()]
// 这里，我们想让zoo被推断为Animal[]类型，但是这个数组里没有对象是Animal类型的，因此不能推断出这个结果。
// 为了更正，当候选类型不能使用的时候我们需要明确的指出类型：
// let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()]
// 如果没有找到最佳通用类型的话，类型推断的结果为联合数组类型。
// (Rhino | Elephant | Snake)[]


/**
 * 上下文类型
 * TypeScript类型推论也可能按照相反的方向进行。 这被叫做“按上下文归类”。
 * 按上下文归类会发生在表达式的类型与所处的位置相关时
 */

 // 描述了当事件发生时，哪个按键被按下或释放
enum button {"鼠标左键","鼠标中键","鼠标右键"};

// 描述了当事件发生时哪些按键被按下
enum buttons {"无按键被按下", "鼠标左键","鼠标右键", "鼠标左键与右键同时按下" = 3, "鼠标中键" = 4, "鼠标左键与中键同时按下" = 5, "鼠标右键与中键同时按下" = 6};

// window.addEventListener("keydown", function(event) {
//     console.log(event);
// })
// window.oncontextmenu = function(event: any) {
//     console.log(event);
// }
window.onmousedown = function(mouseEvent: any) {
    let buttonStr: string = button[mouseEvent.button];
    let buttonsStr: string = buttons[mouseEvent.buttons];
    let log = `${mouseEvent.type}|button: ${buttonStr}|buttons: ${buttonsStr}`;
    // console.log(mouseEvent);
    console.log(log);
}

