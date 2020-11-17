// 0 - 4            = 10
// -50 - 50         = 0
// 0 - 100          = 5050
// 0 - 0            = 0
// 574 - 815        = didelis teigiamas sveikas
// -70 - 30         = santykinai mazas neigiamas sveikas

const nuo = 59;
const iki = 59;

let sum = 0;

if (nuo < iki) {
    for (let i = nuo; i <= iki; i++) {
        sum = sum + i;
    }
} else {
    for (let i = iki; i <= nuo; i++) {
        sum = sum + i;
    }
}

console.log(`Skaičių intervale tarp ${nuo} ir ${iki} suma yra ${sum}`);