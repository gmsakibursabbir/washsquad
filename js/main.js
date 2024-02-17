// third slider
var swiper = new Swiper(".thirdslider", {
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

/// HERO

var swiper = new Swiper(".heroslider", {
  autoplay: {
    delay: 3000,
  },
  autiHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//washslider
var swiper = new Swiper(".washslider", {
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

//Gallery
var swiper = new Swiper(".gallery", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".gallery2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// jquery ready start
$(document).ready(function () {
  // jQuery code

  //////////////////////// Prevent closing from click inside dropdown
  $(document).on("click", ".dropdown-menu", function (e) {
    e.stopPropagation();
  });

  // make it as accordion for smaller screens
  if ($(window).width() < 992) {
    $(".dropdown-menu a").click(function (e) {
      e.preventDefault();
      if ($(this).next(".submenu").length) {
        $(this).next(".submenu").toggle();
      }
      $(".dropdown").on("hide.bs.dropdown", function () {
        $(this).find(".submenu").hide();
      });
    });
  }
});

//Captcha
function generateCaptcha() {
  let captcha = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 6; i++) {
    captcha += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return captcha;
}

function checkCaptcha() {
  let userInput = $("#userInput").val();
  let captcha = $("#captcha").val();

  if (userInput.toUpperCase() === captcha.toUpperCase()) {
    $("#errorMessage").text("");
    $("#userInput").val("");
    $("#captcha").val(generateCaptcha());
  } else {
    $("#errorMessage").text("Error: The captcha does not match.");
    $("#userInput").val("");
  }
}

function regenerateCaptcha() {
  let captcha = generateCaptcha();
  $("#captcha").val(captcha);
}

$(document).ready(function () {
  let captcha = generateCaptcha();
  $("#captcha").val(captcha);
});

//
$(document).ready(function () {
  $(".fa-search").click(function () {
    $(".search-box").toggle();
    $("input[type='text']").focus();
  });
});

const flags = document.querySelectorAll(".custom__select option");

flags.forEach((flag) => {
  const flagCode = flag.dataset.flag;
  const flagIcon = document.createElement("i");
  flagIcon.classList.add("flag-icon", `flag-icon-${flagCode}`);
  flag.prepend(flagIcon);
});


document.addEventListener("DOMContentLoaded", function () {
  let dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  dropdownToggles.forEach(function (toggle) {
    if(window.innerWidth > 768 ) {
      toggle.addEventListener("click", function (event) {
        let href = this.getAttribute("href");
        if (href !== "#") {
          event.preventDefault(); 
          window.location.href = href; 
        }
      });
      toggle.addEventListener("touchend", function (event) {
        let href = this.getAttribute("href");
        if (href !== "#") {
          event.preventDefault(); // Prevent default behavior
          window.location.href = href; // Redirect to the link
        }
      });
    }
  });
});

if (window.matchMedia("(max-width: 992px)").matches) {
  document.addEventListener('click', function (e) {
    // Hamburger menu
    if (e.target.classList.contains('hamburger-toggle')) {
      e.target.children[0].classList.toggle('active');
    }
  });
}