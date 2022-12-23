


const body = document.querySelector('.art');
const toggleBib = document.querySelector('.togBib');
let tot = false;

toggleBib.addEventListener( 'click', () => toggleButtonBib() )

const toggleButtonBib = () => {
  body.classList.toggle( "flip" );

  tot = !tot;

  tot ? 
  toggleBib.innerText = "Text"
  : 
  toggleBib.innerText = "Bibliografía"
  ;

  window.scroll(0, 0);
};
