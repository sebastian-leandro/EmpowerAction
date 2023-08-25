const homeButton = document.getElementById("home--button");
const worksButton = document.getElementById("works--button");
const worksSection = document.getElementById("works--section");
const closeSections = document.getElementById("close--sections");

worksButton.addEventListener("click", () => {
    worksSection.classList.add("show");
});

closeSections.addEventListener("click", () => {
    worksSection.classList.remove("show")
})

homeButton.addEventListener("click", () => {
    worksSection.classList.remove("show")
})




