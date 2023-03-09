const database = {
    bands: [{
       name: "Rocket Pumpkins",
       members: 4,
       genre: "EDM",
       formed: 2005,
       bandId: 1
    },
    {
        name: "Goose Triangle Brigade",
        members: 3,
        genre: "Alternative",
        formed: 2020,
        bandId: 2
     },
     {
        name: "Mouse Rat",
        members: 5,
        genre: "Rock",
        formed: 1995,
        bandId: 3
     },
     {
        name: "Phunk",
        members: 3,
        genre: "Funk",
        formed: 2001,
        bandId: 4
     },
     {
        name: "Translucent Audible Contemporary Orchestra",
        members: 7,
        genre: "Symphonic Metal",
        formed: 1982,
        bandId: 5
     },
     {
        name: "Sludge Crustacean",
        members: 4,
        genre: "Folk Pop",
        formed: 2018,
        bandId: 6
     },
     {
        name: "Flight of the Conchords",
        members: 2,
        genre: "Folk Comedy Rock",
        formed: 2001,
        bandId: 7
     },
     {
        name: "Big Lizard",
        members: 5,
        genre: "Southern Rock",
        formed: 1997,
        bandId: 8
     }],
    venues: [{
         name:"Tito's Bar and Grill",
         venueId: 1,
         address: "459 Quarrier Street East",
         sqft: 1500,
         maxOccupancy: 150,
     },
     {
         name: "The Lounge",
         venueId: 2,
         address: "326 Madison Ave",
         sqft: 3000,
         maxOccupancy: 350,
     },
     {
         name: "Grants",
         venueId: 3,
         address: "876 Grant Street",
         sqft: 1000,
         maxOccupancy: 100,
     },
     {
         name: "The Mote Theater",
         venueId: 4,
         address: "827 Virginia Street",
         sqft: 4300,
         maxOccupancy: 450,
     },
     {
         name: "Blue Rocks",
         venueId: 5,
         address: "13800 W. Alameeduh Pkwy",
         sqft: 96000,
         maxOccupancy: 9500,
      },
      {
         name: "Chesters",
         venueId: 6,
         address: "124 Cross Street",
         sqft: 3200,
         maxOccupancy: 186,
      },
      {
         name: "The Brickhouse",
         venueId: 7,
         address: "516 Sea Street",
         sqft: 3600,
         maxOccupancy: 250,
      },
      {
         name: "Cold River Mountain",
         venueId: 8,
         address: "456 Kanawha Two Mile",
         sqft: 13000,
         maxOccupancy: 1500,
      }],
    bookings: [
      {id: 1, bandId: 3, venueId: 1, date: "3/25/2023"},
      {id: 2, bandId: 4, venueId: 6, date: "4/2/2023"},
      {id: 3, bandId: 1, venueId: 3, date: "3/14/2023"},
      {id: 4, bandId: 2, venueId: 5, date: "3/25/2023"},
      {id: 5, bandId: 6, venueId: 2, date: "4/15/2023"},
      {id: 6, bandId: 5, venueId: 4, date: "3/26/2023"},
      {id: 7, bandId: 7, venueId: 5, date: "4/1/2023"},
      {id: 8, bandId: 8, venueId: 8, date: "3/10/2023"},
      {id: 9, bandId: 7, venueId: 3, date: "4/4/2023"},
      {id: 10, bandId: 3, venueId: 2, date: "4/15/2023"},
      {id: 11, bandId: 4, venueId: 1, date: "4/26/2023"},
      {id: 12, bandId: 6, venueId: 1, date: "4/23/2023"},
      {id: 13, bandId: 7, venueId: 4, date: "3/15/2023"},
      {id: 14, bandId: 1, venueId: 6, date: "3/17/2023"},
      {id: 15, bandId: 2, venueId: 3, date: "3/18/2023"},
      {id: 16, bandId: 4, venueId: 6, date: "3/16/2023"},
   ] ,
}


export const getBands = () => {
   return database.bands.map(band => ({...band}))
}
export const getVenues = () => {
   return database.venues.map(venue => ({...venue}))
}
export const getBookings = () => {
   return database.bookings.map(booking => ({...booking}))
}