// Activate Scroll
$("body").niceScroll({}); 

// Activate AOS
AOS.init();

menuClick = document.querySelector('div.icon')
menu = document.querySelector('div.menu')
menuClick.addEventListener('click',()=>{
    menu.classList.toggle('active')
})