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
