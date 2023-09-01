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

const workWindow = document.getElementById("window--work");
const talentWindow = document.getElementById("window--talent");
const registerAccount = document.getElementById("registerWindow");



function post(windowType){
  if(windowType === "work"){
    workWindow.classList.add("show")
  }else if (windowType === "talent"){
    talentWindow.classList.add("show");
  }else if(windowType === "register"){
    registerAccount.classList.add("show");
  }
};

function closePost(windowType){
  if(windowType === "work"){
    workWindow.classList.remove("show");
  }else if(windowType === "talent"){
    talentWindow.classList.remove("show");
  }else if(windowType === "register"){
    registerAccount.classList.remove("show");
  }
};


function addTalentToSection(sectionSelector, inputNameSelector, inputPriceSelector, inputDescSelector ) {
  function getValuesTalent() {
    const inputName = document.querySelector(inputNameSelector).value;
    const inputPrice = document.querySelector(inputPriceSelector).value;
    const inputDesc = document.querySelector(inputDescSelector).value;
    return { name: inputName, price: inputPrice, desc: inputDesc };  
  }

  const { name, price, desc } = getValuesTalent();

  if (name && price && desc) {
      const createTalentPost = document.querySelector(sectionSelector);


      let itemTalentDiv = document.createElement("div"); 
      itemTalentDiv.classList.add("grid--works--item");


      let itemTalentDivProfile = document.createElement("div");
      itemTalentDivProfile.classList.add("profile--worker");


      let itemTalentImg = document.createElement("img");
      itemTalentImg.src= "./img/usuario.png";
      itemTalentImg.classList.add("img-styling");


      let itemTalentH3 = document.createElement("h3");
      itemTalentH3.classList.add("h3-styling");
      itemTalentH3.innerText = name;


      let itemTalentP = document.createElement("p");
      itemTalentP.classList.add("p-styling");
      itemTalentP.innerText = price;

      let itemTalentPDesc = document.createElement("p");
      itemTalentPDesc.classList.add("p-styling");
      itemTalentPDesc.innerText = `ETH ${desc} Per Hour`;


      itemTalentDivProfile.appendChild(itemTalentImg);
      itemTalentDivProfile.appendChild(itemTalentH3);
      itemTalentDiv.appendChild(itemTalentDivProfile);
      itemTalentDiv.appendChild(itemTalentP);
      itemTalentDiv.appendChild(itemTalentPDesc);
      createTalentPost.appendChild(itemTalentDiv);


      workWindow.classList.remove("show")
      talentWindow.classList.remove("show")

  } else {
      window.alert("Los campos no pueden estar vacios");
  };

}


document.getElementById("post--work").addEventListener("click", () => {
  addTalentToSection(".grid--work--post", "#postWorkInput-1", "#postWorkInput-2", "#postWorkInput-3");
});
document.getElementById("post--talent").addEventListener("click", () => {
  addTalentToSection(".grid--talents--section", "#postTalentInput-1", "#postTalentInput-2", "#postTalentInput-3");
});



// Msg 

const backArrow = document.querySelector(".back--arrow");
const chatInbox = document.querySelector(".chat--inbox");
const chatItem = document.querySelectorAll(".chat--inbox--item");
const chatMsg = document.querySelector(".chat--message");


backArrow.classList.add("hidden");




  chatItem.forEach(chat => {
    chat.addEventListener("click", () => {
      if(window.innerWidth < 768){
        chatInbox.classList.add("hidden");
        chatMsg.classList.add("visible");
        backArrow.classList.remove("hidden");
      }
      });
  });


  backArrow.addEventListener("click", () => {
    chatInbox.classList.remove("hidden");
    chatMsg.classList.remove("visible");
    backArrow.classList.add("hidden");
  });
























