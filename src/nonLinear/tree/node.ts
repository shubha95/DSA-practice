export class Node<T> {
    value: any;
    NodeLeft: Node<T> | null;
    NodeRight: Node<T> | null;
    height: number;

    constructor(value: any) {
        this.value = value
        this.NodeLeft = null
        this.NodeRight = null
        this.height = 0
    }
}