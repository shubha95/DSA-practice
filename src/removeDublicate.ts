import { LinkedList } from "./linkedlist"
import { Node } from "./node";
export class RemoveDublicate<T> {
    removeDublicates(linkedlist: LinkedList<T>): LinkedList<T> {
        let current: Node<T> | null = linkedlist.head;
        
        while (current) {
            const updatedList = this.removeDublicatesItem(current.value, current.next, linkedlist);      // --- O(n)
            current = current.next;
        }
        return linkedlist;
    }



/**
 *  create a method removeDublicate Item
 *  given value value, startingNode, nodeList
 *  if value === startingNode.next.value then remove current.next node
 *  also update the links accordingly
 *  return updated linked list
 */

    removeDublicatesItem(value: number, startingNode: Node<T> | null, linkedlist: LinkedList<T>): LinkedList<T> {
        let currentForDublicateItem = startingNode;   // --- O(1)
        console.log("Removing dublicate for value ", value);
        while (currentForDublicateItem) {                  // --- O(n)
            console.log("Checking for dublicate item for value ", currentForDublicateItem?.value);

            if (currentForDublicateItem?.next?.value === value) {
                console.log("Dublicate found for value ", value);
                if (linkedlist.tail === currentForDublicateItem?.next?.next) {          // --- O(1)
                    linkedlist.tail = currentForDublicateItem.next;                     // --- O(1)
                }
                currentForDublicateItem.next = currentForDublicateItem.next.next;
                console.log('Updated list: ');
                linkedlist.size--;
            }
            currentForDublicateItem = currentForDublicateItem.next;
        }
        currentForDublicateItem = startingNode?.next ?? null;
        return linkedlist;
    }
}



