const assert = require('assert');
const helpers = require('../modules/helpers');

describe('Test parse time to int', () => {
  it('Parse correctly time param', () => {
    const time = '12:45';
    assert.equal(helpers.timeToNumber(time), 1245);
  });
  it('Should return 0 if is a void string', () => {
    const time = '';
    assert.equal(helpers.timeToNumber(time), 0);
  });
  it('Should return 0 if is not a time', () => {
    const time = 'string';
    assert.equal(helpers.timeToNumber(time), 0);
  });
});

describe('Test about validate the schedule with the value of rate', () => {
  it('Should return 20 when have a string with a schedule in a normal day between 18:01 and 00:00', () => {
    const day = 'MO';
    const schedule = '20:00-21:00';
    assert.equal(helpers.validateSchedule(day, schedule), 20);
  });
  it('Should return 20 when have a string with a schedule in a weekend between 09:01 and 18:00', () => {
    const day = 'SA';
    const schedule = '10:00-16:00';
    assert.equal(helpers.validateSchedule(day, schedule), 20);
  });
  it('Should return 0 when is incorrect day', () => {
    const day = 'MONDAY';
    const schedule = '10:00-16:00';
    assert.equal(helpers.validateSchedule(day, schedule), 0);
  });
  it('Should return 25 when have a string with a schedule in a weekend like 00:00', () => {
    const day = 'SA';
    const schedule = '22:00-00:01';
    assert.equal(helpers.validateSchedule(day, schedule), 25);
  });
});

describe('Test rate of employee', () => {
  it('Should return 110 if have a schedule like MO20:00-00:00,TU10:00-12:00', () => {
    const hours = 'MO20:00-00:00,TU10:00-12:00';
    assert.equal(helpers.validateHour(hours), 110);
  });
});

describe('Test response of the API', () => {
  it('Should return array', () => {
    const employee = ['FREDDY=MO20:00-00:00,TU10:00-12:00'];
    const mock = [{ name: 'FREDDY', pay: 110 }];
    assert.deepEqual(helpers.generateResponse(employee), mock);
  });
});
