import { Node } from "../node";
import { Stack } from "../../../linear/stack/Stack";
import { BinaryTree } from "../binaryTree";
export class inOrderIterative {
    private stack: Stack<Node<any>> = new Stack<Node<any>>();
    private inOrder: BinaryTree<number> = new BinaryTree<number>(1);
    constructor() {
        this.inOrder.insert(2);
        this.inOrder.insert(3);
        this.inOrder.insert(4);
        this.inOrder.insert(5);
        this.inOrder.insert(6);
        this.inOrder.insert(7);
        // this.inOrder.levelOrderTraverser();
    }


    inOrderIterativeofStack() {
        let currentNode: Node<number> | null = this.inOrder.rootNode();
        while (currentNode !== null || !this.stack.isEmpty()) {
            while (currentNode !== null) {
                this.stack.pushStack(currentNode)
                currentNode = currentNode?.NodeLeft;
            }
            currentNode = this.stack.pop() as Node<number> | null;
            process.stdout.write("-> " + (currentNode?.value as Node<number> | null))
            currentNode = currentNode?.NodeRight || null;
        }

    }

}