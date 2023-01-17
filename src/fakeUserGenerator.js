import faker from "faker";
import fs from "fs";

function generateUser() {
  const users = [];

  for (let id = 0; id <=10; id++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumber();
    const avatar = faker.image.avatar();
    const jobTitle = faker.name.jobTitle();
    const company = faker.company.companyName();
    const address = faker.address.streetAddress();
    const city = faker.address.city();
    const state = faker.address.state();
    const zipCode = faker.address.zipCode();
    const country = faker.address.country();
    const date = faker.date.past();

    users.push({
      id,
      firstName,
      lastName,
      email,
      phone,
      avatar,
      jobTitle,
      company,
      address,
      city,
      state,
      zipCode,
      country,
      date,
    });
  }

  return { data: users };
}

const usersGenerate = generateUser();

fs.writeFileSync("data.json", JSON.stringify(usersGenerate, null, "\t"));
