console.log("Hello");

/*Parallel effect of sliding webpage*/
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);
});


/*Slideshow effect*/
document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.carousel');
   var instances = M.Carousel.init(elems);
 });

 var instance = M.Carousel.init({
fullWidth: true,
indicators: true
});




/*start user registration slider*/
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

/*user registration slider end*/

/*login user*/

function login_user(){
  console.log("called login_user function");
  var form = document.getElementById("login");
  form.style.display="block";
  form = document.getElementById("register");
  form.style.display="none";
}

/*register user*/

function register_user(){
  console.log("called register_user function");
  var form = document.getElementById("login");
  form.style.display="none";
  form = document.getElementById("register");
  form.style.display="block";
}

/*side nav bar*/

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
