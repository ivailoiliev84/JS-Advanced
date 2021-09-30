function solve(data){
    let sortArr = []
    let result = data.sort(function(a , b){return a - b})
    // console.log(result)
    while(result.length >0){
        sortArr.push(result.shift())
        sortArr.push(result.pop())
    }
    return sortArr
    
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])