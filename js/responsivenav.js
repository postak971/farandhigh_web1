function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "main_nav_right") {
      x.className += " responsivee";
    } else {
      x.className = "main_nav_right";
    }
  }