
let carousel = document.getElementById("carouselExample");
let interval = 3000;
let images = [
  "https://images.unsplash.com/photo-1658801956904-43841e89d831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.webp?b=1&s=170667a&w=0&k=20&c=M1Lvq7d-B4vrGasRQJCsvUO5zJdOvwvswjqaWmHPYyA=",
];
var currentIndex = 2; 

function changeImage() {
  // Create a new carousel item with the next image
  var newImage = document.createElement("div");
  newImage.classList.add("carousel-item");
  var img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("d-block", "w-100");
  newImage.appendChild(img);

  // Remove the first item if there are already 6 items
  if (carousel.querySelectorAll(".carousel-item").length === 6) {
    carousel.querySelector(".carousel-item").remove();
  }

  // Add the new item to the carousel
  carousel.appendChild(newImage);

  // Update the current index
  currentIndex = (currentIndex + 1) % images.length;
}

// Start the carousel with the interval
var carouselInstance = new bootstrap.Carousel(carousel, {
  interval: interval,
});

// Add a timer to change the image every 3 seconds
setInterval(changeImage, interval);
