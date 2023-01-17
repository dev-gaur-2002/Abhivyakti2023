const eventData = [
    { // sample template  for event object;
        id:1,
        name: "dummy",
        organiser: "club_name",
        redirectPath:"path",
        image:"cloudinary_link",
        registration_start : new Date(), 
        registration_end: new Date(), // date for registraions closing,
        description: "short description for the event",
        timeline:[
            {
                id:1,
                title:"round_name",
                date: new Date(), // date for that round
                description: "about that round",

            }
             // number of objects will be according to rounds;
        ],
        prizes:[
            "firstPize","secondPrize"
        ],
        meta:{
            description:"about the event",
            keywords:"meta tags here",
            image:"cloudinary_link"
        }

    },
]

export default eventData