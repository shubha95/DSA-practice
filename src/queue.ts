import { Node } from "./node";
import { LinkedList } from "./linkedlist";
export class Queue<T> {
    private queueList: LinkedList<T> = new LinkedList<T>();
    constructor() {
        this.queueList = new LinkedList<T>();
    }

  // display the queue linked list
    queueLinkedList() {
        let currentList = this.queueList
        console.log('Queue Linked List: ', currentList);
    }

 // isEmpty method
    isEmpty() {
        if (this.queueList.head === null) {
            console.log("Queue is empty");
            return true
        }
        return false
    }


    // enQueue method
    enQueue(value: number) {
        let isEmpty = this.isEmpty();
        if (isEmpty) {
            this.queueList.insert(value);
        } else {
            this.queueList.insertAtTail(value);
        }
    }

// deQueue method
    deQueue() {
        let isEmpty = this.isEmpty();
        if (isEmpty) {
            return "Queue is empty";
        } else {
            let removedValue = this.queueList.removeAtHead();
            console.log("Dequeued value: ", removedValue);
            return removedValue;
        }
    }


    // peek method
    peek(){
        if (this.isEmpty()) {
            return "Queue is empty";
        } else {
            console.log("peek value: ", this.queueList.head?.value);
            return this.queueList.head?.value;
        }
    }


    // deleteQueue method
    deleteQueue(){
        this.queueList.head = null;
        this.queueList.tail = null;
        console.log("Queue deleted");
    }
}