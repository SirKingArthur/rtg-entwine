function newPerson(){
    //getRandomInt is from that github page i linked above
    let person = types[getRandomInt(0, types.length)];
    
    document.getElementById("person").innerHTML = `
    <button onclick="newPerson()">${person}</button>`;   
}
