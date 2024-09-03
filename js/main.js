isResize('.cover__img', '.cover__content', '.cover__info-mob', 768);

window.addEventListener('resize', () => {
  isResize('.cover__img', '.cover__content', '.cover__info-mob', 768);
});

//acordeon
acordeon('one', false, 'active', 1);

//advantages navigation
const buttons = document.querySelectorAll('.advantages__nav-item');
const divs = document.querySelectorAll('.advantages__item');

function checkDivVisibility() {
  divs.forEach((div, index) => {
    const rect = div.getBoundingClientRect();
    if (rect.top <= 50 && rect.bottom >= 0) {
      buttons.forEach((button) => button.classList.remove('advantages__nav-item--active'));
      buttons[index].classList.add('advantages__nav-item--active');
    }
  });
}

document.addEventListener('scroll', checkDivVisibility);

//smooth

const scrollSmoothLinck = document.querySelectorAll('*[data-scroll-smooth]');

for (let elem of scrollSmoothLinck) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();

    let blockID = elem.getAttribute('data-scroll-smooth');
    let top = document.getElementById(blockID).getBoundingClientRect().top;

    document.querySelector('html,body').scrollTo({
      top: top + window.pageYOffset - 49,
      behavior: 'smooth',
    });
  });
}

//slider

const swiper = new Swiper('.feedback__items', {
  slidesPerView: 3,
  spaceBetween: 66,

  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 66,
    },
  },
  navigation: {
    nextEl: '.feedback__arrows .feedback__arrow-r',
    prevEl: '.feedback__arrows .feedback__arrow-l',
  },
});

//input tel validation

const telInputs = document.querySelectorAll('.tel-valid');
telInputs.forEach((input) => input.addEventListener('input', (e) => isTelInputValid(e)));

function isTelInputValid(e) {
  const input = e.target;
  const inputValue = input.value;
  const validPhone = /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/g;
  const validSymbol = /[0-9]+/g;
  const validSymbolArr = inputValue.matchAll(validSymbol);
  let validResult = '';
  let newValue = '';

  input.setAttribute('maxlength', '19');

  for (let elem of validSymbolArr) {
    validResult += String(elem);
  }
  const validResultArr = validResult.split('');

  for (let i = 0; i < validResultArr.length; i++) {
    if (i === 0) {
      validResultArr.splice(i, 2, '+38');
    }
    if (i == 1) {
      validResultArr.splice(i, 0, ' (');
    }
    if (i == 5) {
      validResultArr.splice(i, 0, ') ');
    }
    if (i == 9 || i == 12) {
      validResultArr.splice(i, 0, '-');
    }
  }
  validResult = validResultArr.join('');
  newValue = validResult;

  if (newValue.length >= 18 && validPhone.test(newValue)) {
    input.classList.remove('novalid');
  } else {
    input.classList.add('novalid');
  }

  input.value = newValue;
}

//form send
const forms = document.querySelectorAll('.form-send');
forms.forEach((form) => form.addEventListener('submit', (e) => isFormSend(e)));

function isFormSend(e) {
  e.preventDefault();

  const form = e.target;
  const inputs = form.querySelectorAll('input');
  let result = true;

  if (inputs.length > 0) {
    inputs.forEach((input) => {
      if (input.classList.contains('novalid')) {
        result = false;
      }
    });
  } else {
    result = false;
  }

  if (result) {
    form.submit();
  }
}

//header

function headerScroll() {
  const header = document.querySelector('.header');
  if (window.pageYOffset > 0 && !header.classList.contains('header--scroll')) {
    header.classList.add('header--scroll');
  } else if (window.pageYOffset <= 0 && header.classList.contains('header--scroll')) {
    header.classList.remove('header--scroll');
  }
}
headerScroll();

window.addEventListener('scroll', function () {
  headerScroll();
});
