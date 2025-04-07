"use strict"
function show_navMenu(show = false){
    navMenu.style.display = show ? 'block' : 'none'
}
function checkMediaQuery(query){
    return window.matchMedia(query).matches;
  }
function show_div(aux){
    const MINWIDTH = 600
    features_bookmark.style.display = 'none'
    features_search.style.display = 'none'
    features_share.style.display = 'none'
    let isDesktop = checkMediaQuery(`(min-width: ${MINWIDTH}px)`)
    aux.style.display = isDesktop ? 'flex' : 'block'
}
