import faker from 'faker'

const number = faker.random.number();
const float = faker.random.float();
const arrayElement = faker.random.arrayElement();
const objectElement = faker.random.objectElement();
const uuid = faker.random.uuid();
const boolean = faker.random.boolean();
const word = faker.random.word();
const words = faker.random.words(5);
const image = faker.image.image();
const locale = faker.random.locale();
const alphaNumeric = faker.random.alphaNumeric();

console.log(`The random number is ${number}`);
console.log(`The random float is ${float}`);
console.log(`The random array element is ${arrayElement}`);
console.log(`The random object element is ${objectElement}`);
console.log(`The random uuid is ${uuid}`);
console.log(`The random boolean is ${boolean}`);
console.log(`The random word is ${word}`);
console.log(`The random words are ${words}`);
console.log(`The random image is ${image}`);
console.log(`The random locale is ${locale}`);
console.log(`The random alphaNumeric is ${alphaNumeric}`);


