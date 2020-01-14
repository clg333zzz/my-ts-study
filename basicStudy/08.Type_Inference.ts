/**
 * Type Inference 类型推论
 */

/**
 * 基础
 * Typescript里，在没有明确指出类型的地方，类型推论会帮助提供类型。
 */

let x7 = 3; // 变量 x7 被推断为数字

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
