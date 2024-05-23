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