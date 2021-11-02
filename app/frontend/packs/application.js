// import 'bootstrap/js/src/alert'  
// import 'bootstrap/js/src/button'  
// import 'bootstrap/js/src/carousel'  
import 'bootstrap/js/src/collapse'  
import 'bootstrap/js/src/dropdown'  
// import 'bootstrap/js/src/modal'  
// import 'bootstrap/js/src/popover'  
import 'bootstrap/js/src/scrollspy'  
// import 'bootstrap/js/src/tab'  
import Toast from 'bootstrap/js/src/toast'
// import 'bootstrap/js/src/tooltip'


function display_toasts() {
  let toastElList = [].slice.call(document.querySelectorAll('.toast'))
  let toastList = toastElList.map(function (toastEl) {
    return new Toast(toastEl)
  })
  toastList.forEach( function(element, index) {
    element.show()
  });
}


document.addEventListener("DOMContentLoaded", function(event) { 
  display_toasts()
});


const images = require.context('../img', true)
