function saveItem(item){
    let items = readItems();
    items.push(item);
    let val = JSON.stringify(items);//converts the object to a string
    console.log(val);//displays the string in the console
    localStorage.setItem("services", val);//send the value to the local storage
}

function readItems(){
    let data = localStorage.getItem("services");//gets the value from the local storage
    if(!data){
        return [];//returns an empty array if there is no data in the local storage
    }else{
        let list = JSON.parse(data);//converts the string to an object
        return list;//returns the object

    }
}