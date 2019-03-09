riot.tag2('fab', '<a id="actFab" onclick="{scrollToTop}"> <img src="images/up_arrow.png"> </a>', 'fab #actFab,[data-is="fab"] #actFab{ width: 48px; height: 48px; border-radius: 50%; transition: .5s; box-shadow: 0 2px 2px 0 rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.24); position: fixed; bottom: 30px; right: -60px; cursor: pointer; } fab #actFab.show,[data-is="fab"] #actFab.show{ transform: translateX(-160%); }', '', function(opts) {
        document.fortegp05 = document.fortegp05 ? document.fortegp05 : {}

        this.scrollToTop = function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        }.bind(this)

        document.fortegp05.onScrollHandlerFab = function() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop < 300) {
                $('#actFab').removeClass('show');
            } else {
                $('#actFab').addClass('show');
            }
        }
});