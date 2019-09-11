// Activate Scroll
$("body").niceScroll({}); 

// Activate AOS
AOS.init();

menuClick = document.querySelector('div.icon')
menu = document.querySelector('div.menu')
menuClick.addEventListener('click',()=>{
    menu.classList.toggle('active')
    menuClick.classList.toggle('active')
})

blackMenu = document.querySelector('div.menu')
blackMenu.addEventListener('click',()=>{
    blackMenu.classList.toggle('active')
})


// Scroll To
$('nav ul li:nth-child(2)').click(()=>{
    $([document.documentElement, document.body]).animate({
        scrollTop: $("main").offset().top
    }, 500);
})

$('div.menu ul li:nth-child(2)').click(()=>{
    $([document.documentElement, document.body]).animate({
        scrollTop: $("main").offset().top
    }, 500);
})

$('nav ul li:nth-child(3)').click(()=>{
    $([document.documentElement, document.body]).animate({
        scrollTop: $("aside").offset().top
    }, 1500);
})
$('div.menu ul li:nth-child(3)').click(()=>{
    $([document.documentElement, document.body]).animate({
        scrollTop: $("aside").offset().top
    }, 1500);
})


$('nav ul li:nth-child(4)').click(()=>{
    $([document.documentElement, document.body]).animate({
        scrollTop: $("article").offset().top
    }, 2500);
})
$('div.menu ul li:nth-child(4)').click(()=>{
    $([document.documentElement, document.body]).animate({
        scrollTop: $("article").offset().top
    }, 2500);
})
