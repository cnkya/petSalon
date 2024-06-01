//use jQuery

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
    console.log("Adding a new service");
    let inputDescription = $("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();
    let newService = new Service(inputDescription, inputPrice);

    if(isValid(newService)){
        console.log(newService);
        $("input").val("");//clears the input fields
    
    }
}