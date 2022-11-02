

/* ========== toggler menu ========  */

let toggleMenuOne = document.getElementById("toggle-menu-one"),
    ulMenu = document.getElementById("ul-menu"),
    ulMenuLis_1 = document.querySelector(".close_1"),
    ulMenuLis_2 = document.querySelector(".close_2");

// show
toggleMenuOne.addEventListener("click", () => {
    ulMenu.classList.add("open");
});


// hidden
ulMenuLis_1.addEventListener("click", () => {
    ulMenu.classList.remove("open");
});

ulMenuLis_2.addEventListener("click", () => {
    ulMenu.classList.remove("open");
});

document.onscroll = function () {
    ulMenu.classList.remove("open");
}

/* ========== toggler menu ========  */


/*
==============================================
==============================================
*/

/* === start footer dateYear === */

window.addEventListener("load", ()=> {
    let dateYear = document.querySelector(".dateYear");
    let newDate = new Date();
        dateYear.innerHTML = newDate.getFullYear();
});


/* === end footer dateYear === */

/*
==============================================
==============================================
*/







