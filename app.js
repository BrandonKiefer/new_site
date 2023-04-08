// Keep track of the index of the currently displayed image
let currentImageIndex = 0;

// Get all image elements inside the container div
const images = document.querySelectorAll('.carousel img');

// Get the total number of images
const imageCount = images.length;

const dots = document.querySelectorAll('.dot');


// Set up an interval to switch images every 10 seconds
setInterval(() => {
  // Hide the currently displayed image
  images[currentImageIndex].classList.remove('active');

  // Increment the index of the currently displayed image,
  // wrapping back to the beginning if necessary
  currentImageIndex = (currentImageIndex + 1) % imageCount;

  // Show the newly displayed image
  images[currentImageIndex].classList.add('active');
}, 10000);


// Add click event listeners to the dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Return if the clicked dot is already active
    if (index === currentImageIndex) return;

    // Deactivate the currently active image and dot
    images[currentImageIndex].classList.remove('active');
    dots[currentImageIndex].classList.remove('active');

    // Set the index of the newly displayed image
    currentImageIndex = index;

    // Activate the newly displayed image and dot
    images[currentImageIndex].classList.add('active');
    dots[currentImageIndex].classList.add('active');
  });
});

// Add event listener for left arrow click
document.querySelector('.left-arrow').addEventListener('click', () => {
  moveImage(currentImageIndex - 1);
});

// Add event listener for right arrow click
document.querySelector('.right-arrow').addEventListener('click', () => {
  moveImage(currentImageIndex + 1);
});

function moveImage(newIndex) {
  // Adjust the new index if it's out of bounds
  if (newIndex < 0) newIndex = imageCount - 1;
  if (newIndex >= imageCount) newIndex = 0;

  // Deactivate the currently active image and dot
  images[currentImageIndex].classList.remove('active');
  dots[currentImageIndex].classList.remove('active');

  // Set the index of the newly displayed image
  currentImageIndex = newIndex;

  // Activate the newly displayed image and dot
  images[currentImageIndex].classList.add('active');
  dots[currentImageIndex].classList.add('active');
}

// Set the first image and its corresponding dot as active on page load
images[0].classList.add('active');
dots[0].classList.add('active');

 


/* HAMBURGER EVENT LISTENER */

let links = document.querySelector('.links');


const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
  if (links.style.display === 'none') {
    links.style.display = 'flex';
  } else {
    links.style.display = 'none';
  }
});

function checkScreenWidth() {
  if (window.innerWidth <= 768) {
    if (!links.classList.contains('open')) {
      links.style.display = 'none';
    }
    links.classList.add('navbar');
  } else {
    links.style.display = 'flex';
    links.classList.remove('navbar');
  }
}

// Check the screen width on page load
checkScreenWidth();

// Check the screen width when the window is resized
window.addEventListener('resize', checkScreenWidth);
