import { Node } from './node';
export class LinkedList<T> {
  public head: Node<T> | null = null;
  public tail: Node<T> | null = null;
  public size: number = 0;

  // create a new linked list
  createLinkedList(): LinkedList<T> {
    this.head = null;
    this.tail = null;
    this.size = 0;
    return this;
  }

  // insert new value at the end of linked list
  insert(value: any): LinkedList<T> {
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


  // insert new value at the head of linked list
  insertAtHead(value: number): LinkedList<T> {
    const tempNode = new Node<T>(value);
    if (this.head === null) {
      this.head = this.tail = tempNode;
    } else {
      tempNode.next = this.head
      this.head = tempNode
    }
    this.size++
    return this;
  }

  insertAtTail(value: any): LinkedList<T> {
    const tempNode = new Node<T>(value)
    if (this.tail === null) {
      this.head = this.tail = tempNode
    } else {
      this.tail.next = tempNode
      this.tail = tempNode
    }
    this.size++

    // console.log("Inserted at tail ", value);
    return this
  }




  // remove value at head of linked list
  removeAtHead() {
    let tempHead = this.head?.value
    if (this.head === null) {
      console.log('List is Empaty')
    } else {
      this.head = this.head.next;
      this.size--
    }
    return tempHead
  }

  // traverse the linked list
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


  // insert new value at specific location in linked list
  insertlocation(value: number, index: number): LinkedList<T> {
    console.log("Inserting at location ", index, value);
    let tempNode = new Node<T>(value)
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (i === index) {
        console.log("Inserting at location ", index);
      }
    }
    return this
  }


  // delete the linked list
  deleteLinkedList(): LinkedList<T> {
    this.head = null
    this.tail = null
    this.size = 0
    return this
  }
    insertLinkedList(value:number): LinkedList<T> {
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

}
