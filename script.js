
$(document).ready(function(){
  $(".toggle").click(function(){
    $("ul").slideToggle("slow");
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}
