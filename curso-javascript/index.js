var nome = 'Erik'
var idade = 22
var peso = 60
var maiorIdade = true
maiorIdade = 'false'
console.log(maiorIdade, typeof maiorIdade)

var nomes = [
'Erik', 
'Jose',
'Maria'
]

console.log(nomes[0])

var pessoa = {
	nome: 'Bruno',
	array: ['Erik', 
	'Jose',
	'Maria']
}

console.log(pessoa.array[1])

var peso = 80
var altura = 1.83

var imc = peso / (altura * altura)

imc ++

console.log(imc)

var comprarRefrigerante = false
var comprarCerveja = false
var comprarSucoNatural = false

var convidado = {
	nome: 'Pedro',
	idade: 17,
	bebeCerveja: true,
	bebeRefrigerante: false
}

if(convidado.bebeRefrigerante){

	comprarRefrigerante = true

}else if(convidado.bebeCerveja && convidado.idade >= 18){

	comprarCerveja = true

}else{

	comprarSucoNatural = true

}

console.log(comprarRefrigerante)

console.log(comprarCerveja)

console.log(comprarSucoNatural)

var convidados = [

{
	nome: 'Pedro',
	idade: 18,
	bebeCerveja: true,
	bebeRefrigerante: true
},

{
	nome: '	Maria',
	idade: 18,
	bebeCerveja: true,
	bebeRefrigerante: true
}


]

for(var i = 0 ; i < convidados.length; i++) {

	if(convidados[i].bebeCerveja){

		comprarCerveja = true	

		console.log(i + " " + comprarCerveja)

		break;

	}

}

var i = 0

while( i < convidados.length){


	if(convidados[i].bebeCerveja){

		comprarCerveja = true	

		console.log(i + " " + comprarCerveja)

		break;

	}

	i++

}


function imc2(altura, peso) {

	return peso / (altura * altura)

}


console.log(resultado)

for (var pessoa of convidados){

var resultado = imc2(pessoa.altura, pessoa.peso)


}

function mensagem(){
	document.getElementById('demo').innerHTML = "Mudando o parágrafo";
	document.getElementById('demo2').innerHTML = "Mudando o parágrafo 2";
	document.getElementById("t").innerHTML = "My First Page";
}

function escreve() {
	document.write(5 + 6);	
}

function mensagemTela(){
	alert(5*5);
}

function debugar(){
	console.log(5*60);
}

function variaveis(){


var a, b, c;     // Declare 3 variables
a = 5;           // Assign the value 5 to a
b = 6;           // Assign the value 6 to b
c = a + b;       // Assign the sum of a and b to c

alert(c);

}


var length = 16;
var lastName = "Erik";
var x = {fistName: "Jose", lastName: "Moreira"};
console.log(x);


var cars = ["Corola", "Volvo", "Passat"];

for (var i = 0; i < cars.length; i++) {
	console.log("O carro "+ i +" eh: "+ cars[i]);
}

console.log(typeof "Asffsfsf")

var pessoa = {

	firstName: "Erik",
	lastName: "Moreira",
	age: 23,
	fullName : function (){
		return this.firstName + " " + this.lastName;
	}
}

var name = pessoa.fullName();

console.log(name)

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");

// Retorna banana
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);

/* The substring() Method
substring() is similar to slice().
The difference is that substring() cannot accept negative indexes. */

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);

/* The substr() Method
substr() is similar to slice().
The difference is that the second parameter specifies the length of the extracted part. */

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

var str = "HELLO WORLD";
str.charAt(0);            // returns H

var cars = [
	"Volvo",
	"Corola",
	"City"
]

console.log(cars[0]);

cars[0] = Date.now()


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;   // the length of fruits is 4
var fruits = fruits.sort();   // The sort() method sorts arrays

for (var i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}


var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}