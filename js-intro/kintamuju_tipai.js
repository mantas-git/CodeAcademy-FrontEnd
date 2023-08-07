// 1. Duoti du sveikųjų skaičių intervalai [a; b] ir [c; d], kur a ≤ c.
//     Sudarykite programą, kuri nustatytų, ar egzistuoja šių intervalų sankirta
//     ir, jeigu sankirta egzistuoja, tai raskite jos rėžius [x; y].

let a = 1;
let b = 30;

let c = 5;
let d = 40;

let minAB = a;
let maxAB = b;
if (b < a) {
    minAB = b;
    maxAB = a;
}

let minCD = c;
let maxCD = d;
if (d < c) {
    minCD = d;
    maxCD = c
}

if (maxAB > minCD) {
    if (maxAB > maxCD) {
        if(minAB > minCD){
            console.log(`x = ${minAB}, y = ${maxCD}.`);
        }
        else {
            console.log(`x = ${minCD}, y = ${maxCD}.`);
        }
    } else {
        console.log(`x = ${minCD}, y = ${maxAB}.`);
    }

} else {
    console.log('Sankirta neegzistuoja');
}

// 2. Išveskite visus šiuos duomenis sakinio pavidalu, pvz:
let vardas = 'Tomas';
let pavarde = 'Tomauskas';
let kaVeikia = 'mokosi';
let kur = 'KTU';
let kelintasKursas = 4;
let pazymiai = [7, 4, 5];
console.log(`${vardas} ${pavarde} ${kaVeikia} ${kur}, ${kelintasKursas} kurse, jo pažymiai: [${pazymiai}].`);

// 3. Išveskite visų kintamųjų apibūdinimus su tipais (naudoti typeof)
console.log(`Parametro '${vardas}' tipas yra ${typeof vardas}`);
console.log(`Parametro '${kelintasKursas}' tipas yra ${typeof kelintasKursas}`);
console.log(`Parametro '${pazymiai}' tipas yra ${typeof pazymiai}`);

// 4. Sukurkite studento objektą, naudokite tuos pačius duomenis (vardas, pavarde, ...).
let student1 = {
    'vardas': 'Vardas',
    'pavarde': 'Pavarde',
};

let student2 = {
    'vardas': 'Vardas2',
    'pavarde': 'Pavarde2',
};

// 5. Sukurkite Objektų masyvą pagal katik sukurto Studento objekto struktura.
let students = [student1, student2];

// 6. Išveskite penkto objekto duomenis (vienas bendras console.log()).
// console.log(Object.values(students));
// console.log(`${students.map(a => a.vardas + ' ' + a.pavarde)}`); //nenaudojamas
for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}

// 8. Išveskite visus studento pažymius, esančius objekte. Naudojant for ciklą.
console.log(`${vardas} ${pavarde} ${kaVeikia} ${kur}, ${kelintasKursas} kurse, jo pažymiai: ${pazymiai.join(',')}`);

// 12. Patikrinkite ar kursas yra numeral tipo.
console.log(`Parametro '${kelintasKursas}' tipas yra ${typeof kelintasKursas}`);