// index.js

// Function to display ramens on page load
async function displayRamens() {
  const response = await fetch('/ramens'); // Assuming the server endpoint is '/ramens'
  const ramens = await response.json();

  const ramenMenuDiv = document.getElementById('ramen-menu');
  ramens.forEach((ramen) => {
    const img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener('click', () => handleClick(ramen));
    ramenMenuDiv.appendChild(img);
  });
}

// Function to handle click on ramen image
function handleClick(ramen) {
  const detailImg = document.querySelector("#ramen-detail > .detail-image");
  const detailName = document.querySelector("#ramen-detail > .name");
  const detailRestaurant = document.querySelector("#ramen-detail > .restaurant");
  const detailsRating = document.getElementById("rating-display");
  const detailsComment = document.getElementById("comment-display");

  detailImg.src = ramen.image;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailsRating.textContent = ramen.rating;
  detailsComment.textContent = ramen.comment;
}

// Function to add submit event listener to the new-ramen form
function addSubmitListener(form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const newRamen = {
      name: form.elements.name.value,
      restaurant: form.elements.restaurant.value,
      image: form.elements.image.value,
      rating: form.elements.rating.value,
      comment: form.elements.comment.value
    };

    const ramenMenuDiv = document.getElementById('ramen-menu');
    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener('click', () => handleClick(newRamen));
    ramenMenuDiv.appendChild(img);

    // Clear form fields after submission
    form.reset();
  });
}

// Function to start the program logic after the DOM has fully loaded
function main() {
  displayRamens();
  const newRamenForm = document.getElementById('new-ramen');
  addSubmitListener(newRamenForm);
}

// Invoke the main function after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', main);
