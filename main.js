const Top = document.querySelector(".top");
window.addEventListener("scroll", function(){
    const x = this.pageYOffset;
    // console.log(x) 
    if(x>100){Top.classList.add("active")}
    else{Top.classList.remove("active")}
})

const menuTitle = document.querySelector(".manga-title");
menuTitle.addEventListener("click",(x) => {
        if (x.target.classList.contains("that-btn")) {
            const Target = x.target.getAttribute("data-title");
            // console.log(Target); 
            menuTitle.querySelector(".active").classList.remove("active");
            x.target.classList.add("active");
            const menuItem = document.querySelector(".about-that");
            menuItem.querySelector(".items-content.active").classList.remove("active");
            menuItem.querySelector(Target).classList.add("active");
        }
 })

 