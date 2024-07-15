
const breedUrl = "https://dog.ceo/api/breeds/list/all";
fetch ("https://dog.ceo/api/breeds/list/all")
.then(res => res.json())
.then((json) => {
const listelement = document.querySelector('#dog-breeds-list');
const dogBreeds = json.message; // 'message' contains the breeds list

Object.keys(dogBreeds).forEach(breed => {
  listelement.insertAdjacentHTML('beforeend', `<li>${breed}</li>`);
});
})

