import { balancePattern } from './balancePatter';
import { ThreeInOne } from './threeinOne';
import { StackMinimum } from './stackMinimum';
import { StackOfPlats } from './stackofPlats';
function demo() {
  // **  balance patter */
  // const data = '{(a+b)*[ab - }}}}}a-d]+ (a+b)}'
  // const balancePatter = new balancePattern(data)
  // let isBalanced = balancePatter.balancePatterCheck(data)
  // console.log("balance parten ---", isBalanced);


  /** Three Stacks Question Calling  */
  // const threeStacks = new ThreeInOne<number>(3);
  // threeStacks.printSize()
  // threeStacks.pop(0)
  // threeStacks.push(0, 1)
  // threeStacks.push(0, 2)
  // threeStacks.push(0, 3)
  // threeStacks.push(0, 4)
  // threeStacks.push(1, 5)
  // threeStacks.push(1, 6)
  // threeStacks.push(1, 7)
  // threeStacks.push(2, 8)
  // threeStacks.push(2, 9)
  // threeStacks.push(2, 10)
  // threeStacks.push(6, 10)
  // let peek = threeStacks.printSize()
  // console.log(" res ==================", peek)
  // console.log("Demo complete");

  /** stack Minimum Calling */
  // const minStack = new StackMinimum()
  // minStack.push(10)
  // minStack.push(10)
  // minStack.push(10)
  // minStack.push(15)
  // minStack.push(8)
  // minStack.push(8)
  // minStack.push(10)
  // minStack.pop()
  // minStack.pop()
  // minStack.pop()
  // minStack.min()
  // console.log(minStack)

  //** Stack Of Plats  */
  const stackOFplats = new StackOfPlats(3)
  stackOFplats.push(10)
  stackOFplats.push(20)
  stackOFplats.push(30)
  stackOFplats.push(40)
  stackOFplats.push(50)
  stackOFplats.push(60)
  stackOFplats.push(70)
  stackOFplats.push(80)
  stackOFplats.push(90)
  stackOFplats.push(100)
  stackOFplats.push(110)
  stackOFplats.push(120)
  // stackOFplats.pop()
  // stackOFplats.pop()
  // stackOFplats.pop()
  // stackOFplats.pop()
  //   stackOFplats.pop()
  //     stackOFplats.pop()
  //       stackOFplats.pop()
  //         stackOFplats.pop()
  //           stackOFplats.pop()
  //             stackOFplats.pop()

  stackOFplats.atStackPop(3)
    stackOFplats.atStackPop(3)
      stackOFplats.atStackPop(3)
  stackOFplats.printStack()
  //  console.log("stackofPlats ",stackOFplats)
}

demo();
