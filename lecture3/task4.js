function hero(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let [name, level, items] = arr[i].split(" / ")
        let inventory = []
        if(items){
            inventory= items.split(", ")
        }else{
            inventory = []
        }
        
        let obj = {
            name,
            level: Number(level),
            items: inventory
            
        }
        result.push(obj)

    }
    return JSON.stringify(result)


}


console.log(hero(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']))

