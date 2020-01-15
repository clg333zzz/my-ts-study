//========================================================================
/**
 * 函数类型
 */

// TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。
function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function(x: number, y: number):number {
  return x + y
}

let res1 = add(3, 4);
console.log("res1 = ", res1);

//========================================================================
/**
 * 完整的函数类型
 */
let myAdd2: (baseValue: number, increment: number) => number = 
  function(x: number, y: number): number {
    return x + y
  }
let res2 = myAdd2(5, 7);
console.log("res2 = ", res2)

/**
 * 可以在参数名旁使用 ?实现可选参数的功能
 * 可选参数必须跟在必须参数后面
 */
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}

/**
 * 可以为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined时。 它们叫做有默认初始化值的参数。
 */
function buildlName2(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

/**
 * 与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 
 * 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。
 */
function buildlName3(firstName = "will", lastName: string) {
  return firstName + " " + lastName;
}
let bn3_a = buildlName3(undefined, "Bob");
console.log("bn3_a = ", bn3_a);

/**
 * 剩余参数
 */
function buildName4(firstName: string, ...restName: string[]) {
  return firstName + " " + restName.join(" ");
}
let bn4_a = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log("bn4_a = ", bn4_a);

/**
 * this和箭头函数
 */
// let deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function() {
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return {
//         suit: this.suits[pickedSuit],
//         card: pickedCard % 13
//       }
//     }
//   }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log("card: ", pickedCard.card, " of ", pickedCard.suit);

/**
 * 建议提供一个显式的this参数
 * this 参数是个假参数，它出现在参数列表的最前面。
 */
// interface Card {
//   suit: string;
//   card: number;
// }
// interface Deck {
//   suits: string[];
//   cards: number[];
//   createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//   suits:  ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function(this: Deck) {
//     return () => {
//       let pickerCard = Math.floor(Math.random() * 52);
//       let pickerSuit = Math.floor(pickerCard / 13);
//       return {
//         suit: this.suits[pickerSuit],
//         card: pickerCard % 13
//       }
//     }
//   }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log("card: ", pickedCard.card, " of ", pickedCard.suit);

/**
 * 回调函数里的this参数
 * 当回调函数被调用时，它会被当成一个普通函数调用，this将为undefined
 * 
 */


/**
 * 重载
 * 为了让编译器能够选择正确的检查类型，它与JavaScript里的处理流程相似。 它查找重载列表，尝试使用第一个重载定义。
 *  如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。
 */
// let suits = ["hearts", "spades", "clubs", "diamonds"]
// function pickCard(x: {suit: string; card: number}[]): number
// function pickCard(x: number): {suit: string; card: number}
// function pickCard(x: any): any {
//   if (x.length) {
//     let pickedCard = Math.floor(Math.random() * x.length);
//     return pickedCard;
//   } else if(typeof x == "number") {
//     let pickedSuit = Math.floor(x / 13)
//     return {
//       suit: suits[pickedSuit],
//       card: x % 13
//     }
//   }
// }
// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);