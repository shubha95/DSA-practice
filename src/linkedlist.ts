import { Node } from './node';

export class LinkedList<T> {
  public head: Node<T> | null = null;
  public tail: Node<T> | null = null;
  public size: number = 0;

  createLinkedList(): LinkedList<T> {
    this.head = null;
    this.tail = null;
    this.size = 0;
    return this;
  }

  insert(value: number): LinkedList<T> {
    const tempNode = new Node<T>(value);
    if (this.head === null) {
      this.head = this.tail = tempNode;
    } else {
      if (this.tail) {
        this.tail.next = tempNode;
        this.tail = tempNode;
      }
    }
    this.size++
    return this;
  }

  insertAtHead(value: number): LinkedList<T> {
    const tempNode = new Node<T>(value);
    if (this.head === null) {
      this.head = this.tail = tempNode;
    } else {
       tempNode.next = this.head
       this.head = tempNode
    }
    return this;
  }

  removeAtHead(){
    let tempHead = this.head?.value
    if(this.head === null){
      console.log('List is Empaty')
    }else{
      this.head = this.head.next;
      this.size--
    }
    return tempHead
  }


  travesLinkedList(): LinkedList<T> {
    let current = this.head;
    if (!current) {
      console.log('LinkedList is empty');
      return this;
    }
    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }
    console.log('');
    return this;
  }

  insertlocation(value: number, index: number): LinkedList<T> {
    let tempNode = new Node<T>(value)
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (i === index) {

      }
    }
    return this
  }

  deleteLinkedList(): LinkedList<T> {
    return this
  }
}
