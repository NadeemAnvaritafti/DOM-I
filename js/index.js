const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// Navigation
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.getElementsByTagName('a');
links[0].textContent = siteContent.nav["nav-item-1"];
links[1].textContent = siteContent.nav["nav-item-2"];
links[2].textContent = siteContent.nav["nav-item-3"];
links[3].textContent = siteContent.nav["nav-item-4"];
links[4].textContent = siteContent.nav["nav-item-5"];
links[5].textContent = siteContent.nav["nav-item-6"];

const navBar = document.querySelector('nav');

const newLink = document.createElement('a');
newLink.textContent = "Donate";
newLink.style.cursor = "pointer";

const newLink2 = document.createElement('a');
newLink2.textContent = "Home";
newLink2.style.cursor = "pointer";

navBar.appendChild(newLink);
navBar.prepend(newLink2);

Array.from(links);
Array.from(links).forEach(function(el){
  el.style.color = "green";
})


// CTA Header
const mainHeader = document.querySelector(".cta h1");
mainHeader.innerHTML = "DOM<br>Is<br>Awesome";

const headerButton = document.querySelector('.cta button');
headerButton.textContent = siteContent.cta.button;

const headerImg = document.getElementById('cta-img');
headerImg.src = siteContent.cta['img-src'];


// Middle Content
const middleTitles = document.querySelectorAll('.main-content h4');
middleTitles[0].textContent = siteContent['main-content']['features-h4'];
middleTitles[1].textContent = siteContent['main-content']['about-h4'];
middleTitles[2].textContent = siteContent['main-content']['services-h4'];
middleTitles[3].textContent = siteContent['main-content']['product-h4'];
middleTitles[4].textContent = siteContent['main-content']['vision-h4'];

const middleContent = document.querySelectorAll('.main-content p');
middleContent[0].textContent = siteContent['main-content']['features-content'];
middleContent[1].textContent = siteContent['main-content']['about-content'];
middleContent[2].textContent = siteContent['main-content']['services-content'];
middleContent[3].textContent = siteContent['main-content']['product-content'];
middleContent[4].textContent = siteContent['main-content']['vision-content'];

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];


// Contact Section
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent.contact['contact-h4'];

const contactContent = document.querySelectorAll('.contact p');
contactContent[0].innerHTML = "123 Way 456 Street<br>Somewhere, USA";
contactContent[1].textContent = siteContent.contact.phone;
contactContent[2].textContent = siteContent.contact.email;


// Footer
const footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent.footer.copyright;
footerContent.style.color = "white";

const footer = document.querySelector('footer');
footer.style.background = "black";
footer.style.height = "50px";
footer.style.display = "flex";
footer.style.alignItems = "center";
footer.style.justifyContent = "center";