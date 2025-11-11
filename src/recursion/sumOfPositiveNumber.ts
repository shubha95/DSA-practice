export class sumOfPositiveNumber<T> {
    private sumNumber: number = 0;
    private powerValue: number = 1;
    private factorialValue: number = 1


    sumOfPositiveNumber(value: number) {
        if (value < 0) {
            return 0;
        }
        this.sumNumber = this.sumNumber + value
        this.sumOfPositiveNumber(value - 1)
        return this.sumNumber
    }


    capitalizeWord(value: String) {
        console.log(value.length)

        return this
    }

    power(value: number, pawer: number): number {
        if (pawer < 0) {
            return -1
        }
        this.powerValue = this.powerValue * value
        this.power(value, pawer - 1)
        return this.powerValue
    }

    factorial(value: number): number {
        if (value === 0 || value === 1) {
            return 1
        }

        return value * this.factorial(value - 1)
    }


    productOfArray(arra: Array<number>, arraLength: number): number {
        if (arraLength < 1) {
            return -1
        }

        return arra[arraLength - 1] * this.productOfArray(arra, arraLength - 1)
    }

    fib(value: number): number {
        if (value < 0) {
            return 1
        }
        console.log(value)
        return this.fib(value - 1) + this.fib(value - 2)
    }
}