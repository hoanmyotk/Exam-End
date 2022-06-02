const Top = document.querySelector(".top");
window.addEventListener("scroll", function(){
    const x = this.pageYOffset;
    // console.log(x) 
    if(x>80){Top.classList.add("active")}
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
// $(document).ready(function(){
//     $('.eye').click(function(){
//         $(this).children('i').toggleClass('fa-eye-slash fa-eye');
//     });
// })
const formLogin = document.querySelector(".login");
const btnItem = document.querySelector(".dangki");
btnItem.addEventListener("click", function(){
    btnItem.classList.remove("active");
    formLogin.classList.add("active");
})
const eyeTitle = document.querySelector(".eye");
var Eye = document.getElementById("mat");
 eyeTitle.addEventListener("click", function(){
    //  alert('click');
    eyeTitle.classList.toggle("show");
    Eye.classList.toggle("fa-eye-slash");
    Eye.classList.toggle("fa-eye");
    if(eyeTitle.classList.contains("show")){
        document.getElementById('pass').type = 'text';    
    }
    else{
        document.getElementById('pass').type = 'password';
    }
});
var Close = document.getElementById("dong");
Close.addEventListener("click", function(){
    btnItem.classList.add("active");
    formLogin.classList.remove("active");
}) 

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myback").classList.add("active");
    } else {
            document.getElementById("myback").classList.remove("active");
    }
}
 
document.getElementById('myback').addEventListener("click", function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
});

 