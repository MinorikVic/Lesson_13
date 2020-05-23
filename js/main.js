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
    const allForms = ['.modal__form', '.control__form', '.footer__form'];
    $.each(allForms, function (index, value){
        $(value).validate({
            errorClass: "invalid",
            rules: {
                userName: {
                    required: true,
                    minlength: 2,
                    maxlength: 15
                },
                userPhone: "required",
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
                },
                submitHandler: function(form) {
                    $.ajax({
                        type: "POST",
                        url: "send.php",
                        data: $(form).serialize(),
                        success: function (response) {
                            alert('Форма отправлена, мы свяжемя c вами через 10 минут');
                            $(form)[0].reset();
                            modal.removeClass('modal--visible');
                        },
                        erorr: function (response) {
                            console.erorr('Ошибка запроса ' + response);
                        }
                    });
                  }
              }
    })
    });

    //маска для телефона

    $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7 (___) ___-__-__"});
});