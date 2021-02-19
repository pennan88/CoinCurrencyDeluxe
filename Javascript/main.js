//bugg med sista page(34) bara 11 objekt. Lösning nu är mat.random(33)

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
  CardOneStatus.innerHTML = URLData.results[randomNum2].status;
  CardOneGender.innerHTML = URLData.results[randomNum2].gender;
  CardOneSpecies.innerHTML = URLData.results[randomNum2].species;
  CardOneOrigin.innerHTML = URLData.results[randomNum2].origin.name;
  CardoneName.innerHTML = URLData.results[randomNum2].name;
  Cardone.style.background = `url(${URLData.results[randomNum2].image})`;
  console.log(randomNum2);
});

Cardone.addEventListener("click", function () {
  if (ForgroundDivOne.style.display === "none") {
    ForgroundDivOne.style.display = "flex";
  } else {
    ForgroundDivOne.style.display = "none";
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
