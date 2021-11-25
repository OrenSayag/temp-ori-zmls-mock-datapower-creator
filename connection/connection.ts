import { Accounts } from "../schemas/account";
const mongoose = require('mongoose');
const faker = require('faker')

const { fake } = faker

main()

async function main() {
    const numberOfAccounts = 2
    try {
        await mongoose.connect('mongodb://localhost:27017/test');
        console.log("connected to mongodb")

        faker.locale = "he";

        for (let i = 0; i < numberOfAccounts; i++) {
            createAccount()
        }

    } catch (error) {
        console.log(error)
    }
}

const createAccount = async (numberOfPatients?:number) => {
    const patientsToCreate = numberOfPatients || Math.floor(Math.random()*10)+1
    
    const patients = []
    for (let i = 0; i < patientsToCreate; i++) {
        
    }

    const account = new Accounts({
        id: fake("{{datatype.uuid}}"),
        gender: randomGender(),
    });
    console.log(account)
    // await account.save()
}

// const createPatients = async (numberOfPatients:number) => {
//     for (let i = 0; i < numberOfPatients; i++) {
//         const patient = new Patients({
//             // id: fake("{{datatype.uuid}}"),
//             // gender: randomGender(),
//         });
//         await patient.save()
//     }
// }

const randomGender = () => {
    return ['male','female'][Math.floor(Math.random()*2)]
}

const createPatient = (props = {}) => {
    return {
        id: '1234',
        ...props
    };
}