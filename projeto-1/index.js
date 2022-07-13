//Este arquivo é uma introdução basica ao JS
console.log("Olá Paula");
console.log("Olá Paula");
console.log("Olá Paula");

//Exemplo usando uma variavel
let texto = "Olá Brenda";

console.log(texto);
console.log(texto);
console.log(texto);

//Exemplo em um if
texto = "Olá Aline"
let cont = 0;
if(cont<3){
    console.log(texto);
}

//Exemplo em um laço
texto = "Olá Julia"
for(let x = 0; x<3; x++){
    console.log(texto);
}

//Exemplo em uma função
texto = "Olá Cris";
function escrever(){
    for(let x = 0; x<3; x++){
        console.log(texto);
    }
}
escrever();

//Exemplo de uma função recursiva
texto = "Olá Lucas";
cont=0;
function escrever2(){
    console.log(texto);
    cont = cont + 1;

    if(cont < 3){
        escrever2(texto);
    }
}

escrever2();