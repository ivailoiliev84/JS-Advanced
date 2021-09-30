function solve(data, rotation){
    let result = ''
    for(let i = 0; i < rotation; i++){
        let curr = data.pop()
        data.unshift(curr)

    }
    result = data.join(' ')
    return result
}
solve(['1', 
'2', 
'3', 
'4'], 
2)