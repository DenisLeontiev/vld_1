import intlTelInput from 'intl-tel-input';
import JustValidate from 'just-validate';
import StickySidebar from 'sticky-sidebar';

// if (document.querySelector('.testimonials__list')) {
//   const testimonials = new Swiper('.testimonials__list', {
//     slidesPerView: 3,
//     spaceBetween: 26,
//     noSwipingClass: 'swiper-no-swiping',
//     allowTouchMove: false,
//     simulateTouch: false,
//     keyboard: {
//       enabled: true,
//     },
//     pagination: {
//       el: '.testimonials__dots',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.testimonials__next',
//       prevEl: '.testimonials__prev',
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 3,
//       },
//       1440: {
//         slidesPerView: 4,
//       }
//     }
//   });
// }

if (document.querySelector('.js-test-list')) {
  const testimonials = new Swiper('.js-test-list', {
    slidesPerView: 4,
    spaceBetween: 26,
    noSwipingClass: 'swiper-no-swiping',
    allowTouchMove: false,
    simulateTouch: false,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.js-test-list__dots',
      clickable: true,
    },
    navigation: {
      nextEl: '.js-test-list__next',
      prevEl: '.js-test-list__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      }
    }
  });
}

if (document.querySelector('.js-testimonials')) {
  const testimonials = new Swiper('.js-testimonials', {
    slidesPerView: 4,
    spaceBetween: 54,
    grid: {
      rows: 5,
    },
    noSwipingClass: 'swiper-no-swiping',
    allowTouchMove: false,
    simulateTouch: false,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.js-testimonials__dots',
      clickable: true,
    },
    navigation: {
      nextEl: '.js-testimonials__next',
      prevEl: '.js-testimonials__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 24,
        grid: {
          rows: 10,
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
        grid: {
          rows: 6,
        },
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 54,
        grid: {
          rows: 5,
        },
      }
    }
  });
}

if (document.querySelector('.js-tm-videos')) {
  const tmVideos = new Swiper('.js-tm-videos', {
    slidesPerView: 3,
    spaceBetween: 30,
    grid: {
      rows: 3,
    },
    noSwipingClass: 'swiper-no-swiping',
    allowTouchMove: false,
    simulateTouch: false,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.js-tm-videos__dots',
      clickable: true,
    },
    navigation: {
      nextEl: '.js-tm-videos__next',
      prevEl: '.js-tm-videos__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 24,
        grid: {
          rows: 6,
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
        grid: {
          rows: 4,
        },
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 3,
        },
      }
    }
  });
}

if (document.querySelector('.js-home-videos')) {
  const testimonials = new Swiper('.js-home-videos', {
    slidesPerView: 3,
    spaceBetween: 30,
    noSwipingClass: 'swiper-no-swiping',
    allowTouchMove: false,
    simulateTouch: false,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.js-home-videos__dots',
      clickable: true,
    },
    navigation: {
      nextEl: '.js-home-videos__next',
      prevEl: '.js-home-videos__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      }
    }
  });
}

if (document.querySelector('.videoReviews__item')) {
  const videoItems = document.querySelectorAll('.videoReviews__item');

  videoItems.forEach((item) => {
    const playButton = item.querySelector('.js-play');
    const videoItem = item.querySelector('video');

    playButton.addEventListener('click', () => {
      playButton.classList.add('hide');

      videoItem.play();
    });

    videoItem.addEventListener('click', () => {
      
      if (playButton.classList.contains('hide')) {
        playButton.classList.remove('hide');
        videoItem.pause();
      } else {
        playButton.classList.add('hide');
        videoItem.play();
      }
    });

    videoItem.addEventListener('ended', () => {
      playButton.classList.remove('hide');
    });
  });
}

if (document.querySelector('input[type="tel"]')) {
  const input = document.querySelector('input[type="tel"]');
  intlTelInput(input, {
    initialCountry: 'gb',
    utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js',
  });
}

