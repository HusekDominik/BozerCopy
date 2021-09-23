const hamburger = document.querySelector('.header__menu-wrapper__mobile-menu__hamburger')! as HTMLDivElement;
const hamburgerDiv = document.querySelector('.header__menu-wrapper__mobile-menu__hamburger div')! as HTMLDivElement;
const menu = document.querySelector('.header__menu-wrapper__menu')! as HTMLMenuElement;
const menuLinks = document.querySelectorAll('.header__menu-wrapper__menu__item__link i')!;

hamburger.addEventListener('click', (): void => {
	menu.classList.toggle('active');
	hamburgerDiv.classList.toggle('active');
});

menuLinks.forEach((element) => {
	element.addEventListener('click', (e: any): void => {
		e.preventDefault();
		const listItem = e.target.parentElement.parentElement;
		let submenu;

		for (let i = 0; i < listItem.childNodes.length; i++) {
			if (listItem.childNodes[i].classList.contains('header__menu-wrapper__menu__item__submenu')) {
				submenu = listItem.childNodes[i];
				break;
			}
		}
		if (submenu) {
			e.target.className === 'fas fa-plus'
				? (e.target.className = 'fas fa-minus')
				: (e.target.className = 'fas fa-plus');

			submenu.classList.toggle('mobile-active');
		}
		return;
	});
});
