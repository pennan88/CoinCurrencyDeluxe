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
  });
});

function CreateCard() {
  const newdiv = document.createElement("div");
  newdiv.className = "outcard-container";

  let Parentdiv = document.getElementById("Parent");

  Parentdiv.appendChild(newdiv);
}
