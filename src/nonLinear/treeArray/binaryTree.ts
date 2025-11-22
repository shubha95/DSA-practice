export class binaryTreeArray {
    private tree: Array<number | null> = []
    private lastIndex: number = 0;
    constructor(value: number) {
        if (value < 0) throw new Error("Size must be a non-negative number")
        this.tree = new Array<any | null>(value + 1)
        this.lastIndex = 0
    }

    getTree(): { tree: Array<number | null>, lastIndex: number } {
        console.log(" Tree Array ->", this.tree, this.lastIndex)
        return { tree: this.tree, lastIndex: this.lastIndex }
    }

    ifFull(): boolean {
        if (this.tree.length - 1 === this.lastIndex) {
            return true
        } else {
            return false
        }

    }

    insert(value: any) {
        if (!this.ifFull()) {
            this.tree[this.lastIndex + 1] = value
            this.lastIndex++
            // console.log("Inserted lastIndex ->", this.lastIndex)
            return this.lastIndex

        } else {
            console.log("Tree is full")
            return this.lastIndex
        }
    }

    preOrderTraverser(index: number) {
        if (index > this.lastIndex) {
            return;
        }
        console.log("pre Order ->", this.tree[index])
        process.stdout.write(`${this.tree[index]} -> `);
        this.preOrderTraverser(index * 2)
        this.preOrderTraverser(index * 2 + 1)
    }
    postOrderTraverser(index: number) {
        if (index > this.lastIndex) {
            return;
        }
        this.postOrderTraverser(index * 2)
        this.postOrderTraverser(index * 2 + 1)
        console.log(" post Order ->", this.tree[index])
        process.stdout.write(`${this.tree[index]} -> `);
    }
    inOrderTraverser(index: number) {
        if (index > this.lastIndex) {
            return;
        }
        this.inOrderTraverser(index * 2)
        console.log(" in Order ->", this.tree[index])
        process.stdout.write(`${this.tree[index]} -> `);
        this.inOrderTraverser(index * 2 + 1)
    }   

    levelOrderTraverser() {
        for (let i = 1; i <= this.lastIndex; i++) {
            process.stdout.write(`${this.tree[i]} -> `);
        }
        console.log('')
    }

    search(value:any):any{
        for(let i=1;i<=this.lastIndex;i++){
            if(this.tree[i]===value){
                console.log(" Value found at index ->",i)
                return i
            }
        }
        console.log(" Value not found")
        return null
    }
    delete(value:any):any{
        for(let i=1;i<=this.lastIndex;i++){
            if(this.tree[i]===value){
                this.tree[i]=this.tree[this.lastIndex]
                this.tree[this.lastIndex]=null
                this.lastIndex--
                console.log(" Deleted value ->",value)
                return
            }
        }
        console.log(" Value not found")
        return null
    }
}