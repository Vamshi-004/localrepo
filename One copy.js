const t1 = gsap.timeline({
    defaults: {
        ease: 'power1.out'
    }
})

t1.to('.text', { y: '0%', duration: 1, stagger: 0.25 })
t1.to('.slider', { y: '-100%', duration: 2 })
t1.to('.intro', { y: '-100%', duration: 1 }, '<0.5')
t1.fromTo('li', { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.15, stagger: 0.1 })
t1.fromTo('.tagline', { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.15 }, '<')


let content = document.querySelector('.responsive')
