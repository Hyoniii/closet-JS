const storeBtn = document.getElementById("JS_store");
const oneBtn = document.getElementById("JS_shirts");
const twoBtn = document.getElementById("JS_pants");
const thrBtn = document.getElementById("JS_skirt");
const fourBtn = document.getElementById("JS_blue");
const fiveBtn = document.getElementById("JS_yellow");
const sixBtn = document.getElementById("JS_pink");
const listBox = document.getElementById("JS_list");

function loadItems() {
  return fetch("data/data.json")
    .then((res) => res.json())
    .then((json) => console.log(json));
}

loadItems()
  .then((items) => {})
  .catch(console.log);

//function init() {

//storeBtn.addEventListener("click",handleStore)
//oneBtn.addEventListener("click", handleShirts);
//}

//init();
