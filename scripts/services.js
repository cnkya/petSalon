//use jQuery
let petSaloon={
    service:[ ],
}
//create the constructor
function Service(description, price){
    this.descritpion=description;
    this.price=price;
}

function isValid(service){
    let validation=true;

    if(service.descritpion==""){
        validation=false;
        $("#txtDescription").addClass("alert-error");
            
    }

    return validation;
}

function register(){
    console.log("Adding a new service");//displays in the console
    let inputDescription = $("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();
    let newService = new Service(inputDescription, inputPrice);//create a new service

    if(isValid(newService)){
        saveItem(newService);//add new service
        $("input").val("");//clears the input fields
    
    }
    displayServices();
    
}
function displayServices(){

    const petService=document.getElementById("petService");//gets the table
        petService.innerHTML ="";
for(let i=0;i<petSaloon.service.length;i++){//how many services are in the array
    let service=petSaloon.service[i];//get the current service
    
let row =`
    <tr>
        <td>${pet.description}</td>//displays the description
        <td>${pet.price}</td>//displays the price
        <td><button class="btn btn-danger" onclick="deletePet(${i})">Delete</button></td>//
        
    </tr>
    `;
    
    petService.innerHTML +=row;//insert the template into the HTML
    }
    
}