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




// const brojevi = [6, 5, 27, 28, 29, 31 ,33, 15]


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


// const OurfirstObject = {                 OBJEKAT
// car: "Audi",                   PROPERTY  KEY I VALUE    Key - 
// vozac:"Redzi",
// godine: 18,
// };
// console.log(OurfirstObject);


// for(let i=0; i<100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }
//     else if (i % 5 === 0){
//         console.log("buzz")
//     }
//     else if (i % 3 === 0){
//         console.log("fizz")
//     }
//     else {console.log(i)}
//     }


    // const Nizzvezbica = [1,2,3,4,5,6,7,8,9]
    // Nizzvezbica.push(5,4)
    // Nizzvezbica.unshift(9,3)
    // console.log(Nizzvezbica)
    // const novinizzzarad = Nizzvezbica.map(el => el*7)
    // console.log(novinizzzarad)

    // const filtrrr = novinizzzarad.filter(el => el%2 ===0)
    // console.log(filtrrr)


    // let c = 10
    // c > 5 ? console.log("Vece je od 5"):console.log("Manje je od 5");


    // a = 15;
    // if(a > 20){console.log("Manji je");}
    // else if(a < 20){console.log("Veci je");}
    // else{console.log("poslednji");}
    


    // const classroom = {
    //     car : " Audi ",
    //     model : " A4 ",
    //     Pogon : " Quattro ",
    //     Motor : " 2.0 ",
    //     KS : 144,
    //     IspisiAuto(){
    //         console.log("U pitanju je auto" +  classroom.car + classroom.model + classroom.Pogon + classroom.Motor + classroom.KS);
        
    //     }
    // }
    // classroom.IspisiAuto();



    // const nasaucionicamala = [
    //     {ime: "Tajra", id: 1, age: 17,},
    //     {ime: "Iman", id: 2, age: 17,},
    //     {ime: "Dzenis", id: 3, age: 23,},
    //     {ime: "Tarik", id: 4, age: 25,},
    //     {ime: "Imad", id: 5, age: 17,},
    //     {ime: "Haris", id: 6, age: 18,},
    //     {ime: "Mehmed", id: 7, age: 16,},
    //     {ime: "Redzep", id: 8, age: 18,},
    // ];
    // const filtriranaucionica = nasaucionicamala.filter((el)=> el.id % 2 === 0);

    //     // console.log(nasaucionicamala);
    //     // console.log(filtriranaucionica);


    // const onlyids = nasaucionicamala.map((el) => {
    //     return{
    //         id:el.id,
    //     };
    // });
    // // console.log(onlyids);


    // const numbersss = nasaucionicamala.map((el) => el.id);
    // // console.log(numbersss);

    // const watchList = [
    //     {
    //       "Title": "Inception",
    //       "Year": "2010",
    //       "Rated": "PG-13",
    //       "Released": "16 Jul 2010",
    //       "Runtime": "148 min",
    //       "Genre": "Action, Adventure, Crime",
    //       "Director": "Christopher Nolan",
    //       "Writer": "Christopher Nolan",
    //       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    //       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    //       "Language": "English, Japanese, French",
    //       "Country": "USA, UK",
    //       "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    //       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    //       "Metascore": "74",
    //       "imdbRating": "8.8",
    //       "imdbVotes": "1,446,708",
    //       "imdbID": "tt1375666",
    //       "Type": "movie",
    //       "Response": "True"
    //     },
    //     {
    //       "Title": "Interstellar",
    //       "Year": "2014",
    //       "Rated": "PG-13",
    //       "Released": "07 Nov 2014",
    //       "Runtime": "169 min",
    //       "Genre": "Adventure, Drama, Sci-Fi",
    //       "Director": "Christopher Nolan",
    //       "Writer": "Jonathan Nolan, Christopher Nolan",
    //       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    //       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    //       "Language": "English",
    //       "Country": "USA, UK",
    //       "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    //       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    //       "Metascore": "74",
    //       "imdbRating": "8.6",
    //       "imdbVotes": "910,366",
    //       "imdbID": "tt0816692",
    //       "Type": "movie",
    //       "Response": "True"
    //     },
    //     {
    //       "Title": "The Dark Knight",
    //       "Year": "2008",
    //       "Rated": "PG-13",
    //       "Released": "18 Jul 2008",
    //       "Runtime": "152 min",
    //       "Genre": "Action, Adventure, Crime",
    //       "Director": "Christopher Nolan",
    //       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    //       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    //       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    //       "Language": "English, Mandarin",
    //       "Country": "USA, UK",
    //       "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    //       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    //       "Metascore": "82",
    //       "imdbRating": "9.0",
    //       "imdbVotes": "1,652,832",
    //       "imdbID": "tt0468569",
    //       "Type": "movie",
    //       "Response": "True"
    //     },
    //     {
    //       "Title": "Batman Begins",
    //       "Year": "2005",
    //       "Rated": "PG-13",
    //       "Released": "15 Jun 2005",
    //       "Runtime": "140 min",
    //       "Genre": "Action, Adventure",
    //       "Director": "Christopher Nolan",
    //       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    //       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    //       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    //       "Language": "English, Urdu, Mandarin",
    //       "Country": "USA, UK",
    //       "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    //       "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    //       "Metascore": "70",
    //       "imdbRating": "8.3",
    //       "imdbVotes": "972,584",
    //       "imdbID": "tt0372784",
    //       "Type": "movie",
    //       "Response": "True"
    //     },
    //     {
    //       "Title": "Avatar",
    //       "Year": "2009",
    //       "Rated": "PG-13",
    //       "Released": "18 Dec 2009",
    //       "Runtime": "162 min",
    //       "Genre": "Action, Adventure, Fantasy",
    //       "Director": "James Cameron",
    //       "Writer": "James Cameron",
    //       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    //       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    //       "Language": "English, Spanish",
    //       "Country": "USA, UK",
    //       "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    //       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    //       "Metascore": "83",
    //       "imdbRating": "7.9",
    //       "imdbVotes": "876,575",
    //       "imdbID": "tt0499549",
    //       "Type": "movie",
    //       "Response": "True"
    //     }
    //   ];



    //   const kkkkkk = watchList.map((el) => {
    //     return{
    //         title: el.Title,
    //         rating: el.imdbRating,
    //     };
    //   });
    //   console.log(kkkkkk);


    //   const ocenjivanjeveceodosam = kkkkkk.filter((el)=> el.rating >= 8);
    //   console.log(ocenjivanjeveceodosam);


    //   console.log("Redzi")


    // const nasCustomObject = {
    //   odelenje: "III - 10",
    //   razred: "III",
    //   brojLaptopova: 9,
    //   brzina: 4,
    //   jaciod: "svih",
    //   brt: "da",
    // }


    // function ourFirstCallFunction(){
    //   console.log(this.odelenje);
    // }

    // ourFirstCallFunction.call(nasCustomObject);


