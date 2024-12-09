$(document).ready(function () {
  // MODAL
  var modalText = {
    bakeryManagement: {
      title: 'Bakery Management System',
      tag: 'BAKERY ITEMS PLATFORM.',
      detail:
        'The Bakery Management System is a desktop application that automates bakery operations. It streamlines inventory, sales, customer management, and order tracking for increased productivity and customer satisfaction.',
      link: 'https://github.com/jha-aditya14/Bakery-Management-System'
    },
    management: {
      title: 'Advanced Student Database Management System',
      tag: 'MANAGEMENT SYSTEM PLATFORM.',
      detail:
        'The Advanced Student Management System is a software application that allows educational institutions to manage student information efficiently. It provides features for adding, updating, and retrieving student records, as well as generating reports and performing various administrative tasks.',
      link: 'https://github.com/jha-aditya14/Advanced-Student-Management-System'
    },
    keylogger: {
      title: 'Keylogger',
      tag: 'USER SYSTEM MONITORING.',
      detail:
        'This repository contains a Keylogger Desktop Application developed by Aditya Jha. The application is designed to record and monitor keystrokes on a computer, providing a useful tool for various purposes, such as parental control, employee monitoring, or personal usage.',
      link: 'https://github.com/jha-aditya14/Keylogger'
    },
    bulkEmailSender: {
      title: 'Bulk Email Sender',
      tag: 'EMAIL SENDER .',
      detail:
        'Bulk Email Sender 1.0 is a user-friendly desktop application for sending emails in bulk. It enables seamless sending of emails with attachments to numerous recipients without limitations. Ideal for announcements, newsletters, and promotional materials, it offers a convenient solution.',
      link: 'https://github.com/jha-aditya14/Bulk-Email-Sender'
    },
    blog: {
      title: 'BlogSite',
      tag: 'CREATE BLOGS.',
      detail:
        'Social Blog App is a web application that allows users to create and share their blog posts with a community of like-minded individuals. It provides a platform for users to express their thoughts, ideas, and experiences through written content and engage in discussions with other users.',
      link: 'https://social-blog-prototype.onrender.com/'
    }
  };

  $('#gallery .button').on('click', function () {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 900,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function () {
    shiftSlide(-1);
  });
  $('#prev').click(function () {
    shiftSlide(1);
  });

  carousel.on('mousedown', function () {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function () {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function () {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function (index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
