import { createAccount } from "../creators/createAccount";
import createSlot from "../creators/createSlot";
import { createTherapist } from "../creators/createTheraspist";
const mongoose = require('mongoose');
const faker = require('faker')

main()

async function main() {

    // TODO this should come from yargs
    const numberOfAccounts = 2
    const numberOfTherapists = 2 || 10
    const numberOfSlots = 20 || 100

    try {
        await mongoose.connect('mongodb://localhost:27017/test');
        console.log("connected to mongodb")

        faker.locale = "he";

        for (let i = 0; i < numberOfTherapists; i++) {
            await createTherapist()
        }

        for (let i = 0; i < numberOfSlots; i++) {
            await createSlot()   
        }

        for (let i = 0; i < numberOfAccounts; i++) {
            await createAccount()
        }

        console.log("Done.")

    } catch (error) {
        console.log(error)
    }
}