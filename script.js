const button = document.getElementById("teachers__send");

const check = e => {
  const checkboxes = document.querySelectorAll(".teachers__checkbox");
  let checkboxesArray = new Array();

  checkboxes.forEach(el => {
    if (el.checked) {
      checkboxesArray.push(el.value);
    }
  });

  console.log(checkboxesArray);
};

button.addEventListener("click", check);
