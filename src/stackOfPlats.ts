/** stack of plats
 * given limit of stack 
 * step 1
 * create an arry of stack whoes limit is given stack
 * create linkiked list of stack 
 * create pus method 
 *   check array of stack limit is <= gien of limt so pus value for stack 
 *   else create new linked list and add the pus
 * create pop
 *   check head and remove top
 * create popat
 *   given stak postion 
 *   find stack postion and remove top
 */


import { Stack } from "./Stack";

export class StackOfPlats<T> {
    private stack: Stack<Stack<number>> = new Stack()
    private StackCapacity: number = 0;
    private values: Stack<number> = new Stack()
    private size: number = 0;


    constructor(stackCapacity: number) {
        this.StackCapacity = stackCapacity
    }


    getStackHeighit() {
        return this.stack.height
    }
    push(value: number) {
        if (this.getStackHeighit() === 0) {
            this.values.pushStack(value)
            this.stack.pushStack(this.values)
        } else {
            if (this.values.height < this.StackCapacity) {
                this.values.pushStack(value)
            } else {
                let newValues = new Stack()
                this.values = newValues
                this.values.pushStack(value)
                this.stack.pushStack(this.values)
            }
        }
    }

    pop() {
        if (this.getStackHeighit() !== 0) {
            this.values.pop()
            if (this.values.height === 0) {
                this.stack.pop()
                this.values = this.stack.top?.value
            }

        }
    }

    atStackPop(stackNumber: number) {
        if (this.stack.height > stackNumber) {
            let current = this.stack.top
            for (let i = 0; i <= stackNumber; i++) {
                if (i === stackNumber) {
                    if(current?.next === null){
                        this.values.pop()
                    }
                      console.log("stack curent", current)
                }
              current = current?.next ?? null
            }

        }
    }

    printStack() {
        this.stack.printNextedStack()
    }
}

