const services = [
  {
    title: "Manpower Supply",
    img: "./assets/Trends-Shaping-Manpower-Supply-Blog-banner.jpg",
    desc: "We provide reliable, safety-trained manpower for residential, commercial, and government projects. From bridges and roads to high-rise towers, our skilled and unskilled labor force ensures consistent quality and timely delivery."
  },
  {
    title: "Design & Engineering",
    img: "assets/images.jpeg",
    desc: "Our architects and engineers turn your vision into precision. We deliver 3D modeling, structural design, and end-to-end project planning, ensuring every element blends creativity, stability, and modern functionality."
  },
  {
    title: "Construction Services",
    img: "./assets/Manpower-supply.webp",
    desc: "Our construction division handles complete civil work—from earthworks and foundations to finishing touches. We focus on quality craftsmanship, material excellence, and efficient timelines for every project."
  },
  {
    title: "Material Supply",
    img: "./assets/images1.jpeg",
    desc: "We source and supply premium construction materials, ensuring consistent quality and timely delivery. Our robust logistics ensure your project runs smoothly without interruptions or shortages."
  },
  {
    title: "Interior Fit-Out",
    img: "./assets/istockphoto-1360117481-612x612.jpg",
    desc: "We craft functional, elegant interiors tailored to your style and brand. From space planning to custom furniture, our fit-out team ensures every detail resonates with beauty and practicality."
  },
  {
    title: "Turnkey Projects",
    img: "./assets/Turnkey-Projects.webp",
    desc: "We take complete ownership — design, construction, interiors, and handover. Our turnkey model ensures flawless coordination, accountability, and single-point contact from concept to completion."
  }
];

const container = document.getElementById("services-container");

services.forEach((service, index) => {
  const isEven = index % 2 !== 0;
  const card = `
    <div class="col-12 reveal">
      <div class="service-card ${isEven ? 'flex-row-reverse' : ''}">
        <div class="service-img">
          <img src="${service.img}" alt="${service.title}">
        </div>
        <div class="service-content">
          <h4>${service.title}</h4>
          <p>${service.desc}</p>
        </div>
      </div>
    </div>
  `;
  container.insertAdjacentHTML("beforeend", card);
});

// Scroll reveal effect
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) el.classList.add("active");
  });
});