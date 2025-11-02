import { LinkedList } from './linkedlist';
import { Stack } from './Stack';
import { balancePattern } from './balancePatter';
function demo() {
  const data = '{(a+b)*[ab - }}}}}a-d]+ (a+b)}'
  const balancePatter = new balancePattern(data)
  let isBalanced = balancePatter.balancePatterCheck(data)
  console.log("balance parten ---", isBalanced);
  // console.log("Demo complete");
}

demo();
