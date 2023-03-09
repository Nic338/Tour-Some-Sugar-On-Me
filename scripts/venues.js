import { getVenues, getBookings, getBands } from "./database.js";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()


const filterBookingsByBands = (singleVenue) => {
    const bandBookings = []
    for(const booking of bookings) {
        if(booking.venueId === singleVenue.venueId) {
            bandBookings.push(booking.bandId)
        }
    }
    return bandBookings
}

const assignedBandNames = (bandBookings) => {
    let bandNames = []
    for(const bandBooking of bandBookings) {
        for (const band of bands) {
            if (band.bandId === bandBooking)
            bandNames.push(`${band.name}\n`)
        }
    }
    return bandNames.join("")
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("venue")){
        const [,venueId] = itemClicked.id.split("--")
            for (const venue of venues) {
                if(venue.venueId === parseInt(venueId)) {
                    const bookings = filterBookingsByBands(venue)
                    const bands = assignedBandNames(bookings)
                    window.alert(`These bands have this venue booked:\n${bands} \n`)                   
                }
                // if (venue.venueId === parseInt(venueId)) {
                //     for(const booking of bookings) {
                //         if (venue.venueId === booking.venueId )  {
                //            const matchingBand = findCurrentBand(booking)
                        }             
                    }
                }   
)

export const Venues = () => {

    let venueHTML = "<ul>"

    for (const venue of venues) {
        venueHTML += `<li id="venue--${venue.venueId}">${venue.name}</li>`
    }

    venueHTML += "</ul>"

    return venueHTML
}