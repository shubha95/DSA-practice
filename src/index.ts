import { LinkedList } from './linkedlist';

function demo() {
  const list = new LinkedList<number>();
  console.log('LinkedList instance created:', list.createLinkedList());
//   list.push(10);
//   list.push(20);
//   list.insertAt(1, 15);

//   console.log('List contents:', list.toArray());
//   console.log('Removed at 1:', list.removeAt(1));
//   console.log('After remove:', list.toArray());
}

demo();
