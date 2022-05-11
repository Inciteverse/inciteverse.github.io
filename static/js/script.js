let themeSwitch = document.querySelector(".theme-switch");
themeSwitch.addEventListener("change", function() {
  if (themeSwitch.checked) {
    document.body.classList.add("dark");
    document.querySelector(".light").classList.add("dark");
    document
      .querySelector(".brand img[src]")
      .setAttribute("src", "./static/images/dark-inciteverse.png");
    document
      .querySelector("#hero")
      .setAttribute("src", "./static/images/dark-icon.png");
  } else {
    document.body.classList.remove("dark");
    document.querySelector(".dark").classList.remove("dark");
    document
      .querySelector(".brand img[src]")
      .setAttribute("src", "./static/images/inciteverse.png");
    document
      .querySelector("#hero")
      .setAttribute("src", "./static/images/icon.png");
  }
});

var typed = new Typed(".animate-terms", {
  strings: ["Customer satisfaction.", "Creative ides.", "Business needs."],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
  loopCount: Infinity,
  startDelay: 500
});
