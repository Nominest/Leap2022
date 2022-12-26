const selecta = document.getElementById("breeds");
// let card = document.querySelector(".card");
// let current = "";

fetch("https://dog.ceo/api/breeds/list")
  .then((res) => res.json())
  .then((data) => {
    generateBreeds(data.message);
    console.log(data.message);
    // current = data.message[0];
  });

function generateBreeds(data) {
  data.map((dogBreed) => {
    const html = `<option value = "${dogBreed}"> ${dogBreed} </option>`;
    selecta.innerHTML += html;
  });
}

// function generateImages(url) {
//   const image = `img src = ${url}`;
// }
