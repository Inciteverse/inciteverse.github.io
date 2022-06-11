(function($) {
  // Spinner
  var spinner = function() {
    setTimeout(function() {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Skills
  $(".skill").waypoint(
    function() {
      $(".progress .progress-bar").each(function() {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  });
})(jQuery);

const CreateLogoCard = logos => {
  const workDiv = document.getElementById("work");
  let html = "";
  logos.forEach(logo => {
    html += `<div class="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
    <div class="rounded overflow-hidden">
        <div class="position-relative overflow-hidden">
            <img class="img-fluid w-100" style="width:350px; height:350px"  src="${logo}" alt="">
            <div class="portfolio-overlay">
                <a class="btn btn-square btn-outline-light mx-1" href="${logo}" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
            </div>
        </div>
        <div class="bg-light p-4">
            <p class="text-primary fw-medium mb-2">Logo Design</p>
            <h5 class="lh-base mb-0">Digital Agency Website Design And Development</a>
        </div>
    </div>
</div>`;
  });
  workDiv.insertAdjacentHTML("afterbegin", html);
};

const fetchLogos = () => {
  fetch("../data/logos.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(response => {
    console.log(response);
  });
  // CreateLogoCard(Logos);
  // return Logos;
};

fetchLogos();
