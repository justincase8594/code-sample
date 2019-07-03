// function that tells you how old you wil be or how many years before you we're on the givin year
function howOld(age, year) {
  let currentYear = new Date().getFullYear();
  let bornYear = currentYear - age;
  if (year > currentYear){
    let difference = Math.abs(year - currentYear);
    let futureAge = age + difference;
    return `You will be ${futureAge} in the year ${year}`;
  }
  if (year <= bornYear){
    let differenceYear = Math.abs(year - bornYear);
    let beforeYears = differenceYear - bornYear;
    return `The year ${year} was ${differenceYear} years before you were born`;
  }
  if (year < currentYear && year > bornYear){
    let difference = Math.abs(year - currentYear);
    let previousAge = age - difference;
    return `You were ${previousAge} in the year ${year}`;
  }
}
console.log(howOld(21, 1991));
