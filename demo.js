const sectionMap = {
    "works--button": "works--section",
    "talents--button": "talents--section",
    "transactions--button": "transactions--section"
  };
  
  const sectionsArray = ["works--section", "talents--section", "transactions--section"];
  const closeButtons = ["close--sections", "close--talents", "close--transations"];
  
  function hideAll() {
    sectionsArray.forEach(id => document.getElementById(id).classList.remove("show"));
  }
  
  document.getElementById("home--button").addEventListener("click", hideAll);
  
  Object.keys(sectionMap).forEach(key => {
    document.getElementById(key).addEventListener("click", () => {
      hideAll();
      document.getElementById(sectionMap[key]).classList.add("show");
    });
  });
  
  closeButtons.forEach(id => {
    document.getElementById(id).addEventListener("click", hideAll);
  });

  $(document).ready(function(){
    $('#action_menu_btn').click(function(){
      $('.action_menu').toggle();
    });
  });





  //append 

const windowPost = document.getElementById("window--post");
const windowBtn = document.getElementById("talent--post");
const windowCloseBtn = document.getElementById("close--post");
const postTalent = document.getElementById("post--talent");



windowBtn.addEventListener("click", () => {
  windowPost.classList.add("show");
});

windowCloseBtn.addEventListener("click", () => {
  windowPost.classList.remove("show");
});

postTalent.addEventListener("click", function CreateTalent() {
  function getValuesTalent(){
      let inputName = document.getElementById("postTalentInput-1").value;
      let inputPrice = document.getElementById("postTalentInput-2").value;
      return {
          name: inputName,
          price: inputPrice
      };  
  }

  const talentValues = getValuesTalent();

  if (talentValues.name && talentValues.price) {
      const createTalentPost = document.querySelector(".grid--talents--section");

      // Main div
      let itemTalentDiv = document.createElement("div"); 
      itemTalentDiv.classList.add("grid--works--item");

      // Profile div
      let itemTalentDivProfile = document.createElement("div");
      itemTalentDivProfile.classList.add("profile--worker");

      // Image
      let itemTalentImg = document.createElement("img");
      itemTalentImg.src= "./img/face.png";
      itemTalentImg.classList.add("img-styling");

      // Name
      let itemTalentH3 = document.createElement("h3");
      itemTalentH3.classList.add("h3-styling");
      itemTalentH3.innerText = talentValues.name;

      // Price
      let itemTalentP = document.createElement("p");
      itemTalentP.classList.add("p-styling");
      itemTalentP.innerText = talentValues.price;

      // Appending elements
      itemTalentDivProfile.appendChild(itemTalentImg);
      itemTalentDivProfile.appendChild(itemTalentH3);
      itemTalentDiv.appendChild(itemTalentDivProfile);
      itemTalentDiv.appendChild(itemTalentP);
      createTalentPost.appendChild(itemTalentDiv);


      windowPost.classList.remove("show");

  } else {
      window.alert("Los campos no pueden estar vacios");
  }
});





