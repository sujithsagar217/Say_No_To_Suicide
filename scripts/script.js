/*start user registration slider*/
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });
  console.log("hello");

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
