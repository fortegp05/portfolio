riot.tag2('product', '<div id="AreaProduct" class="productTileArea" data-issp="{opts.sp_show}" each="{product, index in opts.product_data}"> <div class="productTile" onclick="{toggleProducts.bind(this, index)}"> <img class="{product.image.class}" riot-src="{product.image.src}"> </div> <product_data if="{opts.sp_show}" product="{product}" index="{index}"></product_data> </div> <div if="{!opts.sp_show}" each="{product, index in opts.product_data}"> <product_data if="{!opts.sp_show}" product="{product}" index="{index}"></product_data> </div>', '', '', function(opts) {
        this.toggleProducts = function(index) {
            let classList = document.getElementById('ActProduct' + index).classList
            if (classList.contains('show')) {

                classList.remove('show')
                return
            }

            let elements = document.getElementsByClassName('show')
            Array.prototype.forEach.call(elements, function(element) {
                element.classList.remove('show')
            });

            classList.add('show')
        }.bind(this)
});

riot.tag2('product_data', '<div id="ActProduct{opts.index}" class="product_data{opts.exp_class}"> <div class="product_title">{opts.product.data.title}</div> <div class="product_column_title">URL</div> <div class="product_column_text"><a href="{opts.product.data.url.href}">{opts.product.data.url.text}</a></div> <div class="product_column_title">ソースコード</div> <div class="product_column_text">{opts.product.data.src}</div> <div class="product_column_title">説明</div> <div class="product_column_text">{opts.product.data.info}</div> <div class="product_column_title">スキル</div> <div class="product_column_text"> <ul class="product_skill_logo" each="{skill_image in opts.product.data.skill}"> <li><img riot-src="{skill_image}"></li> </ul> </div> </div>', '', '', function(opts) {
});