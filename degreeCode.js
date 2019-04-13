// the temperature of kelvin today
const kelvin = 0;
//celsius is always 273 degrees minus kelvin
let celsius = kelvin - 273;
//the equation to turn the temurature to Newtons
let newton = celsius * (33/100);
//rounds down to the nearest whole number with Math.floor()
newton = Math.floor(newton);
//the equation to turn the temurature to fahrenheit
let fahrenhiet = celsius * (9/5) + 32;
fahrenhiet = Math.floor(fahrenhiet);

console.log(`The temperature is ${kelvin} degrees kelvin,
${celsius} degrees celsius,
${newton} Newtons,
and ${fahrenhiet} degrees Fahrenhiet.`);