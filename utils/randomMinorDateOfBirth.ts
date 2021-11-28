const faker = require('faker')

export default () => {
    return faker.date.between(new Date('2003-11-25'), new Date('2021-01-01'))
}