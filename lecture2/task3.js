function solve(data){
    let arr = []
    let result = 0
    for(let i = 0; i < data.length; i ++){
        if(data[i] === 'add'){
            result += 1
            arr.push(result)
            

        }else{
            result += 1
            arr.pop(i -1)
        }
        
    }
    if(arr.length > 0){
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i])
        }
    }else{
        console.log(`Empty`)
    }
}



// solve(['add',
//     'add',
//     'add',
//     'add'])

// solve(['add', 
// 'add', 
// 'remove', 
// 'add', 
// 'add'])

solve(['remove', 
'remove', 
'remove'])