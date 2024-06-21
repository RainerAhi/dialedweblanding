

function animateText(textSelector) {
    // Initialize GSAP plugins
    gsap.registerPlugin(SplitText, ScrollTrigger);
  
    // Select all elements matching textSelector
    document.querySelectorAll(textSelector).forEach(element => {
      // Initial rotation setup
      gsap.set(element, { transformPerspective: 500, transformOrigin: "center bottom", rotationX: 70 });
  
      let mySplitText = new SplitText(element, { type: "chars" });
      let chars = mySplitText.chars;
  
      // Combined animation for rotation and yPercent (reset on scroll back up)
      gsap.fromTo(element, {
        rotationX: 70,
        opacity: 0,
      }, {
        rotationX: 0,
        opacity: 1,
        duration: 1.5,
        ease: "back.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reset", // Reset to initial state on scroll back up
        }
      });
  
      // Additional animation for characters (reset on scroll back up)
      gsap.from(chars, {
        yPercent: 100,
        stagger: 0.04,
        opacity: 0,
        ease: "power1.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reset", // Reset to initial state on scroll back up
        }
      });
  
      // Opacity animation (scrub)
      gsap.fromTo(element, {
        opacity: 0,
      }, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 60%",
          scrub: true, // Enable scrubbing
          toggleActions: "play reverse play reverse", // Allow reverse
        }
      });
    });
  }
  
  // Apply animation to all elements with class "split"
  animateText(".split");