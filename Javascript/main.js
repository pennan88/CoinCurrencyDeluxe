async function CryptoDailyRates() {
  const url = new URL(`https://rickandmortyapi.com/api/character`);
  url.searchParams.append("name", "squanchy");

  const response = await fetch(url);
  let URLData = await response.json();

  return URLData;
}

CryptoDailyRates().then(function DailyRates(URLData) {
  console.log(URLData);
});

const CardOne = document.getElementById("cardone");

CardOne.addEventListener("click", function () {});

function myFunction(event) {
  alert(event.target.nodeName);
}
