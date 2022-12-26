const selecta = document.getElementById("breeds");
const card = document.querySelector(".card");
let current = "";


fetch("https://dog.ceo/api/breeds/list")
  .then((res) => res.json())
  .then((data) => {
    generateBreeds(data.message);
    fetchImage(data.message);
    current = data.message[0];
  });

function generateBreeds(data) {
  data.map((dogBreed) => {
    const html = `<option value = "${dogBreed}"> ${dogBreed} </option>`;
    selecta.innerHTML += html;
  });
}

function generateImages(url) {
  const image = `<img src = "${url}">`;
  card.innerHTML = image;
}

function fetchImage(breedType) {
  fetch(`https://dog.ceo/api/breed/${breedType}/images/random `)
  .then((res) => res.json())
  .then((data) => 
    generateImages(data.message));
};

selecta.addEventListener("change", () => {
  fetchImage(selecta.value);
  current = selecta.value;
});
card.addEventListener("click", () => {
  fetchImage(current)
})