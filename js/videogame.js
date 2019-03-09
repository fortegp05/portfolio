'use strict';

document.fortegp05 = document.fortegp05 ? document.fortegp05 : {}; // 未定義なら初期化

// レスポンシブ対応
const mediaQuery = matchMedia('(max-width: 580px');

$(document).ready(function(){
    // ---イベント登録
    // Riotで定義したスクロールイベントを登録する
    document.onscroll = function() {
        if (document.fortegp05.onScrollHandlerFab) document.fortegp05.onScrollHandlerFab();
        if (document.fortegp05.onScrollHandlerToc) document.fortegp05.onScrollHandlerToc();
    }
    
    // -プレイしたゲーム開閉イベント
    // 全開
    $('.fullOpen').on('click', function(){
        $('.subjects').each(function(index, elem){
            document.fortegp05.subjectsOpen(elem);
        });
    });
    // 全閉
    $('.fullClose').on('click', function(){
        $('.subjects').each(function(index, elem){
            document.fortegp05.subjectsClose(elem);
        });
    });
    // 個々の開閉
    $('.subjects').on('click', function(){
        if ($(this).hasClass('open')) {
            document.fortegp05.subjectsClose(this);
        } else {
            document.fortegp05.subjectsOpen(this);
        }
    });

    if (typeof ResizeObserver == "undefined") return;
    
    // 画面サイズが変わった際のイベント定義
    var observer = new ResizeObserver((entries) => {
        if (mediaQuery.matches) return; // レスポンシブのときはやらない
        riot.mount('toc');

        if(!document.fortegp05.onScrollHandlerToc) return;
        document.fortegp05.onScrollHandlerToc();
    });
    observer.observe(document.body);
});

// 開閉処理
document.fortegp05.subjectsOpen = function (elem) {
    $(elem).addClass('open');
    $(elem).removeClass('close');

    $(elem).next('ul').addClass('show');
    $(elem).next('ul').removeClass('elemHide');
};
document.fortegp05.subjectsClose = function (elem) {
    $(elem).removeClass('open');
    $(elem).addClass('close');

    $(elem).next('ul').removeClass('show');
    $(elem).next('ul').addClass('elemHide');
};