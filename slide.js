const imgTiems = document.querySelectorAll('.image-items')
imgTiems.forEach(imgTiems =>{
    imgTiems.addEventListener("click", function(){
        removeAll();
        imgTiems.classList.add('active');
    });
});
function removeAll(){
    imgTiems.forEach(imgTiems =>{
            imgTiems.classList.remove('active');
        });
};
