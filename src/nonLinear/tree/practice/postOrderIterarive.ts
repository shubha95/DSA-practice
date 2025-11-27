import { Node } from "../node";
import { Stack } from "../../../linear/stack/Stack";
import { BinaryTree } from "../binaryTree";


export class postOrderIterarive {
    private stack: Stack<Node<any>> = new Stack<Node<any>>();
    private stack1: Stack<any> = new Stack<any>();
    private tree: BinaryTree<number> = new BinaryTree<number>(1);
    constructor() {
        this.tree.insert(2);
        this.tree.insert(3);
        this.tree.insert(4);
        this.tree.insert(5);
        this.tree.insert(6);
        this.tree.insert(7);
        // this.tree.levelOrderTraverser();
    }


    postOrderIterativeofStack() {
        this.stack.pushStack(this.tree.rootNode())
        while(!this.stack.isEmpty()){
            let currentNode: Node<number> | null = this.stack.pop();
            this.stack1.pushStack(currentNode)
            if(currentNode?.NodeLeft != null){
               this.stack.pushStack(currentNode?.NodeLeft)
            }
            if(currentNode?.NodeRight != null){
                this.stack.pushStack(currentNode.NodeRight)
            }

        }
        while(!this.stack1.isEmpty()){
            let currentNode: Node<Number> | null = this.stack1.pop()
            process.stdout.write("-> " + (currentNode?.value as Node<number> | null))
        }
    }
}