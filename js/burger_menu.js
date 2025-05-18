function openBurger(burgerElement) {
    const menu = document.getElementById("bm");

    if (menu.classList.contains("close")){
        menu.classList.remove("close");
        menu.classList.add("open");
        burgerElement.classList.add("active");
        menu.style.display = "block";
    }
    else{
        menu.classList.remove("open");
        menu.classList.add("close");
        burgerElement.classList.remove("active");
        setTimeout(() => {
            menu.style.display = "none";
        }, 500);
        
    }
    
}

function closeBurger() {
    const burger = document.querySelector(".burger");
    const menu = document.getElementById("bm");
    const body = document.body;

    burger.classList.remove("active");
    menu.classList.remove("burger-menu-open");
    menu.classList.add("burger-menu-close");
    body.style.overflowY = "scroll"; // réactive le scroll

    open = false;
}
