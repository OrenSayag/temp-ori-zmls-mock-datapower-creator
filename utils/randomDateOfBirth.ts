const faker = require('faker')

export default () => {
    return faker.date.between(new Date('1921-01-01'), new Date())
}