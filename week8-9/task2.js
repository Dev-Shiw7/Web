var myGuests=[{name:"Muskan", age:23, RSVP: true}, {name:"Sonia", age:23, RSVP:false}, {name:"Koyal", age:22, RSVP: true}, 
{name:"Prena", age:21, RSVP:false}];

    

 function invitation(...allGuests){
        allGuests.forEach(x => {
            let invite=`I send my warm greetings to ${x.name}, ${x.age} with RSVP status
             ${ x.RSVP ? "Coming" : "No/ Maybe"}. I would like to share a big day for my career -- landing my dream project--
              to celebrate with you and everyone I care about. I will e-mail you the venue and timing in my next e-mail. Your
             presence means so much to me, I hope to see you there on the day of event.\n`  
            console.log(invite);

        })
    }
   invitation(...myGuests );
 

// const details=[`The venue will be Auditorium, Sukkur IBA University, Airport Road, Sukkur. \n`, `The small event will start at 8:30 pm on 2nd May, 2024` ];
// const finalInvitation=(myGuests,...details);