import { createAccount } from "../creators/createAccount";
import { createFamily } from "../creators/createFamily";
import createSlot from "../creators/createSlot";
import { createTherapist } from "../creators/createTheraspist";
const mongoose = require('mongoose');
const faker = require('faker')
const yargs = require('yargs')
require('dotenv').config()
const argv = yargs.argv


main()

async function main() {

    const { accounts, therapists, slots, families } = argv

    const numberOfAccounts = accounts!==undefined ? accounts : 2
    const numberOfTherapists = therapists !==undefined ? therapists : 10
    const numberOfSlots = slots !==undefined ? slots : 100
    const numberOfFamilies = families !==undefined ? families : 2

    try {
        await mongoose.connect(process.env.MONGO_CONNECT);
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

        for (let i = 0; i < numberOfFamilies; i++) {
            await createFamily()
        }

        console.log("Done.")

    } catch (error) {
        console.log(error)
    }
}