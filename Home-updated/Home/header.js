document.addEventListener('DOMContentLoaded', function() {
  // Create the logo element
  var logo = document.createElement('div');
  logo.classList.add('logo');

  // Create the logo image element
  var logoImage = document.createElement('img');
  logoImage.src = 'Home/Assets/logo2.png';
  logoImage.classList.add('logo');
  logoImage.setAttribute('height', '100px');
  logoImage.setAttribute('width', '50px');

  // Create the anchor element
  var anchor = document.createElement('a');
  anchor.href = '../index.html'; // Replace with your desired URL

  // Append the logo image to the anchor element
  anchor.appendChild(logoImage);

  // Append the anchor element to the logo div
  logo.appendChild(anchor);

  // Create the navbar element
  var navbar = document.createElement('div');
  navbar.classList.add('navbar');
  var navbarList = document.createElement('ul');
  var navbarItems = ['Launches', 'Rockets', 'Spacecrafts', 'Gaganyaan', 'Others'];
  var hrefValues = ['../Launches/launches.html', '../Rockets/rockets.html', '../Spacecrafts/spacecraft.html', '../Extras/WIP.html', '../Extras/WIP.html'];

  for (var i = 0; i < navbarItems.length; i++) {
    var navbarItem = document.createElement('li');
    var navbarLink = document.createElement('a');
    navbarLink.href = hrefValues[i]; // Set the appropriate href value
    navbarLink.textContent = navbarItems[i];

    navbarItem.appendChild(navbarLink);
    navbarList.appendChild(navbarItem);
  }

  navbar.appendChild(navbarList);

  // Insert the logo and navbar into the banner element
  var banner = document.querySelector('.banner');
  banner.appendChild(logo);
  banner.appendChild(navbar);



  var slideIndex = 1;
  showSlides(slideIndex);

// Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

// Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

// Function to display slides
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}
  
// Automatic slideshow
  setInterval(function() {
    plusSlides(1);
  }, 5000);

  


});


