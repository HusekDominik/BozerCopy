const contactButton = document.querySelector('.footer__contact__button')! as HTMLButtonElement;

const contactForm = document.querySelector('.contact-wrapper')! as HTMLDivElement;

const body = document.querySelector('body')! as HTMLBodyElement;

const showContact = (): void => {
	contactForm.classList.add('active');
	body.classList.add('contact-active');
};
const closeContact = (): void => {
	contactForm.classList.remove('active');
	body.classList.remove('contact-active');
};
contactButton.addEventListener('click', showContact);

contactForm.addEventListener('click', (e: any): void => {
	if (e.target.classList.contains('contact-wrapper')) {
		contactForm.classList.remove('active');
		body.classList.remove('contact-active');
	}
});
