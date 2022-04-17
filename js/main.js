// Get slider item | Array from [ES6 Features]
var sliderImage = Array.from(document.querySelectorAll(".slider-container img"));

// Get Number of Slides 
var slidescount = sliderImage.length;

// Set Current Slide 
var currentslide = 1;

// slide Number Element
var slidenumberelement = document.getElementById('slide-number');

// Previos And Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle click on Previos And Next Buttons
nextButton.onclick=nextSlide;
prevButton.onclick=prevSlide;


// Create The main Ul Element 
var paginationElement = document.createElement("ul");

// Set id on created UL Element 
paginationElement.setAttribute("id","pagination-ul");

//Create list items based on slides Count 
for(var i=1;i <=slidescount;i++){

    // Create The Li
    var paginationItem = document.createElement("li");

    //Set Custom Attribute
    paginationItem.setAttribute("data-index", i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // append items to the main ul list
    paginationElement.appendChild(paginationItem);
}

// Add the created Ul to the page
document.getElementById('indicators').appendChild(paginationElement);

// Get the new created Ul
var paginationCreatedUl = document.getElementById('pagination-ul')

// Get pagination item | Array from [ES6 Features]
var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// loop throagh All Bullets Item 
for(var i=0;i<paginationBullets.length;i++){
    paginationBullets[i].onclick = function(){
        currentslide =parseInt(this.getAttribute('data-index'));
        TheChicker();
    }
}

// triger function The Checker
TheChicker();

// Next Slide Function 
function nextSlide(){
    if (nextButton.classList.contains('disabled')){
        return false;
    }else{
        currentslide++;

        TheChicker();
    }
}

// Previos Slide Function
function prevSlide(){
    if (prevButton.classList.contains('disabled')){
        return false;
    }else{
        currentslide--;

        TheChicker();
    }
}

// Chicker Function
function TheChicker(){

    // set the slide number
    slidenumberelement.textContent = `Slide # ${currentslide} of ${slidescount}`;

    // Remove All Active Classes 
    removeAllActive();

    // set Active class on Current Slide
    sliderImage[currentslide -1].classList.add('active');

    // Set active class on current pagination Item
    paginationCreatedUl.children[currentslide -1].classList.add("active");

    // check if current slide is first 
    if (currentslide == 1){
        prevButton.classList.add("disabled");
    }else{
        prevButton.classList.remove("disabled");
    }

    // check if current slide is last 
    if (currentslide == slidescount){
        nextButton.classList.add("disabled");
    }else{
        nextButton.classList.remove("disabled");
    }
}

// Remove All Avtive Classes From Images And pagination Billets
function removeAllActive(){

    // loop Throagh Images
    sliderImage.forEach(function(img){
        img.classList.remove("active");
    });

    // loop throagh pagination bullets
    paginationBullets.forEach(function(bullet){
        bullet.classList.remove("active");
    });
}