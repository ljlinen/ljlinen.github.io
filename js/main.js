import { createWorkElement, scrollToElement } from "./mainfunctions.js"

// function that runs when the page loads
onpageload()

function onpageload() {

  window.onloadstart = () => {
    loading(true)
  }
  window.onloadend = () => {
    loading(false)
  }
}
function loading(toggle) {
  const loader = document.querySelector('.loader');
  
  if(toggle) {
    loader.style.display = 'flex';
  } else {
    loader.style.display = 'revert';
  }
}



// Hide the nav bar when scrolling, for a cleaner UI

const nav = document.querySelector('.nav-nav');

window.addEventListener('scroll', () => {
  
      const navulone = nav.firstElementChild;
      const navultwo = nav.firstElementChild.nextElementSibling;
      const parentnav = nav.parentElement;
        
  if(window.scrollY > 100) {

      navulone.classList.add('translate');
      navultwo.classList.remove('nav-nav');
      navultwo.style.opacity = '0';
      navulone.style.display = 'none';
      parentnav.style.visibility = 'hidden'

  } else {

      navultwo.classList.add('nav-nav');
      navultwo.style.opacity = '1';
      navulone.style.display = 'revert';
      navultwo.style.opacity = 'revert';
      parentnav.style.visibility = 'revert'

  }
})



// Switching between sidenav elements on hover
const sidenavli = document.querySelector('.side-nav').firstElementChild.children;
const libg = sidenavli.item(3);

for (let i = 0; i < 3; i++) {
  const navli = sidenavli[i];
  navli.addEventListener('click', () => {

    libg.style.opacity = '.7';
    libg.style.animation = 'blink 1.7s infinite';

    switch(i) {
      case 0
        : libg.style.top = '-2px';
        scrollToElement('.s1-sec-work');
        break;
      case 1
        : libg.style.top = '15px';
        scrollToElement('.about-me');
        break;
      case 2
        : libg.style.top = '32px';
        scrollToElement('.footer');
        break;
    }
  })
}



// Infinite scroll on the header

// const scroller = document.querySelector('.scroll-content')
// const scrollcontent = Array.from(scroller.children)

// scrollcontent.forEach((content) => {
//   clonedcontent = content.cloneNode(true);
//   scroller.appendChild(clonedcontent);
// })



// Work Data
const data = [
  {
      title: "Baking Company",
      description: "An info landing page for a baking company. This website provides basic information about the company including some of the company’s work.",
      technologies: "html css javascript nodejs expressjs",
      iconSrc: "./src/icon/expand.svg",
      imageSrcDesktop: "./src/img/work/work-desktop.jpg",
      imageSrcMobile: "./src/img/work/work-mobile.jpg",
      links: ["desktop", "mobile", "git repo"]
  },
  {
      title: "Tech Blog",
      description: "A tech blog providing the latest updates in the tech industry.",
      technologies: "html css javascript reactjs",
      iconSrc: "./src/icon/expand.svg",
      imageSrcDesktop: "./src/img/work/work-desktop.jpg",
      imageSrcMobile: "./src/img/work/work-mobile.jpg",
      links: ["desktop", "mobile", "git repo"]
  },
  // Add more objects as needed
];



/* When Work Card is Clicked, The Work Should Pop Up/Switch */

let imgwrapopen = false;
let openworktitle = false;

const addWorkEvents = (workTitles, imgwrappers) => {

  for(let i = 0; i < workTitles.length; i++) {
    
    let imgwrapperIdx = imgwrappers[i]
    let workTitle = workTitles[i];
    
    const pcOrMobMain = imgwrapperIdx.firstElementChild;
    const imgwrapperMain = pcOrMobMain.nextElementSibling;
    const imgDesk = imgwrapperMain.firstElementChild;
    const imgMobi = imgDesk.nextElementSibling;
    
    const switchItems = Array.from(pcOrMobMain.children)
    const switchBorder = switchItems[3]; // Assuming the wrap is the fourth child
    switchItems.pop()
    switchItems.pop()

  const itemDesktop = switchItems[0];
  const itemMobile = switchItems[1];
 
 /* switching between desktop work and mobile */
    itemDesktop.addEventListener('click', () => {
        const item = itemMobile;
        
      console.log("Desktop works!");
      switchBorder.style.transform = `translateX(0)`;
      switchBorder.style.width = `${item.scrollWidth}px`;
      imgMobi.style.display = "none";
      imgDesk.style.display = "unset";
    });
  
    itemMobile.addEventListener('click', () => {
        const item = itemMobile;
        
      console.log("Mobile works!");
      switchBorder.style.transform = `translateX(${item.offsetLeft - 4}px)`;
      switchBorder.style.width = `${item.scrollWidth}px`;
      imgDesk.style.display = "none";
      imgMobi.style.display = "unset";
    });
  
  /* adds click events to the work cards */
    workTitle.addEventListener('click', () => {

      if (imgwrapopen && openworktitle) {
        imgwrapopen.style.display = 'none';
        imgwrappers[i].style.display = 'flex';

        openworktitle.classList.add('s1-div-work-p-inactive');
        workTitle.classList.remove('s1-div-work-p-inactive');
      } else {
        imgwrappers[i].style.display = 'flex';
        workTitle.classList.remove('s1-div-work-p-inactive')
      }

      openworktitle = workTitle;
      imgwrapopen = imgwrappers[i];

    });
  }
}
/* End */



/* For Each Of The Data Values, Create The Work */

for(let i in data) {
  createWorkElement(data[i])
}

const arrWorkTitles = Array.from(document.querySelector('.s1-div-worklist').children);
const arrImgWrappers = Array.from(document.querySelectorAll('.s1-div-imgwrap'));
// then add all required events for the work

addWorkEvents(arrWorkTitles, arrImgWrappers);

/* End */



const imgwrap = document.querySelector('.s1-div-imgwrap')
const pcormob = document.querySelector('.s1-ul-pcormob')
imgwrap.addEventListener('scroll', () => {
  let scrollTop = imgwrap.scrollTop
  if (scrollTop > 2) {
      pcormob.style.visibility = 'hidden';
    } else {
      pcormob.style.visibility = 'visible'
    }
})

const btnBannerMyWrok = document.querySelector('#id-my-work')

btnBannerMyWrok.addEventListener('click', () => {
  scrollToElement('.s1-sec-work');
})