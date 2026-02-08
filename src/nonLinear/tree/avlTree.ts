import { Node } from "./node";
import { Queue } from "../../linear/queue/queue"
export class AVLTree<T> {
    private root: Node<T> | null = null;




    insert(value: number) {
        this.insertTree(this.root, value);
    }

    insertTree(currentNode: Node<T> | null, value: number): Node<T> {
        const isRootCall = currentNode === this.root;

        // Create node if spot is empty
        if (currentNode === null) {
            const newNode = new Node<T>(value);
            newNode.height = 1;
            if (isRootCall) this.root = newNode;
            return newNode;
        }

        // Normal BST insert
        if (value < currentNode.value) {
            currentNode.NodeLeft = this.insertTree(currentNode.NodeLeft, value);
        } else if (value > currentNode.value) {
            currentNode.NodeRight = this.insertTree(currentNode.NodeRight, value);
        } else {
            // duplicates not allowed
            return currentNode;
        }

        // Update height and balance
        currentNode.height = 1 + Math.max(this.getHeight(currentNode.NodeLeft), this.getHeight(currentNode.NodeRight));
        let balance = this.getBalanceFactor(currentNode);

        let resultNode: Node<T> = currentNode;

        // Left Left
        if (balance > 1 && value < (currentNode.NodeLeft!.value)) {
            resultNode = this.rightRotation(currentNode);
        }
        // Left Right
        else if (balance > 1 && value > (currentNode.NodeLeft!.value)) {
            currentNode.NodeLeft = this.leftRotation(currentNode.NodeLeft!);
            resultNode = this.rightRotation(currentNode);
        }
        // Right Right
        else if (balance < -1 && value > (currentNode.NodeRight!.value)) {
            resultNode = this.leftRotation(currentNode);
        }
        // Right Left
        else if (balance < -1 && value < (currentNode.NodeRight!.value)) {
            currentNode.NodeRight = this.rightRotation(currentNode.NodeRight!);
            resultNode = this.leftRotation(currentNode);
        }

        if (isRootCall) this.root = resultNode;
        return resultNode;
    }


    getHeight(node: Node<T> | null) {
        if (node === null) {
            return 0;
        }
        // console.log("Node Height ->", node.height)
        return node.height;
    }

    getBalanceFactor(node: Node<T> | null) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.NodeLeft) - this.getHeight(node.NodeRight);
    }


    // Right Rotation 
    /**
     * Performs a right rotation on the given node.
     * create newNode as left child of disbalance;
     * update disbalance left to newNode righit
     * update newNode right to disbalance
     * update heights
     * return newNode
     */
    rightRotation(disbalance: Node<T>) {
        const newNode = disbalance.NodeLeft || null;
        if (newNode) {
            disbalance.NodeLeft = newNode.NodeRight || null;
            newNode.NodeRight = disbalance;
            disbalance.height = 1 + Math.max(this.getHeight(disbalance.NodeLeft), this.getHeight(disbalance.NodeRight));
            newNode.height = 1 + Math.max(this.getHeight(newNode.NodeLeft), this.getHeight(newNode.NodeRight));
            return newNode;
        }
        return disbalance;
    }

    // Left Rotation
    // ** 
    // create new Node as righit child of disbalence
    // update disbalence righit as new node of left
    // update new node left as disbalence node */

    leftRotation(disbalance: Node<T>) {
        const newNode = disbalance.NodeRight || null;
        if (newNode) {
            disbalance.NodeRight = newNode.NodeLeft || null;
            newNode.NodeLeft = disbalance;
            disbalance.height = 1 + Math.max(this.getHeight(disbalance.NodeLeft), this.getHeight(disbalance.NodeRight));
            newNode.height = 1 + Math.max(this.getHeight(newNode.NodeLeft), this.getHeight(newNode.NodeRight));
            return newNode;
        }
        return disbalance;
    }


    inOrderTraversal() {
        this.inOrderTraverser(this.root);
    }

    inOrderTraverser(node: Node<T> | null) {
        if (node === null) {
            return null;
        }
        this.inOrderTraverser(node.NodeLeft)
        console.log("In Order ->", node.value)
    }



    levelOrderTraverser() {
        if (this.root === null) return;
        const queue = new Queue<Node<T>>()
        let lastNode = null;
        queue.enQueue(this.root)
        while (!queue.isEmpty()) {
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

    // delete tree
    //** given value and root node 
    // search node for delete using recursune
    // if delete node height 0 and 1 so no need to rotation
    // if delete node height 1 then check left and right node, when right present then replace delete node to deleteNode.right and delete node.right mark null
    // when delete node right not present then replace delete node for delete node left and delete.left assign null
    // if delete node height 2 then perform rotation 
    //  **/



    deleteNode(value: number, currentNode: Node<T> | null){
        const isRootCall = currentNode === this.root;
        console.log("Delete Call ->", isRootCall)
        if (currentNode === null) {
            return null;
        }
        if (value === currentNode.value) {
            let currentNodeHeight = this.getHeight(currentNode);
            if (currentNodeHeight <= 2) {
                console.log("Deleting Node ->", currentNode.value, " Height ->", currentNodeHeight)
                // No need for rotation
                return currentNode;
            } 
        } else if (currentNode.NodeLeft !== null && value < currentNode.value) {
            this.deleteNode(value, currentNode.NodeLeft);
        } else if (currentNode.NodeRight !== null && value > currentNode.value) {
            this.deleteNode(value, currentNode.NodeRight);
        }
        
    }

    // searchNode(value:number, currentNode:Node<T>| null):Node<T>| null{
    //     const isRootCall = currentNode === this.root;
    //     if(currentNode === null){
    //         return null;
    //     }
    //     if(value === currentNode.value){

    //         return currentNode;
    //     }else if(value < currentNode.value){
    //         return this.searchNode(value, currentNode.NodeLeft);
    //     }else{
    //         return this.searchNode(value, currentNode.NodeRight);
    //     }
    // }

    delete(value: number) {
        this.deleteNode(value, this.root);
    }
}