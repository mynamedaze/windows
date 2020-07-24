'use strict';
$(document).ready(function () {
  /* объявляем общие переменные */
  var popupCallback = document.getElementsByClassName('popup-callback');
  var popupCallbackCloseBtn = document.getElementsByClassName('popup-callback__close-btn');

  var popupSuccess = document.getElementsByClassName('popup-success');
  var popupSuccessCloseBtn = document.getElementsByClassName('popup-success__close-btn');

  var overlay = document.getElementsByClassName('overlay');

  var popupCallbackInputPhone = document.getElementById('popup-callback-input-phone');

  var orderInputName = document.getElementById('order-input-name');
  var orderInputPhone = document.getElementById('order-input-phone');

  var toughInputName = document.getElementById('tough-input-name');
  var toughInputPhone = document.getElementById('tough-input-phone');
  /* */
  /*Плавный скролл*/
  $(function () {
    $('a[href^="#"]').on('click', function (event) {
      // отменяем стандартное действие
      event.preventDefault();

      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      /*
       * sc - в переменную заносим информацию о том, к какому блоку надо перейти
       * dn - определяем положение блока на странице
       */

      $('html, body').animate({
        scrollTop: dn
      }, 1000);

      /*
       * 1000 скорость перехода в миллисекундах
       */
    });
  });
  /* */
  /*валидация форм*/
  $(popupCallbackInputPhone).inputmask("+9 (999) 999-9999"); //specifying options
  $(orderInputPhone).inputmask("+9 (999) 999-9999"); //specifying options
  $(toughInputPhone).inputmask("+9 (999) 999-9999"); //specifying options
  /* */
  /*объявляем функции открытия и закрытия попапа */
  function openPopup(button, popup) {
    $(button).click(function () {
      $(overlay).fadeIn(300);
      setTimeout(function () {
        $(popup).fadeIn(300);
      }, 300);
    });
  };

  function closePopup(closeBtn, popup) {
    $(closeBtn).click(function () {
      $(popup).fadeOut(300);
      setTimeout(function () {
        $(overlay).fadeOut(300);
      }, 300);
    });
  };
  /* */
  /* открытие и закрытие главного попапа */
  var pageHeaderCallbackBtn = document.getElementsByClassName('page-header__callback-btn');
  var contactsCallbackBtn = document.getElementsByClassName('contacts__callback-btn');
  var pageHeaderCallbackBtnMobile = document.getElementsByClassName('page-header__callback-btn-mobile');

  openPopup(pageHeaderCallbackBtn, popupCallback);
  openPopup(contactsCallbackBtn, popupCallback);
  openPopup(pageHeaderCallbackBtnMobile, popupCallback);

  closePopup(popupCallbackCloseBtn, popupCallback);
  closePopup(popupSuccessCloseBtn, popupSuccess);
  /* */
  /* слайдер utp */
  $("#utp-list-m").owlCarousel({
    responsive: {
      0: {
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 7000
      }
    }
  });
  /* */
  /* слайдер objects */
  $("#objects-list").owlCarousel({
    responsive: {
      0: {
        items: 1,
        margin: 20,
        loop: true,
        autoWidth: true,
        dots: false
      },
      768: {
        items: 1,
        margin: 20,
        loop: true,
        autoWidth: true,
        dots: false,
        nav: true
      },
      1366: {
        items: 1,
        margin: 30,
        loop: true,
        autoWidth: true,
        dots: false,
        nav: true
      }
    }
  });
  /* */
  /* переключаем описания УТП для планшетов + */
  var utpItemTableTablet = document.getElementsByClassName('utp__item-table--tablet');
  utpItemTableTablet = Array.prototype.slice.call(utpItemTableTablet);

  var utpDesitem = document.getElementsByClassName('utp__desitem');
  utpDesitem = Array.prototype.slice.call(utpDesitem);

  utpItemTableTablet.forEach(function (element, i) {
    $(element).click(function () {
      $(utpItemTableTablet).removeClass('utp__item-table--tablet-active');
      $(utpItemTableTablet[i]).addClass('utp__item-table--tablet-active');
      $(utpDesitem).fadeOut(300);
      setTimeout(function () {
        $(utpDesitem[i]).fadeIn(300);
      }, 300);
    });
  });
  /* */
  /* слайдер specs для мобильных устройств */
  $("#specs-list-mobile").owlCarousel({
    responsive: {
      0: {
        items: 1,
        loop: true,
        dots: true,
        nav: true
      }
    }
  });
  /* */
  /* слайдер feedback для мобильных устройств */
  $("#feedback-list").owlCarousel({
    responsive: {
      0: {
        items: 1,
        loop: true,
        dots: true,
        nav: false
      },
      768: {
        items: 2,
        margin: 7,
        loop: true,
        dots: true,
        nav: false
      },
      1366: {
        items: 2,
        margin: 30,
        loop: true,
        dots: true,
        nav: false
      }
    }
  });
  /* */
  /* переключение в "любые цвета" */
  var specsNavBtnColors = document.getElementsByClassName('specs__nav-btn--colors');
  specsNavBtnColors = Array.prototype.slice.call(specsNavBtnColors);

  var specsUtpListColors = document.getElementsByClassName('specs__utp-list--colors');
  specsUtpListColors = Array.prototype.slice.call(specsUtpListColors);

  specsNavBtnColors.forEach(function (element, i) {
    $(element).click(function () {
      $(specsUtpListColors).addClass('disable');
      $(specsUtpListColors[i]).removeClass('disable');
      $(specsNavBtnColors).removeClass('specs__nav-btn--active');
      $(specsNavBtnColors[i]).addClass('specs__nav-btn--active');
    });
  });
  /* */
  /* отправка main форм */
  var popupCallbackForm = $('#popup-callback-form');

  popupCallbackForm.submit(function (ev) {
    $.ajax({
      type: popupCallbackForm.attr('method'),
      url: popupCallbackForm.attr('action'),
      data: popupCallbackForm.serialize(),
      success: function (data) {
        $(popupCallback).fadeOut(300);
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
        $(popupCallbackInputPhone).val('');
        yaCounter40471620.reachGoal('form-common-submit');
        yaCounter40471620.reachGoal('form-aluminium-submit');
      }
    });
    ev.preventDefault();
  });
  /* */
  /* отправка order форм */
  var orderForm = $('#order-form');

  orderForm.submit(function (ev) {
    $.ajax({
      type: orderForm.attr('method'),
      url: orderForm.attr('action'),
      data: orderForm.serialize(),
      success: function (data) {
        $(overlay).fadeIn(300);
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
          $(orderInputName).val('');
          $(orderInputPhone).val('');
        }, 300);
        yaCounter40471620.reachGoal('form-common-submit');
        yaCounter40471620.reachGoal('form-aluminium-submit');
      }
    });
    ev.preventDefault();
  });
  /* */
  /* отправка tough форм */
  var toughForm = $('#tough-form');

  toughForm.submit(function (ev) {
    $.ajax({
      type: toughForm.attr('method'),
      url: toughForm.attr('action'),
      data: toughForm.serialize(),
      success: function (data) {
        $(overlay).fadeIn(300);
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
          $(toughInputName).val('');
          $(toughInputPhone).val('');
        }, 300);
        yaCounter40471620.reachGoal('form-common-submit');
        yaCounter40471620.reachGoal('form-aluminium-submit');
      }
    });
    ev.preventDefault();
  });
  /* */
});