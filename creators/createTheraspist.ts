import { clinicCodes, languages, titles } from "../hardcodedNextBasement";
import { Therapists } from "../schemas/therapist";
import { randomGender } from "../utils/randomGender";
const faker = require('faker')


export const createTherapist = async (props = {}) => {
    const gender = randomGender();
    const therapist = new Therapists({
        firstName: faker.name.firstName(gender),
        lastName: faker.name.lastName(),
        gender: gender,
        languages: getRandomLangArr(),
        title: getRandomTitle(),
        clinics: randomClinicsPicker(),
        ...props
    })
    await therapist.save()
}

const getRandomLangArr = () => {
    return languages.slice(0,Math.floor(Math.random() * 5) +1 )
}

const getRandomTitle = ()=>{
    return faker.helpers.randomize(titles)
}

function randomClinicsPicker() {
    const clinics:string[] = []
    for (let i = 0; i < Math.floor(Math.random()*4); i++) {
        const randomIndex = Math.floor(Math.random()*clinicCodes.length)
        if(!clinics.some(c=>c===clinicCodes[randomIndex])){
            clinics.push(clinicCodes[randomIndex])
        }
    }
    return clinics
}