import { Queue } from './queue';
function demo() {
  const queue = new Queue<any>();
  queue.queueLinkedList();
  // queue.isEmpty();
  queue.peek();
  queue.enQueue(10);
  queue.peek();
  queue.enQueue(20);
  queue.peek();
  queue.enQueue(30);
  queue.peek();
  queue.enQueue(40);
  queue.peek();
  queue.deQueue();
  queue.deQueue();
  queue.deQueue();
   queue.peek();
  queue.deleteQueue();
  queue.peek();

}

demo();
