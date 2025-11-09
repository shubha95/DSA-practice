import { Queue } from './queue';
import { QueueAtStack } from './queueAtStack';
function queue() {
  const queue = new Queue<any>();
  const queueAtStack = new QueueAtStack<any>()
  // queue.queueLinkedList();
  // // queue.isEmpty();
  // queue.peek();
  // queue.enQueue(10);
  // queue.peek();
  // queue.enQueue(20);
  // queue.peek();
  // queue.enQueue(30);
  // queue.peek();
  // queue.enQueue(40);
  // queue.peek();
  // queue.deQueue();
  // queue.deQueue();
  // queue.deQueue();
  //  queue.peek();
  // queue.deleteQueue();
  // queue.peek();

  //** queue at Stack */
  queueAtStack.enqueue(10)
  queueAtStack.enqueue(20)
  queueAtStack.enqueue(30)
  // queueAtStack.reversQueue()
  queueAtStack.dequeue()
    queueAtStack.dequeue()
      queueAtStack.dequeue()
        queueAtStack.dequeue()

}

export default queue();
