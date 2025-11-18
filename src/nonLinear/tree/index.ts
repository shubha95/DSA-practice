import { BinaryTree } from "./binaryTree"

function tree() {
    const tree = new BinaryTree<number>(3)
    tree.insert(4)
    tree.insert(5)
    tree.insert(6)
    tree.insert(7)
    tree.insert(8)
    tree.levelOrderTraverser()
    tree.delete(5) 
     tree.levelOrderTraverser()


}


export default tree()