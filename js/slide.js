//let slideshow = document.getElementById("slideshow");
//let images = document.getElementsById("slide");
//let currentImage = 1;
//
//function showNextImage() {
//    images[currentImage].style.display = "none";
//    currentImage = (currentImage + 1) % images.length;
//    images[currentImage].style.display = "block";
//    setTimeout(showNextImage, 200);
//  }
//
//  showNextImage();



//
// ROLLER 1
// 

document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.image-container1');
  const images = container.querySelectorAll('img');
  let currentIndex = 0;

  images.forEach(img => {
    const clone = img.cloneNode(true);
    container.appendChild(clone);
    currentIndex++;
  });

  function moveImages() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
      container.style.transition = 'none';
      container.style.transform = 'translateX(0)';
      setTimeout(() => {
        container.style.transition = 'transform 5s ease';
      }, 20);
    } else {
      const moveDistance = -currentIndex * (images[0].offsetWidth + 20);
      container.style.transform = `translateX(${moveDistance}px)`;
    }
  }

  setInterval(moveImages, 2500); // Zmiana czasu przsuwania zdjęcia
});   

//
// ROLLER 2
// 

document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.image-container2');
  const images = container.querySelectorAll('img');
  let currentIndex = 0;

  images.forEach(img => {
    const clone = img.cloneNode(true);
    container.appendChild(clone);
    currentIndex--;
  });

  function moveImages() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
      container.style.transition = 'none';
      container.style.transform = 'translateX(0)';
      setTimeout(() => {
        container.style.transition = 'transform 5s ease';
      }, 20);
    } else {
      const moveDistance = +currentIndex * (images[0].offsetWidth + 20);
      container.style.transform = `translateX(${moveDistance}px)`;
    }
  }

  setInterval(moveImages, 2500); // Zmiana czasu przsuwania zdjęcia
});

//
// ROLLER 3
// 

document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.image-container3');
  const images = container.querySelectorAll('img');
  let currentIndex = 0;

  images.forEach(img => {
    const clone = img.cloneNode(true);
    container.appendChild(clone);
    currentIndex++;
  });

  function moveImages() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
      container.style.transition = 'none';
      container.style.transform = 'translateX(0)';
      setTimeout(() => {
        container.style.transition = 'transform 5s ease';
      }, 20);
    } else {
      const moveDistance = -currentIndex * (images[0].offsetWidth + 20);
      container.style.transform = `translateX(${moveDistance}px)`;
    }
  }

  setInterval(moveImages, 2500); // Zmiana czasu przsuwania zdjęcia
});