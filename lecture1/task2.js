function solve(number1, number2) {
    while(number2 > 0){
        let tmp = number2;
        number2 = number1 % number2;
        number1 = tmp;

    }

    console.log(number1);
}


solve(15, 5);
solve(2154, 458);