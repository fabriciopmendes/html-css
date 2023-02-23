function myFunction1() {
document.getElementById("myDropdown1").classList.toggle("show");
}

function myFunction2() {
document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}

let tce = document.querySelector('div.links div.tce');
let tse = document.querySelector('div.links div.tse');
let tcesub = document.querySelector('div.links div.tcesub');
let tsesub = document.querySelector('div.links div.tsesub');

tce.addEventListener('mouseover', dentro)
tce.addEventListener('mouseout', fora)
function dentro() {tcesub.style.display = "block"}
function fora() {tcesub.style.display = "none"}

tse.addEventListener('mouseover', dentro2)
tse.addEventListener('mouseout', fora2)
function dentro2() {tsesub.style.display = "block"}
function fora2() {tsesub.style.display = "none"}