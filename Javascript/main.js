//bugg med sista page(34) bara 11 objekt. Lösning nu är mat.random(33)
console.log(CardArray[0].Card);
async function homePageApi() {
  let randomNum = Math.floor(Math.random() * 33);
  const url = new URL(`https://rickandmortyapi.com/api/character`);
  url.searchParams.append("page", randomNum);

  const response = await fetch(url);
  let URLData = await response.json();

  return URLData;
}

let randomNum2 = Math.floor(Math.random() * 20);
homePageApi().then(function ApiData(URLData) {
  console.log(URLData);
  CardOne.Status.innerHTML = URLData.results[randomNum2].status;
  CardOne.Gender.innerHTML = URLData.results[randomNum2].gender;
  CardOne.Species.innerHTML = URLData.results[randomNum2].species;
  CardOne.Origin.innerHTML = URLData.results[randomNum2].origin.name;
  CardOne.Name.innerHTML = URLData.results[randomNum2].name;
  CardOne.Card.style.background = `url(${URLData.results[randomNum2].image})`;
  console.log(randomNum2);
});

CardArray[0].Card.addEventListener("click", function () {
  if (CardArray[0].ForgroundDiv.style.display === "none") {
    CardArray[0].ForgroundDiv.style.display = "flex";
  } else {
    CardArray[0].ForgroundDiv.style.display = "none";
  }
});

CardArray[1].Card.addEventListener("click", function () {
  if (CardArray[1].ForgroundDiv.style.display === "none") {
    CardArray[1].ForgroundDiv.style.display = "flex";
  } else {
    CardArray[1].ForgroundDiv.style.display = "none";
  }
});
CardArray[2].Card.addEventListener("click", function () {
  if (CardArray[2].ForgroundDiv.style.display === "none") {
    CardArray[2].ForgroundDiv.style.display = "flex";
  } else {
    CardArray[2].ForgroundDiv.style.display = "none";
  }
});
CardArray[3].Card.addEventListener("click", function () {
  if (CardArray[3].ForgroundDiv.style.display === "none") {
    CardArray[3].ForgroundDiv.style.display = "flex";
  } else {
    CardArray[3].ForgroundDiv.style.display = "none";
  }
});
