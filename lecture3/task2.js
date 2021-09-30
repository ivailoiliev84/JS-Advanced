function task2(obj){
    if(obj.dizziness == true){
        obj.levelOfHydrated += (obj.weight * 0.1) * obj.experience
        obj.dizziness = false 
    }
    return obj
}

console.log(task2({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }))


console.log(task2({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }))