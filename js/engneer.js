'use strict';

document.fortegp05 = document.fortegp05 ? document.fortegp05 : {}; // 未定義なら初期化

// 作ったものに表示するデータ
const productDatas = [
    {
        image: {
            class: 'productImage',
            src: 'images/portfolio_image.png'
        },
        data: {
            title: 'Portfolio',
            url: {
                text: 'https://fortegp05.github.io/portfolio/',
                href: 'https://fortegp05.github.io/portfolio/'
            },
            src: 'https://github.com/fortegp05/portfolio',
            info: 'このサイトです。ヘッダー、目次、スクロールボタンなど共通部品はRiot.jsで実装しました。',
            skill: ['images/javascript.png', 'images/riot.png', 'images/html-5.png', 'images/github-octocat.png', 'images/jquery.png']
        }
    },
    {
        image: {
            class: 'productImage',
            src: 'images/podcast_image.png'
        },
        data: {
            title: 'Podcast配信サイト',
            url: {
                text: 'https://fortegp05.github.io/aozorafm/',
                href: 'https://fortegp05.github.io/aozorafm/'
            },
            src: 'https://github.com/fortegp05/aozorafm',
            info: 'テンプレートyattecastを改造。チャプター、スクロール時の再生バー固定表示、再生位置保存、告知欄の追加など。',
            skill: ['images/jekyll.png', 'images/github-octocat.png', 'images/javascript.png', 'images/html-5.png']
        }
    },
    {
        image: {
            class: 'productImageLong',
            src: 'images/android_sample_image.png'
        },
        data: {
            title: 'Androidサンプルアプリ',
            url: {
                text: '説明Qiita',
                href: 'https://qiita.com/FORTE/items/0a3bae8e172039071af4'
            },
            src: 'https://github.com/fortegp05/SampleAndroidApps',
            info: 'JavaによるRxJava(RxAndroid) + RxBus + Data Binding + roomのサンプルアプリ。',
            skill: ['images/android-icon.png', 'images/java.png', 'images/github-octocat.png']
        }
    }
];
// レスポンシブ対応
const mediaQuery = matchMedia('(max-width: 580px)');

$(document).ready(function(){
    // ページが読み込まれた時とリサイズ時にレスポンシブ対応で画面幅に対応させる
    mediaQuery.addListener(mediaHandler);

    // 作ったものを表示
    showProducts(mediaQuery.matches);

    // ---イベント定義
    // Riotで定義したスクロールイベントを登録する
    document.onscroll = function() {
        if (document.fortegp05.onScrollHandlerFab) document.fortegp05.onScrollHandlerFab();
        if (document.fortegp05.onScrollHandlerToc) document.fortegp05.onScrollHandlerToc();
    }

    if (typeof ResizeObserver) return;
    
    // 画面サイズが変わった際のイベント定義
    var observer = new ResizeObserver((entries) => {
        if (mediaQuery.matches) return; // レスポンシブのときはやらない
        riot.mount('toc');

        if(!document.fortegp05.onScrollHandlerToc) return;
        document.fortegp05.onScrollHandlerToc();
    });
    observer.observe(document.body);
});

/**
 * 画面幅が変わった時に走るハンドラ
 * @param {*} mq 
 */
const mediaHandler = function (mq) {
    const currentSp = document.getElementById('AreaProduct').getAttribute('data-issp') == 'true';

    // すでにSPでSPを要求されたら処理しない(PCも同様)
    if (currentSp && mq.matches) return;
    if (!currentSp && !mq.matches) return;

    // 作ったものを表示
    showProducts(mq.matches);
};

const showProducts = function (isSp) {
    riot.mount('product', 
        {
            product_data:productDatas,
            sp_show: isSp
        }
    );
};