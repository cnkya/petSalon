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
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;

}

function isValid(aPet){
    let validation =true;

    if(aPet.name==""){// is pet name empty?
        validation=false;
        document.getElementById("txtName").classList.add("alert-error")
    }
    
    if(aPet.service==""){// is pet service empty?
        validation=false;
        document.getElementById("txtService").classList.add("alert-error")
    }
    
    //validate the service

    return validation;
}

function register(){
    //getting the values (information) from the HTML
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("txtService").value;
    let inputType=document.getElementById("txtType").value;
    
    //creating the object
let newPet = new Pet(inputName,inputAge, inputGender,  inputBreed, inputService, inputType);

if(isValid(newPet)){//is the information valid
    petSaloon.pets.push(newPet);//adding the pet to the array
    //console.log(petSaloon.pets)//displaying on the console
    
    //displayTotalPets();
    //displayServiceCount();
    displayTypeCatCount();
    displayTypeDogCount();
    displayTypeOtherCount();
    displayRows();//calling the function in order to display it on the HTML, only displays when you click the button
}

}

function init(){
    let pet1= new Pet("Scooby", 15, "Male", "Poodle", "Grooming", "Dog",);//decalring an object//
    let pet2= new Pet("Oodles", 8, "Female", "Poodle","Vaccines", "Dog");//decalring an object//
    let pet3= new Pet("Dudley",33, "Male", "Feline","Grooming", "Cat");//decalring an object//

    petSaloon.pets.push(pet1, pet2, pet3);
    //console.log(petSaloon.pets); //displaying currents pets//
    
    //displayTotalPets();
    //displayServiceCount();
    displayTypeCatCount();
    displayTypeDogCount();
    displayTypeOtherCount();
    displayRows();//displays once you login
}
window.onload=init;//waiting for HTML to load before running javascript
        
    
    
    
    
    