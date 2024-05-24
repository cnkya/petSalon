var globalVariable="I am global variable"

function myFunction(){
    var localVariable="I am global variable"
    console.log(localVariable);
    console.log(globalVariable);

    globalVariable="I change it!!!"

    if(true){
        let blockVariable="I am block variable";
        console.log(blockVariable);
        console.log(globalVariable);
    }
}


//object literal//

let student1={
    name:"Karen",
    email: "karen@gmail.com",
    grade101: 3.5,
    grade102: 3.9

}

let student2={
    name:"Jacob",
    email: "Jacob@gmail.com",
    grade101: 3.5,
    grade102: 3.9

}

let student3={
    name:"Billy",
    email: "Billy@gmail.com",
    grade101: 3.5,
    grade102: 3.9
}

console.log(student1);

//Arrays//
let myArrary=[10, false, "Richard", student2]
console.log(myArrary[3])

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
    ]
    }
    

    function displayNames(){

    //for loop
console.log(petSaloon.pets[2].name);

    }
    
    
    function countPets(){
    
        console.log(petSaloon.pets.length);
    
    }