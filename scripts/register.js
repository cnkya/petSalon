


    //let pet1={
    
//}
   // let pet2={
    
//}
    //let pet3={
        
    //}
    let petSaloon={
    name:"Pet Saloon",
    phone: "555-555-5555",
    hours:{
        open:"09:00 am",
        close:"09:00 pm"
    },

    pets:[//array anonymous obj//
        {name:"Stuffy",
        age:88,
        gender: "Male",
        service:"Grooming"
        },    
        {name:"Oodles",
        age:88,
        gender: "Girl",
        service:"Nail clip"
        },
        {name:"Dudley",
        age:88,
        gender: "Male",
        service:"VIP",
        }
    ]
    }
    

    function displayNames(){

    //for loop
console.log(petSaloon.pets[2].name);

    }
    
    
    function countPets(){
    
        console.log(petSaloon.pets.length);
    
    }