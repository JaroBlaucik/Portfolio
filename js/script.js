const home = document.querySelector(".nav-link");
const about = document.querySelector(".about_link");
const services = document.querySelector(".services_link");
const latest = document.querySelector(".latest_link");
const contact = document.querySelector(".contact_link");

home.addEventListener("click", function(){
    console.log("clicked home");
    let el = document.getElementById(home.getAttribute("data-link"));
    el.scrollIntoView({
        behavior:"smooth", block:"end", inline:"nearest"});
})
about.addEventListener("click", function(){
    console.log("clicked about");
    let el = document.getElementById(about.getAttribute("data-link"));
    el.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"});
})
services.addEventListener("click", function(){
    console.log("clicked services");
    let el = document.getElementById(services.getAttribute("data-link"));
    el.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"});
})
latest.addEventListener("click", function(){
    console.log("clicked news");
    let el = document.getElementById(latest.getAttribute("data-link"));
    el.scrollIntoView({behavior:"smooth", block:"center", inline:"nearest"});
})
contact.addEventListener("click", function(){
    console.log("clicked news");
    let el = document.getElementById(contact.getAttribute("data-link"));
    el.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"});
})