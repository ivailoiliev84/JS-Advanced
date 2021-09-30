function solve(matrix){
    let sumOfRow = 0;
    let sumOfColumn = 0;
    let isMagic = true

    for(let i = 0; i < matrix.length; i++){
        if(sumOfColumn != sumOfRow){
            isMagic = false
            break
        }
        for(let j = 0; j < matrix[i].length; j++){
            sumOfRow += Number(matrix[i][j])
            sumOfColumn += Number(matrix[j][i])
            
        }
    }
    if(isMagic === true){
        console.log(`true`)
    }else{
        console.log(`false`)
    }
}

// solve([[4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]])

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )

// solve([[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]])