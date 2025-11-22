import { binaryTreeArray } from "./binaryTree";

function treeArray() {
    const treeArray = new binaryTreeArray(5);
    //    treeArray.getTree()
    treeArray.insert(10)
    treeArray.insert(9)
    treeArray.insert(8)
    treeArray.insert(7)
    treeArray.insert(6)
    treeArray.insert(7)
    treeArray.insert(8)
    // treeArray.getTree()
    // treeArray.preOrderTraverser(1);
    // treeArray.postOrderTraverser(1);
    // treeArray.inOrderTraverser(1);
    // treeArray.levelOrderTraverser();
    treeArray.search(7)
}


export default treeArray()