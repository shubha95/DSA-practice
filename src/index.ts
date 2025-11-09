import { LinkedList } from './node/linkedlist';
import { RemoveDublicate } from './node/removeDublicate';

function demo() {
  const list = new LinkedList<number>();
  const remover = new RemoveDublicate<number>();
  list.createLinkedList()
  list.insertLinkedList(1)
  list.insertLinkedList(2)
  list.insertLinkedList(1)
  list.insertLinkedList(3)
  list.insertLinkedList(5)
  list.insertLinkedList(2)
  list.insertLinkedList(4)
  list.insertLinkedList(1)
  list.travesLinkedList();
  remover.removeDublicates(list);
    list.travesLinkedList();
  // console.log("Demo complete");
}

demo();
