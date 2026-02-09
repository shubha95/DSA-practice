const FindMissingNumber = (arr: number[]) => {
    //  [1, 2, 4, 5, 6] this is shorted array
    // for loop up to n sum of array 
    // sum formula methos 
    // find N
    // N = array length + 1
    // expectedSum = N * (N + 1) / 2
    // missingNumber = expectedSum - actualSum
    let arrayLength = arr.length;  
    let expectedSum = arrayLength * (arrayLength + 1) / 2
    console.log("e",expectedSum)
    let actualSum = 0
    for(let i=0; i<arr.length ; i++){
        actualSum = actualSum + arr[i]
    }
    let missingNumber =  actualSum - expectedSum
    return missingNumber;
 
}


export default FindMissingNumber ;