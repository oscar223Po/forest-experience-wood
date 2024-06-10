// Підключення функціоналу "Чертоги Фрілансера"
import { bodyLock, bodyUnlock, isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
// ================[ JavaScript Checkbox Catalog ]================
document.addEventListener("DOMContentLoaded", function () {
	const checkboxes = document.querySelectorAll('.checkbox__input');
	const headCatalogItems = document.querySelector('.head-catalog__items');
	const resetAllButton = document.querySelector('.head-catalog__button');
	const resetAllButtonMain = document.querySelector('.filter__button-reset');
	if (headCatalogItems !== null) {
		checkboxes.forEach(function (checkbox) {
			checkbox.addEventListener('change', function () {
				const label = checkbox.nextElementSibling.querySelector('.checkbox__text').textContent;
				const itemDiv = headCatalogItems.querySelector('.head-catalog__item[data-label="' + label + '"]');
				if (checkbox.checked) {
					const newItemDiv = document.createElement('div');
					newItemDiv.classList.add('head-catalog__item');
					newItemDiv.dataset.label = label;
					newItemDiv.textContent = label;

					const removeButton = document.createElement('button');
					removeButton.textContent = '';
					removeButton.classList.add('head-catalog__remove-button');
					removeButton.addEventListener('click', function () {
						headCatalogItems.removeChild(newItemDiv);
						checkbox.checked = false;
					});

					newItemDiv.appendChild(removeButton);
					headCatalogItems.appendChild(newItemDiv);
				} else if (itemDiv) {
					headCatalogItems.removeChild(itemDiv);
				}
			});
		});
		resetAllButton.addEventListener('click', function () {
			headCatalogItems.innerHTML = '';
			checkboxes.forEach(function (checkbox) {
				checkbox.checked = false;
			});
		});
		resetAllButtonMain.addEventListener('click', function () {
			headCatalogItems.innerHTML = '';
			checkboxes.forEach(function (checkbox) {
				checkbox.checked = false;
			});
		});
	}
	// ================[ JavaScript Filter Catalog ]================
	const filterBody = document.querySelector(".filter");
	const filterButton = document.querySelector(".filt-btn");
	const filterButtonCancel = document.querySelector(".filter__cancel");
	if (filterButton !== null) {
		filterButton.addEventListener("click", () => {
			bodyLock();
			filterBody.classList.add("filter-open")
		})
		filterButtonCancel.addEventListener("click", () => {
			bodyUnlock();
			filterBody.classList.remove("filter-open")
		})
	}
});
//--------------------------------------------------------------
