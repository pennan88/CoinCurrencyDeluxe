const CardOneStatus = document.getElementById("CardthreeStatus");
const CardOneGender = document.getElementById("CardthreeGender");
const CardOneSpecies = document.getElementById("CardthreeSpecies");
const CardOneOrigin = document.getElementById("CardthreeOrigin");
const hidecard = document.getElementById("hidecard");

async function CryptoDailyRates() {
  const url = new URL("https://rickandmortyapi.com/api/character/");
  url.searchParams.append("page", "10");

  const response = await fetch(url);
  let URLData = await response.json();

  return URLData;
}

CryptoDailyRates().then(function DailyRates(URLData) {
  console.log(URLData);
  CardOneStatus.innerHTML = URLData.results[0].status;
  CardOneGender.innerHTML = URLData.results[0].gender;
  CardOneSpecies.innerHTML = URLData.results[0].species;
  CardOneOrigin.innerHTML = URLData.results[0].origin.name;
});

const ForgroundDivOne = document.querySelector(".ForgroundDivOne");
const ForgroundDivTwo = document.querySelector(".ForgroundDivTwo");
const ForgroundDivThree = document.querySelector(".ForgroundDivThree");
const Cardone = document.querySelector(".Cardone");
const Cardtwo = document.querySelector(".Cardtwo");
const Cardthree = document.querySelector(".Cardthree");

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
