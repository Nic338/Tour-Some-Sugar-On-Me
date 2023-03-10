import { getBands, getBookings, getVenues, getBandMembers } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()
const bandMembers = getBandMembers()

// const findCurrentBand = (booking) => {
//     let currentBand = []
//     for (const band of bands) {
//         if (band.bandId === booking.bandId) {
//             currentBand = band.name
//             // console.log(currentBand)
//         }
//     }
//     return currentBand
// }
const filterBandMembersByBands = (singleBand) => {
    const currentBandMembers = []
    for(const bandMember of bandMembers) {
        if(singleBand.bandId === bandMember.bandId) {
            currentBandMembers.push(`${bandMember.firstName} ${bandMember.lastName} (${bandMember.role})\n`)
        }
    }
    // console.log(currentBandMembers)
    return currentBandMembers.join("")
}

const filterBookingsByBands = (singleBand) => {
    const venueBookings = []
    for(const booking of bookings) {
        if(booking.bandId === singleBand.bandId) {
            venueBookings.push(booking.venueId)
        }
    }
    return venueBookings
}

const assignedVenueNames = (venueBookings) => {
    let venueNames = []
    for(const venueBooking of venueBookings) {
        for (const venue of venues) {
            if (venue.venueId === venueBooking)
            venueNames.push(`${venue.name}\n`)
        }
    }
    return venueNames.join("")
}


// const findVenue = (booking) => {
//     let currentVenue = []
//     for (const venue of venues) {
//         if (venue.venueId === booking.venueId) {
//             currentVenue.push(`${venue.name}`)
//         }
//     }
//     return currentVenue
// }


document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("band")){
        const [,bandId] = itemClicked.id.split("--")
            for (const band of bands) {
                if (band.bandId === parseInt(bandId)){
                    const bookings = filterBookingsByBands(band)
                    const venues = assignedVenueNames(bookings)
                    const bandMembers = filterBandMembersByBands(band)
                           window.alert(`${bandMembers} \n Upcoming shows:\n${venues} \n`)
                        }             
                    }
                    // window.alert(`These bands have this venue booked:•${band.name}\n`)
                }
            }
    
)

export const Bands = () => {

    let bandHTML = "<ul>"

    for (const band of bands) {
        bandHTML += `<li id="band--${band.bandId}">${band.name}</li>`
    }

    bandHTML += "</ul>"

    return bandHTML
}