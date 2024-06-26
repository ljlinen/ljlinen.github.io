import 
{ 
  createWorkElement, 
  scrollToElement,
  onpageload,
} from "./mainfunctions.js"




// function that runs when the page loads
onpageload()
//

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
//


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
        : libg.style.top = `${navli.offsetTop}px`;
        scrollToElement('.s1-sec-work');
        break;
      case 1
        : libg.style.top = `${navli.offsetTop}px`;
        scrollToElement('.about-me');
        break;
      case 2
        : libg.style.top = `${navli.offsetTop}px`;
        scrollToElement('.footer');
        break;
    }
  })
}



// Infinite scroll on the header

 const scroller = document.querySelector('.scroll-content')
 const scrollcontent = Array.from(scroller.children)
/*
 scrollcontent.forEach((content) => {
   let clonedcontent = content.cloneNode(true);
   scroller.appendChild(clonedcontent);
}) */



// Work Data
const data = [
  {
      title: "Baking Company",
      description: "An info landing page for a baking company. This website provides basic information about the company including some of the company’s work.",
      technologies: "html css javascript nodejs expressjs",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#0E0C22',
      imageSrcDesktop: "./src/img/theegiftedhands pc.png",
      imageSrcMobile: "./src/img/work/bakingcompany mobi.jpg",
      links: ["desktop", "mobile", "git repo"],
      repo: 'https://github.com/ljlinen/theegiftedhands'
  },
  {
      title: "Gmail&FB API's WebApp",
      description: "A webapp that intergrates fcebook and gmail apis to allow page messages to be recieved via gmail.",
      technologies: "html css javascript mysql expressjs nodejs ",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#fff',
      imageSrcMobile: "/ljlinen.github.io/src/img/work/mailtoteam mobi.jpg",
      links: ["mobile", "git repo"],
      repo: 'https://github.com/ljlinen/mailtoteam'
  },
    {
      title: "Personal Finance Stats WebApp",
      description: "An info landing page for a baking company. This website provides basic information about the company including some of the company’s work.",
      technologies: "html css javascript nodejs expressjs",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#000',
      imageSrcDesktop: "./src/img/work/bankroll mobi.jpg",
      links: ["desktop", "git repo"],
      repo: 'https://github.com/ljlinen/bankroll'
  },
  {
      title: "Driving School Info Site",
      description: "An information website for a driving school company.",
      technologies: "html css javascript nodejs",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: 'blue',
      imageSrcMobile: "./src/img/work/drivingschool mobi.jpg",
      links: ["mobile", "git repo"],
      repo: 'https://github.com/ljlinen/mziyonkedrivingschool'
  }
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
    const switchBorder = switchItems[switchItems.length - 1]; // Assuming the wrap is the fourth child
    
let itemDesktop, itemMobile;
let openedItem;

// Check if the first item is desktop or mobile
if (switchItems[0].innerText === 'desktop') {
    itemDesktop = switchItems[0];
    if (switchItems.length > 1 && switchItems[1].innerText === 'mobile') {
        itemMobile = switchItems[1];
    }
} else if (switchItems[0].innerText === 'mobile') {
    itemMobile = switchItems[0];
    if (switchItems.length > 1 && switchItems[1].innerText === 'desktop') {
        itemDesktop = switchItems[1];
    }
}

// Add event listener to desktop if it exists
if (itemDesktop) {
    itemDesktop.addEventListener('click', () => {
        const item = itemDesktop;
        
        itemDesktop.style.color = 'var(--clr-40)';
        itemMobile.style.color = '#fff';
        switchBorder.style.transform = `translateX(0)`;
        switchBorder.style.width = `${item.scrollWidth}px`;
        imgMobi.parentElement.style.width = '100%';
        imgMobi.style.display = "none";
        imgDesk.style.display = "unset";
    });
}

// Add event listener to mobile if it exists
if (itemMobile) {
    itemMobile.addEventListener('click', () => {
        const item = itemMobile;

        itemMobile.style.color = 'var(--clr-40)';
        itemDesktop.style.color = '#fff';
        switchBorder.style.transform = `translateX(${item.offsetLeft - 4}px)`;
        switchBorder.style.width = `${item.scrollWidth}px`;
        imgDesk.style.display = "none";
        imgMobi.style.display = "unset";
        imgMobi.parentElement.style.width = '50%';
    });
}

if (!itemDesktop && !itemMobile) {
    console.log('Error: Neither desktop nor mobile element found. switchItems:', switchItems);
}
 
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
// Open First Work/ImgWrap
arrWorkTitles[0].click()

/* End */



const imgwrap = document.querySelector('.s1-div-imgwrap')
const pcormob = document.querySelector('.s1-ul-pcormob')
imgwrap.addEventListener('scroll', () => {
  let scrollTop = imgwrap.scrollTop
  if (scrollTop > 2) {
      pcormob.style.opacity = 0;
    } else {
      pcormob.style.opacity = 'revert';
    }
})

const btnBannerMyWork = document.querySelector('.btn-my-work');
btnBannerMyWork.addEventListener('click', () => {
  scrollToElement('.s1-sec-work')
})

const cvmain = document.querySelector('.s3-div-cv');
const imgCv = cvmain.firstElementChild;
document.getElementById('fullscreenImage').addEventListener('click', function() {
            if (imgCv.requestFullscreen) {
                imgCv.requestFullscreen();
            } else if (imgCv.mozRequestFullScreen) { // Firefox
                imgCv.mozRequestFullScreen();
            } else if (imgCv.webkitRequestFullscreen) { // Chrome, Safari, and Opera
                imgCv.webkitRequestFullscreen();
            } else if (imgCv.msRequestFullscreen) { // IE/Edge
                imgCv.msRequestFullscreen();
            }
        });