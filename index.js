const scrollBtn = document.getElementById('scrollBtn');

window.addEventListener('scroll',()=>{
    scrollFunction();
});

function scrollFunction() {
    if(window.scrollY > 20){
        scrollBtn.style.display = 'block'
    }else{
        scrollBtn.style.display = 'none'
    }
}

scrollBtn.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});