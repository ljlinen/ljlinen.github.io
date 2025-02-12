

// // function that runs when the page loads
// onpageload()
// //



// // Infinite scroll on the header

 const scroller = document.querySelector('.scroll-content')
 const scrollcontent = Array.from(scroller.children)

 scrollcontent.forEach((content) => {
   let clonedcontent = content.cloneNode(true);
   scroller.appendChild(clonedcontent);
})

