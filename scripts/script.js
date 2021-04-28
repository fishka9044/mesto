let openButtonClick = document.querySelector(".user__edit");
let PopUp = document.querySelector(".popup");
let closeButtonClick = document.querySelector(".popup__close");
let formElement = document.querySelector(".form");
let nameInput = document.getElementById('name__form');
let jobInput = document.getElementById('profession__form');
let po = document.querySelector(".user__name");
let op = document.querySelector(".user__profession");
let submit = document.querySelector(".form");
let addButon = document.querySelector(".user__add-btn");
let PopUpAddButon = document.querySelector(".popup-add");
let CloseAddButton = document.querySelector(".popup-add__close");

function openAddButton () {
  PopUpAddButon.classList.toggle("popup-add_non");
}
function closeAddButton () {
  PopUpAddButon.classList.remove("popup-add_non");
}

function open () {
  nameInput.value = po.textContent;
  jobInput.value = op.textContent;
  PopUp.classList.toggle("popup_non");
}

function close () {
  PopUp.classList.remove("popup_non");
}
/*let edit1 = document.querySelector(".user__name");*/
/*let input1 = document.getElementById('name__form');*/
/*let edit2 = document.querySelector(".user__profession");*/
/*let input2 = document.getElementById('profession__form');*/

function formSubmitHandler (ev) {
  ev.preventDefault();
  po.textContent = nameInput.value;
  op.textContent = jobInput.value;
  close ()
}

submit.addEventListener('submit', formSubmitHandler);
openButtonClick.addEventListener("click" , open);
closeButtonClick.addEventListener("click" , close);
addButon.addEventListener("click" , openAddButton);
CloseAddButton.addEventListener("click" , closeAddButton);

