export class Node<T> {
  value: number;
  next: Node<T> | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}
