$(document).ready(function () {
    const modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    const mySwiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });

    const next = $('.swiper-button-next');
    const prev = $('.swiper-button-prev');
    const bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 25 + bullets.width() + 25)
    bullets.css('left', prev.width() + 25);

    new WOW().init();

    //Валидация формы
    const allForms = ['.modal__form', '.control__form', '.footer__form'];
    $.each(allForms, function (index, value) {
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
                },
                userQuestion: {
                    required: true,
                    minlength: 15,
                },
                userCheckbox: "required",
            },
            messages: {
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче 2 букв",
                    maxlength: "Поле не может содеражть больше 15 символов"
                },
                userEmail: {
                    required: "Обязательно укажите email",
                    email: "Введите в формате: name@domain.com/ru"
                },
                userQuestion: {
                    required: "Поле вопрос обязательно",
                    minlength: "Не менее 15 символов",
                },
                userPhone: {
                    required: "Телефон обязателен"
                },
                userCheckbox: {
                    required: "Подтвердите согласие на обработку персональных данных"
                }
            },
            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "send.php",
                    data: $(form).serialize(),
                    success: function (response) {
                        $(form)[0].reset();
                        modal.removeClass('modal--visible');
                        const modalThanks = $('.window-thanks');
                            modalThanks.addClass('window-thanks--visible');
                        setTimeout(function(){
                            modalThanks.removeClass('window-thanks--visible');
                        }, 5000);
                    }
                });
            }
        });
    });
});

//маска для телефона

$('[type=tel]').mask('+7(000)000-00-00', {
placeholder: "Ваш номер телефона: "
});
