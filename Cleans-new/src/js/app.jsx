gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 1.5,
	effects: true
})

gsap.fromTo( '.gallery-top-left', { opacity: 0, x: -500 }, {
	opacity: 1, x: 0,
	scrollTrigger: {
		trigger: '.gallery-top-left',
		start: '-1000',
		end: 'top',
		scrub: true
	}
})

gsap.fromTo( '.gallery-bottom-left', { opacity: 0, x: -440 }, {
	opacity: 1, x: 0,
	scrollTrigger: {
		trigger: '.gallery-bottom-left',
		start: '-1500',
		end: '-100',
		scrub: true
	}
})

gsap.fromTo( '.gallery-top-right', { opacity: 0, x: 500 }, {
	opacity: 1, x: 0,
	scrollTrigger: {
		trigger: '.gallery-top-right',
		start: '-1000',
		end: 'top',
		scrub: true
	}
})

gsap.fromTo( '.gallery-bottom-right', { opacity: 0, x: 440 }, {
	opacity: 1, x: 0,
	scrollTrigger: {
		trigger: '.gallery-bottom-right',
		start: '-1500',
		end: '-100',
		scrub: true
	}
})