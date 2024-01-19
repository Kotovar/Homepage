import '../dist/css/style.css';

const date = new Date();
const currentYear = date.getFullYear();
const year = document.getElementById('year');
year.textContent = `© ${currentYear} | Designed and coded by Dmitry`;

// проверка на наличие скроллбара
const html = document.querySelector('html');
const footer = document.querySelector('footer');
const panel = document.querySelector('.header__panel');
const rightIndent =
	getComputedStyle(html).getPropertyValue('--scrollbar-width');
const hasScrollbar = html.clientHeight < html.scrollHeight;
if (!hasScrollbar) {
	panel.style.marginRight = rightIndent;
	footer.style.paddingRight = rightIndent;
}

// функция для замены статичного изображения на анимированное при наведении курсора
function hover(sumProjects) {
	const projectMain = document.getElementsByClassName('project_field');
	const projectImage = [
		...document.getElementsByClassName('project_image_img'),
	];

	const staticImage = [];
	const animatedImage = [];
	for (let i = 1; i <= sumProjects; i++) {
		staticImage.push(`/img/project_images/${i}-static.png`);
		animatedImage.push(`/img/project_images/${i}-animated.gif`);
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

hover(4);
