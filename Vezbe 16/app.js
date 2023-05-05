// broj = 15
// if(broj % 2 === 0){
//     console.log("Broj je paran", broj);
//  } else{
//         console.log("Broj je neparan", broj);
//     }
// broj = 19
// if(broj>=18){
//     console.log("Osoba je punoletna", broj)
// }else{
//     console.log("Osoba je maloletna", broj)
// }
// ime = "Redzi"
// prezime = "Habibovic"

// if(ime && prezime){
//     console.log("Korisnik je uneo ime i prezime", ime,prezime)
// } else {
//     console.log("Korisnik nije uneo ime i prezime", ime,prezime)
// }
// broj = 0
// if(broj>0){
//     console.log("Broj je pozitivan", broj)
// } else if(broj === 0){
//     console.log("Broj je neutralan", broj)
// } else{
//     console.log("Broj je negativan", broj)
// }
// Temperatura = 18
// if(Temperatura < 0){
//     console.log("Smrzavanje")
// } else if(Temperatura > 0 && Temperatura <=10){
//     console.log("Hladno Vreme")
// } else if(Temperatura > 10 && Temperatura <=20){
//     console.log("Lepo Vreme")
// } else if(Temperatura > 20 && Temperatura <=30){
//     console.log("Vrucina")
// }


// Godina = 2022   

// if(( Godina % 4 === 0 && Godina % 100 !== 0)|| Godina % 400 === 0) {
//     console.log("Godina je prestupna", Godina)
// } else{
//     console.log("Godina nije prestupna", Godina)
// }

// someNumber % 2 === 20
// ? console.log("Broj je paran")
// : console.log("Broj je neparan")


 
// for( let i = 0; i < 100; i++){
//     if( i % 3 === 0 ){
//         console.log("fizz")
//     } else if( i % 5 === 0 ){
//         console.log("buzz")
//     } else if( i % 5 === 0 && i % 3 === 0 ){
//         console.log("fizzbuzz")
//     } else (
//         console.log(i)
//     )
    
// }
// for( let i = 0; i < 100; i++){
//     if(i % 5 === 0 && i % 3 === 0){
//         console.log("FizzBuzz")
//     } else if( i % 5 === 0){
//         console.log("Buzz")
//     } else if( i % 3 === 0){

//     } else(
//         console.log(i)
//     )
// }
// for( let i = 0; i < 150; i++){
//     if(i % 2 === 0){
//         console.log(i*7 + 20)
//     } else( 
//         console.log(i*5 + 20)
//     )
// }
// let a = Math.floor(Math.random() * 100) + 1;
// let guess;

// do {
//     guess = prompt("Unesite broj");
//     if (+guess > a) {
//         alert("Probaj manji broj");
//     }  else if (+guess < a) {
//         alert("Probaj manji broj");
//     }  else {
//         alert("Pogodili ste tacan broj");
//     }
// }  while (+guess  !== a);

// function myFirstFunction(argument1 , argument2)  {
//     // console.log("Redzi")
//     // let a = 50;
//     // let b = 100;
//     // let zbir = a + b;
//     // return zbir;
//     console.log(argument1 + argument2)
// }

// myFirstFunction(100, 30);


// let someArray = [3, 10, 6, 18, 23, 48, 31]
// let anotherArray = [543 , 435, 53, 53, 76 , 875,  321, 425]


// function getMaxNumber (niz){
//     const duzinaNiza = niz.length;
//     let number = 0;

//     for(let i = 0; i < duzinaNiza; i++)
//     console.log(niz[i]);
// }

// getMaxNumber(someArray)

// let cars = ["BMW", "Mercedes", "Audi"]; 

// for (let car in cars) {
//     console.log(cars[car]);
// }
// console.log(cars.length)

// cars.length = 2;
// let cars = ["Element", "Element 2", "Element 3"];
// console.log(cars, cars.length);
// cars.push("Novi Element");
// console.log(cars, cars.length)

// cars.unshift("Fresh Element");
// console.log(cars, cars.length);
// let PrvaTri = [3, 1, 8];
// let DrugaTri = [6, 8, 0];

// let combined = PrvaTri.concat(DrugaTri);
// console.log(combined)

// const IstiNiz = [1,3,5,7,9];      // Petlja se sastoji iz 3 svojstva, brojac, i je brojac, uslov dokle ide i, i++ povecavanje i implementacija 
// const sumNumbers = (NekiNiz) => {
//     let start = 0;
    
    
//     for(let i = 0; i <NekiNiz.Length; i++){

//       start*=NekiNiz[i];

//     };

// }

// console.log(sumNumbers(IstiNiz));



// function hello(name){
//     console.log("Hello " + name) 
// }


// hello("Redzi")

// let age = 18         ///////LOKALNA PROMENLJIVA
// function hello(name){ //////PARAMETAR
//     let age = 21     ///////GLOBALNA PROMENLJIVA
//     console.log("Hello " + name) 
// }


// hello("Redzi")
// console.log (age)       ///////ARGUMENT


// function sabiranje(x,y=0){ ///////PARAMETAR
//     console.log(x + y) 
// }

