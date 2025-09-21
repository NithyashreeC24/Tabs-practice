let aboutbtn = document.getElementById("aboutButton");
let timeTovisitbtn = document.getElementById("timeToVisitButton");
let attractionbtn = document.getElementById("attractionsButton");
let abouttab = document.getElementById("aboutTab");
let timeTovisittab = document.getElementById("timeToVisitTab");
let attractiontab = document.getElementById("attractionsTab");
timeTovisittab.classList.add("d-none");
attractiontab.classList.add("d-none");

function about() {
    abouttab.classList.remove("d-none");
    timeTovisittab.classList.add("d-none");
    attractiontab.classList.add("d-none");

    aboutbtn.classList.add("selected-button");
    timeTovisitbtn.classList.remove("selected-button");
    attractionbtn.classList.remove("selected-button");
}

function timetovisit() {
    abouttab.classList.add("d-none");
    timeTovisittab.classList.remove("d-none");
    attractiontab.classList.add("d-none");

    aboutbtn.classList.remove("selected-button");
    timeTovisitbtn.classList.add("selected-button");
    attractionbtn.classList.remove("selected-button");
}

function attraction() {
    abouttab.classList.add("d-none");
    timeTovisittab.classList.add("d-none");
    attractiontab.classList.remove("d-none");

    aboutbtn.classList.remove("selected-button");
    timeTovisitbtn.classList.remove("selected-button");
    attractionbtn.classList.add("selected-button");
}
