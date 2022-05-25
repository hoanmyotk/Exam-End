const Top = document.querySelector(".top");
window.addEventListener("scroll", function(){
    const x = this.pageYOffset;
    console.log(x);
    if(x>80){Top.classList.add("active")}
    else{Top.classList.remove("active")}
} )

