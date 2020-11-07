<product>
    <div id="AreaProduct" class="productTileArea" data-issp="{ opts.sp_show }" each={ product, index in opts.product_data }>
        <div class="productTile" onClick={ toggleProducts.bind(this, index) }>
            <img class="{ product.image.class }" src="{ product.image.src }">
        </div>
        <product_data if={ opts.sp_show } product={ product } index={ index } />
    </div>
    <div　if={ !opts.sp_show } each={ product, index in opts.product_data }>
        <product_data if={ !opts.sp_show } product={ product } index={ index } />
    </div>

    <script>
        toggleProducts(index) {
            let classList = document.getElementById('ActProduct' + index).classList
            if (classList.contains('show')) {
                // 表示されているものをクリックされたら非表示にして抜ける
                classList.remove('show')
                return
            }

            let elements = document.getElementsByClassName('show')
            Array.prototype.forEach.call(elements, function(element) {
                element.classList.remove('show')
            });

            classList.add('show')
        }
    </script>

</product>

<product_data>
    <div id="ActProduct{opts.index}" class="product_data{opts.exp_class}">
        <div class="product_title">{ opts.product.data.title }</div>

        <div class="product_column_title">URL</div>
        <div class="product_column_text"><a href="{ opts.product.data.url.href }">{ opts.product.data.url.text }</a></div>

        <div class="product_column_title">ソースコード</div>
        <div class="product_column_text">{ opts.product.data.src }</div>

        <div class="product_column_title">説明</div>
        <div class="product_column_text">{ opts.product.data.info }</div>
        
        <div class="product_column_title">スキル</div>
        <div class="product_column_text">
            <ul class="product_skill_logo" each={ skill_image in opts.product.data.skill }>
                <li><img src="{ skill_image }"></li>
            </ul>
        </div>
    </div>
</product_data>