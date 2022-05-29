'use strict';

function catalog({btnForward, btnBack, content, list, contentActive, listtActive, cards, tabActive, tab, cardsActive}) {

    function tabChoose() {
        document.querySelectorAll(tab).forEach((item,i) => {
            item.addEventListener('click', () => {
                document.querySelectorAll(tab).forEach(item => item.classList.remove(tabActive));
                item.classList.add(tabActive);  
                document.querySelectorAll(cards).forEach(item => item.classList.remove(cardsActive));
                document.querySelectorAll(cards)[i].classList.add(cardsActive);  
                document.querySelectorAll(content).forEach(item => item.classList.add(contentActive));
                document.querySelectorAll(list).forEach(item => item.classList.remove(listtActive));
            });
    });
}


function fowardBack(link) {
    document.querySelectorAll(link).forEach((item,i) => {
        item.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelectorAll(content)[i].classList.toggle(contentActive);
        document.querySelectorAll(list)[i].classList.toggle(listtActive);
    });
    });
}

fowardBack(btnForward);
fowardBack(btnBack);
tabChoose();

}

export default catalog;


