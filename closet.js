const storeBtn = document.getElementById("JS_store");
const oneBtn = document.getElementById("JS_shirts");
const express = require("express");

app.listen(4000);

const twoBtn = document.getElementById("JS_pants");
const thrBtn = document.getElementById("JS_skirt");
const fourBtn = document.getElementById("JS_blue");
const fiveBtn = document.getElementById("JS_yellow");
const sixBtn = document.getElementById("JS_pink");
const listBox = document.getElementById("JS_list");

const ul = document.getElementById("JS_list");

//Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((res) => res.json())
    .then((json) => json.items);
}

function displayItems(items) {
  const li = document.createElement("li");

  const div = items.map(
    (item) => `<div><img src=${item.image}>${item.gender},${item.size}</div>`
  );
  //console.log(div);
  //ul.append(li);
}

loadItems()
  .then((items) => {
    displayItems(items);
  })
  .catch(console.log);

//function init() {

//storeBtn.addEventListener("click",handleStore)
//oneBtn.addEventListener("click", handleShirts);
//}

//init();
