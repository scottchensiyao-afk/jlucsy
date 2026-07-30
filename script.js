const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('.language-menu').forEach((menu) => {
  const button = menu.querySelector('.language-toggle');
  const options = menu.querySelector('.language-options');
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = options.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', () => {
    options.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  });
  menu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      options.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      button.focus();
    }
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const publications = [
  ["2026", "Additive manufacturing of fiber-reinforced electrically driven precursor and their derived ceramics", "S. Chen, H. Wei, X. Wan, Z. Mao, H. Yu, S. Meng*, J. Lu*.", "Materials Science & Engineering R."],
  ["2023", "Lightweight and Geometrically Complex Ceramics Derived from 4D Printed Shape Memory Precursor with Reconfigurability and Programmability for Sensing and Actuation Applications", "S. Chen, J. Li, H. Shi, X. Chen, G. Liu, S. Meng*, J. Lu*.", "Chemical Engineering Journal."],
  ["2023", "Fabrication of Electrical Semi-conductive SiCN Ceramics by Vat Photopolymerization", "S. Chen, X. Wan, J. Li, B. Gao, X. Chen, S. Meng*, J. Lu*.", "Journal of Materials Science & Technology."],
  ["2025", "Study on Preparation and Piezoresistive Characteristics of TVS-modified Polymer-Derived SiBCN Ceramics", "S. Chen, Y. Qin, Q. Yan, H. Shi, Y. Gao, B. Gao, F. Yang, X. Chen, J. Li*, S. Meng.", "Journal of the European Ceramic Society."],
  ["2024", "Novel anti-oxidation coating prepared by polymer-derived ceramic for harsh environments up to 1200 °C", "Q. Yan, S. Chen*, H. Shi, B. Gao, J. Li*, S. Meng.", "Surface and Coatings Technology."],
  ["2024", "Evolution of Dielectric Properties of SiBCN Ceramics and Its Derived Wireless Passive Temperature Sensor Application", "H. Shi, S. Chen*, Q. Yan, S. Meng, S. Lin, J. Li*.", "Ceramics International."],
  ["2025", "Recent advances in stimuli-responsive materials for intelligent electronics", "S. Chen, H. Wei, C. Lin, H. Zhao, C. Dong*, X. Wan*.", "Materials Today Electronics."],
  ["2026", "Coaxial 4D Printing of Dual-Drug-Loaded Core-Shell Shape Memory Polymer Scaffolds", "X. Wan, T. Deng, S. Chen*.", "2026 IEEE International Conference on Mechatronics and Automation (ICMA)."],
];

document.querySelectorAll('[data-publications]').forEach((list) => {
  list.innerHTML = publications.map(([year, title, authors, journal]) => `\n    <li><span class="pub-year">${year}</span><div><h3>${title}</h3><p>${authors} <em>${journal}</em></p></div></li>`).join('');
});
