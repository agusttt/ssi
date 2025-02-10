

document.addEventListener("DOMContentLoaded", function () {

    // SLIDER SATU START    
    const slidesone = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide(index) {
      slidesone.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
          slide.classList.add("active");
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slidesone.length;
      showSlide(currentSlide);
    }
  
    // Initial slide
    showSlide(currentSlide);
  
    // Auto-looping
    setInterval(nextSlide, 7500); // Change slide every 5 seconds

    // SLIDER SATU END  


    // SLIDER TWO START    
    const slidetwo = document.querySelectorAll(".slidedua");
    let currentSlidedua = 0;
    
    function showSlidetwo(index) {
      slidetwo.forEach((slidedua, i) => {
        slidedua.classList.remove("active");
        if (i === index) {
          slidedua.classList.add("active");
        }
      });
    }
    
    function nextSlidedua() {
      currentSlidedua = (currentSlidedua + 1) % slidetwo.length;
      showSlidetwo(currentSlidedua);
    }
    
    // Initial slide
    showSlidetwo(currentSlidedua);
    
    // Auto-looping
    setInterval(nextSlidedua, 9000); // Change slide every 0.5 seconds
  
      // SLIDER TWO END  


    // SLIDER THREE START    
    const slidethree = document.querySelectorAll(".slidetiga");
    let currentSlidetiga = 0;
    
    function showSlidethree(index) {
      slidethree.forEach((slidetiga, i) => {
        slidetiga.classList.remove("active");
        if (i === index) {
          slidetiga.classList.add("active");
        }
      });
    }
    
    function nextSlidetiga() {
      currentSlidetiga = (currentSlidetiga + 1) % slidethree.length;
      showSlidethree(currentSlidetiga);
    }
    
    // Initial slide
    showSlidethree(currentSlidetiga);
    
    // Auto-looping
    setInterval(nextSlidetiga, 9000); // Change slide every 0.5 seconds
  
    // SLIDER THREE END  

    // SLIDER FOUR START    
    const slidefour = document.querySelectorAll(".slideempat");
    let currentSlideempat = 0;
    
    function showSlidefour(index) {
      slidefour.forEach((slideempat, i) => {
        slideempat.classList.remove("active");
        if (i === index) {
          slideempat.classList.add("active");
        }
      });
    }
    
    function nextSlideempat() {
      currentSlideempat = (currentSlideempat + 1) % slidefour.length;
      showSlidefour(currentSlideempat);
    }
    
    // Initial slide
    showSlidefour(currentSlideempat);
    
    // Auto-looping
    setInterval(nextSlideempat, 9000); // Change slide every 0.5 seconds
  
    // SLIDER FOUR END      




    const slidesContainer = document.querySelector(".slidesv");
    const slidesver = document.querySelectorAll(".slidevsatu");
    const slideWidth = slidesver[0].offsetWidth; // Get the width of a slide
    let currentSlidev = 0;
    let isTransitioning = false; // Flag to prevent overlapping transitions

    // Clone the first and last slides for infinite scrolling
    const firstClone = slidesver[0].cloneNode(true);
    const lastClone = slidesver[slidesver.length - 1].cloneNode(true);
    slidesContainer.appendChild(firstClone);
    slidesContainer.insertBefore(lastClone, slidesver[0]);

    // Update the width of the container to accommodate the cloned slides
    slidesContainer.style.width = `${(slidesver.length + 2) * 100}%`;

    // Function to move to the next slide
    function nextSlidev() {
        if (isTransitioning) return; // Prevent overlapping transitions
        isTransitioning = true;

        // Remove active class from the current slide
        slidesContainer.querySelector('.slidevsatu.active').classList.remove('active');

        currentSlidev++;
        updateSlider();
    }

    // Function to update the slider position
    function updateSlider() {
        const offset = -currentSlidev * slideWidth;
        slidesContainer.style.transition = "transform 0.5s ease-in-out";
        slidesContainer.style.transform = `translateX(${offset}px)`;

        // Handle wrapping back to the beginning
        if (currentSlidev === slidesver.length + 1) {
            setTimeout(() => {
                slidesContainer.style.transition = "none";
                slidesContainer.style.transform = `translateX(${-slideWidth}px)`;
                currentSlidev = 1;
            }, 500); // Wait for the transition to complete
        }

        // Handle wrapping from the beginning to the end
        if (currentSlidev === 0) {
            setTimeout(() => {
                slidesContainer.style.transition = "none";
                slidesContainer.style.transform = `translateX(${-(slidesver.length) * slideWidth}px)`;
                currentSlidev = slidesver.length;
            }, 500); // Wait for the transition to complete
        }

        // Add active class to the new current slide
        slidesContainer.children[currentSlidev].classList.add('active');

        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }

    // Auto-looping
    setInterval(nextSlidev, 4500);




    // SLIDE BOTTOM TO UP START ONE
    const slidesContainerTwo = document.querySelector(".slidesv-two");
    const slidesverTwo = document.querySelectorAll(".slidevsatu-two");
    const slideHeight = slidesverTwo[0].offsetHeight; // Get the height of a slide
    let currentSlideTwo = 0;
    let isTransitioningTwo = false; // Flag to prevent overlapping transitions

    // Clone the first and last slides for infinite scrolling
    const firstCloneTwo = slidesverTwo[0].cloneNode(true);
    const lastCloneTwo = slidesverTwo[slidesverTwo.length - 1].cloneNode(true);
    slidesContainerTwo.appendChild(firstCloneTwo);
    slidesContainerTwo.insertBefore(lastCloneTwo, slidesverTwo[0]);

    // Update the height of the container to accommodate the cloned slides
    slidesContainerTwo.style.height = `${(slidesverTwo.length + 2) * 100}vh`;

    // Function to move to the next slide
    function nextSlideTwo() {
        if (isTransitioningTwo) return; // Prevent overlapping transitions
        isTransitioningTwo = true;

        // Remove active class from the current slide
        slidesContainerTwo.querySelector('.slidevsatu-two.active-two').classList.remove('active-two');

        currentSlideTwo++;
        updateSliderTwo();
    }

    // Function to update the slider position
    function updateSliderTwo() {
        const offset = -currentSlideTwo * slideHeight;
        slidesContainerTwo.style.transition = "transform 0.5s ease-in-out";
        slidesContainerTwo.style.transform = `translateY(${offset}px)`;

        // Handle wrapping back to the beginning
        if (currentSlideTwo === slidesverTwo.length + 1) {
            setTimeout(() => {
                slidesContainerTwo.style.transition = "none";
                slidesContainerTwo.style.transform = `translateY(${-slideHeight}px)`;
                currentSlideTwo = 1;
            }, 500); // Wait for the transition to complete
        }

        // Handle wrapping from the beginning to the end
        if (currentSlideTwo === 0) {
            setTimeout(() => {
                slidesContainerTwo.style.transition = "none";
                slidesContainerTwo.style.transform = `translateY(${-(slidesverTwo.length) * slideHeight}px)`;
                currentSlideTwo = slidesverTwo.length;
            }, 500); // Wait for the transition to complete
        }

        // Add active class to the new current slide
        slidesContainerTwo.children[currentSlideTwo].classList.add('active-two');

        setTimeout(() => {
            isTransitioningTwo = false;
        }, 500);
    }

    // Auto-looping
    setInterval(nextSlideTwo, 4900);

    // SLIDE BOTTOM TO UP END ONE


  });
