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

// header section

const headerEl = document.querySelector('header');
container.prepend(headerEl);
headerEl.style.display = 'flex';
headerEl.style.justifyContent = 'center';

// const navLinks = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
const navLinksTexts = Object.values(siteContent.nav);
navLinks.forEach((link, idx) => {
  link.textContent = navLinksTexts[idx]
  link.classList.add('italic')
});
// headerEl.appendChild(navLinks);
// const navItem1 = document.createElement('a');
// navItem1.textContent = "Services";
// navItem1.href = "#";
// navItem1.classList.add('italic');
// navLinks.appendChild(navItem1);
// const navItem2 = document.createElement('a');
// navItem2.textContent = 'Product';
// navItem2.href = '#';
// navItem2.classList.add('italic');
// navLinks.appendChild(navItem2);
// const navItem3 = document.createElement('a');
// navItem3.textContent = 'Vision';
// navItem3.href = '#';
// navItem3.classList.add('italic');
// navLinks.appendChild(navItem3);
// const navItem4 = document.createElement('a');
// navItem4.textContent = 'Features';
// navItem4.href = '#';
// navItem4.classList.add('italic');
// navLinks.appendChild(navItem4);
// const navItem5 = document.createElement('a');
// navItem5.textContent = 'About';
// navItem5.href = '#';
// navItem5.classList.add('italic');
// navLinks.appendChild(navItem5);
// const navItem6 = document.createElement('a');
// navItem6.textContent = 'Contact';
// navItem6.href = '#';
// navItem6.classList.add('italic');
// navLinks.appendChild(navItem6);

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

// main-content section

const mainSection = document.querySelector('.main-content');
const topContent = document.querySelector('.top-content');
const textDiv = document.querySelector('.text-content');
// const featuresSub = document.querySelector('.top-content h4');
topContent.children[0].children[0].textContent = siteContent["main-content"]['features-h4'];
// featuresSub.textContent = 'Features';
// const featuresPar = document.querySelector('.top-content p');
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content'];
// featuresPar.textContent = siteContent["main-content"]["features-content"];
// const aboutSub = document.querySelector()
topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent.children[1].children[1].textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector('#middle-img');
middleImg.src = 'http://localhost:9000/img/accent.png';

const bottomContent = document.querySelector('.bottom-content');
// const servicesSub = document.querySelector('.bottom-content h4');
// servicesSub.textContent = 'Services';
// const servicesPar = document.querySelector('.bottom-content p'); 
// servicesPar.textContent = siteContent["main-content"]["services-content"];
bottomContent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent.children[0].children[1].textContent = siteContent["main-content"]["services-content"];
bottomContent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"];
bottomContent.children[1].children[1].textContent = siteContent["main-content"]["product-content"];
bottomContent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
bottomContent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"];

// contact section

const contactSection = document.querySelector('.contact');
// const contactSub = document.querySelector('.contact h4');
contactSection.children[0].textContent = siteContent.contact['contact-h4'];
// contactSub.textContent = 'Contact';
// const contactPar1 = document.querySelector('.contact p');
// contactPar1.textContent = siteContent.contact.address;
contactSection.children[1].textContent = siteContent.contact['address'];
contactSection.children[2].textContent = siteContent.contact['phone'];
contactSection.children[3].textContent = siteContent.contact['email'];


//footer

const footerSection = document.querySelector('footer');
const footerLink = document.querySelector('footer a');
footerLink.textContent = siteContent.footer.copyright;
footerLink.href = '#';
footerLink.classList.add('bold');


