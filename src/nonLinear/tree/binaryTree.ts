import { Node } from "./node"
import { Queue } from "../../linear/queue/queue"
import { LinkedList } from "../../linear/linkedlist/linkedlist"

export class BinaryTree<T> {
    private root: Node<T> | null = null

    constructor(value: Number) {
        this.root = new Node(value)
    }

    traverse() {
        this.preOrderTraverse(this.root)
    }

    /**
     * this is pree order travers
     * root -> left -> right
     * travers using recursion
    */
    preOrderTraverse(node: Node<T> | null) {
        // console.log("Root Node ->", node)
        if (node === null) {
            return null;
        }
        console.log(" pre Order ->", node.value)
        this.preOrderTraverse(node.NodeLeft)
        this.preOrderTraverse(node.NodeRight)

    }

    postOrderTraverser(node: Node<T> | null) {
        if (node === null) {
            return null;
        }
        this.postOrderTraverser(node.NodeLeft)
        this.postOrderTraverser(node.NodeRight)
        console.log(" post Order ->", node.value)
    }


    inOrderTraverser(node: Node<T> | null) {
        if (node === null) {
            return null;
        }
        this.inOrderTraverser(node.NodeLeft)
        console.log("pri Order ->", node.value)
    }


    levelOrderTraverser() {
        if (this.root === null) return;
        const queue = new Queue<Node<T>>()
        let lastNode = null;
        // console.log(" -> root ",this.root)
        queue.enQueue(this.root)
        while (!queue.isEmpty()) {
            // queue.peek()
            // console.log(" ->. curent Queue",queue.peek())
            const presentNode = queue.deQueue()
            lastNode = presentNode
            process.stdout.write(`${presentNode.value} -> `);
            if (presentNode.NodeLeft != null) {
                queue.enQueue(presentNode.NodeLeft)
            }
            if (presentNode.NodeRight != null) {
                queue.enQueue(presentNode.NodeRight)
            }
        }
        console.log('')
        return lastNode
    }

    insert(value: number) {
        if (this.root === null) return;
        const queue = new Queue<Node<T>>()
        queue.enQueue(this.root)
        //console.log("queue -> ", queue)
        while (!queue.isEmpty()) {
            const presentNode = queue.deQueue()
            // console.log("preste Quew ->", presentNode)
            if (presentNode.NodeLeft == null) {
                const newNode = new Node(value)
                presentNode.NodeLeft = newNode
                break;
            } else {
                queue.enQueue(presentNode.NodeLeft)
            }
            if (presentNode.NodeRight == null) {
                const newNodeRight = new Node(value)
                presentNode.NodeRight = newNodeRight
                break;
            } else {
                queue.enQueue(presentNode.NodeRight)
            }

        }
    }



    //** remove Tell 
    // create last 
    // travers at last
    // and remove left and last  
    // */

    delete(value: number) {
        if (this.root === null) return;
        const queue = new Queue<Node<T>>()
        queue.enQueue(this.root)
        let depestrightMostNode = null;
        let presentNode = null;
        let nodeToDelete = null;
        /**
         *  traverse to finde 
         *  node to be deleted
         *  deepest righit most node
         */
        while (!queue.isEmpty()) {
            presentNode = queue.deQueue()
            /**
             * travesrs leven order 
             * check level queue left and righit node
             * if left is not null then -
             * 1. enQueue leftNode in to the queue
             * 2. if left.value = value be to deleted then assign it in node to delete 
             * else if left is null then assign the present node as deepest left node 
             * if right is not null then -
             * 1. enQueue leftNode in to the queue
             * 2. if left.value = value be to deleted then assign it in node to delete 
             * else if rigit is null then assign the present node as deepest right node  
             */
            if (presentNode.NodeLeft != null) {
                depestrightMostNode = presentNode.NodeLeft
                if (presentNode.NodeLeft.value === value) {
                    nodeToDelete = presentNode.NodeLeft
                }
                queue.enQueue(presentNode.NodeLeft)
            }
            if (presentNode.NodeRight != null) {
                depestrightMostNode = presentNode.NodeRight
                if (presentNode.NodeRight.value === value) {
                    nodeToDelete = presentNode.NodeRight
                }
                queue.enQueue(presentNode.NodeRight)
            }
        }

        /** 
         * replace depes righit node  value to nodeToDelete value
         */
        // console.log("Node Be deleted", nodeToDelete)
        if (nodeToDelete) {
            nodeToDelete.value = depestrightMostNode.value
            this.levelOrderTraverser()
            this.deleteDepestRighitMost(depestrightMostNode)
        }
    }


    /** delete depset righit most 
     * add root in queue
     * create variable previous node 
     * assigin previouds = present node
     * traverts levelTree for most righi node 
     * assign prives node left or righit its null
     */

    deleteDepestRighitMost(nodeToDelete:Node<T>) {
        if (this.root === null) return;
        const queue = new Queue<Node<T>>()
        queue.enQueue(this.root)
        let presentNode = null; 
        while (!queue.isEmpty()) { 
            presentNode = queue.deQueue()
            if (presentNode.NodeLeft != null) {
                queue.enQueue(presentNode.NodeLeft)
                if(presentNode.NodeLeft == nodeToDelete){
                    presentNode.NodeLeft = null
                }
            }
            if (presentNode.NodeRight != null) {
                queue.enQueue(presentNode.NodeRight)
                 if(presentNode.NodeRight == nodeToDelete){
                    presentNode.NodeRight = null
                }
            }
        }
    }

}