function solve(steps, footprint, speedKm){
    let speed = speedKm * 1000 / 3600
    let distance = steps * footprint

    let rest = Math.floor(distance / 500) * 60
    let time = distance / speed + rest

    const hours = Math.floor(time/60/60).toFixed(0).padStart(2, 0)
    const minutes = Math.floor((time - hours * 3600) / 60).toFixed(0).padStart(2, 0)
    const seconds = (time - hours*60*60 - minutes * 60).toFixed(0).padStart(2, 0)


    
    
    return `${hours}:${minutes}:${seconds}`
}

solve(4000, 0.60, 5)