let petSaloon={
    name:"Pet Saloon",
    phone: "555-555-5555",
    hours:{
        open:"09:00 am",
        close:"09:00 pm"
    
    },
    
    pets:[ ],
}

function Pet(name,age,gender,breed,service,type){//constructor
    //properties = parameters//
    this.name=name
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;

}


function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("txtService").value;
    
let newPet = new Pet(inputAge, inputGender, inputName, inputBreed, inputService);
petSaloon.pets.push(newPet);
    console.log(petSaloon.pets)
}

function init(){
    let pet1= new Pet("Scooby", 15, "Male", "Grooming");//decalring an object//
    let pet2= new Pet("Oodles", 8, "Female", "Vaccines");
    let pet3= new Pet("Dudley",33, "Male", "Grooming");

    petSaloon.pets.push(pet1,pet2,pet3);
        console.log(petSaloon.pets);

}
window.onload=init;//waiting for HTML to load before running javascript
        
    
    
    
    
    