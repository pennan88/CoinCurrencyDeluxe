async function GetcharacterAPI(character) {
  const url = new URL(`https://rickandmortyapi.com/api/character/`);
  url.searchParams.append("name", character);

  const respone = await fetch(url);
  const data = respone.json();

  return data;
}

submitbtn.addEventListener("click", function () {
  character = search.value;
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
      carousel.className = "carousel-item";
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

    const textdiv = document.createElement("div");
    textdiv.className = "text-container";

    outcard.appendChild(textdiv);

    const Nametext = document.createElement("h3");
    const Gendertext = document.createElement("h3");
    const SpeciesText = document.createElement("h3");
    const Locatiotext = document.createElement("h3");
    const Origintext = document.createElement("h3");
    const Statustext = document.createElement("h3");

    Nametext.innerHTML = `Name: ${data[i].name}`;
    Gendertext.innerHTML = `Gender: ${data[i].gender}`;
    SpeciesText.innerHTML = `Species: ${data[i].species}`;
    Locatiotext.innerHTML = `Location: ${data[i].location.name}`;
    Origintext.innerHTML = `Origin: ${data[i].origin.name}`;
    Statustext.innerHTML = `Status: ${data[i].status}`;

    textdiv.appendChild(Nametext);
    textdiv.appendChild(Gendertext);
    textdiv.appendChild(SpeciesText);
    textdiv.appendChild(Locatiotext);
    textdiv.appendChild(Origintext);
    textdiv.appendChild(Statustext);
  }
}
