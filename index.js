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



// Divider 


function checkDivider() {
    const divider = document.getElementById("divider");
    if(window.innerWidth < 768){
        divider.src = "./img/responsiveDivider.svg";
    }else {
        divider.src = "./img/divide1.svg";
    };
};


checkDivider()

window.addEventListener("resize", checkDivider);