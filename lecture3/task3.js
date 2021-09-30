function task3(obj) {
    let cars = {}
    let smalEngine = { 'power': 90, 'volume': 1800 }
    let normalEngine = { 'power': 120, 'volume': 2400 }
    let monsterEngine = { 'power': 200, 'volume': 3500 }

    let hatchback = { 'type': 'hatchback', 'color': '' }
    let coupe = { 'type': 'coupe', 'color': '' }

    cars.model = obj.model
    if (obj.power < 105) {
        cars.engine = smalEngine
    } else if (obj.power < 160) {
        cars.engine = normalEngine
    } else {
        cars.engine = monsterEngine
    }
    if (obj.carriage === 'hatchback') {
        cars.carriage = hatchback
        cars.carriage.color = obj.color
    }else{
        cars.carriage = coupe
        cars.carriage.color = obj.color
    }

    cars.wheels = []
    if (obj.wheelsize % 2 == 0) {

        for(let i = 0; i < 4; i ++){
            cars.wheels.push(obj.wheelsize -1)
        }
    } else {
        for(let i = 0; i < 4; i ++){
            cars.wheels.push(obj.wheelsize)
        }
    }
    return cars
}


console.log(task3({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}))