import { appointmentLengts, clinicCodes, hoursOfAppointments, servicecCodes } from "../hardcodedNextBasement"
import { Slots } from "../schemas/slots"
import { Therapists } from "../schemas/therapist"

const faker = require('faker')

export default async (props?:any) => {
    let clinic = faker.helpers.randomize(clinicCodes)
    let therapist = await Therapists.find({clinics: clinic})
    while(!therapist || therapist.length===0){
        clinic = faker.helpers.randomize(clinicCodes)
        therapist = await Therapists.find({clinics: clinic})
    }
    const slot = new Slots({
        time: faker.helpers.randomize(hoursOfAppointments),
        date: faker.date.future(),
        length: faker.helpers.randomize(appointmentLengts),
        service: faker.helpers.randomize(servicecCodes),
        therapist: therapist[0]._id,
        price: {
            amount: Math.floor(Math.random()*100),
            disclaimer:  "נא לא לשכוח כרטיס מגנטי"
        },
        ...props
    })
    await slot.save()
    return slot
}