//bugg med sista page(34) bara 11 objekt. Lösning nu är mat.random(33)
console.log(testArray[0].Name);
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

CardOne.Card.addEventListener("click", function () {
  if (CardOne.ForgroundDiv.style.display === "none") {
    CardOne.ForgroundDiv.style.display = "flex";
  } else {
    CardOne.ForgroundDiv.style.display = "none";
  }
});
Cardtwo.addEventListener("click", function () {
  if (ForgroundDivTwo.style.display === "none") {
    ForgroundDivTwo.style.display = "flex";
  } else {
    ForgroundDivTwo.style.display = "none";
  }
});
Cardthree.addEventListener("click", function () {
  if (ForgroundDivThree.style.display === "none") {
    ForgroundDivThree.style.display = "flex";
  } else {
    ForgroundDivThree.style.display = "none";
  }
});
