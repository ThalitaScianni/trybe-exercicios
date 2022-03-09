let numbers = [4, 8, 2, 18, 70, 6, 100, 2, 34, 26];
let somaImpares = 0;

for (i = 0; i < numbers.length; i++){

    if (numbers[i] % 2 !== 0) {
        somaImpares = somaImpares + 1;
     }
}

    if (somaImpares !== 0){
    console.log(somaImpares);
    

    }else {
    console.log("nenhum valor ímpar encontrado");
}
    

    