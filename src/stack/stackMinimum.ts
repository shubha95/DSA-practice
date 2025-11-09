/** find give minmum
 * calsse inter same value 2 time 
 * Algoritham 
 * crate two stack 
 * minStack and stak
 */
import { Stack } from "./Stack"
export class StackMinimum<T> {
    private minstack: Stack<T> = new Stack<T>()
    private stack: Stack<T> = new Stack<T>()


    push(value: T) {
        this.stack.pushStack(value)

        if (this.minstack.height == 0 || value < this.minstack.peek()) {
            this.minstack.pushStack(value)
        } else {
            this.minstack.pushStack(this.minstack.peek());
        }
        // if (this.minstack.height === 0) {
        //     this.minstack.pushStack(value)
        // } else if (this.minstack.top?.value > value) {
        //     this.minstack.pushStack(value)
        // }
        // 


        this.stack.printStack()
        this.minstack.printStack()
    }

    pop() {
        if (this.stack.height === 0) {
            console.log(" stack Empty")
        } else {
            let remove = this.stack.pop()
            let removeMinStack = this.minstack.pop()
            console.log("remove stack ====", remove)
            console.log("remove removeMinStack ====", removeMinStack)

            // if (remove === this.minstack.top?.value) {
            //     if (this.minstack.top?.value !== this.stack.top?.next?.value) {
            //         let removeMinStack = this.minstack.pop()
            //         console.log("remove for min Stack", removeMinStack)

            //     }
            // }
            this.stack.printStack()
            this.minstack.printStack()
            // this.stack.peek()
        }
    }

    min() {
        this.minstack.peek()
    }
}