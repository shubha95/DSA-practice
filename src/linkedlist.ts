import { Node } from './node';

export class LinkedList<T> {
  private head: Node<T> | null = null; 
  private tail: Node<T> | null = null;
  private size: number = 0;

  createLinkedList(): LinkedList<T> {
    this.head = null;
    this.tail = null;
    this.size = 0;
    return this;
  }
 
insertLinkedList(value: T): LinkedList<T> {
  const tempNode = new Node<T>(value);
  if(this.head === null){
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
 

travesLinkedList(): LinkedList<T> {
  let current = this.head;
  if (!current) {
    console.log('LinkedList is empty');
    return this;
  }
  while (current) {
    process.stdout.write(`${current.value} ->`);
    current = current.next;
  }
  console.log('');
  return this;
}
}
