


    let petSaloon={
    name:"Pet Saloon",
    phone: "555-555-5555",
    hours:{
        open:"09:00 am",
        close:"09:00 pm"
    },
    
    pets:[
        {name:"Stuffy",
        age:88,
        gender: "Male",
        service:"Grooming",
        breed: "Poodle",
        },    
        {name:"Oodles",
        age:88,
        gender: "Girl",
        service:"Nail clip",
        breed: "Doodle"
        },
        {name:"Dudley",
        age:88,
        gender: "Male",
        service:"VIP",
        breed:"Dachsund"
        }
    ],
    }
  
function displayNames(){    
    let names="";
    
    for(let i=0;i<3;i++){
        names+= `<p> ${petSaloon.pets[i].name}</p>`;
        console.log(names);
        
    }
    document.getElementById("petNames").innerHTML=names;
}
function countPets(){
    

    
    console.log(petSaloon.pets.length)
    
        
    }
    
    
    
    