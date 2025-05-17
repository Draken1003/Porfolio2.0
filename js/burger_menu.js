let open = false;

function openBurger(burgerElement) {
    burgerElement.classList.toggle("active");
    const menu = document.getElementById("bm");


    if (!open) {
        menu.classList.remove("burger-menu-open");
        menu.classList.add("burger-menu-close");
    } else {
        menu.classList.remove("burger-menu-close");
        menu.classList.add("burger-menu-open");
    }

    open = !open;
}

function closeBurger() {
    const burger = document.querySelector(".burger");
    const menu = document.getElementById("bm");

    burger.classList.remove("active");
    menu.classList.remove("burger-menu-open");
    menu.classList.add("burger-menu-close");

    open = false;
}