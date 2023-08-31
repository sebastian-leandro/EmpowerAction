const nav = document.querySelector(".nav--list");
const openButton = document.getElementById("open--nav");
const closeButton = document.getElementById("close-nav");


openButton.addEventListener("click",  ()=> {
    nav.classList.add("show")
    openButton.classList.add("hidden")
})

closeButton.addEventListener("click", ()=> {
    nav.classList.remove("show")
    openButton.classList.remove("hidden")
})


// Scroll Reveal 

const sr = ScrollReveal ({
    duration: 1000,
    reset: true,
})

sr.reveal(".hero--banner", {
    delay:100,
    origin: "top",
    distance: "50px",
})


sr.reveal(".container--card", {
    delay: 300,
    origin:"left",
    distance: "30px",
});

sr.reveal(".text--cards", {
    delay: 300,
    origin: "right",
    distance: "50px",
})

sr.reveal(".demo", {
    delay: 300,
    origin: "bottom",
    distance: "30px",
})