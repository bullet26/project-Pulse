function openModal(modalSelector) {
    document.querySelector(modalSelector).style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

function closeModal(modalSelector) {
    document.querySelector(modalSelector).style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}

function modal({triggerSelectorConsultation, triggerSelectorOrder, modalSelectorConsultation, 
    modalSelectorOrder, modalClose}) {

    function openByClick(modalSelector, triggerSelector) {
        document.querySelectorAll(triggerSelector).forEach(item => {
            item.addEventListener('click', () => openModal(modalSelector));
        });
    }

    openByClick(modalSelectorConsultation, triggerSelectorConsultation);
    openByClick(modalSelectorOrder, triggerSelectorOrder);
    
        document.querySelectorAll(modalClose).forEach(item => {
            item.addEventListener('click', () => {
            closeModal(modalSelectorOrder);
            closeModal(modalSelectorConsultation);

        });
        });
    
        //  закрыть окно по клику на подложку
        document.querySelector('.overlay').addEventListener('click', (event) => {
            if (event.target === document.querySelector('.overlay')) {
                closeModal((modalSelectorOrder));
                closeModal((modalSelectorConsultation));
            }
        });
    

        document.querySelectorAll(triggerSelectorOrder).forEach((item, i) => {
            item.addEventListener('click', () => {
                let name = document.querySelectorAll('.catalog-item__subtitle');
                document.querySelector(modalSelectorOrder).
                querySelector('.modal__descr').textContent= name[i].textContent;
                
            });
        });

}

export default modal;
export {openModal};
export {closeModal};