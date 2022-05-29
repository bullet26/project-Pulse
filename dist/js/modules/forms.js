'use strict';

import{closeModal} from './modal';
import{openModal} from './modal';

function forms({formSelector, modalThanks, modalSelectorConsultation, modalSelectorOrder, modalError}) {

    function validateForms(formSelector) {
        $(formSelector).validate({
            rules: {
                name: {
                required: true,
                minlength: 2
            },
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста введите своё имя",
                    minlength: jQuery.validator.format("Хотя бы {0} символа")
                  },
                phone: "Пожалуйста введите свой номер телефона",
                email: {
                  required: "Пожалуйста введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
              }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+38 (999) 999-9999");



    function sendDataToMail(form) {
      fetch("mailer/smart.php", {
        method: "POST",
        body: new FormData(form) 
    })
    .then(res => {
      if (res.status >=200 && res.status < 300) {return res;}
      else {
        throw new Error("Форма не была отправлена");
      }
    })
      .then(data => {
        console.log('Form send');
        console.log(data);
        setTimeout(() => {
          closeModal(modalSelectorOrder);
          closeModal(modalSelectorConsultation);
          openModal(modalThanks);
        },1000);  
        setTimeout(() => {closeModal(modalThanks);},3000);        
      })
      .catch(() => {
        closeModal(modalSelectorOrder);
        closeModal(modalSelectorConsultation);
        openModal(modalError);
        setTimeout(() => {closeModal(modalError);},2000);   
    }) 
      .finally(() => {
        form.reset();
      });
    }    
    document.querySelectorAll(formSelector).forEach(item => {
        item.addEventListener('submit', (event) => {
          event.preventDefault();

          let arr = [];
          item.querySelectorAll('input').forEach(input => arr.push(input.value));
         
          if (arr.some(i => i == '')) {
            console.log('Form didn`t send');
            return;
          } else {
            sendDataToMail(item);
          }
      
        });
    });

}
export default forms;