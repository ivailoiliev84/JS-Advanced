function solve(arr){
    let greaterThanNumber = arr[0]
    let resultArray = []
    
    for(let i = 0; i < arr.length; i++){
        if(greaterThanNumber <= arr[i]){
            resultArray.push(arr[i])
            greaterThanNumber = arr[i]
            
        }
        
    }
    return resultArray

}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])