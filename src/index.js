'use strict';

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

// create selectors MVP

const nav = document.querySelector('nav');

const cta = document.querySelector('.cta-text');

const topContent = document.querySelector('.top-content');
const bottomContent = document.querySelector('.bottom-content');

// add text contents

cta.querySelector('h1').textContent = siteContent.cta.h1;
cta.querySelector('button').textContent = siteContent.cta.button;

for (let i = 0; i < Object.keys(siteContent.nav).length; i++) {
  nav.querySelector(`:nth-child(${i + 1})`).textContent = siteContent.nav[`nav-item-${i + 1}`];
}

function paragraphsFromSiteContent(target, page) {
  console.log(target);
  console.log(page);
  target.querySelector('h4').textContent = siteContent["main-content"][`${page}-h4`];
  target.querySelector('p').textContent = siteContent["main-content"][`${page}-content`];
}

paragraphsFromSiteContent(topContent.querySelector('div:nth-child(1)'), 'features');
paragraphsFromSiteContent(topContent.querySelector('div:nth-child(2)'), 'about');
paragraphsFromSiteContent(bottomContent.querySelector('div:nth-child(1)'), 'services');
paragraphsFromSiteContent(bottomContent.querySelector('div:nth-child(2)'), 'product');
paragraphsFromSiteContent(bottomContent.querySelector('div:nth-child(3)'), 'vision');