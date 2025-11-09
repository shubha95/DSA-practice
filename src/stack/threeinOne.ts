export class ThreeInOne<T> {
     private numberOfStacks: number = 3;
     private stackCapacity: number = 0;
     private values: (T | undefined)[] = [];
     private sizes: number[] = [];

     constructor(stackSize: number) {
          this.stackCapacity = stackSize;
          const total = this.numberOfStacks * this.stackCapacity;
          this.values = new Array<T | undefined>(total);
          for (let i = 0; i < total; i++) {
               this.values[i] = undefined;
          }
          this.sizes = new Array<number>(this.numberOfStacks);
          for (let i = 0; i < this.numberOfStacks; i++) {
               this.sizes[i] = 0;
          }
     }

     private ensureValidStack(stackNum: number) {
          if (stackNum < 0 || stackNum >= this.numberOfStacks) {
               console.log(`Invalid stack number ${stackNum}`);
          }
     }

     private isFull(stackNum: number): boolean {
          this.ensureValidStack(stackNum);
          return this.sizes[stackNum] === this.stackCapacity;
     }

     isEmpty(stackNum: number): boolean {
          this.ensureValidStack(stackNum);
          return this.sizes[stackNum] === 0;
     }

     private indexOfTop(stackNum: number): number {
          const offset = stackNum * this.stackCapacity;
          const size = this.sizes[stackNum];
          return offset + size - 1;
     }

     push(stackNum: number, value: T): boolean {
          this.ensureValidStack(stackNum);
          if (this.isFull(stackNum)) {
               console.warn('this stack is full');
               return false;
          }
          const index = stackNum * this.stackCapacity + this.sizes[stackNum];
          this.values[index] = value;
          this.sizes[stackNum]++;
          return true;
     }

     pop(stackNum: number): T | undefined {
          this.ensureValidStack(stackNum);
          if (this.isEmpty(stackNum)) {
               console.warn('this stack is empty');
               return undefined;
          }
          const topIndex = this.indexOfTop(stackNum);
          const value = this.values[topIndex];
          this.values[topIndex] = undefined;
          this.sizes[stackNum]--;
          return value;
     }

     peek(stackNum: number): T | undefined {
          this.ensureValidStack(stackNum);
          if (this.isEmpty(stackNum)) {
               console.warn('this stack is empty');
               return undefined;
          }
          return this.values[this.indexOfTop(stackNum)];
     }

     printSize() {
          console.log(this.values);
     }
     //**
     //  given array and number stack 
     //  create stack 
     //  given stack max length
     //  current index of stack size */
}