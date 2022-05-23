/*==================== MENU SHOW Y HIDDEN ====================*/
let scrollPosition = 0;
let menuOpen = false;
let isMobileDevice = window.matchMedia("(max-width: 767px)").matches;
let autoScroll = true;

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
	let itemClass = this.parentNode.className;

	for (i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className = 'skills__content skills__close';
		const proudContent = document.getElementsByClassName('proud__list');
		for (let item of proudContent) {
			item.classList.remove('fade-in-animation-08');
		}

		const skillContent = document.getElementsByClassName('skills__list');
		for (let item of skillContent) {
			item.classList.remove('fade-in-animation-08');
		}
	}

	if (itemClass === 'skills__content skills__close') {
		this.parentNode.className = 'skills__content skills__open'
		const proudContent = document.getElementsByClassName('proud__list');
		for (let item of proudContent) {
			item.classList.add('fade-in-animation-08');
		}

		const skillContent = document.getElementsByClassName('skills__list');
		for (let item of skillContent) {
			item.classList.add('fade-in-animation-08');
		}
	}
}

skillsHeader.forEach((el) => {
	el.addEventListener('click', toggleSkills);
})

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target);

		tabContents.forEach(tabContent => {
			tabContent.classList.remove('qualification__active');
		})

		target.classList.add('qualification__active');

		tabs.forEach(tab => {
			tab.classList.remove('qualification__active');
		})

		tab.classList.add('qualification__active');
	})
})


/*==================== CHANGE BACKGROUND HEADER ====================*/

const inViewport = (entries, observer) => {
	entries.forEach(entry => {
		entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
	});
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
	Obs.observe(EL, obsOptions);
});

disableScroll();

document.getElementById('scroll-up').click();

history.scrollRestoration = 'manual';

window.addEventListener("hashchange", function() {
	window.scrollTo(window.scrollX, window.scrollY - 60);
	history.replaceState(null, null, ' ');
});

setTimeout(function() {
	console.clear();
}, 4000);

const copyRight = document.getElementById('copyright-message');
copyRight.innerHTML = 'Built With ❤️ By Pranshu! © ' + new Date().getFullYear();

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 	document.body.classList.add('dark-theme');
// } else {
// 	document.body.classList.remove('dark-theme');
// }

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
// 	const newColorScheme = e.matches ? "dark" : "light";
// 	if (newColorScheme === "dark") {
// 		document.body.classList.add('dark-theme');
// 	} else {
// 		document.body.classList.remove('dark-theme');
// 	}
// });


/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
	const scrollup = document.getElementById('scroll-up');
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 560) scrollup.classList.add('show-scroll');
	else scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

history.replaceState(null, null, ' ');

function enableScroll() {
	document.body.style.position = '';
	document.body.style.top = '';
	document.body.style.left = '';
	document.body.style.right = '';
	window.scrollTo(0, scrollPosition);
};

function disableScroll() {
	scrollPosition = window.pageYOffset;
	document.body.style.position = 'fixed';
	document.body.style.top = `-${window.scrollY}px`;
	document.body.style.left = '0';
	document.body.style.right = '0';
};

var currentHeight = 0;
var step = 0.5;
var speed = 10;

function autoScrollpage() {
	if (autoScroll) {
		window.scrollTo(0, currentHeight += step);
	}
}

document.body.addEventListener('click', function() {
	autoScroll = false;
});

document.body.addEventListener('wheel', function() {
	autoScroll = false;
})

document.body.addEventListener('touchstart', function() {
	autoScroll = false;
})


/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.accordion__item')

// 1. Selecionar cada item
accordionItems.forEach((item) => {
	const accordionHeader = item.querySelector('.accordion__header')

	// 2. Seleccionar cada click del header
	accordionHeader.addEventListener('click', () => {
		// 7. Crear la variable
		const openItem = document.querySelector('.accordion-open')

		// 5. Llamar a la funcion toggle item
		toggleItem(item)

		// 8. Validar si existe la clase
		if (openItem && openItem !== item) {
			toggleItem(openItem)
		}
	})
})

// 3. Crear una funcion tipo constante
const toggleItem = (item) => {
	// 3.1 Crear la variable
	const accordionContent = item.querySelector('.accordion__content')

	// 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
	if (item.classList.contains('accordion-open')) {
		accordionContent.removeAttribute('style')
		item.classList.remove('accordion-open')
	} else {
		// 4. Agregar el height maximo del content
		accordionContent.style.height = accordionContent.scrollHeight + 'px'
		item.classList.add('accordion-open')
	}
}

setTimeout(() => {
	fadeOut();
}, 1900);

