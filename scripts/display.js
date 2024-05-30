function displayRows(){

    const petTable=document.getElementById("petTable");    
        petTable.innerHTML ="";
for(let i=0;i<petSaloon.pets.length;i++){//how many pets are in the array
    let pet=petSaloon.pets[i];//get the current pet
    //declare the variables and create the HTML template
    //clears the table
let row =`
    <tr>
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        <td>${pet.type}</td>
        <td>${pet.payment}</td> 
        <td><button class="btn btn-danger" onclick="deletePet(${i})">Delete</button></td>
        
    </tr>
    `;
    
    
    petTable.innerHTML +=row;//insert the template into the HTML
    }
}
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