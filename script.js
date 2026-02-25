document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lenis for Smooth Scrolling
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
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis
    if (typeof ScrollTrigger !== "undefined") {
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
    }

    // 2. Initial Loader & Reveal Animation
    const tl = gsap.timeline({
        onComplete: () => {
            document.querySelector('.loader').style.display = 'none';
            // Ensure lenis can interact 
        }
    });

    // Simulate loading
    tl.to('.loader-progress', {
        width: '100%',
        duration: 1.5,
        ease: 'power3.inOut'
    })
        .to('.loader', {
            yPercent: -100,
            duration: 0.8,
            ease: 'power4.inOut'
        })
        .fromTo('.header',
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
            "-=0.4"
        )
        .to('.fade-up', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'all' // important for preserving CSS hover states
        }, "-=0.6");


    // 3. Scroll Interactions / Fade Ups for other sections
    gsap.utils.toArray('section:not(.hero), .footer-container').forEach(section => {
        const elements = section.querySelectorAll('.fade-up');
        if (elements.length > 0) {
            gsap.fromTo(elements,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    });

    // 4. Hover effect on services cards (Scanline)
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        let scanLine = card.querySelector('.scan-line');
        // Initial set opacity to ensure it's not visible initially
        gsap.set(scanLine, { opacity: 0, top: '0%' });

        // Instead of reusing a timeline that has bugs sometimes with mouse rapid movement, we create a tween inside events
        let scanTween;

        card.addEventListener('mouseenter', () => {
            if (scanTween) scanTween.kill();
            gsap.set(scanLine, { top: '0%', opacity: 1 });
            scanTween = gsap.to(scanLine, {
                top: '100%',
                duration: 1.5,
                ease: 'linear',
                repeat: -1
            });
        });

        card.addEventListener('mouseleave', () => {
            if (scanTween) scanTween.kill();
            gsap.to(scanLine, { opacity: 0, duration: 0.3 });
        });
    });

});
