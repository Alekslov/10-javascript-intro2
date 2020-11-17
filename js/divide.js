const nuo = 0;
const iki = 11;
const daliklis = 3;

let kiekis = 0;

// % - matematinis operatorius, dalybos liekana
for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
        kiekis++;
    }
}

console.log(`Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`);