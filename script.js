// let parallax_div=document.getElementsById("forParallax")
let parallax_div=document.getElementsByClassName("carousel-item")

window.addEventListener('load', function(){
    window.addEventListener('scroll',()=>{
        document.querySelector('nav').classList.toggle('my_window-scroll',window.scrollY>0);
    }) 
    
})
window.addEventListener('scroll',function(){
    let offset=window.pageYOffset;
    console.log("Offset"+offset)
    
    parallax_div.array.forEach(div => {
        div.style.backgroundPositionY=offset*.7+"px";
    });
        
    
})