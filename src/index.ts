import { balancePattern } from './balancePatter';
import { ThreeInOne } from './threeinOne';
function demo() {
  // const data = '{(a+b)*[ab - }}}}}a-d]+ (a+b)}'
  // const balancePatter = new balancePattern(data)
  // let isBalanced = balancePatter.balancePatterCheck(data)
  // console.log("balance parten ---", isBalanced);

  const threeStacks = new ThreeInOne<number>(3);
    threeStacks.printSize()
    threeStacks.pop(0)
  threeStacks.push(0, 1)
  threeStacks.push(0, 2)
  threeStacks.push(0, 3)
  threeStacks.push(0, 4)
  threeStacks.push(1, 5)
  threeStacks.push(1, 6)
  threeStacks.push(1, 7)
  threeStacks.push(2, 8)
  threeStacks.push(2, 9)
  threeStacks.push(2, 10)
    threeStacks.push(6, 10)
  let peek = threeStacks.printSize()
  // console.log(" res ==================", peek)
  // console.log("Demo complete");
}

demo();
