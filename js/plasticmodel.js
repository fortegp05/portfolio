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

    if (typeof ResizeObserver == "undefined") return;

    // 画面サイズが変わった際のイベント定義
    var observer = new ResizeObserver((entries) => {
        if (mediaQuery.matches) return; // レスポンシブのときはやらない
        riot.mount('toc');
    });
    observer.observe(document.body);
    
});
