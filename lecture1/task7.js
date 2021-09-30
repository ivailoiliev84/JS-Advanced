function solve(digit ,f1, f2 ,f3, f4, f5){
    let array = [f1, f2, f3, f4, f5]
    let num = Number(digit)
    let currentResult = num
    for(let i = 0;i < array.length; i++){

    
        switch(array[i]){
            case 'chop':
                currentResult /= 2
                console.log(currentResult)
                break;
            case 'dice':
                currentResult = Math.sqrt(currentResult)
                console.log(currentResult)
                break;
            case 'spice':
                currentResult +=  1
                console.log(currentResult)
                break;
            case 'bake':
                currentResult *= 3
                console.log(currentResult)
                break;
            case 'fillet':
                currentResult *= 0.80
                console.log(currentResult.toFixed(1))
                break;
        }
    }
}  
    

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')