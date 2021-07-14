const navbarItens = document.querySelectorAll(".navitens");
const dropdownLists = document.querySelectorAll(".dropdown-list");
let navbarItem1 = navbarItens[0];
let navbarItem2 = navbarItens[1];
let navbarItem3 = navbarItens[2];

navbarItem1.addEventListener("mouseover", () => {
    dropdownLists[0].classList.remove("hidden");
})
navbarItem1.addEventListener("mouseout", () => {
    dropdownLists[0].classList.add("hidden");
})
navbarItem2.addEventListener("mouseover", () => {
    dropdownLists[1].classList.remove("hidden");
})
navbarItem2.addEventListener("mouseout", () => {
    dropdownLists[1].classList.add("hidden");
})

navbarItem3.addEventListener("mouseover", () => {
    dropdownLists[2].classList.remove("hidden");
})
navbarItem3.addEventListener("mouseout", () => {
    dropdownLists[2].classList.add("hidden");
})


