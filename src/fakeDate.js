import faker from 'faker'

const weekday = faker.date.weekday();
const month = faker.date.month();
const pastDate = faker.date.past();
const futureDate = faker.date.future();
const recentDate = faker.date.recent();

console.log(`Today is ${weekday} ${month}`);
console.log(`The past date is ${pastDate}`);
console.log(`The future date is ${futureDate}`);
console.log(`The recent date is ${recentDate}`);
