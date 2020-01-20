import {a, b, c} from './a'
console.log(a, b, c)

import { P12 } from './a'
let p12: P12 = {
  name: 'chenlg',
  age: 30
}
console.log(p12)

// 导出所有成员
import * as All from './a'
