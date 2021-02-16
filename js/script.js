// ----- RESPONISVE NAV BAR------------

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// ------- CUSTOMER SLIDESHOW -----


var slideIndexCustomer = 1;
showSlidesCustomer(slideIndexCustomer);

function plusSlidesCustomer(n) {
  showSlidesCustomer(slideIndexCustomer += n);
}

function currentSlideCustomer(n) {
  showSlidesCustomer(slideIndexCustomer = n);
}

function showSlidesCustomer(n) {
  var i;
  var slidesCustomer = document.getElementsByClassName("mySlidesCustomer");
  var dotsCustomer = document.getElementsByClassName("dotCustomer");
  if (n > slidesCustomer.length) {slideIndexCustomer = 1}    
  if (n < 1) {slideIndexCustomer = slidesCustomer.length}
  for (i = 0; i < slidesCustomer.length; i++) {
      slidesCustomer[i].style.display = "none";  
  }
  for (i = 0; i < dotsCustomer.length; i++) {
      dotsCustomer[i].className = dotsCustomer[i].className.replace(" active", "");
  }
  slidesCustomer[slideIndexCustomer-1].style.display = "block";  
  dotsCustomer[slideIndexCustomer-1].className += " active";
}





// ------ BAR SLIDESHOW -----------


var slideIndexBar = 1;
showSlidesBar(slideIndexBar);

function plusSlidesBar(n) {
  showSlidesBar(slideIndexBar += n);
}

function currentSlideBar(n) {
  showSlidesBar(slideIndexBar = n);
}

function showSlidesBar(n) {
  var i;
  var slidesBar = document.getElementsByClassName("mySlidesBar");
  var dotsBar = document.getElementsByClassName("dotBar");
  if (n > slidesBar.length) {slideIndexBar = 1}    
  if (n < 1) {slideIndexBar = slidesBar.length}
  for (i = 0; i < slidesBar.length; i++) {
      slidesBar[i].style.display = "none";  
  }
  for (i = 0; i < dotsBar.length; i++) {
      dotsBar[i].className = dotsBar[i].className.replace(" active", "");
  }
  slidesBar[slideIndexBar-1].style.display = "block";  
  dotsBar[slideIndexBar-1].className += " active";
}


// ------ Manager SLIDESHOW -----------


var slideIndexManager = 1;
showSlidesManager(slideIndexManager);

function plusSlidesManager(n) {
  showSlidesManager(slideIndexManager += n);
}

function currentSlideManager(n) {
  showSlidesManager(slideIndexManager = n);
}

function showSlidesManager(n) {
  var i;
  var slidesManager = document.getElementsByClassName("mySlidesManager");
  var dotsManager = document.getElementsByClassName("dotManager");
  if (n > slidesManager.length) {slideIndexManager = 1}    
  if (n < 1) {slideIndexManager = slidesManager.length}
  for (i = 0; i < slidesManager.length; i++) {
      slidesManager[i].style.display = "none";  
  }
  for (i = 0; i < dotsManager.length; i++) {
      dotsManager[i].className = dotsManager[i].className.replace(" active", "");
  }
  slidesManager[slideIndexManager-1].style.display = "block";  
  dotsManager[slideIndexManager-1].className += " active";
}