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