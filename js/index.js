const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here
/******add nav content*********/
//add a content in nav
const nav_a=document.querySelectorAll('a');
for(let i=0;i<nav_a.length;i++){
nav_a[i].textContent=siteContent.nav["nav-item-"+(i+1)];
}
//add img content in nav
const img_nav=document.querySelector('#logo-img');
img_nav.src=siteContent.nav["img-src"];
/*************add cta content**************/
//add h1 content 
const h1_cta=document.querySelector('body > div > section.cta > div > h1');
h1_cta.textContent=siteContent.cta.h1;
// add button content 
const btn_cta=document.querySelector('body > div > section.cta > div > button');
btn_cta.textContent=siteContent.cta.button;
//add img content 
const img_cta= document.querySelector('#cta-img');
img_cta.src=siteContent.cta['img-src'];
/*************** add main text-content***********/
//add content for main top
// add h4 top content #1
const h4_top_1=document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > h4');
h4_top_1.textContent=siteContent["main-content"]["features-h4"];
// add p conent #1
const p_top_1=document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > p');
p_top_1.textContent=siteContent["main-content"]["features-content"];
// add h4 top content #2
const h4_top_2=document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > h4');
h4_top_2.textContent=siteContent["main-content"]["about-h4"];
// add p conent #1
const p_top_2 =document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > p');
p_top_2.textContent=siteContent["main-content"]["about-content"];

/*********** add img content in main ********/
const img_main=document.querySelector('#middle-img');
img_main.src=siteContent["main-content"]["middle-img-src"];
/************ add bottom content ************/
//add bottom text content #1
//add h4 text content #1
const h4_bot_1= document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > h4');
h4_bot_1.textContent=siteContent["main-content"]["services-h4"];
// add p text content #1
const p_bot_1=document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > p');
p_bot_1.textContent=siteContent["main-content"]["services-content"];

//add bottom text content #2
//add h4 text content #2
const h4_bot_2= document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > h4');
h4_bot_2.textContent=siteContent["main-content"]["product-h4"];
// add p text content #2
const p_bot_2=document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > p');
p_bot_2.textContent=siteContent["main-content"]["services-content"];
//add h4 text content #3
const h4_bot_3 =document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(3) > h4');
h4_bot_3.textContent=siteContent["main-content"]["vision-h4"];
// add p text content #3
const p_bot_3=document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(3) > p');
p_bot_3.textContent=siteContent["main-content"]["vision-content"];
/************* add contact content ************/
// add h4 contact content 
const h4_contact= document.querySelector('body > div > section.contact > h4');
h4_contact.textContent=siteContent.contact["contact-h4"];
// add p contact 
const p_contact_1=document.querySelector('body > div > section.contact > p:nth-child(2)');
p_contact_1.textContent=siteContent.contact.address;
const p_contact_2=document.querySelector('body > div > section.contact > p:nth-child(3)');
p_contact_2.textContent=siteContent.contact.phone;
const p_contact_3=document.querySelector('body > div > section.contact > p:nth-child(4)');
p_contact_3.textContent=siteContent.contact.email;

/*************add footer contant ************/
//add p footer
const p_footer=document.querySelector('body > div > footer > p');
p_footer.textContent=siteContent.footer.copyright;
/*****Change the color of the navigation*******/
const navbar=document.querySelector('body > div > header > nav');
navbar.style.backgroundColor ="green";
/**************add two new items to the navigation system**************/
const item1=document.createElement('a');
item1.textContent='news';
const item2=document.createElement('a');
item2.textContent='tools';
const add=document.querySelector('body > div > header > nav');
add.appendChild(item1);
add.appendChild(item2);





  







