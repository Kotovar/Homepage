import '../dist/css/style.css';

const date = new Date();
const currentYear = date.getFullYear();
const year = document.querySelector('#year');
year.textContent = `© ${currentYear} | Dmitry`;
const html = document.querySelector('html');
const footer = document.querySelector('footer');
const panel = document.querySelector('.header__panel');
const rightIndent =
	getComputedStyle(html).getPropertyValue('--scrollbar-width');
const hasScrollbar = html.clientHeight < html.scrollHeight;
const numberOfProjects = document.querySelectorAll('.project').length;

if (!hasScrollbar) {
	panel.style.marginRight = rightIndent;
	footer.style.paddingRight = rightIndent;
}

function hover(sumProjects) {
	if (!sumProjects) {
		return null;
	}

	const projectMain = document.querySelectorAll('.project_field');
	const projectImage = [...document.querySelectorAll('.project_image_img')];

	const staticImage = [];
	const animatedImage = [];

	for (let i = 1; i <= sumProjects; i++) {
		staticImage.push(`./img/project_images/${i}-static.png`);
		animatedImage.push(`./img/project_images/${i}-animated.gif`);
	}

	projectMain[0].addEventListener('mouseover', (e) => {
		if (projectImage.includes(e.target)) {
			chooseMode(animatedImage, e.target, projectImage);
		}
	});

	projectMain[0].addEventListener('mouseout', (e) => {
		if (projectImage.includes(e.target)) {
			chooseMode(staticImage, e.target, projectImage);
		}
	});
}

function chooseMode(array, target, field) {
	if (field.includes(target)) {
		let index = target.alt;
		index = index[index.length - 1] - 1;
		target.setAttribute('src', array[index]);
	}
}

hover(numberOfProjects);
