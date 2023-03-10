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
    bandMembers: [
      {firstName: "Jemaine", lastName: "Clement", bandId: 7, role: "piano", born: 1974},
      {firstName: "Bret", lastName: "McKenzie", bandId: 7, role: "piano", born: 1976},
      {firstName: "Chet", lastName: "Nutly", bandId: 8, role: "lead singer", born: 1968},
      {firstName: "Allyson", lastName: "Circle", bandId: 8, role: "rhythm guitar", born: 1973},
      {firstName: "Gomer", lastName: "Yelton", bandId: 8, role: "keys", born: 1975},
      {firstName: "David", lastName: "Crumble", bandId: 8, role: "drummer", born: 1975},
      {firstName: "Nikkie", lastName: "Crumble", bandId: 8, role: "lead guitar", born: 1977},
      {firstName: "Stacy", lastName: "Slater", bandId: 6, role: "lead singer", born: 1986},
      {firstName: "Josh", lastName: "Grover", bandId: 6, role: "lead guitar", born: 1985},
      {firstName: "Kate", lastName: "Slater", bandId: 6, role: "bass guitar", born: 1984},
      {firstName: "Troy", lastName: "Barnes", bandId: 6, role: "drummer", born: 1985},
      {firstName: "Gabriella", lastName: "Nielson", bandId: 5, role: "lead singer", born: 1982},
      {firstName: "Kris", lastName: "Kristoffensen", bandId: 5, role: "guitar", born: 1989},
      {firstName: "Gregory", lastName: "Peck", bandId: 5, role: "guitar", born: 1979},
      {firstName: "Tony", lastName: "Stevenson", bandId: 5, role: "bass guitar", born: 1985},
      {firstName: "Liliana", lastName: "Sandersen", bandId: 5, role: "keys", born: 1984},
      {firstName: "Ophelia", lastName: "Mardoon", bandId: 5, role: "keys", born: 1984},
      {firstName: "David", lastName: "Cross", bandId: 5, role: "drummer", born: 1978},
      {firstName: "Arthur", lastName: "Creed", bandId: 4, role: "lead singer", born: 1983},
      {firstName: "Jimmy", lastName: "Hampton", bandId: 4, role: "lead guitar", born: 1983},
      {firstName: "Kevin", lastName: "O'Neal", bandId: 4, role: "drummer", born: 1983},
      {firstName: "Andy", lastName: "Dwyer", bandId: 3, role: "lead singer and guitar", born: 1981},
      {firstName: "James", lastName: "Pierson", bandId: 3, role: "drummer", born: 1980},
      {firstName: "Michael", lastName: "Chang", bandId: 3, role: "bass guitar", born: 1982},
      {firstName: "Burly", lastName: "", bandId: 3, role: "guitar", born: 1982},
      {firstName: "Rivers", lastName: "", bandId: 3, role: "drummer", born: 1984},
      {firstName: "Carl", lastName: "McDermond", bandId: 2, role: "lead singer", born: 1974},
      {firstName: "Nick", lastName: "Polento", bandId: 2, role: "lead guitar", born: 1978},
      {firstName: "Oscar", lastName: "Sanchez", bandId: 2, role: "drummer", born: 1974},
      {firstName: "Amy", lastName: "Preece", bandId: 1, role: "lead singer", born: 1987},
      {firstName: "Billy", lastName: "Schmorgan", bandId: 1, role: "lead guitar", born: 1979},
      {firstName: "Kenny", lastName: "Flowers", bandId: 1, role: "bass guitar", born: 1979},
      {firstName: "Horatio", lastName: "Almarez", bandId: 1, role: "drummer", born: 1980},
    ]
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
export const getBandMembers = () => {
   return database.bandMembers.map(bandMember => ({...bandMember}))
}