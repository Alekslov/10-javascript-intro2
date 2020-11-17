function pickLetters(text, step) {
    // input validation
    if (typeof text !== 'string') {
        return 'ERROR: pirmoji reiksme ne teksto tipo.';
    }
    if (text === '') {
        return 'ERROR: tekstas negali buti tuscias.';
    }
    if (typeof step !== 'number') {
        return 'ERROR: antroji reiksme ne skaiciaus tipo.';
    }
    if (step % 1 !== 0) {
        return 'ERROR: zingsnis turi buti sveikasis skaicius.'
    }

    const size = text.length;

    if (step > size) {
        return 'ERROR: zingsnis yra per didelis lyginant su teksto ilgiu.'
    }
    if (step === 0) {
        return 'ERROR: zingsnis negali buti nulinis.';
    }

    // logic
    let rez = '';

    if (step > 0) {
        const firstLetterPosition = step - 1;
        for (let i = firstLetterPosition; i < size; i += step) {
            rez += text[i];
        }
    } else {
        const firstLetterPosition = size + step;
        for (let i = firstLetterPosition; i >= 0; i += step) {
            rez += text[i];
        }
    }

    // post logic validation

    // return
    return rez;
}

console.log(pickLetters(1561, 2));
console.log(pickLetters('1561', '2'));
console.log(pickLetters('abc', 4));
console.log(pickLetters('abc', 0));
console.log(pickLetters('abc', 1.5), '->', 'c');
console.log(pickLetters('abcdefghijkl', 1.5), '->', 'ci');

console.log(pickLetters('abc', 3), '->', 'c');
console.log(pickLetters('abcdefg', 2), '->', 'bdf');
console.log(pickLetters('abcdefghijkl', 3), '->', 'cfil');

console.log(pickLetters('abc', -3), '->', 'a');
console.log(pickLetters('abcdefg', -2), '->', 'fdb');
console.log(pickLetters('abcdefghijkl', -3), '->', 'jgda');

console.log(pickLetters('', 3));