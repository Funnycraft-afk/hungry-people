// для маски номера телефона
const elementsPhone = document.querySelectorAll('.input-phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

elementsPhone.forEach(el => (
    IMask(el, maskOptions)
));


// для кастомизации селекта в форме

const choices = new Choices('.select', {
    searchEnabled: false
});

// Выбор даты и времени
flatpickr("#date", {
    dateFormat: 'm/d'
});

flatpickr("#time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
});

// Слайдер
var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 1,
    autoHeight: true

});

// Галлерея

const lightbox = GLightbox({
    selector: '.gallery-image',
    touchNavigation: true,
    loop: true
});


// Табы

const onTabClick = function(idContainer, idElement) {
    let dataAttr = `data-${idContainer}`;
    
    for (let item of document.querySelectorAll(`[${dataAttr}-name]`)) {
        item.classList.remove('active');
    }

    for (let item of document.querySelectorAll(`[${dataAttr}-tab]`)) {
        item.classList.remove('active');
    }

    document.querySelector(`[${dataAttr}-name=${idElement}]`).classList.add('active')
    document.querySelector(`[${dataAttr}-tab=${idElement}]`).classList.add('active')
}

let tabsName = document.querySelectorAll('.tab-name')
tabsName.forEach((tab) => {
    tab.addEventListener('click', (event) =>{
        onTabClick(event.target.parentElement.id, event.target.dataset.menuTabsName)
    })
})

// Мобильное меню

const mobileMenuButton = document.querySelector('.header-navigation-menu')
const mobileMenuClose = document.querySelector('.header-navigation-close')
const mobileMenu = document.querySelector('.header-navigation')

mobileMenuButton.addEventListener('click',  function() {
    mobileMenu.classList.toggle('active')
})

mobileMenuClose.addEventListener('click',  function() {
    mobileMenu.classList.toggle('active')
})

// Smooth scroll

const scroll = new SmoothScroll('.header-navigation__link[href*="#"]');


