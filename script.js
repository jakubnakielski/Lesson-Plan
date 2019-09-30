const button = document.getElementById("teachers__send");
const absent = document.getElementById("absentTeachers__list");

let clicked = false;
const check = e => {
  const checkboxes = document.querySelectorAll(".teachers__checkbox");
  let checkboxesArray = new Array();

  checkboxes.forEach(el => {
    if (el.checked) {
      checkboxesArray.push(el.value);
    }
  });

  for (i = 0; i < checkboxesArray.length; i++) {
    absent.innerHTML =
      absent.innerHTML +
      `<li class="absentTeachers__person">${checkboxesArray[i]}</li>`;
  }
  if (!checkboxesArray) {
    button.removeEventListener("click", check); //void tab block ad editable
  }
};

button.addEventListener("click", check);
