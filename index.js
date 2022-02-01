const root = document.documentElement;

root.addEventListener('mousemove', e => {
    root.style.setProperty('--sunDistX', -(0.03 * e.clientX) + "px");
    root.style.setProperty('--sunDistY', (0.03 * e.clientY) + "px");
    root.style.setProperty('--cloudDistX', -(0.05 * e.clientX) + "px");
    root.style.setProperty('--cloudDistY', (0.05 * e.clientY) + "px");
});

let clicked = false;

function hamburgerMenu() {
    let hamburger = document.getElementById("hamburger");
    let navBar = document.getElementById("navBar");
    let navItems = document.getElementById("navItems");
    
    if ( clicked ) {
        clicked = false;
        hamburger.classList.remove("hamburgerToggle");
        navBar.classList.remove("navBarToggle");
        navItems.classList.remove("navItemsToggle");

        //root.style.setProperty('--backgroundColor', "rgb(0, 153, 255)");
    }
    else {
        clicked = true;
        hamburger.classList.add("hamburgerToggle");
        navBar.classList.add("navBarToggle");
        navItems.classList.add("navItemsToggle");

        //root.style.setProperty('--backgroundColor', "linear-gradient(rgb(86, 209, 168), rgb(48, 131, 255))");
    }
}