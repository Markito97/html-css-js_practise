const customDropDown = document.querySelector(".customDropDown");
const dropDownTextContent = document.querySelector(".dropDownTextContent");
const chooseOption = document.querySelector(".chooseOption");
const dropDownContent = document.querySelector(".dropDownContent");
const content = document.querySelector(".content");
const onToggleBtn = document.querySelector(".chooseOptionBtn");

let toggle = false;
const onToggle = (e) => {
  const isShow = toggle ? (toggle = false) : (toggle = true);
  if (
    (isShow && e.target.className === "chooseOption") ||
    (e.target.id === "chooseBtn" && isShow)
  ) {
    dropDownContent.style.display = "block";
    chooseOption.style.transform = "translateY(-25px) scale(0.85)";
    chooseOption.style.color = "#46abfd";
    customDropDown.style.border = "3px solid #46abfd";
  } else if (dropDownTextContent.textContent === "") {
    dropDownContent.style.display = "none";
    chooseOption.style.transform = "translateX(0px)";
    chooseOption.style.color = "rgb(118, 118, 118)";
    customDropDown.style.border = "3px solid rgb(118, 118, 118)";
  } else {
    dropDownContent.style.display = "none";
  }
};

content.addEventListener("click", (e) => {
  if (e.target.className === "dropDownItem") {
    dropDownTextContent.innerHTML = e.target.textContent;
    chooseOption.style.transform = "translateY(-25px) scale(0.85)";
  }
});

customDropDown.addEventListener("click", onToggle, false);
