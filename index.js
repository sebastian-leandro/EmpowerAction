// Nav Span

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

// Sub Nav

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
        
        // Provide feedback to the user that the email is being sent
        $("#response").html("Sending...");

        $.ajax({
            type: "POST",
            url: "/api/send-email",
            data: { name, email, message },
            success: function(response) {
                // Provide success feedback to the user
                $("#response").html("<span class='success'>Email sent successfully!</span>");

                // Reset form fields after successful email send
                $("#name").val("");
                $("#email").val("");
                $("#message").val("");
            },
            error: function(error) {
                // Provide a user-friendly error message
                let errorMessage = "There was a problem sending the email. Please try again later.";
                if(error.responseText) {
                    errorMessage = error.responseText;
                }
                $("#response").html("<span class='error'>" + errorMessage + "</span>");
            }
        });
    });
});

// Label 

const labelName = document.getElementById("nameLabel");
const labelEmail = document.getElementById("emailLabel");
const labelArea = document.getElementById("areaLabel");


function updateLabel(labelElement, inputElement){
    if (inputElement.value){
        labelElement.classList.add("label");
    } else {
        labelElement.classList.remove("label");
    }
};

document.getElementById("name").addEventListener("keyup", function(){
    updateLabel(labelName, this);
});
document.getElementById("email").addEventListener("keyup", function(){
    updateLabel(labelEmail, this);
});
document.getElementById("textarea").addEventListener("keyup", function(){
    updateLabel(labelArea, this);
});



// PDF 



const pdfSlider = document.querySelector(".pdf--slider");
const pdfImg = pdfSlider.querySelectorAll("img");

let index = 0;

const slideCount = pdfImg.length;

setInterval(function() {
    let percentage = index * -25;
    pdfSlider.style.transform = `translateX(${percentage}%)`;
    index++;
    if(index >= slideCount) {
        index = 0;
    }
}, 7000);







// Scroll Reveal 

const sr = ScrollReveal ({
    duration: 500,
    reset: true,
})

sr.reveal(".hero--banner", {
    delay:500,
    origin: "top",
    distance: "10px",
})

sr.reveal(".container--card", {
    delay: 500,
    origin:"left",
    distance: "10px",
});

sr.reveal(".text--cards", {
    delay: 500,
    origin: "right",
    distance: "10px",
});

sr.reveal(".mutual--credits", {
    delay:500,
    origin:"top",
    distance: "10px"
});

sr.reveal(".mutual--pdf", {
    delay:500,
    origin:"left",
    distance: "10px"
});

sr.reveal(".divide--cards", {
    delay:500,
    origin: "bottom",
    distance: "10px"
});

sr.reveal(".cards--credits--mutual", {
    delay:500,
    origin: "right",
    distance: "10px"
});

sr.reveal(".p--tech--left", {
    delay: 500,
    origin: "left",
    distance: "10px"
});

sr.reveal(".p--tech--right", {
    delay:500,
    origin: "left",
    distance: "10px"
});