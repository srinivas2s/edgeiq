// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Update ScrollTrigger on Lenis scroll
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
});
gsap.ticker.lagSmoothing(0);

// Navbar opacity on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-brand-offWhite/80', 'backdrop-blur-md');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-brand-offWhite/80', 'backdrop-blur-md');
    }
});

// Animations

// 1. Hero Animation
const heroTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true
    }
});
heroTl.to(".hero-title", { scale: 0.8, opacity: 0, y: -50 }, 0)
      .to(".hero-subtitle", { opacity: 0, y: -30 }, 0.1)
      .to(".hero-desc, .hero-buttons, .hero-eyebrow", { opacity: 0 }, 0.1)
      .to(".hero-visual", { scale: 1.1, y: -100 }, 0);

// 2. Opening Statement
const statementTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".statement-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    }
});
statementTl.to(".statement-1", { opacity: 0, y: -50 }, 0.2)
           .to(".statement-2", { opacity: 1, y: 0 }, 0.3)
           .to(".statement-2", { opacity: 0, y: -50 }, 0.6)
           .to(".statement-3", { opacity: 1, y: 0 }, 0.7);

// 3. Problem Section - Signals Converge
gsap.from(".signal-item", {
    scrollTrigger: {
        trigger: ".signals-container",
        start: "top 80%",
        end: "center center",
        scrub: 1
    },
    x: (i) => (Math.random() - 0.5) * 500,
    y: (i) => (Math.random() - 0.5) * 500,
    opacity: 0,
    scale: 0.5,
    stagger: 0.05
});

gsap.to(".problem-item", {
    scrollTrigger: {
        trigger: ".problem-reveal",
        start: "top 80%",
        end: "center center",
        scrub: 1
    },
    opacity: 1,
    y: 0,
    stagger: 0.1
});

// 4. Core Idea - Loop words
gsap.to(".loop-word", {
    scrollTrigger: {
        trigger: ".core-loop-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true
    },
    color: "#1D1D1F",
    stagger: 0.2
});

// 5. Architecture Layers
gsap.utils.toArray(".layer-card").forEach((layer, i) => {
    gsap.from(layer, {
        scrollTrigger: {
            trigger: ".architecture-stack",
            start: "top 80%",
            end: "center center",
            scrub: 1
        },
        y: 50 * (6-i),
        opacity: 0,
        scale: 0.9,
    });
});

// 6. Edge AI - Technical Labels
gsap.from(".technical-labels p", {
    scrollTrigger: {
        trigger: ".technical-labels",
        start: "top 80%",
        end: "center center",
        scrub: 1
    },
    x: -50,
    opacity: 0,
    stagger: 0.1
});

// 7. Hardware Labels
gsap.to(".hw-label", {
    scrollTrigger: {
        trigger: ".hardware-labels",
        start: "top 60%",
        end: "center center",
        scrub: 1
    },
    opacity: 1,
    y: 0,
    stagger: 0.2
});

// 8. CV Capabilities
gsap.to(".cv-capabilities div", {
    scrollTrigger: {
        trigger: ".cv-capabilities",
        start: "top 80%",
        end: "center center",
        scrub: 1
    },
    opacity: 1,
    y: 0,
    stagger: 0.05
});


// 9. Queue Alert
gsap.to(".queue-alert", {
    scrollTrigger: {
        trigger: ".queue-alert",
        start: "top 60%",
        end: "center center",
        scrub: 1
    },
    opacity: 1,
    y: 0
});

// 10. ERP Flow
gsap.from(".erp-flow > div", {
    scrollTrigger: {
        trigger: ".erp-flow",
        start: "top 80%",
        end: "bottom center",
        scrub: 1
    },
    opacity: 0.2,
    y: 20,
    stagger: 0.2
});

// 11. Privacy Flow
gsap.from(".privacy-flow > div", {
    scrollTrigger: {
        trigger: ".privacy-flow",
        start: "top 80%",
        end: "bottom center",
        scrub: 1
    },
    opacity: 0,
    x: 50,
    stagger: 0.1
});

// 12. Closed Loop
const clTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".closed-loop-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true
    }
});

clTl.to(".cl-word", { opacity: 1, color: "#FFFFFF", stagger: 0.1 })
    .to(".cl-arrow", { color: "#32ADE6", stagger: 0.1 }, "<")
    .to(".cl-loop-svg", { opacity: 1 }, 0.5)
    .to(".cl-subtext", { opacity: 1, y: -20 }, 0.8);

// 13. Future Network
gsap.to(".future-list p", {
    scrollTrigger: {
        trigger: ".future-list",
        start: "top 80%",
        end: "center center",
        scrub: 1
    },
    opacity: 1,
    y: 0,
    stagger: 0.05
});

gsap.from(".network-expansion span", {
    scrollTrigger: {
        trigger: ".network-expansion",
        start: "top 80%",
        end: "center center",
        scrub: 1
    },
    opacity: 0,
    scale: 0.8,
    stagger: 0.2
});

// 14. Final Section
const finalTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".final-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true
    }
});

finalTl.to(".final-text-1", { opacity: 0 }, 0.2)
       .to(".final-text-2", { opacity: 1 }, 0.3)
       .to(".final-text-2", { opacity: 0, scale: 0.9 }, 0.6)
       .to(".final-brand", { opacity: 1, y: 0 }, 0.7);

