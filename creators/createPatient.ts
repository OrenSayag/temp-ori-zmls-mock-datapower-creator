import { Patients } from "../schemas/patient"
import randomDateOfBirth from "../utils/randomDateOfBirth"
import { randomGender } from "../utils/randomGender"
import { randomIsraeliId } from "../utils/randomIsraeliId"
import { idIsTaken } from "./createAccount"
import createAppointment from "./createAppointment"
const faker = require('faker')

export const createPatient = async (props:any = {}) => {
    let {  numberOfAppointments ,id, firstName, lastName, address, gender, dateOfBirth } = props
    if(!id){
        id = randomIsraeliId()
        while(await idIsTaken(id)){
            id = randomIsraeliId()
        }
    }
    if(!gender){
        gender = randomGender()
    }
    if(!numberOfAppointments){
        numberOfAppointments = 5
    }
    const patient = new Patients({
        id: id,
        firstName: firstName || faker.name.firstName(gender),
        lastName: lastName || faker.name.lastName(gender),
        address: address || randomPatientAddress(),
        gender,
        dateOfBirth: dateOfBirth || randomDateOfBirth(),
    })

    for (let i = 0; i < numberOfAppointments; i++) {
        createAppointment(id)
    }

    await patient.save()
    return patient;
}

const randomPatientAddress = () => {
    return {
        cityCode: faker.address.zipCode('####'),
        city: faker.address.city(),
        street: faker.address.streetAddress(),
    }
}