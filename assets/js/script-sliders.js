

document.addEventListener("DOMContentLoaded", function () {

    // SLIDER A SATU START    
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
    setInterval(nextSlide, 7000); // Change slide every 5 seconds

    // SLIDER A SATU END  


    // SLIDER TWO START  B DUA  
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
    setInterval(nextSlidedua, 9100); // Change slide every 0.5 seconds
  
      // SLIDER TWO END  B DUA


    // SLIDER THREE START    D SATU
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
    setInterval(nextSlidetiga, 12600); // Change slide every 0.5 seconds
  
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
    // const slidesContainerTwo = document.querySelector(".slidesv-two");
    // const slidesverTwo = document.querySelectorAll(".slidevsatu-two");
    // const slideHeight = slidesverTwo[0].offsetHeight; // Get the height of a slide
    // let currentSlideTwo = 0;
    // let isTransitioningTwo = false; // Flag to prevent overlapping transitions

    // Clone the first and last slides for infinite scrolling
    // const firstCloneTwo = slidesverTwo[0].cloneNode(true);
    // const lastCloneTwo = slidesverTwo[slidesverTwo.length - 1].cloneNode(true);
    // slidesContainerTwo.appendChild(firstCloneTwo);
    // slidesContainerTwo.insertBefore(lastCloneTwo, slidesverTwo[0]);

    // Update the height of the container to accommodate the cloned slides
    // slidesContainerTwo.style.height = `${(slidesverTwo.length + 2) * 100}vh`;

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


     // SLIDER JS SLIDE COL 5 ROW 1 END START   E SATU
     const slidehomecvron = document.querySelectorAll(".slidehcvron");
     let currentShcvron = 0;
   
     function showShcvron(index) {
         slidehomecvron.forEach((slidehcvron, i) => {
         slidehcvron.classList.remove("active");
         if (i === index) {
         slidehcvron.classList.add("active");
         }
       });
     }
   
     function nextShcvron() {
       currentShcvron = (currentShcvron + 1) % slidehomecvron.length;
       showShcvron(currentShcvron);
     }
   
     // Initial slide
     showShcvron(currentShcvron);
   
     // Auto-looping
     setInterval(nextShcvron, 13000); // Change slide every 5 seconds
 
     // SLIDER JS SLIDE COL 5 ROW 1 END 


     // SLIDER JS SLIDE COL 4 ROW 2 END START    D DUA
     const slidehomecfrtw = document.querySelectorAll(".slidehcfrtw");
     let currentShcfrtw = 0;
   
     function showShcfrtw(index) {
         slidehomecfrtw.forEach((slidehcfrtw, i) => {
         slidehcfrtw.classList.remove("active");
         if (i === index) {
         slidehcfrtw.classList.add("active");
         }
       });
     }
   
     function nextShcfrtw() {
       currentShcfrtw = (currentShcfrtw + 1) % slidehomecfrtw.length;
       showShcfrtw(currentShcfrtw);
     }
   
     // Initial slide
     showShcfrtw(currentShcfrtw);
   
     // Auto-looping
     setInterval(nextShcfrtw, 5850); // Change slide every 5 seconds
 
     // SLIDER JS SLIDE COL 4 ROW 2 END   D DUA

     // SLIDER JS SLIDE COL 4 ROW 3 END START   D TIGA 
     const slidehomecfrth = document.querySelectorAll(".slidehcfrth");
     let currentShcfrth = 0;
   
     function showShcfrth(index) {
         slidehomecfrth.forEach((slidehcfrth, i) => {
         slidehcfrth.classList.remove("active");
         if (i === index) {
         slidehcfrth.classList.add("active");
         }
       });
     }
   
     function nextShcfrth() {
       currentShcfrth = (currentShcfrth + 1) % slidehomecfrth.length;
       showShcfrth(currentShcfrth);
     }
   
     // Initial slide
     showShcfrth(currentShcfrth);
   
     // Auto-looping
     setInterval(nextShcfrth, 9300); // Change slide every 5 seconds
 
     // SLIDER JS SLIDE COL 4 ROW 3 END  D TIGA



     // SLIDER JS SLIDE COL 3 ROW 1 END START   C SATU 
     const slidehomeciron = document.querySelectorAll(".slidehciron");
     let currentShciron = 0;
   
     function showShciron(index) {
         slidehomeciron.forEach((slidehciron, i) => {
         slidehciron.classList.remove("active");
         if (i === index) {
         slidehciron.classList.add("active");
         }
       });
     }
   
     function nextShciron() {
       currentShciron = (currentShciron + 1) % slidehomeciron.length;
       showShciron(currentShciron);
     }
   
     // Initial slide
     showShciron(currentShciron);
   
     // Auto-looping
     setInterval(nextShciron, 10000); // Change slide every 5 seconds
 
     // SLIDER JS SLIDE COL 3 ROW 1 END  C SATU

     // SLIDER JS SLIDE COL 3 ROW 2 END START    C DUA
     const slidehomecirtw = document.querySelectorAll(".slidehcirtw");
     let currentShcirtw = 0;
   
     function showShcirtw(index) {
         slidehomecirtw.forEach((slidehcirtw, i) => {
         slidehcirtw.classList.remove("active");
         if (i === index) {
         slidehcirtw.classList.add("active");
         }
       });
     }
   
     function nextShcirtw() {
       currentShcirtw = (currentShcirtw + 1) % slidehomecirtw.length;
       showShcirtw(currentShcirtw);
     }
   
     // Initial slide
     showShcirtw(currentShcirtw);
   
     // Auto-looping
     setInterval(nextShcirtw, 11500); // Change slide every 5 seconds
 
     // SLIDER JS SLIDE COL 3 ROW 2 END  C DUA



     // SLIDER JS SLIDE COL 2 ROW 1 END START   B SATU 
     const slidehomectron = document.querySelectorAll(".slidehctron");
     let currentShctron = 0;
   
     function showShctron(index) {
         slidehomectron.forEach((slidehctron, i) => {
         slidehctron.classList.remove("active");
         if (i === index) {
         slidehctron.classList.add("active");
         }
       });
     }
   
     function nextShctron() {
       currentShctron = (currentShctron + 1) % slidehomectron.length;
       showShctron(currentShctron);
     }
   
     // Initial slide
     showShctron(currentShctron);
   
     // Auto-looping
     setInterval(nextShctron, 6000); // Change slide every 5 seconds
 
     // SLIDER JS SLIDE COL 2 ROW 1 END  B SATU


     // SLIDER JS SLIDE COL 1 ROW 2 END START A DUA    
     const slidehomecortw = document.querySelectorAll(".slidehcortw");
     let currentShcortw = 0;
   
     function showShcortw(index) {
         slidehomecortw.forEach((slidehcortw, i) => {
         slidehcortw.classList.remove("active");
         if (i === index) {
         slidehcortw.classList.add("active");
         }
       });
     }
   
     function nextShcortw() {
       currentShcortw = (currentShcortw + 1) % slidehomecortw.length;
       showShcortw(currentShcortw);
     }
   
     // Initial slide
     showShcortw(currentShcortw);
   
     // Auto-looping
     setInterval(nextShcortw, 4500); // Change slide every 5 seconds
 
     // SLIDER JS SLIDE COL 1 ROW 2 END A DUA



     // SLIDER JS SLIDE COL 1 ROW 3 END START  A TIGA  
     const slidehomecorth = document.querySelectorAll(".slidehcorth");
     let currentShcorth = 0;
   
     function showShcorth(index) {
         slidehomecorth.forEach((slidehcorth, i) => {
         slidehcorth.classList.remove("active");
         if (i === index) {
         slidehcorth.classList.add("active");
         }
       });
     }
   
     function nextShcorth() {
       currentShcorth = (currentShcorth + 1) % slidehomecorth.length;
       showShcorth(currentShcorth);
     }
   
     // Initial slide
     showShcorth(currentShcorth);
   
     // Auto-looping
     setInterval(nextShcorth, 8000); // Change slide every 5 seconds
 
     // SLIDER JS SLIDE COL 1 ROW 3 END  A TIGA


     // MOBILE SLIDER JS SLIDE COL COL 1 ROW 1 START    
     const slidemconron = document.querySelectorAll(".slidemconron");
     let currentSmconron = 0;
   
     function showSmconron(index) {
         slidemconron.forEach((slidemconron, i) => {
         slidemconron.classList.remove("active");
         if (i === index) {
         slidemconron.classList.add("active");
         }
       });
     }
   
     function nextSmconron() {
       currentSmconron = (currentSmconron + 1) % slidemconron.length;
       showSmconron(currentSmconron);
     }
   
     // Initial slide
     showSmconron(currentSmconron);
   
     // Auto-looping
     setInterval(nextSmconron, 4000); // Change slide every 5 seconds
 
     // MOBILE SLIDER JS SLIDE COL 1 ROW 1 END 

     // MOBILE SLIDER JS SLIDE COL COL 2 ROW 1 START    
     const slidemctwron = document.querySelectorAll(".slidemctwron");
     let currentSmctwron = 0;
   
     function showSmctwron(index) {
         slidemctwron.forEach((slidemctwron, i) => {
         slidemctwron.classList.remove("active");
         if (i === index) {
         slidemctwron.classList.add("active");
         }
       });
     }
   
     function nextSmctwron() {
       currentSmctwron = (currentSmctwron + 1) % slidemctwron.length;
       showSmctwron(currentSmctwron);
     }
   
     // Initial slide
     showSmctwron(currentSmctwron);
   
     // Auto-looping
     setInterval(nextSmctwron, 6000); // Change slide every 5 seconds
 
     // MOBILE SLIDER JS SLIDE COL 2 ROW 1 END 

     // MOBILE SLIDER JS SLIDE COL COL 1 ROW 2 START    
     const slidemconrtw = document.querySelectorAll(".slidemconrtw");
     let currentSmconrtw = 0;
   
     function showSmconrtw(index) {
         slidemconrtw.forEach((slidemconrtw, i) => {
         slidemconrtw.classList.remove("active");
         if (i === index) {
         slidemconrtw.classList.add("active");
         }
       });
     }
   
     function nextSmconrtw() {
       currentSmconrtw = (currentSmconrtw + 1) % slidemconrtw.length;
       showSmconrtw(currentSmconrtw);
     }
   
     // Initial slide
     showSmconrtw(currentSmconrtw);
   
     // Auto-looping
     setInterval(nextSmconrtw, 8500); // Change slide every 8.5 seconds
 
     // MOBILE SLIDER JS SLIDE COL 1 ROW 2 END 

     // MOBILE SLIDER JS SLIDE COL COL 1 ROW 3 START    
     const slidemconrth = document.querySelectorAll(".slidemconrth");
     let currentSmconrth = 0;
   
     function showSmconrth(index) {
         slidemconrth.forEach((slidemconrth, i) => {
         slidemconrth.classList.remove("active");
         if (i === index) {
         slidemconrth.classList.add("active");
         }
       });
     }
   
     function nextSmconrth() {
       currentSmconrth = (currentSmconrth + 1) % slidemconrth.length;
       showSmconrth(currentSmconrth);
     }
   
     // Initial slide
     showSmconrth(currentSmconrth);
   
     // Auto-looping
     setInterval(nextSmconrth, 5000); // Change slide every 8.5 seconds
 
     // MOBILE SLIDER JS SLIDE COL 1 ROW 3 END 

     // MOBILE SLIDER JS SLIDE COL COL 2 ROW 3 START    
     const slidemctwrth = document.querySelectorAll(".slidemctwrth");
     let currentSmctwrth = 0;
   
     function showSmctwrth(index) {
         slidemctwrth.forEach((slidemctwrth, i) => {
         slidemctwrth.classList.remove("active");
         if (i === index) {
         slidemctwrth.classList.add("active");
         }
       });
     }
   
     function nextSmctwrth() {
       currentSmctwrth = (currentSmctwrth + 1) % slidemctwrth.length;
       showSmctwrth(currentSmctwrth);
     }
   
     // Initial slide
     showSmctwrth(currentSmctwrth);
   
     // Auto-looping
     setInterval(nextSmctwrth, 7000); // Change slide every 8.5 seconds
 
     // MOBILE SLIDER JS SLIDE COL 2 ROW 3 END 


     // MOBILE SLIDER JS SLIDE COL COL 1 ROW 4 START    
     const slidemconrfr = document.querySelectorAll(".slidemconrfr");
     let currentSmconrfr = 0;
   
     function showSmconrfr(index) {
         slidemconrfr.forEach((slidemconrfr, i) => {
         slidemconrfr.classList.remove("active");
         if (i === index) {
         slidemconrfr.classList.add("active");
         }
       });
     }
   
     function nextSmconrfr() {
       currentSmconrfr = (currentSmconrfr + 1) % slidemconrfr.length;
       showSmconrfr(currentSmconrfr);
     }
   
     // Initial slide
     showSmconrfr(currentSmconrfr);
   
     // Auto-looping
     setInterval(nextSmconrfr, 5200); // Change slide every 8.5 seconds
 
     // MOBILE SLIDER JS SLIDE COL 1 ROW 4 END 


     // MOBILE SLIDER JS SLIDE COL COL 2 ROW 4 START    
     const slidemctwrfr = document.querySelectorAll(".slidemctwrfr");
     let currentSmctwrfr = 0;
   
     function showSmctwrfr(index) {
         slidemctwrfr.forEach((slidemctwrfr, i) => {
         slidemctwrfr.classList.remove("active");
         if (i === index) {
         slidemctwrfr.classList.add("active");
         }
       });
     }
   
     function nextSmctwrfr() {
       currentSmctwrfr = (currentSmctwrfr + 1) % slidemctwrfr.length;
       showSmctwrfr(currentSmctwrfr);
     }
   
     // Initial slide
     showSmctwrfr(currentSmctwrfr);
   
     // Auto-looping
     setInterval(nextSmctwrfr, 8800); // Change slide every 8.5 seconds
 
     // MOBILE SLIDER JS SLIDE COL 2 ROW 4 END 

  });
