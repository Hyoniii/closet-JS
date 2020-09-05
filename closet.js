const storeBtn = document.getElementById("JS_store");
/*const oneBtn = document.getElementById("JS_shirts");
const twoBtn = document.getElementById("JS_pants");
const thrBtn = document.getElementById("JS_skirt");
const fourBtn = document.getElementById("JS_blue");
const fiveBtn = document.getElementById("JS_yellow");
const sixBtn = document.getElementById("JS_pink");*/
const listBox = document.getElementById("JS_list");
const closetList = document.querySelector(".col_two");

const ul = document.getElementById("JS_list");

//Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((res) => res.json())
    .then((json) => json.items);
}

function filterEvent(event, items) {
  console.log(event.target.dataset.type);
  const dataset = event.target.dataset;
  const type = dataset.type;
  const value = dataset.value;
  if (type === null || value === null) {
    return;
  }
  const filtered = items.filter((item) => item[type] === value);
  console.log(filtered);
  displayItems(filtered);
}

function handleEvent(items) {
  storeBtn.addEventListener("click", displayItems(items));
  /*oneBtn.addEventListener("click", (items) => {
    const tShirts = items.filter((item) => item.type === "tshirts");
    console.log(tShirts);
  });*/
  closetList.addEventListener("click", (event) => filterEvent(event, items));
}

//모든 아이템 보여주기
function displayItems(items) {
  ul.innerHTML = "";
  const li = document.createElement("li");
  const div = items.map(
    (item) =>
      `<div><img src=${item.image}><span>${item.gender}</span><span>${item.size}</span></div>`
  );
  //console.log(div);
  li.innerHTML = div;
  ul.append(li);
}

loadItems()
  .then((items) => {
    handleEvent(items);
  })
  .catch(console.log);

//function init() {

//storeBtn.addEventListener("click",handleStore)
//oneBtn.addEventListener("click", handleShirts);
//}

//init();
