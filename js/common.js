
//*スクロールしていくとheaderのお問い合わせボタンが小さくなる-------------------------------------------------------------------------------------------
$(function () {
    let _height = window.innerHeight;//*window.innerHeightプロパティを使用してvhを取得
    let b_height = $('body').height();//*jQueryのheight関数を使用してbody要素の高さを取得

    $(window).on('scroll', function () {//*ウィンドウがスクロールするたびに実行される関数
        if ($(window).scrollTop() < _height * 0.5) {//:スクロール位置がvhの半分未満だった場合
            $('body').removeClass('scrolled');//*bodyから"scrolled"クラスを除外する
        } else {//*そうでない場合
            $('body').addClass('scrolled');//*bodyに"scrolled"クラスを追加する
        }//*HTMLのto-topに対してopacityが効くかどうかを分岐させている
        if ($(window).scrollTop() > b_height - _height * 1.5) {
            $('body').addClass('scroll_end');
        } else {
            $('body').removeClass('scroll_end');
        }
    });
});

//*----footerのtopボタンを押すと最上部にスムーズに移動する-----------------------------
$(function () {
    $('a[href*="#"]').on('click', function () {//*<a>のhref="#"をクリックした際の定義をする
        var hash = this.hash;//*変数hashにはそのクリックしたタグのhrefの属性値を代入する
        if (!hash || hash == '#') {//*hashがfalsyな場合またはhashが"#"であった場合
            return false;//*falseを返します
        }
        var offset = $(hash).offset();//*offsetメソッドは選択された要素の現在の座標を取得するので、変数offsetにクリックした要素の座標を代入している
        if (!offset) {//*もし代入された値がfalsyな値であった場合
            return true;//*この関数の実行を終了する
        }

        var menu_height = 0;//*変数menu_heightに0を代入する

        $('body,html').animate({ scrollTop: offset.top - menu_height }, 800);
        return false;
    });
});


//*---スマホ版のハンバーガーメニュー表示---------

$(window).on('load', function () {
    $('body').removeClass('nav_op');
});

let state = false;
var scrollpos;
$('.header-humberger-menu').on('click', function () {
    //    $('body').toggleClass('nav_op');
    // $(this).toggleClass('open');
    if (state == false) {
        scrollpos = $(window).scrollTop();//*--.scrollTopは現在のウィンドウのスクロール垂直位置を取得するメソッド
        $('body').addClass('nav_op').css({ top: -scrollpos });
        state = true;
    } else {
        $('body').removeClass('nav_op').css({ top: 0 });
        window.scrollTo(0, scrollpos);
        state = false;
    }
});




//----スライダーに関する設定---------
const $slide = $(".change-slides")
  .slick({
    fade: true,    // fedeオン
    speed: 1500,   // 画像切り替えにかかる時間（ミリ秒）
    autoplaySpeed: 3000,   // 自動スライド切り替え速度
    arrows: false,         // 矢印表示・非表示
    autoplay: true,        // 自動再生
    slidesToShow: 1,       // スライド表示数
    slidesToScroll: 1,     // スライドする数
    infinite: true         // 無限リピート オン・オフ
  })
  .on({
    beforeChange: function(event, slick, currentSlide, nextSlide) {
        $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
        $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
    },
    afterChange: function() {
        $(".preve-slide", this).removeClass("preve-slide slide-animation");
    }
  });
$slide.find(".slick-slide").eq(0).addClass("slide-animation");


//--------------------アコーディオンメニューの設定------------------------

$(function(){//slide toggleを使ってみる
    if('ontouchstart' in window) {
        $('.header-wrapper-menu-button').on('click',function(){
            $(this).toggleClass('open');
            $(this).parent().find('.header-nav__listLv2').slideToggle();
            $(this).parent().find('.header-nav__listLv2').addClass("hidden-list_open");
        });
    }
});