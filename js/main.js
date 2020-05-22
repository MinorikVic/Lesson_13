/*document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });
    
    closeBtn.addEventListener('click', switchModal);
});
*/
$(document).ready(function () {
    var modal =$('.modal'),
        modalBtn =$('[data-toggle=modal]'),
        closeBtn =$('.modal__close');
    
    modalBtn.on('click',function(){
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click',function(){
        modal.toggleClass('modal--visible');
    });

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
      })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 25 + bullets.width() + 25)
    bullets.css('left', prev.width() + 25)

    new WOW().init();

    //Валидация формы

    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            // compound rule
            userEmail: {
              required: true,
              email: true
            }
          },
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Не менее 2 букв",
                maxlength: "Не более 15 букв"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
              required: "Обязательно укажите email",
              email: "Введите корректный email"
            }
          }
    });

    //маска для телефона

    $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7 (___) ___-__-__"});
});