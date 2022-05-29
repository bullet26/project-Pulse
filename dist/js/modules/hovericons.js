'use strict';
let img = ["icons/facebookHover.png", "icons/instagramHover.png", "icons/pinterestHover.png"];
let imgOld = ["icons/facebook.svg", "icons/instagram.svg", "icons/pinterest.svg"];

function hoverIcons(selector) {

    function mouseover () {   
        document.querySelectorAll(selector).forEach((item,i) => {
        item.addEventListener('mouseover', () => {
            item.firstElementChild.src = img[i];
        });
    }); 
}

function mouseout () {   
    document.querySelectorAll(selector).forEach((item,i) => {
    item.addEventListener('mouseout' || 'touchleave' || 'touchend', () => {
        item.firstElementChild.src = imgOld[i];
    });
}); 
}

mouseover();
mouseout();

}

export default hoverIcons;