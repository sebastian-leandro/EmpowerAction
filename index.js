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



// Nav

document.addEventListener("DOMContentLoaded", function() {
    let isActive = false;

    const navExtend = document.querySelector(".nav--extend");
    const navSubmenu = document.querySelector(".secondary--nav");

    if(!navExtend || !navSubmenu) return;

    function activateMenu() {
        navSubmenu.classList.add("submenu--active");
    }

    function deactivateMenu() {
        navSubmenu.classList.remove("submenu--active");
    }

    function toggleMenu() {
        isActive = !isActive;
        isActive ? activateMenu() : deactivateMenu();
    }

    function setupListeners() {
        if(innerWidth > 768){
            navExtend.addEventListener("mouseenter", activateMenu);
            navSubmenu.addEventListener("mouseleave", () => setTimeout(deactivateMenu, 1000));
        } else {
            navExtend.removeEventListener("mouseenter", activateMenu);
            navSubmenu.removeEventListener("mouseleave", deactivateMenu);
            navExtend.addEventListener("click", toggleMenu);
        }
    }

    setupListeners();
    window.addEventListener("resize", setupListeners);
});


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


// form 

$(document).ready(function() {
    $("#message-form").on("submit", function(e) {
        e.preventDefault();
        
        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();
        
        $.ajax({
            type: "POST",
            url: "/api/send-email",
            data: { name, email, message },
            success: function(response) {
                $("#response").html("Email sent: " + response);
            },
            error: function(error) {
                $("#response").html("An error occurred: " + error.responseText);
            }
        });
    });
});