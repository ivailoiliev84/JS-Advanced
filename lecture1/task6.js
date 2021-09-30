function solve(speed, area){
    
    let difference = 0;
    let status = '';

    const speeding = 20;
    const excessiveSpeeding = 40;

    if (area == 'motorway'){
        if(speed <= 130){
            console.log(`Driving ${speed} km/h in a ${130} zone`)

        }else if(speed - 130 <= 20){
            status = 'speeding'
            difference = speed - 130
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${130} - ${status}`)

        }else if(speed - 130 <= 40){
            difference = speed - 130
            status = 'excessive speeding'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${130} - ${status}`)
        }else{
            difference = speed - 130
            status = 'reckless driving'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${130} - ${status}`)
        }
    }else if(area == 'interstate'){
        if(speed <= 90){
            console.log(`Driving ${speed} km/h in a ${90} zone`)
        }else if(speed - 90 <= 20){
            difference = speed - 90
            status = 'speeding'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${90} - ${status}`)

        }else if( speed - 90 <= 40){
            difference = speed - 90
            status = 'excessive speeding'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${90} - ${status}`)

        }else{
            difference = speed - 90
            status = 'reckless driving'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${90} - ${status}`)
        }

    }else if(area == 'city'){
        if(speed <= 50){
            console.log(`Driving ${speed} km/h in a ${50} zone`)
        }else if(speed - 50 <= 20){
            difference = speed - 50
            status = 'speeding'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${50} - ${status}`)

        }else if( speed - 50 <= 40){
            difference = speed - 50
            status = 'excessive speeding'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${50} - ${status}`)

        }else{
            difference = speed - 50
            status = 'reckless driving'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${50} - ${status}`)
        }

    }else if(area == 'residential'){
        if(speed <= 20){
            console.log(`Driving ${speed} km/h in a ${20} zone`)
        }else if(speed - 20 <= 20){
            difference = speed - 20
            status = 'speeding'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${20} - ${status}`)

        }else if( speed - 20 <= 40){
            difference = speed - 20
            status = 'excessive speeding'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${20} - ${status}`)

        }else{
            difference = speed - 20
            status = 'reckless driving'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${20} - ${status}`)
        }
    }
    

}

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')