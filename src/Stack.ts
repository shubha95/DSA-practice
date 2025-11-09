import { Node } from './node';
import { LinkedList } from './linkedlist';
export class Stack<T> {
    public top: Node<T> | null = null;
    public height: number = 0;
    private linkedList: LinkedList<T> = new LinkedList<T>();

    constructor() {
        this.top = null
        this.height = 0
        this.linkedList = new LinkedList();
    }

    //   constructor(data:number){
    //     this.top = new Node<T>(data)
    //     this.height = this.height+1;
    //     this.linkedList.insertAtHead(data)
    //   }


    // push new value onto the stack
    pushStack(value: any) {
        this.linkedList.insertAtHead(value)
        this.top = this.linkedList.head
        this.height = this.height + 1;
    }

    // print the stack
    printStack(): Stack<T> {
        this.linkedList.travesLinkedList()
        return this;
    }


    // peek the top value of the stack
    peek() {
        console.log('top stack ', this.top ? this.top?.value : null)
        return this.top ? this.top?.value : null
    }

    //**
    // stck effected 
    // update height 
    // update top
    // linklist effected 
    // hed update
    // size update 


    // remove the top value from the stack
    pop() {
        let removedValue = this.linkedList.removeAtHead()
        this.top = this.linkedList.head
        this.height--
        return removedValue;
    }

    // check if stack is empty
    isEmpty() {
        return this.height === 0
    }
}