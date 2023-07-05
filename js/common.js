
//*スクロールしていくとheaderのお問い合わせボタンが小さくなる-------------------------------------------------------------------------------------------
$(function () {
    var _height = window.innerHeight;//*window.innerHeightプロパティを使用してvhを取得
    var b_height = $('body').height();//*jQueryのheight関数を使用してbody要素の高さを取得
  
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