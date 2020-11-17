// const pirmas1 = 2;
// const antras1 = 2;
// const suma1 = pirmas1 + antras1;
// console.log(`${pirmas1} + ${antras1} = ${suma1}`);

// const pirmas2 = 4;
// const antras2 = 7;
// const suma2 = pirmas2 + antras2;
// console.log(`${pirmas2} + ${antras2} = ${suma2}`);

// const pirmas3 = 8;
// const antras3 = 9;
// const suma3 = pirmas3 + antras3;
// console.log(`${pirmas3} + ${antras3} = ${suma3}`);

// const pirmas4 = 88;
// const antras4 = 99;
// const suma4 = pirmas4 + antras4;
// console.log(`${pirmas4} + ${antras4} = ${suma4}`);


function sumavimas(a, b) {
    const suma = a + b;
    console.log(`${a} + ${b} = ${suma}`);
}

sumavimas(2, 5);
sumavimas(22, 55);
sumavimas(-8, 17);


function pazymiuVidurkis(list) {
    let suma = 0;
    const kiekis = list.length;

    for (let i = 0; i < kiekis; i++) {
        const pazymys = list[i];
        suma = suma + pazymys;
    }

    const vidurkis = suma / kiekis;

    if (kiekis === 0) {
        console.log('Neturi pazymiu...');
    } else {
        console.log(`Vidurkis: ${vidurkis}.`);
    }
}

pazymiuVidurkis([5, 8, 9]);
pazymiuVidurkis([5, 8, 9, 7]);
pazymiuVidurkis([]);
pazymiuVidurkis([10, 10, 10, 10, 10, 10, 10]);