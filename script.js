const input = document.querySelector("input");
const btn = document.querySelector("button");
const uList = document.querySelector("ul");

function addItems() {
  const item = input.value;
  input.value = "";

  const listElement = document.createElement("li");
  const spanElement = document.createElement("span");
  const deleteBtn = document.createElement("button");

  listElement.appendChild(spanElement);
  listElement.appendChild(deleteBtn);
  spanElement.innerHTML = item;
  deleteBtn.innerHTML = "Delete";

  uList.appendChild(listElement);

  deleteBtn.addEventListener("click", function () {
    uList.removeChild(listElement);
    input.focus();
  });
}
