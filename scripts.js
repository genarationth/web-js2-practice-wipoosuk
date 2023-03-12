//challenge 1 declair date//
const birthYear = new Date(1994, 1, 1);

const nextFiveYear = new Date(2028, 2, 12);

//display date//
document.getElementById("demo").innerHTML = nextFiveYear.getFullYear() - birthYear.getFullYear();


//challenge 2 create an object//
const informations = {
    name:"Wipoo. ", 
    city:"Udon Thani", 
    hobby:"singing and playing games."
};

//display infomations//
document.getElementById("name").innerHTML = informations.name;
document.getElementById("city").innerHTML = informations.city;
document.getElementById("hobby").innerHTML = informations.hobby;

