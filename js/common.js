// DinoWorks Common JS
$(document).ready(function() {
  preventDefaultAnchor();


  //헤더




function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });
}




  