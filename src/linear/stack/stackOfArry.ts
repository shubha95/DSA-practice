export class StackOfArray<T> {
    private numberOfStacks: number = 0;
    private stackCapacity: number = 0;
    private values: (T | undefined)[] = [];
    private sizes: number[] = [];


    constructor(stackSize: number, numberOfStackSize: number) {
        this.numberOfStacks = numberOfStackSize;
        this.stackCapacity = stackSize;
        const total = this.numberOfStacks * this.stackCapacity;
        this.values = new Array<T | undefined>(total);
        for (let i = 0; i < total; i++) {
            this.values[i] = undefined;
        }
        this.sizes = new Array<number>(this.numberOfStacks);
        for (let i = 0; i < this.numberOfStacks; i++) {
            this.sizes[i] = 0;
        }
    }
}