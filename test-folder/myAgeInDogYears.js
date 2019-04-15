// converting my age into dog years
const myAge = 23;
let earlyYears = 2;
//the first 2 years of a dog === 10.5 year to human
earlyYears = earlyYears * 10.5;
//taking the first 2 years off because we are going to add them
let laterYears = myAge - 2;
// 4 dogyears === 1 laterYear
laterYears = laterYears * 4;
//adding the totals to complete my age in dog years
myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
// my name in lower case
myName = "Justin Rodriguez".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)