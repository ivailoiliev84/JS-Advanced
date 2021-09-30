function solve(fruit, kg, price){
    
    let totalPrice = kg * price / 1000
    let weight = kg / 1000
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)

}


solve('apple', 1563, 2.35)

