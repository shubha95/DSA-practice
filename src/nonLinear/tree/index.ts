import { BinaryTree } from "./binaryTree"
import { inOrderIterative } from "./practice/inOrderIterative"
import { preOrderItrative } from "./practice/preOrderItrative"
import { postOrderIterarive } from "./practice/postOrderIterarive"
import { AVLTree } from "./avlTree"

function tree() {

    // const tree = new BinaryTree<number>(3)
    // tree.insert(4)
    // tree.insert(5)
    // tree.insert(6)
    // tree.insert(7)
    // tree.insert(8)
    // tree.levelOrderTraverser()
    // tree.delete(5) 
    //  tree.levelOrderTraverser()

    //  const inOrder = new inOrderIterative()
    //  inOrder.inOrderIterativeofStack()
    //  const preOrder = new preOrderItrative()
    //  preOrder.preOrderIterativeofStack()
    // const postOrder = new postOrderIterarive()
    // postOrder.postOrderIterativeofStack()

    const avlTree = new AVLTree()
    avlTree.insert(50)
    avlTree.insert(30)
    avlTree.insert(70) 
    avlTree.insert(20)
    avlTree.insert(10)
    // avlTree.inOrderTraversal()
    avlTree.delete(20)
}


export default tree()