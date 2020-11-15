/****************************
 * KINTAMIEJI
****************************/

const age = 99;
console.log(age);

const year = 2020;
console.log(year);

const luckyNumber = 13;
console.log(luckyNumber);

const name = 'Johny';
console.log(name);

const city = 'Abu Dabis';
console.log(city);

const airplane = 'Boeing 747';
console.log(airplane);

const marks = [10, 7, 4, 8, 6];
console.log(marks);

const lottery = [13, 7, 24, 2];
console.log(lottery);

const cities = ['Big Apple (NY)', 'Sydney', 'Lisabona', 'Troskunai', 'Los Angel (LA)'];
console.log(cities);

const names = ['Chuck', 'Bruce', 'Wonder Woman', 'Algimantas', 'Walter', 'Xena'];
console.log(names);

/****************************
 * VEIKSMAI
****************************/

const sum = age + year + luckyNumber;
console.log(sum);

// const zodziai = name + ' ' + city + ' ' + airplane;
const zodziai = `${name} ${city} ${airplane}`;
console.log(zodziai);

// marks, lottery
// logika: 1 - 2 + 3 - 4 + 5

// 10 - 7 + 4 - 8 + 6 = 5
// const marksMath = marks[0] - marks[1] + marks[2] - marks[3] + marks[4];
let marksMath = 0;
marksMath = marksMath + marks[0];
marksMath = marksMath - marks[1];
marksMath = marksMath + marks[2];
marksMath = marksMath - marks[3];
marksMath = marksMath + marks[4];
console.log(marksMath);

// 13 - 7 + 24 - 2 = 28
// const lotteryMath = lottery[0] - lottery[1] + lottery[2] - lottery[3];
let lotteryMath = 0;
lotteryMath = lotteryMath + lottery[3];
lotteryMath = lotteryMath - lottery[2];
lotteryMath = lotteryMath + lottery[1];
lotteryMath = lotteryMath - lottery[0];
console.log(lotteryMath);

// cities, names
let allCities = '';

allCities = allCities + cities[4];
allCities = allCities + ', ' + cities[3];
allCities = allCities + ', ' + cities[2];
allCities = allCities + ', ' + cities[1];
allCities = allCities + ', ' + cities[0];

console.log(allCities);