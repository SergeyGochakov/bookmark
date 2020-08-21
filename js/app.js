'use strict';

// Modal Popup

// Selectors
const openModal = document.querySelector(".header_login"),
  modal = document.querySelector(".modal-bg"),
  closeModal = document.querySelector(".modal_close");

// Event listener

openModal.addEventListener("click", openAndCloseModal);
closeModal.addEventListener("click", openAndCloseModal);

// Function close and open Modal

function openAndCloseModal() {
  modal.classList.toggle("modal-bg-active");
}

// Hamburger Menu

const hamburgerOpenBtn = document.querySelector(".hamburger_menu"),
  hamburgerCloseBtn = document.querySelector(".hamburger_close"),
  hamburgerMenu = document.querySelector(".header_nav");

// Event listener 'click'

hamburgerOpenBtn.addEventListener("click", openAndCloseHamburgerMenu);
hamburgerCloseBtn.addEventListener("click", openAndCloseHamburgerMenu);

// Function open and close hamburger menu

function openAndCloseHamburgerMenu() {
  hamburgerMenu.classList.toggle("header_nav-active");
}
// Add and Remove tab content
const tabFeatures = document.querySelectorAll(".tabheader_item"),
  tabContent = document.querySelectorAll(".content"),
  tabsParent = document.querySelector(".tabheader_items");

function hideTabContent() {
  tabContent.forEach((tab) => {
    tab.classList.add("hide");
    tab.classList.remove("show");
  });
  // Remove class active
  tabFeatures.forEach((tab) => {
    tab.classList.remove("tabheader_item_active");
  });
}

function showTabContent(i = 0) {
  tabContent[i].classList.add("show");
  tabContent[i].classList.remove("hide");
  tabFeatures[i].classList.add("tabheader_item_active");
}

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.classList.contains("tabheader_item")) {
    tabFeatures.forEach((tab, i) => {
      if (target == tab) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

// Add dropdown

const itemsHeader = document.querySelectorAll('.questions_items_header'),
	itemsIcons = document.querySelectorAll('.questions_items_icon'),
	itemsAnswer = document.querySelectorAll('.questions_items_answer'),
	itemsWrapper = document.querySelectorAll('.questions_items_wrapper');


function showDropbox(box, i = 0) {
	box[i].classList.toggle('active');
	itemsAnswer[i].classList.toggle('show');
	itemsAnswer[i].classList.toggle('hide');
}


itemsWrapper.forEach((item) => {
	item.addEventListener('click', (e) => {
		const target = e.target;
		if(target && target.classList.contains('questions_items_header')){
			itemsHeader.forEach((item, i) => {
				if(item === target){
					showDropbox(itemsHeader, i);
				}
			});
		} else if (target && target.classList.contains('questions_items_icon')){
			itemsIcons.forEach((item, i) => {
				if(item === target){
					showDropbox(itemsIcons, i);
				}
			});
		}
	});
});
