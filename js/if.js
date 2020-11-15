/*
Palyginimo salyga (if):
galimi operatoriai: >, <, >=, <=, ==, !=, ===, !==
NAUDOTINI: >, <, >=, <=, ===, !==
nenaudotini: ==, !=
*/

/*
Galimos strukturos:
if () {}
if () {} else {}
if () {} else if {} ...  else if {}
if () {} else if {} ...  else if {} else {}
*/

const accountBalance = 200;
const transfer = 200;

if (accountBalance < transfer) {
    console.log('Banko zinute: saskaitoje truksta pinigu.');
}

if (accountBalance >= transfer) {
    console.log('Banko zinute: pavedimas padarytas.');
}

if (accountBalance >= transfer) {
    console.log('Banko zinute: pavedimas padarytas.');
} else {
    console.log('Banko zinute: saskaitoje truksta pinigu.');
}

const akys = 'zalios';

if (akys == 'melynos') {
    console.log('Grazios sirdies zmogus ❤');
} else if (akys == 'zalios') {
    console.log('Melagiai... 👀');
} else if (akys == 'raudonos') {
    console.log('Programuotojas..');
} else {
    console.log('A tu turi akis??? 🤔');
}

console.log('Pirmas bandymas baigtas. Kas toliau?...');


const akys2 = 'zalios';

if (akys2 == 'melynos') {
    console.log('Grazios sirdies zmogus ❤');
} else {
    if (akys2 == 'zalios') {
        console.log('Melagiai... 👀');
    } else {
        if (akys2 == 'raudonos') {
            console.log('Programuotojas..');
        } else {
            console.log('A tu turi akis??? 🤔');
        }
    }
}


console.clear();

const pirmas = 8;
const antras = '8';

if (pirmas === antras) {
    console.log(true);
} else {
    console.log(false);
}


const zodis1 = 'bbgsfhgc';
const zodis2 = 'bb';

if (zodis1 === zodis2) {
    console.log(true);
} else {
    console.log(false);
}


/*

Kintamieji
Salygos funkcijos
Ciklo funkcijos
Funkcijos
Event lisner'iai

*/