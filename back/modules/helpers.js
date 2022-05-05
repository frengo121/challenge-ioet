const normalDays = ['MO', 'TU', 'WE', 'TH', 'FR'];
const weekendDays = ['SA', 'SU'];

const timeToNumber = date => {
  return isNaN(parseInt(date.replace(':', '')))
    ? 0
    : parseInt(date.replace(':', ''));
};

const validateSchedule = (day, schedule) => {
  let value = 0;
  const firstTime = timeToNumber(schedule.split('-')[0]);
  const lastTime = timeToNumber(schedule.split('-')[1]);

  if (normalDays.includes(day)) {
    if (firstTime >= 1 && lastTime <= 900) value = 25;
    if (firstTime >= 901 && lastTime <= 1800) value = 15;
    if (firstTime >= 1801 && (lastTime == 0 || lastTime <= 2359)) value = 20;
  } else if (weekendDays.includes(day)) {
    if (firstTime >= 1 && lastTime <= 900) value = 30;
    if (firstTime >= 901 && lastTime <= 1800) value = 20;
    if (firstTime >= 1801 && (lastTime == 0 || lastTime <= 2359)) value = 25;
  } else {
    value = 0;
  }
  return value;
};

const validateHour = hours => {
  const hoursArray = hours.split(',');
  let totalHours = 0;
  hoursArray.forEach(hour => {
    const day = hour.substr(0, 2);
    const schedule = hour.substr(2);
    const valuePerHour = validateSchedule(day, schedule);
    const firstHour = parseInt(schedule.split('-')[0]);
    const lastHour = parseInt(schedule.split('-')[1]);
    let hoursPerDay = lastHour - firstHour;
    if (hoursPerDay < 0) {
      hoursPerDay = 24 - firstHour;
    }
    const totalPayPerDay = hoursPerDay * valuePerHour;
    totalHours = totalHours + totalPayPerDay;
  });
  return totalHours;
};

const generateResponse = people => {
  let valuesOfResponse = [];
  people.map(employee => {
    const name = employee.split('=')[0];
    const hours = employee.split('=')[1];
    const pay = validateHour(hours);
    valuesOfResponse.push({ name: name, pay: pay });
  });
  return valuesOfResponse;
};

module.exports = {
  normalDays,
  timeToNumber,
  validateSchedule,
  validateHour,
  generateResponse,
};
