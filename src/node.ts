export class Node<T> {
  value: any;
  next: Node<T> | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}
