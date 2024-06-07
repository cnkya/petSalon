let petSaloon={
    name:"Pet Saloon",
    phone: "555-555-5555",
    hours:{
        open:"09:00 am",
        close:"09:00 pm"
    },
    
    pets:[ ],
    
    
}


function Pet(name,age,gender,breed,service,type,pay){//constructor
    //properties = parameters//
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
    this.pay=pay;
}

function isValid(aPet){
    let validation=true;

    if(aPet.name==""){// is pet name empty?
        validation=false;
        document.getElementById("txtName").classList.add("alert-error")
    }
    
    if(aPet.service==""){// is pet service empty?
        validation=false;
        document.getElementById("txtService").classList.add("alert-error")
    }
    if(aPet.pay==""){// is pet service empty?
        validation=false;
        document.getElementById("txtPay").classList.add("alert-error")
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
    let inputPay=document.getElementById("txtPay").value;
    
    //creating the object
let newPet = new Pet(inputName,inputAge, inputGender,  inputBreed, inputService, inputType, inputPay);

if(isValid(newPet)){//is the information valid
    petSaloon.pets.push(newPet);//adding the pet to the array
    //console.log(petSaloon.pets)//displaying on the console
    
    displayRows();//calling the function in order to display it on the HTML, only displays when you click the button
    displayTypeCatCount();
    displayTypeDogCount();
    displayTypeOtherCount();
    
}

}
function deletePet(index){
    petSaloon.pets.splice(index,1);//removes the pet from the array
    displayRows();//displays once you login
    displayTypeCatCount();
    displayTypeDogCount();
    displayTypeOtherCount();
}

function getServices(){ 
    let serviceList = readItems();//read the LS to get the services
    let option;//read the LS to get the services

    //travel the array of services
for(let i=0;i<serviceList.length;i++){
    option=`<option value="${serviceList[i].description}">${serviceList[i].description} </option>`; //create the option on the HTML

    $("#txtService").append(option);//append the option to the HTML
}
}

function init(){
    let pet1= new Pet("Scooby", 15, "Male", "Poodle", "Grooming", "Dog","Cash");//declaring an object//
    let pet2= new Pet("Oodles", 8, "Female", "Poodle","Vaccines", "Dog","Credit/Debit Card");//declaring an object//
    let pet3= new Pet("Dudley",33, "Male", "Siamese","Grooming", "Cat","Venmo/Cashapp");//declaring an object//

    petSaloon.pets.push(pet1);
    petSaloon.pets.push(pet2);
    petSaloon.pets.push(pet3);
    //console.log(petSaloon.pets); //displaying currents pets//
    
    displayRows();//displays once you login
    displayTypeCatCount();
    displayTypeDogCount();
    displayTypeOtherCount();
    getServices();


}
window.onload=init;//waiting for HTML to load before running javascript
        
    
    
    
    