//     function mojaPrvaApplyf(a,b){
//       console.log(
//         `${a} i ${this.odelenje} i ${b} i ${this.jaciod}`);
//     }

// mojaPrvaApplyf.apply(nasCustomObject,["Redzi", "najjaci"]);




// let a = 5;
// function prva(){
//     console.log(a);
// }
// function druga(){
//     let a = 3;
//     console.log(a);
// }
// function treca(){
//     let a = 4;
//     console.log(a);
// }

// prva();
// druga();
// treca();





// class Car {
//     marka;
//     model;
//     motor = "2.0";
//     menjac;
//     constructor(markaauta, modelauta,  menjacauta){
//         this.marka = markaauta;
//         this.model = modelauta;
//         this.menjac = menjacauta;
//     }
// }    

// const podaciAuta = new Car("Audi","A4", "Saltac");

// console.log(podaciAuta);


// console.log("Redzi");
///////////////////////////////////////////////////////////////////////////////////////////
// class Automobil{
//     marka;
//     model;
//     motor;
//     menjac;
//     constructor(markaa, modell, motorr,menjacc){
//         this.marka = markaa;
//         this.model = modell;
//         this.motor = motorr;
//         this.menjac = menjacc;
//         }

//         helloCar(){
//             console.log("cao");
//         }
//         changeColor(newColor){
//             this.color = newColor;
//         }
//         getColor(){
//             return this.color;
//         }
// }
// const Podacikola = new Automobil("Audi", "A6","3.0","Automatski",)

// console.log(Podacikola);



// Podacikola.helloCar();

// Podacikola.changeColor("zuta");

// console.log(Podacikola);

// const novaBoja = Podacikola.getColor();
// console.log(novaBoja);q


// for (let i = 0; i < 100; i += 3) {
//     console.log(i);
// }

// const randomNumbers =  [2, 5, 30, 32, 45, 50];
// let reversedArray = [];

