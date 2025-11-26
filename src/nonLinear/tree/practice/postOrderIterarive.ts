import { Node } from "../node";
import { Stack } from "../../../linear/stack/Stack";
import { BinaryTree } from "../binaryTree";


export class postOrderIterarive {
    private stack: Stack<Node<any>> = new Stack<Node<any>>();
    private preOrder: BinaryTree<number> = new BinaryTree<number>(1);
    constructor() {
        this.preOrder.insert(2);
        this.preOrder.insert(3);
        this.preOrder.insert(4);
        this.preOrder.insert(5);
        this.preOrder.insert(6);
        this.preOrder.insert(7);
        // this.preOrder.levelOrderTraverser();
    }


    postOrderIterativeofStack() {
        let currentNode: Node<number> | null = this.preOrder.rootNode();
        while(currentNode !== null || !this.stack.isEmpty()) {
            while (currentNode !== null) {
                this.stack.pushStack(currentNode)
                currentNode = currentNode?.NodeLeft as Node<number> | null;
            }
              currentNode = this.stack.pop(); 
              process.stdout.write("-> " + (currentNode?.value as Node<number> | null))
              currentNode = currentNode?.NodeRight || null; 
        }
    }
}