function esconder(){
    let bar = window.scrollY;
    console.log(bar)
    if(bar >= window.innerHeight){
        document.querySelector('.scrollbutton').style.display = 'block'
    }
    else{
        document.querySelector('.scrollbutton').style.display = 'none'
    }
}
window.addEventListener('scroll', function(){
    esconder();
})

function subirtela() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

