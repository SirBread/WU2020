/* About */
var leftarrow = document.getElementById("leftarrow2")
var rightarrow = document.getElementById("rightarrow2")
    var firstimg = document.getElementById("bild1")
    var secimg = document.getElementById("bild2")
    var thirdimg = document.getElementById("bild3")

leftarrow.addEventListener("click", minusSlides)
rightarrow.addEventListener("click", plusSlides)


var index = 0;
function plusSlides() {
    slideshow(index += 1);

  }
  function minusSlides() {
    slideshow(index -= 1);
  }

function slideshow(n) {
    if (index < 0){
        index = 2
    }
    if (index > 2){
        index = 0
    }

    if (index == 0){
        firstimg.className = "";
        secimg.className = "hidden";
        thirdimg.className = "hidden";
        console.log(index)
    }
    
    if (index == 1){
        firstimg.className = "hidden";
        secimg.className = "";
        thirdimg.className = "hidden";
        console.log(index)
    }    if (index == 2){
        firstimg.className = "hidden";
        secimg.className = "hidden";
        thirdimg.className = "";
        console.log(index)
    }

}