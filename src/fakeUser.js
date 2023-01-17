// const faker = require("faker");

import faker from 'faker'

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

const jobTitle = faker.name.jobTitle();
const jobArea = faker.name.jobArea();

const prefix = faker.name.prefix();
const suffix = faker.name.suffix();

const phone = faker.phone.phoneNumberFormat();

const pet = faker.animal.dog();

console.log(
  `Hello ${prefix} ${firstName} ${lastName}! You are a ${jobTitle}! You work in ${jobArea}! ${suffix}`
);

console.log(`Your phone number is ${phone}`);

console.log(`Your pet is a ${pet}`);  