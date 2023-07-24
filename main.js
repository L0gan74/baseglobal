var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 600,
});

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  autoHeight: true,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 600,
});

var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 30,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 600,
});

!(function (e) {
  "function" != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    "function" != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
var body = document.body;

document.addEventListener("DOMContentLoaded", function () {
  var modalButtons = document.querySelectorAll(".js-open-modal"),
    overlay = document.querySelector(".js-overlay-modal"),
    closeButtons = document.querySelectorAll(".js-modal-close");

  modalButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      var modalId = this.getAttribute("data-modal"),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      modalElem.classList.add("active");
      overlay.classList.add("active");
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var parentModal = this.closest(".modal");

      parentModal.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

  document.body.addEventListener(
    "keyup",
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector(".modal.active").classList.remove("active");
        document.querySelector(".overlay").classList.remove("active");
      }
    },
    false
  );

  overlay.addEventListener("click", function () {
    document.querySelector(".modal.active").classList.remove("active");
    this.classList.remove("active");
  });
});

function scrollTo(to, duration = 700) {
  const element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    animateScroll = function () {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(
        easeInOutQuad(currentTime, start, change, duration)
      );
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollTop = to;
      }
    };
  animateScroll();
}

document.addEventListener("DOMContentLoaded", function () {
  let btn = document.querySelector("#toTop");
  window.addEventListener("scroll", function () {
    if (pageYOffset > 100) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.onclick = function (click) {
    click.preventDefault();
    scrollTo(0, 400);
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let btn = document.querySelector("#toTop2");
  window.addEventListener("scroll", function () {
    if (pageYOffset > 100) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.onclick = function (click) {
    click.preventDefault();
    scrollTo(0, 400);
  };
});

$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideDown("slow");
  });
});

$(document).ready(function () {
  $("#flip1").click(function () {
    $("#panel").slideDown("slow");
  });
});

$(document).ready(function () {
  $("#flip2").click(function () {
    $("#panel").slideDown("slow");
  });
});

$(document).ready(function () {
  $("#flipBottom").click(function () {
    $("#panel").slideUp(1500);
  });
});

let modal = $("#myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.show();

  setTimeout(function () {
    modal.hide();
  }, 2000);
};

let modal2 = $("#myModal2");
let btn2 = document.getElementById("myBtn2");

btn2.onclick = function () {
  modal2.show();

  setTimeout(function () {
    modal2.hide();
  }, 2000);
};

let modal5 = $("#myModal5");
let btn5 = document.getElementById("myBtn5");

btn5.onclick = function () {
  modal5.show();

  setTimeout(function () {
    modal5.hide();
  }, 2000);
};

let modal6 = $("#myModal6");
let btn6 = document.getElementById("myBtn6");

btn6.onclick = function () {
  modal6.show();

  setTimeout(function () {
    modal6.hide();
  }, 2000);
};

let modal7 = $("#myModal7");
let btn7 = document.getElementById("myBtn7");

btn7.onclick = function () {
  modal7.show();

  setTimeout(function () {
    modal7.hide();
  }, 2000);
};

let modal8 = $("#myModal8");
let btn8 = document.getElementById("myBtn8");

btn8.onclick = function () {
  modal8.show();

  setTimeout(function () {
    modal3.hide();
  }, 2000);
};

function toggleMenu() {
  const menuWrapper = document.querySelector(".menu-wrapper");

  if (menuWrapper.style.display === "block") {
    menuWrapper.style.display = "none";
    document.body.style.overflow = "";
  } else {
    menuWrapper.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

document.addEventListener("click", function (event) {
  const target = event.target;
  const menuWrapper = document.querySelector(".menu-wrapper");

  if (!target.closest(".menu") && !target.closest(".menu-toggler")) {
    menuWrapper.style.display = "none";
    document.body.style.overflow = "";
  }
});
