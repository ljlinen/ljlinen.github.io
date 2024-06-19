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
  
     if (pc) {
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