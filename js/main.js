// function that runs when the page loads

import { createWorkElement } from "./mainfunctions.js"

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
  
// window.addEventListener('scroll', () => {
  
//     const navulone = nav.firstElementChild;
//     const navultwo = nav.firstElementChild.nextElementSibling;
//     parentnav = nav.parentElement;
    
        
//   if(window.scrollY > 100) {
//     navulone.classList.add('translate');
//     navultwo.classList.remove('nav-nav');
//     navultwo.style.opacity = '0';
//     navulone.style.display = 'none';
//     parentnav.style.visibility = 'hidden'
//   } else {
//     navultwo.classList.add('nav-nav');
//     navultwo.style.opacity = '1';
//     navulone.style.display = 'revert';
//     navultwo.style.opacity = 'revert';
//     parentnav.style.visibility = 'revert'
//   }
// })

//scroll to the requested view gunction by passing class

function scrollToElement(elementClass) {
  const elementToScrollToView = document.querySelector(elementClass);
  const elementStyle = getComputedStyle(elementToScrollToView);

    if(elementStyle.display == 'none') {
        elementToScrollToView.style.display = 'unset';
    }
        elementToScrollToView.scrollIntoView({scrollBehavior:"smooth"});
}


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
        scrollToElement('.work');
        break;
      case 1
        : libg.style.top = '15px';
        scrollToElement('.about-me');
        break;
      case 2
        : libg.style.top = '32px';
        scrollToElement('.work');
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

    // Array of randomly generated values
    const data = [
      {
          title: "Baking Company",
          description: "An info landing page for a baking company. This website provides basic information about the company including some of the company’s work.",
          technologies: "html css javascript nodejs expressjs",
          iconSrc: "./src/icon/expand.svg",
          imageSrc: "./src/img/theegiftedhands pc.png",
          links: ["desktop", "mobile", "git repo"]
      },
      {
          title: "Tech Blog",
          description: "A tech blog providing the latest updates in the tech industry.",
          technologies: "html css javascript reactjs",
          iconSrc: "./src/icon/expand.svg",
          imageSrc: "./src/img/techblog.png",
          links: ["desktop", "mobile", "git repo"]
      },
      // Add more objects as needed
  ];

    // Append created elements to the container
    // const container = document.querySelector('.s1-div-main-work')


// When work name is clicked, the work should show up


let imgwrapopen = false;
let openworktitle = false;

const addWorkEvents = (workTitles, imgwrappers) => {

  workTitles.forEach((workTitle, i) => {

      const pcOrMobMain = imgwrappers[i].firstElementChild;
      const switchItems = Array.from(pcOrMobMain.children)
      const switchBorder = switchItems[3]; // Assuming the wrap is the fourth child
      switchItems.pop()
      switchItems.pop()
    
      switchItems.forEach((item, j) => {
        item.addEventListener('click', () => {
    
          const itemOffsetLeft = item.offsetLeft;
          const itemWidth = item.scrollWidth;
          switchBorder.style.width = `${itemWidth}px`;
    
          switch (j) {
            case 0:
              switchBorder.style.transform = `translateX(0)`;
              break;
            case 1:
              switchBorder.style.transform = `translateX(${itemOffsetLeft-4}px)`;
              break;
            case 2:
              switchBorder.style.transform = `translateX(${itemOffsetLeft-4}px)`;
              break;
          }
        });
      });

    workTitles[i].addEventListener('click', () => {

      console.log(imgwrapopen);
      console.log(openworktitle);
      
      if(imgwrapopen && openworktitle) {
        imgwrapopen.style.display = 'none';
        imgwrappers[i].style.display = 'flex';

        openworktitle.classList.toggle('s1-div-work-p-inactive');

        openworktitle = workTitles[i];
        imgwrapopen = imgwrappers[i];
      } else {
        imgwrappers[i].style.display = 'flex';
        workTitles[i].classList.remove('s1-div-work-p-inactive')
        imgwrapopen = imgwrappers[i]

        openworktitle = workTitles[i];
        imgwrapopen = imgwrappers[i];
      }
    });
  });
}

  createWorkElement(data[0]);
  const arrWorkTitles = Array.from(document.querySelector('.s1-div-worklist').children);
  const arrImgWrappers = Array.from(document.querySelectorAll('.s1-div-imgwrap'));
  addWorkEvents(arrWorkTitles, arrImgWrappers);

// const workSwitchBorder = pcormobMain.lastElementChild

// workDeviceSwitch.addEventListener('click', () => {
  
//   if(pc) {
//     switchMobileOrPc(pc, workSwitchBorder, imgdiv)
//     pc = !pc;
//   } else {
//     switchMobileOrPc(pc, workSwitchBorder, imgdiv)
//     pc = !pc;
//   }
// })

// function closeImgDiv(workDeviceSwitch, imgdiv, p) {

//   p.style.opacity = 'initial';
//   workimg.style.display = 'flex';
//   imgdiv.style.display = 'unset';
//   workSwitchContainer.style.display = 'flex';
// }

// function openImgDiv(p, workDeviceSwitch, imgdiv) {

//   p.style.opacity = '.5';
//   workimg.style.display = 'flex';
//   imgdiv.style.display = 'unset';
//   workSwitchContainer.style.display = 'flex';
// }

// function switchMobileOrPc(pc, workSwitchBorder, imgdiv) {

//   if(pc) {
//     workSwitchBorder.style.transform = 'translateX(120%)'
//     workSwitchBorder.style.width = '53px';
//     imgdiv.firstElementChild.style.display = 'unset';
//     imgdiv.lastElementChild.style.display = 'none';
//   } else {
//     workSwitchBorder.style.transform = 'translateX(0)'
//     workSwitchBorder.style.width = '60px';
//     imgdiv.firstElementChild.style.display = 'none';
//     imgdiv.lastElementChild.style.display = 'unset';
//   }
// }