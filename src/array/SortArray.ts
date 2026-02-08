const ShortArray = (arr: number[]) =>{
   console.log("Short Array",arr)
//([5, 2, 9, 1, 5, 6])

   // Alorthm : Bubble Sort.  n-i,5,4,3,2,1
   /** one for Loop
    * for array of length 
    * secend for loop for n-i
    * let min curent 
    * i > i+1
    * in the for loop and sweeap curent to postion to next position 
    * 
    */
   for(let i=0 ; i < arr.length; i++){
    for(let j=0; j<arr.length-i  ;j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j] 
            arr[j] = arr[j+1]
            arr[j+1] = temp   
        }
    }
   }
   return arr ;
}


export default ShortArray