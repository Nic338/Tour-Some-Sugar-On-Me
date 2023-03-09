import { getBookings, getBands, getVenues } from "./database.js";

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

const findCurrentBand = (booking) => {
    let currentBand = null
    for (const band of bands) {
        if (band.bandId === booking.bandId) {
            currentBand = band.name
            // console.log(currentBand)
        }
    }
    return currentBand
}

const findVenue = (booking) => {
    let currentVenue = null
    for (const venue of venues) {
        if (venue.venueId === booking.venueId) {
            currentVenue = venue.name
        }
    }
    return currentVenue
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("booking")){
        const [,bandId] = itemClicked.id.split("--")
            for (const band of bands) {
                if (band.bandId === parseInt(bandId)) {
                    window.alert(`${band.name} \n${band.genre}\nFormed in ${band.formed}\n${band.members} members `)
                }
            }
    }
})

// document.addEventListener("click", (clickEvent) => {
//     const itemClicked = clickEvent.target
//     if (itemClicked.id.startsWith("venue")){
//         const [,venueId] = itemClicked.id.split("--")
//             for (const venue of venues) {
//                 if (venue.venueId === parseInt(venueId)) {
//                     for(const booking of bookings) {
//                         if (venue.venueId === booking.venueId )  {
//                            const matchingBand = findCurrentBand(booking)
//                            window.alert(`These bands have this venue booked:\n• ${matchingBand}\n`)
//                         }             
//                     }
//                 }
//             }
//     }
// })

// document.addEventListener("click", (clickEvent) => {
//     const itemClicked = clickEvent.target
//     if (itemClicked.id.startsWith("band")){
//         const [,bandId] = itemClicked.id.split("--")
//             for (const band of bands) {
//                 if (band.bandId === parseInt(bandId)) {
//                     for(const booking of bookings) {
//                         if (band.bandId === booking.bandId )  {
//                            const matchingVenue = findVenue(booking)
//                            window.alert(`Upcoming shows: ${matchingVenue}`)
//                         }             
//                     }
//                     // window.alert(`These bands have this venue booked:•${band.name}\n`)
//                 }
//             }
//     }
// })



export const Bookings = () => {
    let bookingsHTML = ""
    
    bookingsHTML = "<ul>"
    
    for (const booking of bookings) {
        // console.log(bookings)
        const venue = findVenue(booking)
        const band = findCurrentBand(booking)
        
        bookingsHTML += `<li id="booking--${booking.bandId}">${band} are playing at ${venue} on ${booking.date}</li>`
        
        }
        bookingsHTML += "</ul>"
              
        return bookingsHTML
    }
