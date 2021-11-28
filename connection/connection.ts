import { createAccount } from "../creators/createAccount";
import { createFamily } from "../creators/createFamily";
import createSlot from "../creators/createSlot";
import { createTherapist } from "../creators/createTheraspist";
const mongoose = require('mongoose');
const faker = require('faker')
const yargs = require('yargs')
const argv = yargs.argv


main()

async function main() {

    const { accounts, therapists, slots, families } = argv

    // TODO this should come from yargs
    const numberOfAccounts = accounts || 2
    const numberOfTherapists = therapists || 10
    const numberOfSlots = slots || 100
    const numberOfFamilies = families || 2

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

        for (let i = 0; i < numberOfFamilies; i++) {
            await createFamily()
        }

        console.log("Done.")
        console.log(`Created ${accounts || 2} accounts.`)
        console.log(`${families || 2} families.`)
        console.log(`${therapists || 10} therapists.`)
        console.log(`${slots || 100} slots.`)

    } catch (error) {
        console.log(error)
    }
}