function fadeOut() {

	TweenMax.to(".overlay div", 2, {
		opacity: 0,
		y: -60,
		ease: Expo.easeInOut
	})

	TweenMax.from(".overlay", 2, {
		ease: Power2.easeInOut
	});

	TweenMax.to(".overlay", 2, {
		delay: 1,
		top: "-110%",
		ease: Expo.easeInOut
	});

	TweenMax.to(".overlay-2", 2, {
		delay: 1.4,
		top: "-110%",
		ease: Expo.easeInOut,
	});

	setTimeout(() => {
		titleAnim();
	}, 2600);

	setTimeout(() => {
		pageLoad();
	}, 5300);

}

function titleAnim() {
	const homeObj = document.getElementById('home-sec');
	homeObj.classList.remove('hidden');
}

function pageLoad() {
	const observerOptions = {
		root: null,
		rootMargin: "0px",
		threshold: 0.1
	};

	function observerCallback(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// fade in observed elements that are in view
				if (entry.target.classList.contains('fadeOut')) {
					entry.target.classList.replace('fadeOut', 'fadeIn');
				} else {
					entry.target.classList.add('fadeIn');
				}
			} else {
				// fade out observed elements that are not in view
				if (entry.target.classList.contains('fadeIn')) {
					entry.target.classList.replace('fadeIn', 'fadeOut');
				} else {
					entry.target.classList.add('fadeOut');
				}
			}
		});
	}

	const observer = new IntersectionObserver(observerCallback, observerOptions);

	const fadeElms = document.querySelectorAll('.fade');
	fadeElms.forEach(el => observer.observe(el));
	enableScroll();
	setTimeout(() => {
		setInterval(autoScrollpage, speed);
	}, 1200);
}



/* ------------------------------------------------------------------------ *  
4 states per letter: Transparent | Line | Block | Visible.
These states are shuffled for a unique "decode" effect each time.
* ------------------------------------------------------------------------ */

function decodeText() {
	var text = document.getElementsByClassName('decode-text')[0];
	// debug with
	// console.log(text, text.children.length);

	// assign the placeholder array its places
	var state = [];
	for (var i = 0, j = text.children.length; i < j; i++) {
		text.children[i].classList.remove('state-1', 'state-2', 'state-3');
		state[i] = i;
	}

	// shuffle the array to get new sequences each time
	var shuffled = shuffle(state);

	for (var i = 0, j = shuffled.length; i < j; i++) {
		var child = text.children[shuffled[i]];
		classes = child.classList;

		// fire the first one at random times
		var state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
		if (classes.contains('text-animation')) {
			setTimeout(firstStages.bind(null, child), state1Time);
		}
	}
}

// send the node for later .state changes
function firstStages(child) {
	if (child.classList.contains('state-2')) {
		child.classList.add('state-3');
	} else if (child.classList.contains('state-1')) {
		child.classList.add('state-2')
	} else if (!child.classList.contains('state-1')) {
		child.classList.add('state-1');
		setTimeout(secondStages.bind(null, child), 100);
	}
}

function secondStages(child) {
	if (child.classList.contains('state-1')) {
		child.classList.add('state-2')
		setTimeout(thirdStages.bind(null, child), 100);
	} else if (!child.classList.contains('state-1')) {
		child.classList.add('state-1')
	}
}

function thirdStages(child) {
	if (child.classList.contains('state-2')) {
		child.classList.add('state-3')
	}
}

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}


// Demo only stuff
decodeText();


const bars = document.querySelector(".bars");
bars.addEventListener("click", function(e) {
	this.classList.toggle("active");
	if (this.classList.contains("active")) {
		gsap.to(".menu", {
			duration: 0.1,
			display: "flex",
			ease: "expo.in"
		});
		gsap.to(".navBefore", {
			duration: 0.5,
			marginLeft: "0",
			ease: "expo.in"
		});
		gsap.to(".nav", {
			duration: 0.8,
			marginLeft: "0",
			delay: 0.3,
			ease: "expo.in"
		});
		gsap.to(".navigation", {
			duration: 1,
			opacity: "1",
			delay: 0.6,
			ease: "expo.in"
		});
		setTimeout(() => {
			disableScroll();
		}, 1000);
	} else {
		enableScroll();
		closeMenu();
	}
});

const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(n => n.addEventListener('click', linkAction));

function linkAction() {
	enableScroll();
	const barObj = document.getElementById('hamburger-menu');
	barObj.classList.toggle('active');
	closeMenu();
}

function closeMenu() {
	gsap.to(".navigation", {
		duration: 0.2,
		opacity: "0",
		ease: "expo.in"
	});
	gsap.to(".nav", {
		duration: 1,
		marginLeft: "100%",
		delay: 0.3,
		ease: "expo.in"
	});
	gsap.to(".navBefore", {
		duration: 1,
		marginLeft: "100%",
		delay: 0.5,
		ease: "expo.in"
	});
	gsap.to(".menu", {
		duration: 1,
		display: "none",
		delay: 1,
		ease: "expo.in"
	});
}