function toggle(){
  var x = document.getElementById("toggle");
  if(x.className == "titlec hide"){
     x.className = "titlec";
  }
  else{
     x.className = "titlec hide";
  }
  return 0;
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activ");
    var panel = this.nextElementSibling;
    var hei = panel.style.maxHeight;
    hei? hei = null : hei = panel.scrollHeight + "px";
    }
  });
}
