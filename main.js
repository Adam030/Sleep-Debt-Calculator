const getSleepHours = day => {
    if(day === 'monday'){
      return 8;
    } else if (day === 'tuesday') {
      return 7;
    }  else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 6;
    } else if (day === 'friday') {
      return 9;
    } else if (day === 'saturday') {
      return 8;
    } else if (day === 'sunday') {
      return 10;
    } else {
      return 'Error!'
    }
  };
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () =>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You have got ' + actualSleepHours + ' hours of sleep this week, it is a perfect amount.');
    }
  if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed this week.');
    }
  if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.'); }
  }
  
  
  calculateSleepDebt();