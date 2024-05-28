function displayRows(){
    //declare the variables
let rows="";
    const petDiv=document.getElementById("petDiv");
    //travel the array of pets
for(let i=0;i<petSaloon.pets.length;i++){
    let pet=petSaloon.pets[i];
    //create the HTML template

    // calling the properties
    rows+=`
    <div class="petRow">
        <h4>${pet.name}</h4>
        <p>${pet.age}</p>
        <p>${pet.gender}</p>
        <p>${pet.breed}</p>
        <p>${pet.service}</p>
        <p>${pet.type}</p>
    </div>
    `;
    //console.log(card); //testing purposes
    }
    //petDiv.innerHTML=rows;
    //insert the template into the HTML


}
//function displayTotalPets(){
    //document.getElementById("total").innerHTML=petSaloon.pets.length;
    
//}

//function displayServiceCount(){
    //let grooming=0;

    //for(let i=0;i<petSaloon.pets.length;i++){
       // let pet=petSaloon.pets[i];
       // if(pet.service=="Grooming"){
        //    grooming++;//counts the number of grooming services//
       // }
//}
//document.getElementById("totalGrooming").innerHTML=grooming;
//}

function displayTypeCatCount(){
    let cat=0;

    for(let i=0;i<petSaloon.pets.length;i++){
        let pet=petSaloon.pets[i];
        if(pet.type=="Cat"){
            cat++;//counts the number of cats//
        }
}

document.getElementById("totalCat").innerHTML=cat;

}

function displayTypeDogCount(){
    let dog=0;

    for(let i=0;i<petSaloon.pets.length;i++){
        let pet=petSaloon.pets[i];
        if(pet.type=="Dog"){
            dog++;//counts the number of dogs//
        }
}

document.getElementById("totalDog").innerHTML=dog;
}

function displayTypeOtherCount(){
    let other=0;

    for(let i=0;i<petSaloon.pets.length;i++){
        let pet=petSaloon.pets[i];
        if(pet.type=="Other"){
            other++;//counts the number of other//
        }
}
document.getElementById("totalOther").innerHTML=other;
}