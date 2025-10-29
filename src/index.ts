import { LinkedList } from './linkedlist';

function demo() {
  const list = new LinkedList<number>();
  list.createLinkedList()
  list.insertLinkedList(10)
  list.insertLinkedList(20)
  list.travesLinkedList();
  console.log("Demo complete");
}

demo();
