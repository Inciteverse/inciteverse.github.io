const CreateCard = (works, workDiv) => {
  html = `<div class="col-lg-4 col-md-6 portfolio-item  first wow fadeInUp tab-pane show active" role="tabpanel" aria-labelledby="pills-logos-tab" tabindex="0" id="pills-logos" data-wow-delay="0.5s">
      <div class="rounded overflow-hidden border">
          <div class="position-relative overflow-hidden">
              <img class="img-fluid w-100" style="width:350px; height:350px;object-fit:cover;"  src="${works.work}" alt="">
              <div class="portfolio-overlay">
                  <a class="btn btn-square btn-outline-light mx-1" href="${works.work}" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
              </div>
          </div>
          <div class="bg-light p-4">
              <p class="text-primary fw-medium mb-2">${works.type}</p>
              <h5 class="lh-base mb-0">${works.name}</a>
          </div>
      </div>
  </div>`;

  workDiv.insertAdjacentHTML("afterbegin", html);
};
const works = [
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/Logos%2F1.png?alt=media",
    name: "Thynk & Draw",
    type: "Logo"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/Logos%2F2.png?alt=media",
    name: "N - Design",
    type: "Logo"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/Logos%2F3.png?alt=media",
    name: "Hashten",
    type: "Logo"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/Logos%2F4.png?alt=media",
    name: "East Facing Construction",
    type: "Logo"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/Logos%2F5.png?alt=media",
    name: "C - Design",
    type: "Logo"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/Logos%2F6.png?alt=media",
    name: "Coders Canteen",
    type: "Logo"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/Logos%2F7.png?alt=media",
    name: "A- scale Architech",
    type: "Logo"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/Logos%2F8.png?alt=media",
    name: "Apple Modified",
    type: "Logo"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/Logos%2F9.png?alt=media",
    name: "Vyomr - 3D",
    type: "Logo"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/GraphicDesgin%2FIMG_2038.jpeg?alt=media",
    name: "50% OFF Sale Poster",
    type: "Graphic Design"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/GraphicDesgin%2FRESTAURENT%20table%20tent1.jpg?alt=media",
    name: "Restaurant Menu Table-tent",
    type: "Graphic Design"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/GraphicDesgin%2Fcoffee%20shop%20banner.png?alt=media",
    name: "Coffee Shop Banner",
    type: "Graphic Design"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/GraphicDesgin%2Fflyer%20salad1.png?alt=media",
    name: "Salad offer flyer",
    type: "Graphic Design"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/GraphicDesgin%2Fmovie%20poster.jpeg?alt=media",
    name: "Movie poster- Veiled truth",
    type: "Graphic Design"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/GraphicDesgin%2Fnoodles%20banner%20psd.png?alt=media",
    name: "Restaurant Banner",
    type: "Graphic Design"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/GraphicDesgin%2Fsmartmockups_l42fyfg3.jpg?alt=media",
    name: "Company Brochure 01",
    type: "Graphic Design"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/GraphicDesgin%2Fsmartmockups_l42g70kk.jpg?alt=media",
    name: "Company Brochure 02",
    type: "Graphic Design"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/GraphicDesgin%2Fsmartmockups_l42hxq3i.jpg?alt=media",
    name: "Company Brochure 03",
    type: "Graphic Design"
  },
  {
    work:
      "https://firebasestorage.googleapis.com/v0/b/inciteverse.appspot.com/o/GraphicDesgin%2Fsmartmockups_l42i0ngm.jpg?alt=media",
    name: "Company Brochure 04",
    type: "Graphic Design"
  }
];
const fetchFullWork = () => {
  const workDiv2 = document.getElementById("work2");

  works.forEach(work => CreateCard(work, workDiv2));
};

fetchFullWork();
