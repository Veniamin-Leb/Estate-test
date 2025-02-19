document.addEventListener("DOMContentLoaded", function () {
    const navBlocks = document.querySelectorAll(".right_nav_mob .nav_block p");

    navBlocks.forEach((block) => {
        block.addEventListener("click", function () {
            const links = this.nextElementSibling;
            if (links) {
                links.classList.toggle("open");
                this.classList.toggle("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuItem = document.querySelector(".header_nav > a:first-child"); 
    const submenu = document.querySelector(".nav_submenu");

    
    function openSubmenu() {
        submenu.classList.add("open");
        menuItem.classList.add("active");
    }

    
    function closeSubmenu() {
        submenu.classList.remove("open");
        menuItem.classList.remove("active");
    }

    
    menuItem.addEventListener("click", function (e) {
        e.preventDefault();
        submenu.classList.toggle("open");
        menuItem.classList.toggle("active");
    });

    
    menuItem.addEventListener("mouseenter", openSubmenu);
    submenu.addEventListener("mouseenter", openSubmenu);

    menuItem.addEventListener("mouseleave", function () {
        setTimeout(() => {
            if (!submenu.matches(":hover")) closeSubmenu();
        }, 300);
    });

    submenu.addEventListener("mouseleave", closeSubmenu);

    
    document.addEventListener("click", function (e) {
        if (!menuItem.contains(e.target) && !submenu.contains(e.target)) {
            closeSubmenu();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".header_menu");



    burger.addEventListener("click", function (e) {
        e.preventDefault();
        menu.classList.toggle("open");
        burger.classList.toggle("active");
    });

    closeBtn.addEventListener("click", function () {
        menu.classList.remove("open");
        burger.classList.remove("active");
    });

    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !burger.contains(e.target)) {
            menu.classList.remove("open");
            burger.classList.remove("active");
        }
    });
});

