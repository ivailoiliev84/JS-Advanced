function solve(data){
    data.sort()
    for(let i = 0; i < data.length; i++){
        console.log(`${i + 1}.${data[i]}`)

    }
    

}

solve(["John", "Bob", "Christina", "Ema"])