// for (let i = randomNumbers.length - 1; i >= 0; i--){
//     reversedArray.push(randomNumbers[i]);
// }
// console.log(randomNumbers);
// console.log(reversedArray);

// const randommmNumbers = [332, 542, 543,123,4325,654,666];
// let maxNum = 0;

// for( let i = 0; i < randommmNumbers.length; i++){
//     if (randommmNumbers[i]> maxNum){
//         maxNum = randommmNumbers[i];
//     }
// }
// console.log(maxNum);





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// const numberz = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let number = numberz[0];
// // console.log(number);


// // Prvi element je ovoooo


// let zadnjinumber = numberz[numberz.length - 1 ];
// // console.log(zadnjinumber);


// // Ovo je zadnji element




// // METHODS      PUSH,POP,SHIFT,UNSHIFT,CONCAT,LENGTH,SLICE,SPLICE,DELETE


// numberz [11] = "300";                        

// // console.log(numberz);


// numberz[numberz.length] = "lemon";

// // console.log(numberz);


// //LENGTH    VRACA NAM DUZINU ARRAYA     ////////////////////////////////////////////

// let lentghhh = numberz.length;

// // console.log(lentghhh);


// //POP & PUSH     POP MACINJE ZADNJI ELEMENT ARRAYA            PUSH DODAJE NOVI ELEMENT NA KRAJU ARRAYA   ////////////////////////////////////////


// numberz.pop();

// // console.log(numberz);

// ////////////////////////////////


// numberz.push(88);

// // console.log(numberz);


// ////////////////////////////////////////////////////////////////////////////




// //SHIFT & UNSHIFT        SHIFT BRISE PRVI ELEMENT I SPUSTA OSTALE ELEMENTE ZA PO JEDAN INDEKS        UNSHIFT DODAJE NA START ARRAYE I DIZE OSTALE INDEKSE//////////////


// numberz.shift();

// // console.log(numberz);

// numberz.unshift("bataljoza");

// // console.log(numberz);


// //DELETE IZBEGAVAJ !!! ON OSTAVLJA UNDEFINED  KORISTI UMESTO TOGA POP I SHIFT ///////////////////////////////////////////////////////


// //CONCAT MERGEA 2 ARRAYA ZAJEDNO //////////////////////////////////////////////////////////

// const mojadeca = [32, 15];
// const merge2arrayes = numberz.concat(mojadeca);

// // console.log(merge2arrayes);

// //SPLICE USPOMOC NJEGA DODAJEMO ELEMENT NA BILO KOJE MESTO ///////////////////////////////////////////////

// numberz.splice(2, 0, "LJIMUN", "KIWI");

// // console.log(numberz);


// // 2 - pozicija gde da se ubace ElementI 
// // 0 - Koliko elemenata ce da ukloni
// // "LJIMUN" "KIWI" - elemnti koji su dodati

// //SLICE SECE ARRAY DO ODREDJENE MERE I ISPISE GA /////////////////////////////////////

// const slajs = numberz.slice(4);
// console.log(slajs);

///////////////////////////////////////////////////////////KRAJ///////////////////////////////////////////////////////////////////////////

// const products = [{
//     id: 1,
//     name: "T-shirt",
//     qty: 1,
//     price_per_unit: 100,  
// },
// {
//     id: 1,
//     name: "Sneakers",
//     qty: 1,
//     price_per_unit: 300,
// },
// {
//     id: 1,
//     name: "Necklace",
//     qty: 5,
//     price_per_unit: 125,
// }]


// const calculator = (arr)=> {
//     const productsWithTotal = arr.map(el => el.qty * el.price_per_unit)
//     const total = productsWithTOtal.reduce((prevValue, currValue)=>{
//         return prevValue + currValue
//     }, 0)
//     console.log(productsWithTotal)
//     console.log(total)
//     return total

// }



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("Redzi30 Ono moje whoo")

// let myVar = 87;

// myVar++;

//myVar--;

// myVar += 7;

//myVar -= 7;


// let myStr = "Pozdrav, ja sam";
// let myName = " Redzi";
// const poruka = myStr + myName;
// console.log(poruka);


// console.log("Naache");


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// console.log(rrr);
// const rrr = "redzi";

// function sayHellp(){
//     console.log("John Doe");

// }
// sayHellp();





// var l = Math.PI;

// console.log(l);


console.log("naache");

































