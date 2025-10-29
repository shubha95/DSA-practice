import { Node } from './node';

export class LinkedList<T> {
  head: Node<T> | null = null;
  size = 0;
  tail: Node<T> | null = null;

  createLinkedList(): LinkedList<T>{
    return new LinkedList<T>();
  }

}
