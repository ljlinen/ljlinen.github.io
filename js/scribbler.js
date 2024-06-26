let itemDesktop, itemMobile;

if(switchItems[0].innerText == 'desktop') {
     if (switchItems.length < 3) {
     itemDesktop = switchItems[0];
     itemDesktop.addEventListener('click', () => {
       const item = itemDesktop;
   
       console.log("Desktop works!");
       switchBorder.style.transform = `translateX(0)`;
       switchBorder.style.width = `${item.scrollWidth}px`;
       imgMobi.parentElement.style.width = '100%'
       imgMobi.style.display = "none";
       imgDesk.style.display = "unset";
     });
} else {
    if (switchItems[0].innerText == 'mobile') {
     itemMobile = switchItems[0]
     itemMobile.addEventListener('click', () => {
       const item = itemMobile;
   
       console.log("Mobile works!");
       switchBorder.style.transform = `translateX(${item.offsetLeft - 4}px)`;
       switchBorder.style.width = `${item.scrollWidth}px`;
       imgDesk.style.display = "none";
       imgMobi.style.display = "unset";
       imgMobi.parentElement.style.width = '50%';
     });
}

   }