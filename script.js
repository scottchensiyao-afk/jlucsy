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
  ["2025", "Multimaterial Shape Memory Polymer Fibers for Advanced Drug Release Applications", "X. Wan, S. Chen, J. Ma, C. Dong, H. Banerjee, S. Laperrousaz, P.-L. Piveteau, Y. Meng, J. Leng, F. Sorin.", "Advanced Fiber Materials."],
  ["2025", "Advanced synthesis strategy for high-density amorphous SiBCN ceramics with exceptional oxidation resistance via vacuum pyrolysis and spark plasma sintering", "Q. Yan, S. Chen, X. Yang, X. Chen, J. Li, S. Meng.", "Ceramics International."],
  ["2023", "Fabrication of Polymer-derived SiBCN Ceramic Temperature Sensor with Excellent Sensing Performance", "Q. Yan, S. Chen, H. Shi, X. Wang, S. Meng, J. Li*.", "Journal of the European Ceramic Society."],
  ["2024", "Temperature and frequency dependent conductive behavior study on polymer-derived SiBCN ceramics", "Q. Yan, S. Chen, H. Shi, S. Meng, J. Li*.", "Ceramics International."],
  ["2026", "3D printed multiscale superhydrophobic structures with promoted bounce behavior, environmental stability, and ultralong freezing delay", "X. Chen, F. Hao, S. Chen, J. Lu*.", "Nano Materials Science."],
  ["2021", "Additive manufacturing of structural materials", "G. Liu, X. Zhang, X. Chen, Y. He, L. Cheng, M. Huo, J. Yin, F. Hao, S. Chen, P. Wang, S. Yi, L. Wan, Z. Mao, Z. Chen, X. Wang, Z. Cao, J. Lu*.", "Materials Science and Engineering: R: Reports 145, 100596."],
  ["2026", "Multi-objective optimization of biomimetic channel geometry in ceramic substrates using response surface methodology", "Y. Yue, X. Wang, S. Chen, H. Sun*, W. Wu*.", "International Communications in Heat and Mass Transfer."],
  ["2026", "Thermo-Mechanically Recyclable Smart Textiles from Circularly Knitted Liquid Crystal Elastomer Fibers", "X. Wan, T. Deng, L. Plaude, B. Gao, S. Chen, F. Sorin, K. Jansen, K. Zhou, A. P. H. J. Schenning.", "Advanced Functional Materials."],
  ["2025", "Oxidation behavior of TiB2 from 600 to 1400 °C considering microstructure evolution", "X. Chen, F. Yi, B. Gao, T. Deng, S. Chen, S. Meng, J. Li*.", "Journal of Alloys and Compounds."],
  ["2023", "Real-time Bayesian model calibration method for C/SiC mechanical behavior considering model bias", "B. Gao, Q. Yang, S. Chen, P. Wang, S. Meng.", "Mechanics of Materials 187."],
  ["—", "3D/4D additive-subtractive manufacturing of heterogeneous ceramics", "G. Liu, X. Lu, X. Zhang, Y. Zhao, S. Yi, J. Xu, Y. Zhan, J. Yin, C. Feng, Z. Zhou, P. Wang, Z. Chen, Y. He, S. Chen, S. Liu, J. Lu.", "Journal of Materials Science & Technology."],
  ["2026", "Publication details listed on the Jilin University faculty profile", "H. Yu, N. Hou, S. Pattamatta, S. Lin, S. Chen, W. Wu, F. Duan, Y. Xie, X. Chen, Y. Long, G. Li, Y. Chen, S. Chen, J. Lu*.", "Bioactive Materials."],
];

document.querySelectorAll('[data-publications]').forEach((list) => {
  list.innerHTML = publications.map(([year, title, authors, journal]) => `\n    <li><span class="pub-year">${year}</span><div><h3>${title}</h3><p>${authors} <em>${journal}</em></p></div></li>`).join('');
});
