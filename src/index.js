// const { LogOutput } = require("concurrently");

const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const container = document.querySelector('.container');

const headerEl = document.querySelector('header');
container.prepend(headerEl);
headerEl.style.display = 'flex';
headerEl.style.justifyContent = 'center';

const navLinks = document.querySelector('nav');
headerEl.appendChild(navLinks);
const navItem1 = document.createElement('a');
navItem1.textContent = "Services";
navItem1.href = "#";
navLinks.appendChild(navItem1);
const navItem2 = document.createElement('a');
navItem2.textContent = 'Product';
navItem2.href = '#';
navLinks.appendChild(navItem2);
const navItem3 = document.createElement('a');
navItem3.textContent = 'Vision';
navItem3.href = '#';
navLinks.appendChild(navItem3);
const navItem4 = document.createElement('a');
navItem4.textContent = 'Features';
navItem4.href = '#';
navLinks.appendChild(navItem4);
const navItem5 = document.createElement('a');
navItem5.textContent = 'About';
navItem5.href = '#';
navLinks.appendChild(navItem5);
const navItem6 = document.createElement('a');
navItem6.textContent = 'Contact';
navItem6.href = '#';
navLinks.appendChild(navItem6);

const headerImg = document.querySelector('#logo-img');
headerImg.src = 'http://localhost:9000/img/logo.png';
headerEl.appendChild(headerImg);

// cta section

const ctaSection = document.querySelector('.cta');
const ctaDiv = document.querySelector('.cta-text');
const h1 = document.querySelector('.cta-text h1');
h1.textContent = 'DOM Is Awesome';
const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = 'Get Started';
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'http://localhost:9000/img/cta.png';