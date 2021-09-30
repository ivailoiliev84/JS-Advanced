function ex6(arr) {
    
    let catalogue = {}

    arr.forEach(element => {
        let [product, price] = element.split(' : ')
        price = Number(price)
        const index = product[0]

        if(!catalogue[index]){
            catalogue[index] = {}
        }
        catalogue[index][product] = price
        

    });

    let sortedCatalog = Object.keys(catalogue).sort((a, b) => a.localeCompare(b))
 

     for(let key of sortedCatalog){
         let productName = Object.entries(catalogue[key]).sort((a, b) => a[0].localeCompare(b[0]))
         console.log(key)
         
         productName.forEach(el => {
             console.log(`  ${el[0]}: ${el[1]}`)
         });
     }

}

ex6(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])