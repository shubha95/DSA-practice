import { sumOfPositiveNumber } from "./sumOfPositiveNumber"
function recursion() {
    const str = 'i love javascript'
    const arry = [1, 2, 3, 4, 5]
    const recursion = new sumOfPositiveNumber<any>()
    // const factorial = recursion.factorial(3)
    // const capitalWord = recursion.capitalizeWord(str)
    //  const powerNumber = recursion.power(5,4)
    const  fib = recursion.fib(4)
   // const productOfArray = recursion.productOfArray(arry, arry.length)
    console.log(" sum Number ->",fib)

}

export default recursion()