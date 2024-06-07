//use jQuery
let petSaloon={
    service:[ ],
}
//create the constructor
function Service(description, price){
    this.description=description;
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
    let services=readItems("services");//read the services
    for(let i=0;i<services.length;i++){
        let service=services[i];
        let row =`
        <tr>
            <td>${service.description}</td>//displays the description
            <td>${service.price}</td>//displays the price
            <td><button class="btn btn-danger" onclick="deleteService(${i})">Delete</button></td>//
            
        </tr>
        `;
        $("#serviceTable").append(row);
        //insert the template into the HTML
    }
    
    
    }
    

