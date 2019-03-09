'use strict';

document.fortegp05 = document.fortegp05 ? document.fortegp05 : {}; // 未定義なら初期化

$(document).ready(function(){
    // ---イベント登録
    // 項目へのスクロールイベントを登録する
    let menuIds = {
        profile:    {menuId: 'ActMenuProfile',      scrollTo: 'AreaProfile'},
        projects:   {menuId: 'ActMenuProjects',     scrollTo: 'AreaProjects'},
        contact:    {menuId: 'ActMenuContact',      scrollTo: 'AreaContact'}
    };
    // 項目へのスクロール
    for (let key in menuIds) {
        $('#' + menuIds[key].menuId).on('click', function(){
            document.fortegp05.scroll($('#' + menuIds[key].scrollTo).offset().top);
            document.fortegp05.pudateMenuStatus('#' + menuIds[key].menuId);
        });
    }

    // Riotで定義したスクロールイベントを登録する
    document.onscroll = function() {
        if (document.fortegp05.onScrollHandlerFab) document.fortegp05.onScrollHandlerFab();
    }
});

/**
 * アニメーション付きでスクロール
 */
document.fortegp05.scroll = function(scrollTo) {
    $("html, body").animate({scrollTop: scrollTo}, "slow");
};

/**
 * アニメーション付きでスクロール
 */
document.fortegp05.pudateMenuStatus = function(menuId) {
    $('.current').removeClass('current')
    $(menuId).closest('li').addClass("current");
};