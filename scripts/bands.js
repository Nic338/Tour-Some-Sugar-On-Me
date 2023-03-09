import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

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
                // if (band.bandId === parseInt(bandId)) {
                //     for(const booking of bookings) {
                //         if (band.bandId === booking.bandId )  {
                //            const matchingVenue = findVenue(booking)
                if (band.bandId === parseInt(bandId)){
                    const bookings = filterBookingsByBands(band)
                    const venues = assignedVenueNames(bookings)
                           window.alert(`Upcoming shows:\n${venues} \n`)
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