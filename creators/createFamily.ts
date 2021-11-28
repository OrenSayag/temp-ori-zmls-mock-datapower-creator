import { Accounts } from "../schemas/account";
import randomAdultDateOfBirth from "../utils/randomAdultDateOfBirth";
import { randomGender } from "../utils/randomGender";
import { randomIsraeliId } from "../utils/randomIsraeliId";
import randomMinorDateOfBirth from "../utils/randomMinorDateOfBirth";
import { createPatient } from "./createPatient";
const faker = require('faker')


export const createFamily = async (numberOfPatients?:number) => {
    const patientsToCreate = numberOfPatients || Math.floor(Math.random()*10)+1
    let accountId = randomIsraeliId()
    const accountGender = randomGender()
    const accountLastName = faker.name.lastName(accountGender)

    while(await idIsTaken(accountId)){
        accountId = randomIsraeliId()
    }
    const patients = []
    for (let i = 0; i < patientsToCreate; i++) {
        if(i===0){
            patients.push(await createPatient({
                id: accountId,
                lastName: accountLastName,
                gender: accountGender,
                dateOfBirth: randomAdultDateOfBirth()
            }))
        } 
        else if (i===1) {
            patients.push(await createPatient({
                id: accountId,
                lastName: accountLastName,
                gender: randomGender(),
                dateOfBirth: randomAdultDateOfBirth()
            }))
        }
        else {
            patients.push(await createPatient({
                lastName: accountLastName,
                dateOfBirth: randomMinorDateOfBirth()
            }))
        }
    }

    const account = new Accounts({
        id: accountId,
        gender: randomGender(),
        patients
    });
    await account.save()
}

export const idIsTaken = async (id:number) => {
    const accountsWithThisId = await Accounts.find({id:+id})
    return accountsWithThisId.length
}