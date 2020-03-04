var biobutton = document.getElementById("Bio")
var bio = document.getElementById("bio")

var probutton = document.getElementById("Pro")
var pro = document.getElementById("pro")

var findbutton = document.getElementById("Find")
var find = document.getElementById("find")

var wrapper = document.getElementById("wrapper")

biobutton.addEventListener("click", vis);
probutton.addEventListener("click", vis);
findbutton.addEventListener("click", vis);



function vis(){
    var pageid = this.attributes["data-page"].value;
    var page = document.getElementById (pageid);
    console.log(page,pageid)
    if (page === bio){
        page.className = "";
        pro.className = "hidden";
        find.className = "hidden";
        wrapper.style.backgroundColor ="#231f20";
     
    };
    if (page === find){
        page.className = "";
        pro.className = "hidden";
        bio.className = "hidden";
        wrapper.style.backgroundColor ="#e26961";

    };
    if (page === pro){
        page.className = "";
        find.className = "hidden";
        bio.className = "hidden";
        wrapper.style.backgroundColor ="#e8e4d2";

    };
};



/* 
function show(){
    var pageid = this.attributes["data-page"].value;
    var page = document.getElementById (pageid);
    console.log(page);

    if (page.className === "hidden") {
        page.className = "";
    } else {
        page.className = "hidden";
    }
};
 */ 