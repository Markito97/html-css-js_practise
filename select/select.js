const customDropDown = document.querySelector(".customDropDown");
const dropDown = document.querySelector(".dropDown");
const chooseOption = document.querySelector(".chooseOption");
const dropDownContent = document.querySelector(".dropDownContent");
const content = document.querySelector(".content");

customDropDown.addEventListener("click", (e) => {
  chooseOption.style.transform =
    "translateY(-20px) translateX(0px) scale(0.85)";
  chooseOption.style.color = "#46abfd";
  customDropDown.style.border = "3px solid #46abfd";
  dropDownContent.style.display = "block";
});

content.addEventListener("click", (e) => {
  if (e.target.className === "dropDownItem") {
    dropDown.innerHTML = e.target.textContent;
    // if (dropDown.textContent !== "") {
    //     // chooseOption.style.transform = "translateY(0px)" // поиграться с этим
    //     // dropDown.innerHTML === e.target.textContent
    // }
  }
  if (
    e.target.className !== "chooseOption" &&
    e.target.className !== "customDropDown"
  ) {
    customDropDown.style.border = "3px solid rgb(118, 118, 118)";
    chooseOption.style.color = "black";
    if (dropDown.innerHTML === "") {
      chooseOption.style.transform = "translateY(0px)";
      dropDownContent.style.display = "none";
    } else {
      dropDownContent.style.display = "none";
    }
  }
});
