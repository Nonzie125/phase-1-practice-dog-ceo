console.log('%c HI', 'color: firebrick')
// we first fetch the imaes from the url with the fecth function

fetch ('https://dog.ceo/api/breeds/image/random/4')
.then(res => res.json())
.then((json) => 
    console.log(json))
//lets now create an array of the pictures
let images = ["https://images.dog.ceo/breeds/maltese/n02085936_461.jpg","https://images.dog.ceo/breeds/sheepdog-indian/Himalayan_Sheepdog.jpg","https://images.dog.ceo/breeds/pitbull/dog-3981033_1280.jpg", "https://images.dog.ceo/breeds/terrier-cairn/n02096177_11135.jpg","https://images.dog.ceo/breeds/dalmatian/cooper1.jpg","https://images.dog.ceo/breeds/terrier-bedlington/n02093647_2335.jpg"]
function dogImage(){
    document.getElementById('dogImage').src= dogImage[4];
    img.src ="https://dog.ceo/api/breeds/image/random"
    style="width:100px;height:100px;"
}
dogImage("https://dog.ceo/api/breeds/image/random");


//ADD BREED TO HTML
const breedUrl = "https://dog.ceo/api/breeds/list/all";
fetch ("https://dog.ceo/api/breeds/list/all")
.then(res => res.json())
.then((json) => {
const listelement = document.querySelector('#dog-breeds-list');
const dogBreeds = json.message; // 'message' contains the breeds list

Object.keys(dogBreeds).forEach(breed => {
  listelement.insertAdjacentHTML('beforeend', `<li>${breed}</li>`);
});
addingEventListener();
})

.catch(error => console.error('Error fetching dog breeds:', error));

function addingEventListener(){
  const listItems = document.querySelectorAll("#dog-breeds-list li");
  listItems.forEach(item => {
    item.addEventListener('click', function(){
      console.log(`${this.textContent} was clicked!`);
      this.style.color = 'firebrick'; // Change color of clicked item
  }); 
  });
}
// Function to display breeds
function displayBreeds(breeds) {
  listelement.innerHTML = ''; 
  // Clear the list before displaying
  Object.keys(breeds).forEach(breed => {
    listelement.insertAdjacentHTML('beforeend', `<li>${breed}</li>`);
  });
  addingEventListener(); // Add click event listeners to list items
}

// Display all breeds initially
displayBreeds(dogBreeds);

// Add event listener for filtering breeds
const breedDropdown = document.getElementById('breed-dropdown');
breedDropdown.addEventListener('change', function() {
  const selectedLetter = this.value;
  const filteredBreeds = Object.keys(dogBreeds).filter(breed => breed.startsWith(selectedLetter));
  displayBreeds(filteredBreeds);
})
.catch(error => console.error('Error fetching dog breeds:', error));
