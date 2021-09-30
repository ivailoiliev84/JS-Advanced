function cities(arr) {
    let sheet = {};

    for(let i = 0; i < arr.length; i++){
        let [town, product, price] = arr[i].split(' | ')

        if(sheet[product] == undefined){
            sheet[product] = {};
        }
        sheet[product][town] = Number(price);
    }
    
    for(let [product, value] of Object.entries(sheet)){
        console.log(`${product} -> ${value.price} (${value.town})`);
    }
}   





console.log(cities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']))