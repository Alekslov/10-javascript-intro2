const text = 'abcdef';

let back = '';

for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    back = letter + back;
}

// for (let i = text.length - 1; i >= 0; i--) {
//     const letter = text[i];
//     back = back + letter;
// }

// for (let i = 0; i < text.length; i++) {
//     const letter = text[text.length - i - 1];
//     back = back + letter;
// }

// for (let i = 1; i <= text.length; i++) {
//     const letter = text[text.length - i];
//     back = back + letter;
// }





console.log(text, '->', back);