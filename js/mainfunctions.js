// Loading animation 

export function onpageload() {
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

// End




// scroll to the requested view gunction by passing class

export function scrollToElement(elementClass) {
  const elementToScrollToView = document.querySelector(elementClass);
  const elementStyle = getComputedStyle(elementToScrollToView);

    if(elementStyle.display == 'none') {
        elementToScrollToView.style.display = 'unset';
    }
        elementToScrollToView.scrollIntoView({scrollBehavior:"smooth"});
}
// End 



// Function to create the element

export function createWorkElement(data, i) {
    i = parseInt(i);
    console.log(typeof i)
    const workPDiv = document.createElement('div');
    workPDiv.className = 's1-div-work-p';

    const h3 = document.createElement('h3');
    const h3Index = document.createElement('span');
    h3Index.classList.add('s1-span-workIndex');
    h3Index.innerText = `${i+1}. `;
    
    h3.append(h3Index, data.title);

    const pHidden = document.createElement('p');
    pHidden.className = 's1-p-hidden';
    pHidden.textContent = data.description;

    const h3AndIcon = document.createElement('div');
    h3AndIcon.className = 's1-div-iconandpwrap';

    const techP = document.createElement('p');
    techP.textContent = data.technologies;

    const iconImg = document.createElement('img');
    iconImg.src = data.iconSrc;

    h3AndIcon.appendChild(h3);
    h3AndIcon.appendChild(iconImg);
    
    workPDiv.appendChild(h3AndIcon);
    workPDiv.appendChild(pHidden);
    workPDiv.appendChild(techP);
    workPDiv.classList.add('s1-div-work-p-inactive')

    const imgWrapDiv = document.createElement('div');
    imgWrapDiv.classList.add('s1-div-imgwrap');
    imgWrapDiv.style.height = 0;

    const ul = document.createElement('ul');
    ul.className = 's1-ul-pcormob';

    data.links.forEach(linkText => {
        const li = document.createElement('li');
        if (linkText === "git repo") {
            const a = document.createElement('a');
            a.href = data.repo; // Replace with actual URL
            a.target = "_blank";
            a.textContent = linkText;
            a.classList.add('a-repo')
            li.appendChild(a);
        } else if(linkText === 'mobile' &&
          !data.imageSrcDesktop
        ) {
          li.style.color = 'var(--clr-40)';
          li.textContent = linkText;
        } else if(linkText === 'desktop') {
          li.style.color = 'var(--clr-40)';
          li.textContent = linkText;
        } else {
            li.textContent = linkText;
        }
        ul.appendChild(li);
    });

    const wrapDiv = document.createElement('div');
    wrapDiv.className = 'wrap';

    

    const workImgs = document.createElement('div');
    workImgs.className = 's1-img-workimg';
    
    if(data.imageSrcDesktop) {
       const workImgDesktop = document.createElement('img');
       workImgDesktop.src = data.imageSrcDesktop;
       workImgs.append(workImgDesktop)
    }
    if(data.imageSrcMobile) {
       const workImgMobile = document.createElement('img');
       if(!data.imageSrcDesktop) {
          workImgs.style.width = '50%';
          wrapDiv.style.width = '34px';
       }
       workImgMobile.src = data.imageSrcMobile;
      if(data.imageSrcDesktop) {
          workImgMobile.style.opacity = 0;
          workImgMobile.style.height = 0;
      }
      
      workImgs.append(workImgMobile)
    }
    
    ul.appendChild(wrapDiv);
    imgWrapDiv.appendChild(ul);
    imgWrapDiv.appendChild(workImgs);

    const worklist = document.querySelector('.s1-div-worklist')
    workPDiv.appendChild(imgWrapDiv)
    worklist.appendChild(workPDiv)

}

// End


/* When Work Card is Clicked, The Work Should Pop Up/Switch */

let imgwrapopen = false;
let openworktitle = false;

export const addWorkEvents = (workTitles, imgwrappers) => {

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
        imgMobi.style.opacity = 0;
        imgMobi.style.height = 0;
        imgDesk.style.height = "initial";
        imgDesk.style.opacity = 1;
        
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
        imgDesk.style.opacity = 0;
        imgDesk.style.height = 0;
        imgMobi.style.height = 'initial';
        imgMobi.style.opacity = 1;
        imgMobi.parentElement.style.width = '50%';
    });
}

if (!itemDesktop && !itemMobile) {
    console.log('Error: Neither desktop nor mobile element found. switchItems:', switchItems);
}
 
  /* adds click events to the work cards */
    workTitle.addEventListener('click', () => {

      if (imgwrapopen && openworktitle) {
        imgwrapopen.style.height = 0;
        if(imgwrappers[i] != imgwrapopen) {
          imgwrapopen.firstElementChild.style.opacity = 0;
        }

        imgwrappers[i].style.height = '40vh';
        imgwrappers[i].firstElementChild.style.opacity = 0.35;

        openworktitle.classList.add('s1-div-work-p-inactive');
        workTitle.classList.remove('s1-div-work-p-inactive');
      } else {
        imgwrappers[i].style.height = '40vh';
        workTitle.classList.remove('s1-div-work-p-inactive')
      }

      openworktitle = workTitle;
      imgwrapopen = imgwrappers[i];

    });
  }
}
/* End */