// sabiranje (4, ) //////////////ARGUMENT
// function sabiranje(x,y){ ///////PARAMETAR
//     return x+y
// }

// value = sabiranje (4,9) //////////////ARGUMENT
// console.log(value)


// function paranilineparan(number){
//     if (number % 2 == 0){
//         return "Broj je paran"
//     }else {
//         return "Broj je neparan"
//     }
// }
// rezultat = paranilineparan(2)
// console.log(rezultat)

// let myName = "Redzi"
// // if (myName){
// //     console.log("Tacno")
// // }

// console.log(myName)


// let myLastName

// for( let i = 0; i < 5; i++{
//     console.log(myLastName, i)
//     if (i === 3){
        
//     }
// })

// let myLastName


// for ( let i = 0; i < 5; i++){
//     if (i === 3){
//         myLastName = "Redzi"
//     }
//     if (myLastName){
//         console.log("Imam ime")  
//     }else {
//         console.log("Molimo Sacekajte,")
//     }
// }


// var a;
// let b;
// const c

// let b = 3
// {
//     var a;
//     let b = 10;
//     var c = 15;
//     {
//         let b = 10;
//         const c = 15;
//         console.log(b, "blok koda");
//         console.log(c, "blok koda");
//     }
// }
// console.log(b, "global scope");
// console.log(c, "global scope");


// function sayHello(hello){
// console.log("Hello"+ hello)
// }
// sayHello("Redzi")

// function sabiranje(a, b){
//     return a + b;
// }
// function VecaFunkcija(nazivfunkcije){
//     let a = 3;
//     let b = 5;

//     return nazivfunkcije(a, b);

// }

// console.log(VecaFunkcija(sabiranje));


// let someArray = [3, 5, 123, 54, 213, 20, 8, 435];
// let pomocnaFunkcija = (a) => a + 10;
// function customFunction(niz, callbackFunkcija){
//     let pomocniNiz = [];
//     for(let i = 0; i < niz.length; i++){
//         console.log(niz[i]);
//     }
//     return pomocniNiz;

// }

// customFunction(someArray,pomocnaFunkcija)





// const RandomNiz = [2,4,5,6,7,8,9,1];
// const prvaMap = RandomNiz.map(el => el * el)

// console.log(RandomNiz)
// console.log(prvaMap)


// const RandomNizz = [2,6,4,3,2,15,886];
// const DrugiMap = RandomNizz.map(el => el * 7)

// console.log(RandomNizz)
// console.log(DrugiMap)


// const RandomNizzz = [20,25,33,56,99,87,43,12]
// const TreciMap = RandomNizzz.map(el => el * 1.6)

// console.log(RandomNizzz)
// console.log(TreciMap)


// const NekiBrojevi = [36,17,22,6,1,10,19,33,52]
// const CetvrtiMap = NekiBrojevi.map(el => {
//     if (el % 2 === 0){
//       el *=2
//     }
//     else {
//         el*=3
//     }
    
//     return el
// })
// console.log(NekiBrojevi)
// console.log(CetvrtiMap)

// const matrica = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];

// const  proizvodmapfn = matrica.map((manjiniz)=> (el % 2 === 0 ? el * 2 : el * 3));

// console.log(matrica)
// console.log(proizvodmapfn)
// //////////////////////////////

// Map metoda vraca novi Niz///////
// prolazi kroz ceo niz i odradjuje call back/////




const brojevi = [6, 5, 27, 28, 29, 31 ,33, 15]


// const neparnibrojevi = brojevi.filter((el) => el % 2 === 0);
// console.log(brojevi);
// console.log(neparnibrojevi)


// const BiggerNumss = brojevi.map((el)=> el > 16);

// console.log(BiggerNumss)



// const ourCustomFilter = (niz, callbackFN) => {
//     const NoviFilterNiz = [];
//     for (let i = 0; i < niz.length; i++) {
//         if (callbackFN(niz[i])){
//             NoviFilterNiz.push(niz[i]);
//         }
//     }
//     return NoviFilterNiz;
// };

// function customCallback(el){
//     return el > 10;
// }
// console.log(ourCustomFilter(brojevi, customCallback));

// const NekiBrojevi = [7, 12 , 1, 8, 19, 20, 15, 22, 25, 30, 2, 10, 63];
// const Pomnozibrojeve = NekiBrojevi.map((el)=> el * 3);
// console.log(Pomnozibrojeve)


// const nadjiparneztj = Pomnozibrojeve.filter((el)=> el % 2 === 0);
// console.log(nadjiparneztj)


// const nekaMatrica = [
//     [12,5,6],
//     [72,8,4],
//     [12,3,9],
// ];

// const dveMape = nekaMatrica.map((niz) => niz.filter ((el)=> el % 2 === 0));
// console.log(dveMape);


// const nizzaReduce = [3, 8, 2, 12, 14, 55, 21, 10];

// const zbirElemenata = nizzaReduce.reduce((prev, curr)=> ((prev + curr)));

// console.log(zbirElemenata / nizzaReduce.length)


const OurfirstObject = {
car: "Audi",
vozac:"Redzi",
godine: 18,
};
console.log(OurfirstObject);





