if (document.querySelector('.form')) {
  const form = document.querySelector('.form');
  const submitFormBtn = form.querySelector('.button');
  const inputName = form.querySelector('.js-form-name');
  const inputSName = form.querySelector('.js-form-sname');
  const inputPhone = form.querySelector('.js-form-phone');
  const inputEmail = form.querySelector('.js-form-email');
  const formPopup = form.querySelector('.form_popup');
  const formData = new FormData();
  const validate = new JustValidate(
    '.form',
    {
      errorFieldCssClass: '_error',
      errorLabelStyle: {
        color: 'red',
      },
      lockForm: true,
      focusInvalidField: true,
    }
  );
  
  validate
    .addField('.js-form-name', [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'The name is too short',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'The name is too long',
      },
      {
        rule: 'required',
        errorMessage: 'Required field',
      }
    ])
    .addField('.js-form-sname', [
      {
        rule: 'minLength',
        value: 1,
        errorMessage: 'The name is too short',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'The name is too long',
      },
      {
        rule: 'required',
        errorMessage: 'Required field',
      }
    ])
    .addField('.js-form-phone', [
      {
        rule: 'required',
        errorMessage: 'Required field',
      },
      {
        rule: 'maxLength',
        value: 12,
        errorMessage: 'The number is too long'
      }
    ])
    .addField('.js-form-email', [
      {
        rule: 'required',
        errorMessage: 'Required field',
      },
      {
        rule: 'email',
        errorMessage: 'Incorrect E-mail address',
      }
    ]);

  function checkSubmit() {
    if (!inputName.value || !inputSName.value || !inputPhone.value || !inputEmail.value) {
      submitFormBtn.setAttribute('disabled', '');
      submitFormBtn.classList.add('_disabled');
    } else {
      submitFormBtn.removeAttribute('disabled');
      submitFormBtn.classList.remove('_disabled');
    }
  }

  function showPopup() {
    formPopup.classList.add('_active');
    const popupBtn = document.querySelector('.popup-card__btn');
  
    popupBtn.addEventListener('click', closePopup);
  
    setTimeout(() => {
      closePopup();
      popupBtn.removeEventListener('click', closePopup);
    }, 4000);
  }

  function closePopup() {
    formPopup.classList.remove('_active');
    document.body.classList.remove('_hidden');
  }
  
  
  function submittingForm() {
    const inputs = form.querySelectorAll('.form__field')
  
    for (let input of inputs) {
      input.classList.add('disabled');
      input.setAttribute('readonly', '');
    }
  
    submitFormBtn.classList.add('disabled');
  }
  
  function removeReadonlyAttr() {
    const inputs = form.querySelectorAll('.form__field')
  
    for (let input of inputs) {
      input.classList.remove('disabled');
      input.removeAttribute('readonly');
    }
  }

  async function sendForm(e) {

  }

  checkSubmit();
  form.addEventListener('input', checkSubmit);
  form.addEventListener('submit', sendForm);
}

if (document.querySelector('.accord')) {
  const accords = document.querySelectorAll('.accord__item');

  accords.forEach((item) => {
    const body = item.querySelector('.accord__body');
    body.style.maxHeight = body.scrollHeight + "px";

    item.querySelector('.accord__head').addEventListener('click', () => {
      item.classList.toggle('hide');

      if (body.style.maxHeight) {
        body.style.maxHeight = null;
      } else {
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
}

if (document.querySelector('.footer__m')) {
  const accords = document.querySelectorAll('.footer__m .footer__item');

  accords.forEach((item) => {
    const body = item.querySelector('.footer__mBody');
    item.classList.add('hide');
    item.querySelector('.footer__mTitle').addEventListener('click', () => {
      item.classList.toggle('hide');

      if (body.style.maxHeight) {
        body.style.maxHeight = null;
      } else {
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
}

document.querySelectorAll('.js-has-submenu').forEach((item) => {
  const body = item.querySelector('.header__navSubmenu');

  item.classList.add('hide');
  item.querySelector('span').addEventListener('click', () => {
    item.classList.toggle('hide');

    if (body.style.maxHeight) {
      body.style.maxHeight = null;
    } else {
      body.style.maxHeight = body.scrollHeight + "px";
    }
  });
});

const menu = document.querySelector('.header__nav');
document.querySelector('.js-hide-menu').addEventListener('click', () => {
  menu.classList.remove('show');
});

document.querySelector('.js-show-menu').addEventListener('click', () => {
  menu.classList.add('show');
});

if (document.querySelector('.pageInfo__aside')) {
  const sidebar = new StickySidebar('.pageInfo__aside', {
    topSpacing: 20,
    bottomSpacing: 20
  });
}