<toc>
  <div class="side">
    <ul>
      <li each={contents_h1 in document.fortegp05.toc}>
        <ul class="tocH1">
          <li id="{contents_h1.id}">
            <span onMouseOver={onMouseCursor} onMouseOut={onMouseOutCursor} onClick={ scrollToContents.bind(this, contents_h1.top) }>{contents_h1.contents.innerText}</span>
          </li>
          <li>
            <ul if={contents_h1.child.length != 0}>
              <li each={contents_h2 in contents_h1.child}>
                <ul class="tocH2">
                  <li id="{contents_h2.id}">
                    <span onMouseOver={onMouseCursor} onMouseOut={onMouseOutCursor} onClick={ scrollToContents.bind(this, contents_h2.top) }>{contents_h2.contents.innerText}</span>
                  </li>
                  <li>
                    <ul class="tocH3" if={contents_h2.child.length != 0}>
                      <li id="{contents_h3.id}" each={contents_h3 in contents_h2.child}>
                        <span onMouseOver={onMouseCursor} onMouseOut={onMouseOutCursor} onClick={ scrollToContents.bind(this, contents_h3.top) }>{contents_h3.contents.innerText}</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
      </li>
    </ul>
  </div>

  <style scoped>
    .side {
      margin: 0;
      padding: 0;
      top: 10px;
      position: -webkit-sticky;
      position: sticky;
      margin-left: 5px;
      margin-right: 10px;
    }
    li {
      margin-bottom: 5px;
    }
    ul {
      list-style-type: none!important;
      padding-left: 0px;
    }
    .tocH2 {
      padding-left: 10px;
      margin-bottom: 5px;
    }
    .tocH3 {
      padding-left: 10px;
    }
    .highlight {
      background: #EEEEEE;
    }
    .onMourse {
      text-decoration-line: underline;
      cursor: pointer;
    }
  </style>

  <script>
    // 画面からhn系のタグ一覧を取得する
    this.contents_list = document.querySelectorAll('H1, H2, H3')
    // あとでスクロールイベントで使うので保存先をdocumentにしとく
    document.fortegp05 = document.fortegp05 ? document.fortegp05 : {} // 未定義なら初期化
    document.fortegp05.toc = []
    // 見出しの絶対位置を引数の値で更新する
    let updateRect = function(contentsTop) {
      let h1Len = document.fortegp05.toc.length
      let h2Len = 0
      let h3Len = 0
      if (h1Len > 0) {
        document.fortegp05.toc[h1Len - 1].end = contentsTop
        h2Len = document.fortegp05.toc[h1Len - 1].child.length
      }
      if (h2Len > 0) {
        document.fortegp05.toc[h1Len - 1].child[h2Len - 1].end = contentsTop
        h3Len = document.fortegp05.toc[h1Len - 1].child[h2Len - 1].child.length
      }
      if (h3Len > 0) {
        document.fortegp05.toc[h1Len - 1].child[h2Len - 1].child[h3Len - 1].end = contentsTop
      }
    }

    for (index in this.contents_list) {
      // length取れるのでElementだけ処理する
      if (!(this.contents_list[index] instanceof Element)) {
        break
      }

      let contentsTop = this.contents_list[index].getBoundingClientRect().top + window.pageYOffset
      let tagId = 'toc' + index
      switch (this.contents_list[index].tagName) {
        case 'H1':
          updateRect(contentsTop);

          document.fortegp05.toc.push({
            contents: this.contents_list[index],
            child: [],
            top: contentsTop,
            end: document.body.offsetHeight,
            id: tagId
          })
          break
        case 'H2':
          updateRect(contentsTop);
          h1Len = document.fortegp05.toc.length
          if (h1Len < 1) break

          document.fortegp05.toc[h1Len - 1].child.push({
            contents: this.contents_list[index],
            child: [],
            top: contentsTop,
            end: document.body.offsetHeight,
            id: tagId
          })
          break
        case 'H3':
          updateRect(contentsTop);
          h1Len = document.fortegp05.toc.length
          if (h1Len < 1) break
          h2Len = document.fortegp05.toc[h1Len - 1].child.length
          if (h2Len < 1) break

          document.fortegp05.toc[h1Len - 1].child[h2Len - 1].child.push({
            contents: this.contents_list[index],
            child: [],
            top: contentsTop,
            end: document.body.offsetHeight,
            id: tagId
          })
          break
        // H4以降が必要なら追加する
      }
      index++;
    }

    // 最後に位置情報を更新しておく
    updateRect(document.body.offsetHeight);

    // スクロールしたときに目次にハイライトを表示するイベントを設定しておく
    document.fortegp05.onScrollHandlerToc = function() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let updateHighlight = function (array, scrollTop){
        for (index in array) {
          let contentsTop = array[index].top
          let contentsEnd = array[index].end
          let tocElementClassList = document.getElementById(array[index].id).classList
          
          if (contentsTop <= scrollTop && scrollTop < contentsEnd) {
            tocElementClassList.add("highlight")
          } else {
            tocElementClassList.remove("highlight")
          }

          if (array[index].child.length > 0) {
            updateHighlight(array[index].child, scrollTop);
          }
        }
      }

      // 更新処理を呼び出す
      updateHighlight(document.fortegp05.toc, scrollTop);
    }

    scrollToContents(yScrollTo) {
      window.scrollTo(0, yScrollTo)
      // ハイライトを更新しておく
      document.onscroll()
    }

    onMouseCursor(event) {
      event.target.classList.add("onMourse")
    }
    onMouseOutCursor(event) {
      event.target.classList.remove("onMourse")
    }
  </script>
</toc>