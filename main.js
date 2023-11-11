function calcRanked(victory, defeat){
    return victory - defeat;
}

let rank = calcRanked(150, 45);
console.log(rank);

if(rank < 10){
    console.log(`O Herói tem saldo de ${rank} e está nível Ferro`)
}if(rank > 10 && rank <= 20){
    console.log(`O Herói tem saldo de ${rank} e está nível Bronze`)
}if(rank > 20 && rank <= 50){
    console.log(`O Herói tem saldo de ${rank} e está nível Prata`)
}if(rank > 50 && rank <= 80){
    console.log(`O Herói tem saldo de ${rank} e está nível Ouro`)
}if(rank > 80 && rank <= 90){
    console.log(`O Herói tem saldo de ${rank} e está nível Diamante`)
}if(rank > 90 && rank <= 100){
    console.log(`O Herói tem saldo de ${rank} e está nível Lendário`)
}if(rank >= 101){
    console.log(`O Herói tem saldo de ${rank} e está nível Imortal`)
}