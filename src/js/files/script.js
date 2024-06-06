// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

import L from '../../../node_modules/leaflet/dist/leaflet.js';

//==== displacement contacts to nav on (max-width: 479.98px) ============================================================================================================
const contacts = document.querySelector('.header__contacts');
const nav = document.querySelector('.header__nav');

if (contacts && nav) {
  const smallMobileMatchMedia = window.matchMedia('(max-width: 479.98px)');
  const onSmallMobileChange = (e) => {
    if (e.matches) {
      nav.insertAdjacentElement('beforeend', contacts);
    } else {
      nav.insertAdjacentElement('beforebegin', contacts);
    }
  };
  smallMobileMatchMedia.addEventListener('change', onSmallMobileChange);
  onSmallMobileChange(smallMobileMatchMedia);
}

//==== Open menu on burgerClick ====================================================================================================================================================
const burger = document.querySelector('.burger');
function closeMenu() {
  document.documentElement.classList.remove('menu-open');
  document.documentElement.classList.remove('lock');
}
burger?.addEventListener('click', () => {
  if (document.documentElement.classList.contains('menu-open')) {
    closeMenu();
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.documentElement.classList.add('menu-open');
    document.documentElement.classList.add('lock');
  }
});

const tabletMatchMedia = window.matchMedia('(min-width: 991.98px)');
const onTabletChange = (e) => {
  if (e.matches) closeMenu();
};
tabletMatchMedia.addEventListener('change', onTabletChange);
onTabletChange(tabletMatchMedia);

//==== Go to block on menu link click ====================================================================================================================================================
function goto() {
  // data-goto - указать ID / класс блока
  const gotoLinks = document.querySelectorAll('[data-goto]');
  if (!gotoLinks.length) return;

  gotoLinks.forEach((gotoLink) => {
    gotoLink.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();

      const gotoTargetEl = document.querySelector(gotoLink.dataset.goto);
      if (!gotoTargetEl) return;
      let targetElTop = gotoTargetEl.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetElTop,
        behavior: 'smooth',
      });
    });
  });
}
goto();

//===== Hide or show go-top-btn, when .intro block is show or not ===================================================================================================================================================
let goTopObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const gotoBtn = document.querySelector('.go-top-btn');
    if (!gotoBtn) return;
    if (!entry.isIntersecting) {
      gotoBtn.classList.remove('_hide');
    } else {
      gotoBtn.classList.add('_hide');
    }
  });
}, {});

goTopObserver.observe(document.querySelector('.intro'));

//==== OpenStreetMap ====================================================================================================================================================
function addLileLayer(map) {
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
}
const mapMarker = L.icon({
  iconUrl: './img/marker.png',
  iconSize: [24, 40],
});

// === location-map ===
const locationMap = new L.Map('location-map', {
  center: [51.067936, 71.42287],
  zoom: 13,
});
L.marker([51.06116, 71.43724], { icon: mapMarker }).addTo(locationMap);
addLileLayer(locationMap);

locationMap.addEventListener('click', (e) => {
  console.log('e', e);
  window.open('https://www.openstreetmap.org/#map=13/51.067936/71.42287');
});
// === contacts-map ===
const contactsMap = new L.Map('contacts-map', {
  center: [51.12974, 71.42203],
  zoom: 16,
});
L.marker([51.13057, 71.42255], { icon: mapMarker }).addTo(contactsMap);
addLileLayer(contactsMap);

//===== Open img in a popup in full size ===================================================================================================================================================
const zoomImgs = document.querySelectorAll('[data-zoom]');
const zoomBlock = document.querySelector('.zoom-image');
const zoomImage = document.querySelector('.zoom-image img');

if (zoomImgs.length && zoomBlock && zoomImage) {
  zoomImgs.forEach((img) => {
    img.addEventListener('click', () => {
      zoomImage.setAttribute('src', img.getAttribute('src'));
      zoomImage.setAttribute('alt', img.getAttribute('alt'));
      document.documentElement.classList.add('lock');
      document.documentElement.classList.add('zoom-open');
    });
  });

  zoomBlock.addEventListener('click', (e) => {
    if (e.target.closest('.zoom-image__body')) return;
    zoomImage.setAttribute('src', '');
    zoomImage.setAttribute('alt', '');
    document.documentElement.classList.remove('lock');
    document.documentElement.classList.remove('zoom-open');
  });
}
