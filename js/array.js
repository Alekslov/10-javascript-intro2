/*
Saraso tipo kintamieji:
    sinonimai: sarasas, masyvas, array, matrica*
    inicijuojama su lauztyniais skliausteliai;
    viduje gali buti ivairiu tipu reiksmiu;
    bet rekomenduotina, kad butu tik vieno tipo reiksmes.
*/

// Pazymiai

const petriukoPazymiai = [2, 10, 7, 5];
console.log(petriukoPazymiai);

// kaip suskaiciuoti pazymiu vidurki?
let suma = 0;
suma = suma + petriukoPazymiai[0];
suma = suma + petriukoPazymiai[1];
suma = suma + petriukoPazymiai[2];
suma = suma + petriukoPazymiai[3];
// suma = suma + petriukoPazymiai[4];

const kiekis = petriukoPazymiai.length;
const vidurkis = suma / kiekis;

console.log(vidurkis);




const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Anyksciai'];
console.log(miestai);

console.log(miestai[3]);
console.log(miestai[1]);
console.log(miestai[2]);
console.log(miestai[0]);