"use strict";
async function GetcharacterAPI(character) {
  const url = new URL(`https://rickandmortyapi.com/api/character/`);
  url.searchParams.append("name", character);

  const respone = await fetch(url);
  const data = respone.json();

  return data;
}

submitbtn.addEventListener("click", function () {
  let character = search.value;
  GetcharacterAPI(character).then(function APIdata(data) {
    console.log(data.results);
    CreateCard(data.results);
  });
});

function CreateCard(data) {
  let DELETEALL = document.querySelectorAll(".carousel-item");
  for (let i = 0; i < DELETEALL.length; i++) {
    DELETEALL[i].remove();
  }

  for (let i = 0; i < data.length; i++) {
    const carousel = document.createElement("div");

    if (i === 0) {
      carousel.className = "carousel-item active";
    } else {
      carousel.className = 'carousel-item';
      // carousel.data-bs-interval("10000");
    }

    let Parentdiv = document.querySelector(".carousel-inner");

    Parentdiv.appendChild(carousel);

    const outcard = document.createElement("div");
    outcard.className = "outcard-container";

    carousel.appendChild(outcard);

    const imgdiv = document.createElement("div");
    imgdiv.className = "img-container";

    outcard.appendChild(imgdiv);

    const img = document.createElement("img");
    img.src = data[i].image;
    imgdiv.appendChild(img);

    outcard.innerHTML += `
    <div class='text-container'>
      <h3>Name: ${data[i].name}</h3>
      <h3>Gender: ${data[i].gender}</h3>
      <h3>Species: ${data[i].species}</h3>
      <h3>Location: ${data[i].location.name}</h3>
      <h3>Origin: ${data[i].origin.name}</h3>
      <h3>Status: ${data[i].status}</h3>
    </div>
    `;
  }
}
