// Keep track of the index of the currently displayed image
let currentImageIndex = 0;

// Get all image elements inside the container div
const images = document.querySelectorAll('.carousel img');

// Get the total number of images
const imageCount = images.length;

const dots = document.querySelectorAll('.dot');

moveImage(0);

function changeImage() {
  // Hide the currently displayed image
  images[currentImageIndex].classList.remove('active');

  // Increment the index of the currently displayed image,
  // wrapping back to the beginning if necessary
  currentImageIndex = (currentImageIndex + 1) % imageCount;

  // Show the newly displayed image
  images[currentImageIndex].classList.add('active');

  // Restart the timer
  startTimer();
}

function startTimer() {
  clearTimeout(timer); // Clear the existing timer
  timer = setTimeout(changeImage, 5000); // Set a new timer
}

let timer = setTimeout(changeImage, 5000); // Start the timer for the first time

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

// Add a click event listener to the carousel container
document.querySelector('.carousel').addEventListener('click', (event) => {
  const currentDiv = images[currentImageIndex].parentElement;
  const anchor = currentDiv.getAttribute('data-anchor');
  const target = currentDiv.getAttribute('data-target');

  // Check if the click event is on an image and there is an anchor
  if (event.target.tagName === 'IMG' && anchor) {
    if (target) {
      window.open(anchor, target);
    } else {
      window.location.href = anchor;
    }
  }
});


// Add event listener for left arrow click
document.querySelector('.left-arrow').addEventListener('click', () => {
  moveImage(currentImageIndex - 1);
  startTimer(); // Restart the timer when the left arrow is clicked
});

// Add event listener for right arrow click
document.querySelector('.right-arrow').addEventListener('click', () => {
  moveImage(currentImageIndex + 1);
  startTimer(); // Restart the timer when the right arrow is clicked
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
  hamburger.classList.toggle('open');
  links.classList.toggle('open');
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
    links.classList.remove('open');
    hamburger.classList.remove('open');
  }
}

// Check the screen width on page load
checkScreenWidth();

// Check the screen width when the window is resized
window.addEventListener('resize', checkScreenWidth);


/* ANIMATIONS */

function reveal() {
  let reveals = document.querySelectorAll(".reveal")
  for (let i = 0; i < reveals.length; i++) {
    //window.innerHeight will give us the height of the viewport
    let windowHeight = window.innerHeight;
    //getBoundingClientRect().top gives us this distance from the top of the viewport 
    let elementTop = reveals[i].getBoundingClientRect().top;
    //elementVisible is the height at which the element should be revealed to the user.
    let elementVisible = 125;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function revealsideR() {
  let reveals = document.querySelectorAll(".reveal-side-r")
  for (let i = 0; i < reveals.length; i++) {
    //window.innerHeight will give us the height of the viewport
    let windowHeight = window.innerHeight;
    //getBoundingClientRect().top gives us this distance from the top of the viewport 
    let elementTop = reveals[i].getBoundingClientRect().top;
    //elementVisible is the height at which the element should be revealed to the user.
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function revealsideL() {
  let reveals = document.querySelectorAll(".reveal-side-l")
  for (let i = 0; i < reveals.length; i++) {
    //window.innerHeight will give us the height of the viewport
    let windowHeight = window.innerHeight;
    //getBoundingClientRect().top gives us this distance from the top of the viewport 
    let elementTop = reveals[i].getBoundingClientRect().top;
    //elementVisible is the height at which the element should be revealed to the user.
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}



window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealsideR);
window.addEventListener("scroll", revealsideL);
