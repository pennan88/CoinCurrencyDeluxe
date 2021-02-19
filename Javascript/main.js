//bugg med sista page(34) bara 11 objekt. Lösning nu är mat.random(33)



async function homePageApi() {
  let RandomPage = Math.floor(Math.random() * 33);
  // console.log("Page: ", RandomPage)
  const url = new URL(`https://rickandmortyapi.com/api/character`);
  url.searchParams.append("page", RandomPage);

  const response = await fetch(url);
  let URLData = await response.json();

  return URLData;
}


for(let i = 0; i < 6; i++){
  let RandomNum = Math.floor(Math.random() * 20);
  homePageApi().then(function ApiData(URLData) {
  console.log(URLData);
  CardArray[i].Status.innerHTML = URLData.results[RandomNum].status;
  CardArray[i].Gender.innerHTML = URLData.results[RandomNum].gender;
  CardArray[i].Species.innerHTML = URLData.results[RandomNum].species;
  CardArray[i].Origin.innerHTML = URLData.results[RandomNum].origin.name;
  CardArray[i].Name.innerHTML = URLData.results[RandomNum].name;

  CardArray[i].Card.style.background = `url(${URLData.results[RandomNum].image})`;
  CardArray[i].Card.style.backgroundPosition = "center";
  CardArray[i].Card.style.backgroundSize = "cover";
  console.log(RandomNum);
});
}


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


// function myFunction(event) { 
//   let clicked = event.target.children[1];
//   if (clicked.style.display === "none") {
//     clicked.style.display = "flex";
//   } else {
//     clicked.style.display = "none";
//   }
// }