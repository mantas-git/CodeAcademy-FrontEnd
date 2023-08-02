//senasis būdas keisti kintamuosius
// var number = 1;
// console.log(number)
// var number = '1';
// console.log(number +5);

//naujasis būdas kurti kintamuosius
const number = 1; //nekeičiamas kintamasis
// console.log(number);
let numberAsString = '10'; //keičiamas kintamojo reikšmė
// console.log(numberAsString + 5);
// console.log (number +85);

/**
 * Datatyper
 */

// - boolean
let isAdult = true;
let hasCar = false;

let isHigher = 5 > 0;
let isWquals = 8 === '8'; // == tikritnas tik vertę  === tikrina vertę ir tipą

const canDrieve = isAdult && hasCar;
// console.log(canDrieve);

// null
let friends = null;
frinds=["Domantas"];

// undefined
let city = 'Vilnius';

// number (and BigInt)
let number1 = 10;
let number2 = 10.25;

// string
let name = 'John';
let upperCaseName = name.toUpperCase();
let surname = 'Smith';
let country = 'UK';

const information = `${name} ${surname} lives in sss ${country}`;
console.log(information);

// symbol
const userSymbol = Symbol('user');

// object
let user = {
    name: 'Alex',
    surname: 'Smith',
    age: 90,
    hasCar: true,
    displayGreeting: function () {
        // console.log('Hello world');
        return 'Hello World';
    }
};

console.log(user);
console.log(user.name);
console.log(user.displayGreeting());

// užduotis
let make = 'FORD';
let model = 'Focus';
const introduction = `Automobilis yra ${make}, o modelis ${model}`;
console.log(introduction);
