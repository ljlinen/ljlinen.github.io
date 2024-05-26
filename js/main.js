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
    parentnav = nav.parentElement;
    
        
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

const scroller = document.querySelector('.scroll-content')
const scrollcontent = Array.from(scroller.children)

scrollcontent.forEach((content) => {
  clonedcontent = content.cloneNode(true);
  scroller.appendChild(clonedcontent);
})

// When work name is clicked, the work should show up

const workp = document.querySelector('.p-event');
const workimg = document.querySelector('.work-img');
const pcancel = document.querySelector('.p-cancel');
const workDeviceSwitch = pcancel.nextElementSibling;
const workSwitchBorder = workDeviceSwitch.lastElementChild
const workSwitchContainer = pcancel.parentElement;
const count = workp.childElementCount;

for (let i = 0; i < count; i++) {
  const p = workp.children[i];
  const imgdiv = workimg.children[i];
  imgdiv.setAttribute('open', 'false');

  p.addEventListener('click', () => {
  
    if(imgdiv.getAttribute('open') && imgdiv.getAttribute('open') == 'false') {
      closeall()
      openImgDiv(p, workSwitchContainer, imgdiv)
      imgdiv.setAttribute('open', 'true');     
    } else {
      closeImgDiv(p, workSwitchContainer, imgdiv)
      imgdiv.setAttribute('open', 'false');
    }
  })

  pcancel.addEventListener('click', () => {
    closeall()
  })

  function closeall() {
    if(open) {
      for (let i = 0; i < count; i++) {
        const imgdiv = workimg.children[i];
        imgdiv.style.display = 'none';
        workSwitchContainer.style.display = 'none';
      }
      
      open = false
    }
  }
}


workDeviceSwitch.addEventListener('click', () => {
  
  if(pc) {
    switchMobileOrPc(pc, workSwitchBorder, imgdiv)
    pc = !pc;
  } else {
    switchMobileOrPc(pc, workSwitchBorder, imgdiv)
    pc = !pc;
  }
})

function closeImgDiv(workDeviceSwitch, imgdiv, p) {

  p.style.opacity = 'initial';
  workimg.style.display = 'flex';
  imgdiv.style.display = 'unset';
  workSwitchContainer.style.display = 'flex';
}

function openImgDiv(p, workDeviceSwitch, imgdiv) {

  p.style.opacity = '.5';
  workimg.style.display = 'flex';
  imgdiv.style.display = 'unset';
  workSwitchContainer.style.display = 'flex';
}

function switchMobileOrPc(pc, workSwitchBorder, imgdiv) {

  if(pc) {
    workSwitchBorder.style.transform = 'translateX(120%)'
    workSwitchBorder.style.width = '53px';
    imgdiv.firstElementChild.style.display = 'unset';
    imgdiv.lastElementChild.style.display = 'none';
  } else {
    workSwitchBorder.style.transform = 'translateX(0)'
    workSwitchBorder.style.width = '60px';
    imgdiv.firstElementChild.style.display = 'none';
    imgdiv.lastElementChild.style.display = 'unset';
  }
}