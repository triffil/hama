const swiper = new Swiper(".category-list__slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },

    1600: {
      slidesPerView: 5,
    },
    1330: {
      slidesPerView: 5,
    },
    1090: {
      slidesPerView: 3,
    },
    825: {
      slidesPerView: 2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".category-list__button-next",
    prevEl: ".category-list__button-prev",
  },
});

// _________________________________________________________________________________
const btnLogin = document.querySelector(".section-authorization__button-login");
const modalLogin = document.querySelector(".modal-authorization");
const btnRegistration = document.querySelector(
  ".section-authorization__button-registration"
);
const modalRegistration = document.querySelector(".modal-registration");
const btnRegistrationModalLogin = document.querySelector(
  ".modal-authorization__button-registration"
);
const btnLoginModalRegistration = document.querySelector(
  ".modal-registration__button-login"
);
btnLogin.addEventListener("click", () => {
  modalLogin.classList.toggle("not-visible");
});
btnRegistration.addEventListener("click", () => {
  modalRegistration.classList.toggle("not-visible");
});
btnRegistrationModalLogin.addEventListener("click", () => {
  modalLogin.classList.toggle("not-visible");
  modalRegistration.classList.toggle("not-visible");
});
btnLoginModalRegistration.addEventListener("click", () => {
  modalRegistration.classList.toggle("not-visible");
  modalLogin.classList.toggle("not-visible");
});
