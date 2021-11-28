import { Appointments } from "../schemas/appointments"
import { Slots } from "../schemas/slots"
import createSlot from "./createSlot"
const faker = require('faker')

export default async (patientId:string) => {
    const slot = await createSlot()
    const appointment = new Appointments({
        slot: slot._id,
        linkedToPatient: patientId
    })
    slot.isAvailable = false;
    await slot.save()
    await appointment.save()
}