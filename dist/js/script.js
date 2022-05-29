require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import forms from '../js/modules/forms';
import slider from '../js/modules/slider';
import catalog from '../js/modules/catalog';
import hoverIcons from '../js/modules/hovericons';
import modal from '../js/modules/modal';
import pageup from '../js/modules/pageup';

document.addEventListener('DOMContentLoaded', () => {
    forms({
        formSelector: 'form',
        modalThanks: '#thanks',
        modalSelectorConsultation: '#consultation', 
        modalSelectorOrder: '#order',
        modalError: '#error'
    });
    slider({
        nextArrow: '.arrow_next',
        prevArrow: '.arrow_prev',
        wrapper: '.carousel_wrapper',
        slide: '.slider_item',
        field: '.carousel__inner'
});
catalog({
    btnForward: '.catalog-item__link',
    btnBack: '.catalog-item__link-back',
    content: '.catalog-item__content',
    list: '.catalog-item__list',
    listtActive: 'catalog-item__list_active',
    contentActive: 'catalog-item__content_active',
    cards: '.catalog__content',
    cardsActive: 'catalog__content_active',
    tab: '.catalog__tab',
    tabActive: 'catalog__tab_active'
});

hoverIcons('.footer_social-item');


modal({
    triggerSelectorConsultation: '.button__cons', 
    triggerSelectorOrder: '.button__order', 
    modalSelectorConsultation: '#consultation', 
    modalSelectorOrder: '#order',
    modalClose: '.modal__close'
});

pageup();

new WOW().init();

});

