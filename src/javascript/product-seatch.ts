const productSearch = document.querySelector('.header__right-container__product-search')! as HTMLInputElement;
const productSearchButton = document.querySelector('.header__right-container__search')! as HTMLButtonElement;
const searchSpan = document.querySelector('.header__right-container__search__search-span')! as HTMLSpanElement;
const xSpan = document.querySelector('.header__right-container__search__x-span')! as HTMLSpanElement;
productSearchButton.addEventListener('click', (): void => {
	productSearch.classList.toggle('active');
	productSearchButton.classList.toggle('active');
});

console.log('input');
