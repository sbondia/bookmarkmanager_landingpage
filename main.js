"use strict"
function show_navMenu(show = false){
    navMenu.style.display = show ? 'block' : 'none'
}
function checkMediaQuery(query) {
    return window.matchMedia(query).matches;
  }
function show_div(aux){
    features_bookmark.style.display = 'none'
    features_search.style.display = 'none'
    features_share.style.display = 'none'
    // si pongo un "block" funciona en movil, para desktop necesito "flex"
    // lo suyo seria un mediaquery en js para alternar
    aux.style.display = 'block'
}
