
function clicar(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar!</b>";
    console.log(document.getElementById("agradecimento"));
    //alert ("Obrigada por clicar!");
}

function redirecionar(){
    window.open("https://www.google.com");
    //window.location.href = "https://www.google.com";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
    //alert ("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaochange (elemento){
    console.log(elemento.value)
}
/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace (nome, novo_nome)
}

function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade));

//alert (soma(5,10));

*/

/*var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getFullYear());
*/

/*var count;
for (count=0; count <=5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <=5){
    console.log(count);
    count++;
}
*/


/*var idade = prompt ("Qual sua idade?")
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
} 
*/   

/*var frutas = [{nome: "maçã", cor: "vermelha"}, {nome:"uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Débora Nascimento"
//var n1 = 7;
//var n2 = 2;
//var frase = "Japão é top";
//alert (n1 * n2);
//console.log(nome);
//console.log(n1+n1);
//console.log(frase.toLowerCase());
//alert(frase.replace"Japão","Israel");
