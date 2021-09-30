function solve(numbers){
    let is_same = true
    let arr = String(numbers)
    let current_num = 0
    let totalSum = 0
    for(let i = 0; i < arr.length; i ++){
        totalSum += Number(arr[i])
        }
    for (let i = 0; i < arr.length; i ++){
        if(arr[0] != arr[i]){
            is_same = false
            break
        }
        }

    if(is_same == true){
        console.log('true')
        console.log(totalSum)
    }else{
        console.log('false')
        console.log(totalSum)
    }

}

solve(2222222)