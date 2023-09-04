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
    duration: 750,
    reset: true,
})

sr.reveal(".hero--banner", {
    delay:500,
    origin: "top",
    distance: "25px",
})


sr.reveal(".container--card", {
    delay: 500,
    origin:"left",
    distance: "25px",
});

sr.reveal(".text--cards", {
    delay: 500,
    origin: "right",
    distance: "25px",
});

sr.reveal(".demo", {
    delay: 500,
    origin: "bottom",
    distance: "25px",
});

sr.reveal(".mutual--credits", {
    delay:500,
    origin:"top",
    distance: "25px"
});

sr.reveal(".mutual--pdf", {
    delay:500,
    origin:"left",
    distance: "25px"
});

sr.reveal(".divide--cards", {
    delay:500,
    origin: "bottom",
    distance: "25px"
});

sr.reveal(".cards--credits--mutual", {
    delay:500,
    origin: "right",
    distance: "25px"
});

sr.reveal(".p--tech--left", {
    delay: 500,
    origin: "left",
    distance: "25px"
});

sr.reveal(".p--tech--right", {
    delay:500,
    origin: "left",
    distance: "25px"
});





// NavBar 

document.addEventListener("DOMContentLoaded", function() {
    const navExtend = document.querySelector(".nav--extend");


    navExtend.addEventListener("mouseenter", function() {
        const navSubmenu = this.querySelector(".secondary--nav");
        navSubmenu.classList.add("submenu--active");
    });
});


const navSubmenu = document.querySelector(".secondary--nav");

if (navSubmenu) {  
    navSubmenu.addEventListener("mouseleave", function() {
        setTimeout(() => { this.classList.remove("submenu--active"); }, 1000);
    });
}

// Divider 


function checkDivider() {
    const dividers = document.querySelectorAll(".divider--responsive");
    const src = window.innerWidth <= 768 ? "./img/responsiveDivider.svg" : "./img/divide1.svg";

    dividers.forEach((divider) => {
        divider.src = src;
    });
}


checkDivider()

window.addEventListener("resize", checkDivider);