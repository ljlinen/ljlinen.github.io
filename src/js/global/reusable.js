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