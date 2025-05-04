



function circleMove() {
    const minicircle = document.querySelector("#minicircle");

    window.addEventListener("mousemove", (details) => {
        gsap.to(minicircle, {
            x: details.clientX,
            y: details.clientY,
            duration: 0.5, // smooth transition duration
            ease: "power2.out"
        });
    });
}

circleMove();


document.addEventListener('DOMContentLoaded', () => {
    // GSAP Timeline for sidebar animation
    gsap.registerPlugin(ScrollTrigger);



    gsap.from(".test-card", {
        opacity: 0,
        y: 50,
        scale: 0.5,
        duration: 0.8,
        
        ease: "power2.Inout"
    });

    // Entry animation for cards on Page 1 when page loads



    // Desktop Navigation Buttons Hover Effects
    document.querySelectorAll(".nav-btn").forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, {
                duration: 0.3,
                backgroundColor: "#000",
                color: "#fff",
                scale: 1.05,
                ease: "power1.out"
            });
        });

        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, {
                duration: 0.3,
                backgroundColor: "#fff",
                color: "#000",
                scale: 1,
                ease: "power1.inOut"
            });
        });
    });

    // GSAP hover animation for pricing cards
document.querySelectorAll(".hover-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.05,
      y: -10,
      rotation: -1,
      duration: 0.4,
      boxShadow: "8px 8px 20px rgba(0, 0, 0, 0.2)",
      ease: "power3.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      y: 0,
      rotation: 0,
      duration: 0.4,
      boxShadow: "4px 4px 0px black",
      ease: "power3.inOut",
    });
  });
});


    // Sidebar Toggle for Mobile
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-sidebar");

    function isMobile() {
        return window.innerWidth <= 768;
    }

    const tl = gsap.timeline({ paused: true });

    tl.to(sidebar, {
        left: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out"
    }).from(() => document.querySelectorAll(".sidebar .nav-btn"), {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.3,
        ease: "power2.out"
    }, "-=0.2");

    menuIcon?.addEventListener("click", () => {
        if (isMobile()) {
            tl.restart();
        }
    });

    closeBtn?.addEventListener("click", () => {
        if (isMobile()) {
            gsap.to(sidebar, {
                left: "-100%",
                opacity: 0,
                duration: 0.3,
                ease: "power2.in"
            });
        }
    });

    // Button Hover Effects
    const btn1 = document.querySelector('.lrn-btn1');
    const btn2 = document.querySelector('.donation-btn');

    const hoverEffect = (btn) => {
        if (btn) {
            btn.addEventListener('mouseenter', () => {
                gsap.to(btn, {
                    duration: 0.3,
                    scale: 1.05,
                    boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.6)',
                    ease: 'power2.out'
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    duration: 0.3,
                    scale: 1,
                    boxShadow: '4px 4px 0px black',
                    ease: 'power2.inOut'
                });
            });
        }
    };

    hoverEffect(btn1);
    hoverEffect(btn2);

    // Left-side animations
    gsap.from('.left-side h1, .left-side p, .left-side button', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Card Animations for Page 1
    document.querySelectorAll(".test-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, {
                scale: 1.08,
                y: "-10px", // lifts the card slightly
                rotation: -1.5, // adds a subtle tilt
                boxShadow: "8px 8px 20px rgba(0, 0, 0, 0.2)",
                duration: 0.4,
                ease: "power3.out",
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                scale: 1,
                y: "0px",
                rotation: 0,
                boxShadow: "4px 4px 0px black",
                duration: 0.4,
                ease: "power3.inOut",
            });
        });
    });

    

    gsap.registerPlugin(ScrollTrigger);

// Heart Icon Animation
gsap.from(".heart-icon", {
    opacity: 0,
    scale: 0.5,
    rotation: 15,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".page2", 
        start: "top 80%",  
        end: "top 30%",    
        scrub: true,       
    }
});

// Profile Image Animation
gsap.from(".card-img", {
    opacity: 0,
    y: 50,
    scale: 0.8,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".page2", 
        start: "top 70%",  
        end: "top 30%",    
        scrub: true,       
    }
});

// Description Heading Animation with Stagger and Scale
gsap.from(".page2-description h1", {
    opacity: 0,
    y: 50,
    scale: 0.8,
    duration: 1.5,
    ease: "power4.out",
    stagger: 0.2,  // Adds a stagger effect if there are multiple elements
    scrollTrigger: {
        trigger: ".page2", 
        start: "top 60%",  
        end: "top 30%",    
        scrub: true,       
    }
});

// Paragraph Text Animation with a Bounce Effect
gsap.from(".page2-para p", {
    opacity: 0,
    y: 30,
    duration: 1.5,
    ease: "bounce.out", // Bounce effect for text
    stagger: 0.1,  // Add a slight stagger to each line
    scrollTrigger: {
        trigger: ".page2", 
        start: "top 50%",  
        end: "top 20%",    
        scrub: true,       
    }
});

// Donation Button Animation with Scale and BoxShadow
gsap.from(".donation-btn", {
    opacity: 0,
    y: 40,
    scale: 0.9,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".page2", 
        start: "top 40%",  
        end: "top 10%",    
        scrub: true,       
    }



    
});




<<<<<<< HEAD
=======

>>>>>>> 0789b6f (changes)
 
});
