const CardOneStatus = document.getElementById("CardOneSatus");
const CardOneGender = document.getElementById("CardOneGender");
const CardOneSpecies = document.getElementById("CardOneSpecies");
const CardOneOrigin = document.getElementById("CardOneOrigin");
const hidecard = document.getElementById("hidecard");

async function CryptoDailyRates() {
  const url = new URL(`https://rickandmortyapi.com/api/character`);
  // url.searchParams.append("name", Charname);

  const response = await fetch(url);
  let URLData = await response.json();

  return URLData;
}

CryptoDailyRates().then(function DailyRates(URLData) {
  console.log(URLData);
  CardOneStatus.innerHTML = URLData.results[1].status;
  CardOneGender.innerHTML = URLData.results[1].gender;
  CardOneSpecies.innerHTML = URLData.results[1].species;
  CardOneOrigin.innerHTML = URLData.results[1].origin.name;
});

const Cardtest = document.getElementById("test");
const CardOne = document.getElementById("CardboxOne");

CardOne.addEventListener("click", function () {
  if (Cardtest.style.display === "flex") {
    Cardtest.style.display = "none";
    hidecard.style.display = "flex";
  } else {
    Cardtest.style.display = "flex";
    hidecard.style.display = "none";
  }
});
