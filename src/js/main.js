! function(n) {
  'use strict';
  n.fn.idle = function(e) {
    var t, i, o = {
        idle: 6e4,
        events: 'mousemove keydown mousedown touchstart',
        onIdle: function() {},
        onActive: function() {},
        onHide: function() {},
        onShow: function() {},
        keepTracking: !0,
        startAtIdle: !1,
        recurIdleCall: !1
      },
      c = e.startAtIdle || !1,
      d = !e.startAtIdle || !0,
      l = n.extend({}, o, e),
      u = null;
    return n(this).on('idle:stop', {}, function() {
      n(this).off(l.events), l.keepTracking = !1, t(u, l)
    }), t = function(n, e) {
      return c && (e.onActive.call(), c = !1), clearTimeout(n), e.keepTracking ? i(e) : void 0
    }, i = function(n) {
      var e, t = n.recurIdleCall ? setInterval : setTimeout;
      return e = t(function() {
        c = !0, n.onIdle.call()
      }, n.idle)
    }, this.each(function() {
      u = i(l), n(this).on(l.events, function() {
        u = t(u, l)
      }), (l.onShow || l.onHide) && n(document).on('visibilitychange webkitvisibilitychange mozvisibilitychange msvisibilitychange', function() {
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? d && (d = !1, l.onHide.call()) : d || (d = !0, l.onShow.call())
      })
    })
  }
}(jQuery);

'use strict';
$(document).ready(function() {

  var videoBanner = document.getElementById('videoBanner');
  videoBanner.currentTime = 0;

  $('.play-bt').click(function() {
    videoBanner.currentTime = 0;
    // $('#videoBanner').prop('muted', !1);
    videoBanner.play();
  });

  $('.stop-bt').click(function() {
    // $('#videoBanner').prop('muted', !0);
    videoBanner.pause();
    videoBanner.currentTime = 0;
    $('.videoFrame').removeClass('show');
  });

  function videoShow() {
    $(document).idle({
      onIdle: function() {
        $('.play-bt').click();
        $('.videoFrame').addClass('show');
        // videoHide();
      },
      idle: 1800
    });
  }

  // function videoHide() {
  //   setTimeout(function () {$('.stop-bt').click();}, 5000);
  // }

  videoShow();

  function menuOnOff() {
    $('.overlay, .overlay .popup__menu').toggleClass('show')
  }
  $('.popup.banner').each(function() {
    if ($('overlay').hasClass('fixed')) {
      $('.overlay, .overlay .banner').addClass('show')
    }
  });
  $('.popup.banner .close').click(function() {
    $('.overlay').removeClass('fixed');
    $('.overlay, .overlay .banner').removeClass('show')
  });
  $('.popup.qrinfo .close').click(function() {
    $('.overlay, .overlay .qrinfo').removeClass('show')
  });
  $('.content.scroll').mCustomScrollbar({
    theme: 'customThm',
    scrollButtons: {
      enable: !0
    },
    setTop: 0,
    callbacks: {
      onScrollStart: function() {
        $('.navigation__link.mCSB_buttonUp,.navigation__link.mCSB_buttonDown').css('opacity', '1')
      },
      onTotalScroll: function() {
        $('.navigation__link.mCSB_buttonDown').css('opacity', '.2')
      },
      onTotalScrollBack: function() {
        $('.navigation__link.mCSB_buttonUp').css('opacity', '.2')
      }
    }
  });

  function eachScroller() {
    $('.content.scroll').each(function() {
      if ($('.content.scroll').hasClass('mCS_no_scrollbar')) {
        $('.navigation .scroller').hide()
      } else {
        $('.navigation .scroller').show()
      }
    })
  }
  $('nav a').click(function(e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = '#' + $this.parents('nav').data('group'),
      others = $this.closest('nav').children('a'),
      target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $('.content.scroll').mCustomScrollbar('scrollTo', target)
  })
  $('#products > div').hide();
  $('#products > div:first-of-type').show();
  $('.information__products__links a').click(function(e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = '#' + $this.parents('.information__products__links').data('products'),
      others = $this.closest('.information__products__links').children('a'),
      target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
    $('.information__products__products__view__container').mCustomScrollbar('update');
    $('.information__products__products__view__container').mCustomScrollbar('scrollTo', 'top', {
      scrollInertia: 200
    })
  })
  $('.information__products__links__container').mCustomScrollbar({
    theme: 'thumbThm',
    axis: 'x',
    mouseWheel: {
      axis: 'x'
    },
    advanced: {
      updateOnContentResize: !0
    }
  });
  $(' .information__products__products__view__container').mCustomScrollbar({
    theme: 'productsThm',
    axis: 'x',
    mouseWheel: {
      axis: 'x'
    },
    advanced: {
      updateOnContentResize: !0
    }
  });
  setTimeout(function() {
    eachScroller()
  }, 100);
  $(document).on('touchstart', '.navigation__link.mCSB_buttonDown', function() {
    $('.content.scroll').mCustomScrollbar('scrollTo', 'bottom', {
      scrollInertia: 10000
    })
  });
  $(document).on('mousedown', '.navigation__link.mCSB_buttonDown', function() {
    $('.content.scroll').mCustomScrollbar('scrollTo', 'bottom', {
      scrollInertia: 10000
    })
  });
  $(document).on('touchstart', '.navigation__link.mCSB_buttonUp', function() {
    $('.content.scroll').mCustomScrollbar('scrollTo', 'top', {
      scrollInertia: 10000
    })
  });
  $(document).on('mousedown', '.navigation__link.mCSB_buttonUp', function() {
    $('.content.scroll').mCustomScrollbar('scrollTo', 'top', {
      scrollInertia: 10000
    })
  });
  $(document).on('touchend', '.navigation__link.mCSB_buttonDown', function() {
    $('.content.scroll').mCustomScrollbar('stop');
    return !1
  });
  $(document).on('mouseup', '.navigation__link.mCSB_buttonDown', function() {
    $('.content.scroll').mCustomScrollbar('stop');
    return !1
  });
  $(document).on('touchend', '.navigation__link.mCSB_buttonUp', function() {
    $('.content.scroll').mCustomScrollbar('stop');
    return !1
  });
  $(document).on('mouseup', '.navigation__link.mCSB_buttonUp', function() {
    $('.content.scroll').mCustomScrollbar('stop');
    return !1
  });
  $('.onkoslider, .prenancyslider').slick({
    slideToShow: 1,
    slideToScroll: 1,
    arrows: !0,
    dots: !1,
    fade: !1,
    lazyLoad: 'ondemand',
    infinite: !1,
    pauseOnDotsHover: !0,
    autoplay: !1,
    speed: 100,
    prevArrow: '<div class="arrow prev"><i class="icofont-circled-left"></i></div>',
    nextArrow: '<div class="arrow next"><i class="icofont-circled-right"></i></div>',
  });

  function videoClose() {
    $('.popup.video.show .close').click(function() {
      console.log('br')
    })
  }
})
