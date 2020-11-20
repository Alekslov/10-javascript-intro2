console.log("labas");

console.log("labas"+'1'+'2'+'3');
console.log("labas"+1+2+3);
console.log(1+2+3+"labas");
const sk = 7;
console.log(" skaicius yra "+sk);

console.log("labas "+ "rytas");


if(true){
    console.log("tiesa");
}
if(false){
    console.log("netiesa");
}
if(4>0){
    console.log("tiesa");
}

if(4<0){
    console.log("tiesa");
}else{
    console.log("netiesa");
}

for(let i = 0 ;i<10 ; i++){ // 0<10 | i=1, 1<10 |2<10
    console.log("dirbam "+i); //spausdinam viena karta./antra karta
}
 let masyvas = ["nulinis","pirmas","antras","trecias"];// 4to elemento, kurio intexas 3 nera
 //                 0           1       2           3
console.log(masyvas.length);

// for(let i = 0; i<masyvas.length; i++){
//     console.log("masyvo elementas  '"+masyvas[i]+"'");//masyvas[0] |antra iteracija. masyvas[1] |trecia, masyvas[2]
// }
for(let i = 0; i<masyvas.length; i++){
    if(i%2==0){
        console.log(" porinis");
    }
    console.log("masyvo elementas  '"+masyvas[i]+"'");//masyvas[0] |antra iteracija. masyvas[1] |trecia, masyvas[2]
console.log("------------");
}


for(let i = 0; i<10; i++) {
    console.log("kartas "+i);
}

let abc = "labasdfwfe sdfsdf ";

if(abc.length>8) {
    console.log("tekstas ilgesnis negu 8 simboliai");
} else if (abc.length<8) {
    console.log("tekstas trumpesnis");
} else {
    console.log("tekstas yra 8 simboliu");
}

// if(abc.length>8) {
//     console.log("tekstas ilgesnis negu 8 simboliai");
// }

// if (abc.length===8) {
//     console.log("tekstas yra 8 simboliu");
// }

// if (abc.length<8) {
//     console.log("tekstas trumpesnis");
// }



console.log("o as vis dar dirbu");
const skMasyvas = Array.from({length: 50}, () => Math.floor(Math.random() * 40));

// 7/2=3.5
// 7%2 = 3*2(6) grazina liekana, ji yra 1
// 8%2 = 4*2(8) grazina liekana, ji yra 0

//sukurti kintamaji kuris savy turetu skaiciu masyva nuo 0 iki 50
// atspausdinti visus skaicius is masyvo kurie dalinasi is 3 be liekanos

//kita uzd. tuos skaicius kurie nesidalina is 3 be liekanos pakeistumete i skaiciu 0

for ( let i = 0; i<skMasyvas.length; i++) {
    if(i%3===0){
        console.log("dalinasi is 3 be liekanos -> "+(1+i));
    } 
    if(i%3!==0) {
        skMasyvas[i]= 0;
        console.log((1+i) + ' -> ' + skMasyvas[i]);
    }
    
}   
console.log(skMasyvas);




// funkcion (let i = 0; i < array.length; i++) {
//     return(false);
//     console.log(tusciaFunkcija());
    
// }

// function tusciaFunkcija () {
//     return(false);
// }
// console.log(tusciaFunkcija());


function daugyba (num1, num2) {
    const result = num1 * num2;
    return result;
}

const skaicius1 = 5;
const skaicius2 = 2;
const skaicius3 = 3;
let result = daugyba(skaicius1, skaicius2, skaicius3);   

console.log(daugyba(skaicius1, skaicius2));
console.log(daugyba(skaicius3, skaicius2));
console.log(daugyba(skaicius1, skaicius2));



function skaitmenuKiekisSkaiciuje (skaic) {
    if ( typeof skaic !== 'number' ) {
        return "Pateikta netinkamo tipo reiksme." ;
    }
    if (''+skaic === 'NaN') {
        return "Pateikta netinkamo tipo reiksme." ;
    }
    skaic = skaic + '';
    let kiekis = skaic.length;
    return kiekis;   
}


console.log(skaitmenuKiekisSkaiciuje(5), ' -> 1');
console.log( skaitmenuKiekisSkaiciuje( 781 ), ' -> 3');
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ),' -> 11' );
console.log( skaitmenuKiekisSkaiciuje( true ), ' -> Pateikta netinkamo tipo reikšmė.' );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ), ' -> Pateikta netinkamo tipo reikšmė.' );
console.log( skaitmenuKiekisSkaiciuje( NaN ), ' -> Pateikta netinkamo tipo reikšmė.' );

console.log('------------');

function didziausiasSkaiciusSarase(sarasas) {
    if (typeof sarasas !== 'object') {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    const size = sarasas.length;

    if (size === 0) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }
    let bigNum = sarasas[0];
    for (let i = 0; i < size; i++) {
        const skaicius = sarasas[i];
        if (typeof skaicius !== 'number') {
            continue;
        }
        if (bigNum < sarasas[i]) {
            bigNum = sarasas[i];
        }
    
    }
    
    return bigNum;
}



console.log( didziausiasSkaiciusSarase([ 1 ]), ' -> 1' );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ), ' -> 3' );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ), ' -> 78' );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ), ' -> 69' );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), ' -> -1' );

console.log( didziausiasSkaiciusSarase( "pomidoras" ), ' -> Pateikta netinkamo tipo reikšmė.' );
console.log( didziausiasSkaiciusSarase( [] ), ' -> Pateiktas sarasas negali buti tuscias.' );

