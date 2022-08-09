"use strict"

let isMenuActive = false
const menu = document.querySelector(".header__menu")
const body = document.querySelector("body")

const toggleMenu = () => {
    if (isMenuActive) {
        menu.classList.remove("active")
        body.classList.remove("locked")
        isMenuActive = false
    } else {
        menu.classList.add("active")
        body.classList.add("locked")
        isMenuActive = true
    }
}

