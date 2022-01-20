//buttons
let ViewRamCombos = document.querySelector("#ram_button");
let ViewMilliaCombos = document.querySelector("#millia_button");
let ViewMiscCombos = document.querySelector('#rand_button');
let VidDiv = document.querySelector("#VidDiv");
let ToggleDarkMode = document.querySelector("#DButton")
let YeaBwoi = document.body;
//assigning variables to the mp4s

let Ram1 = document.createElement("video").className ="combos";
let Ram2 = document.createElement("video").className = "combos";
let Millia1 = document.createElement("video").className = "combos";
let Millia2 = document.createElement("video").className = "combos";
let Anji = document.createElement("video").className = "combos";
let Sol = document.createElement("video").className = "combos";
let Ky= document.createElement("video").className = "combos";
let May = document.createElement("video").className = "combos";
//sorting mp4s into arrays

let milliaArray = ["Millia1","Millia2"];
let ramArray = ["Ram1","Ram2"];
let RandomArray = ["Ky","Anji","Sol","May"];

//button clicked stuff 
ToggleDarkMode.addEventListener("click",BlackMode);
function BlackMode(){
  let YeaBwoi = document.body;
    YeaBwoi.classList.toggle("dark-mode");
}

ViewRamCombos.addEventListener("click",clicked);
function clicked(){
  VidDiv.innerHTML = ""; //prevents 2 videos from showing at once by clearing the div before every click
    randNum = Math.random() * ramArray.length; //choose a number from ramArray
    randInt = Math.floor(randNum); //round the number chosen up or down
    randChar = ramArray[randInt]; //let randChar equal a randomInt (aka random video) from the Ram Array
    let newElement = document.createElement('video'); //set up video player
    newElement.setAttribute('src', 'combos/' + randChar +'.mp4'); //make the random vid from the Ram Array a video
    VidDiv.appendChild(newElement); //append this random video to VidDiv
    newElement.setAttribute("width", "480"); //controls stuff
    newElement.setAttribute("height", "400"); //controls stuff
    newElement.setAttribute("controls", "controls"); //controls stuff
}

ViewMilliaCombos.addEventListener("click",millia);
function millia(){
  VidDiv.innerHTML = "";
  randNum1 = Math.random() * milliaArray.length;
  randInt1 = Math.floor(randNum1);
  randChar1 = milliaArray[randInt1];
  let newElement1 = document.createElement('video');
  newElement1.setAttribute('src', 'combos/' + randChar1 +'.mp4');
  VidDiv.appendChild(newElement1);
  newElement1.setAttribute("width", "480");
  newElement1.setAttribute("height", "400");
  newElement1.setAttribute("controls", "controls");
}

ViewMiscCombos.addEventListener("click",bombo1);
function bombo1(){
  VidDiv.innerHTML = "";
  randNum2 = Math.random() * RandomArray.length;
  randInt2 = Math.floor(randNum2);
  randChar2 = RandomArray[randInt2];
  let newElement2 = document.createElement('video');
  newElement2.setAttribute('src', 'combos/' + randChar2 +'.mp4');
  VidDiv.appendChild(newElement2);
  newElement2.setAttribute("width", "480");
  newElement2.setAttribute("height", "400");
  newElement2.setAttribute("controls", "controls");
}

