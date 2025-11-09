import { Stack } from "../stack/Stack";

export class QueueAtStack<T> {
    private queue: Stack<T> = new Stack()
    private tepQueue: Stack<T> = new Stack()

    // isEmpty method
    isEmpty() {
        if (this.tepQueue.height === 0) {
            console.log("Queue is empty");
            return true
        }
        return false
    }

    enqueue(value: number) {
        this.tepQueue.pushStack(value)
    }
    reversQueue() {
        if(this.isEmpty()){
            return;
        }
        let current = this.tepQueue.top
        while (current) {
            this.queue.pushStack(current.value)
            current = current.next
        }
    }

    dequeue(){
        
        if(this.queue.top === null){
          this.reversQueue()
        }
        this.queue.pop()
        this.queue.printStack()
        // console.log(this.queue)
    }

} 