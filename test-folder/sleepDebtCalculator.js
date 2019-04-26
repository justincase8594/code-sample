// sleep debt calqulator
const getSleepHours = (day) => {
  switch (day){
    case 'Monday':
    	return 8;
    	break;
    case 'Tuesday':
    	return 8;
    	break;
    case 'Wednesday':
    	return 8;
    	break;
    case 'Thursday':
    	return 8;
    	break;
    case 'Friday':
    	return 8;
    case 'Saturday':
    	return 8;
    	break;
    case 'Sunday':
    	return 8;
    	break;
    
    defauly:
      return 'Error';
  }
};

const getActualSleepHours = () => 
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday') 
  
;

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
 let actualSleepHours = getActualSleepHours();
	let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than you needed');
  } else{
    console.log('You should get some more rest.');
  }
  };

calculateSleepDebt();

