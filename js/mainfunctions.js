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

export function createWorkElement(data) {

    const workPDiv = document.createElement('div');
    workPDiv.className = 's1-div-work-p';

    const h3 = document.createElement('h3');
    h3.textContent = data.title;

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
    imgWrapDiv.style.display = 'none';

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
         workImgMobile.style.display = 'none';
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