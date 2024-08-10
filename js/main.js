import 
{ 
  createWorkElement,
  addWorkEvents, 
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
      title: "Baking Tutoring Company",
      description: "An info landing page for a baking company. This website provides basic information about the company including some of the company’s work.",
      technologies: "html css javascript nodejs expressjs",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#0E0C22',
      imageSrcDesktop: "./src/img/work/bakingtutoring pc.jpg",
      imageSrcMobile: "./src/img/work/bakingtutoring mobile.jpg",
      links: ["desktop", "mobile", "git repo"],
      repo: 'https://github.com/ljlinen/bakingtutoring'
  },
  {
      title: "Gmail & FB API WebApp",
      description: "A webapp that intergrates fcebook and gmail apis to allow page messages to be recieved via gmail.",
      technologies: "html css javascript mysql expressjs nodejs ",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#fff',
      imageSrcMobile: "./src/img/work/mailtoteam mobi.jpg",
      links: ["mobile", "git repo"],
      repo: 'https://github.com/ljlinen/mailtoteam'
  },
    {
      title: "Personal Finance Stats WebApp",
      description: "An info landing page for a baking company. This website provides basic information about the company including some of the company’s work.",
      technologies: "html css javascript nodejs expressjs",
      iconSrc: "./src/icon/expand.svg",
      clrDominant: '#000',
      imageSrcDesktop: "./src/img/work/bankroll pc.jpg",
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
      repo: 'https://github.com/ljlinen/drivingschool'
  }
  // Add more objects as needed
];







/* For Each Of The Data Values, Create The Work */

for(let i in data) {
  createWorkElement(data[i], i)
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
const imgCv = cvmain.firstElementChild.nextElementSibling;
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
