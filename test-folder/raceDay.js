let raceNumber = Math.floor(Math.random() * 1000);

const earlyRunner = true;

const runnersAge = 91;

if (runnersAge > 18 && earlyRunner === true) {
  raceNumber += 1000;
  console.log(raceNumber);
} else {
  console.log(raceNumber);
}

if (earlyRunner === true && raceNumber > 1000){
  console.log(`Number ${raceNumber}, your race starting time will be at 9:30 am. Thank you for your early registration.`)
} else if (runnersAge > 18 && earlyRunner === false) {
  console.log(`Number ${raceNumber}, your race time will start at 11 am. Thank you for your registration.`);
} else if (runnersAge < 18) { 
  console.log(`Number ${raceNumber}, your race time will be at 12:30 today. Good luck.`);
} else {
  console.log('Runners that are 18 years old and did not sign up for early registration, please come to the registration desk');
}