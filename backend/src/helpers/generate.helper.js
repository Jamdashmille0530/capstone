import { faker } from '@faker-js/faker'

export const Generators = {
  fname: faker.name.firstName(),
  mname: faker.name.middleName(),
  lname: faker.name.lastName(),
  email: faker.internet.email(Date.now().toString(), Date.now().toString()),
  password: faker.internet.password(8),
  address: faker.address.city(),
}
