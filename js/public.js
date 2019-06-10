(function(){
    function fontSize() {
        var winWidth;
        if (window.innerWidth) winWidth = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            winWidth = document.body.clientWidth;
        if (document.documentElement && document.documentElement.clientWidth) {
            winWidth = document.documentElement.clientWidth;
        }
        document.getElementsByTagName('html')[0].style.fontSize=winWidth/375*20+"px";
    }
    fontSize();

    function setWrapperMinHeight() {
        var winHeight;
        if (window.innerHeight) winHeight = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            winHeight = document.body.clientHeight;
        if (document.documentElement && document.documentElement.clientHeight) {
            winHeight = document.documentElement.clientHeight;
        }
        document.querySelectorAll('.wrapper').forEach(function (item) {
            item.style.minHeight=winHeight + 'px';
        })
    }

    document.addEventListener("DOMContentLoaded",function () {
        setWrapperMinHeight()
    });
    window.addEventListener("resize",function () {
        fontSize();
        setWrapperMinHeight()
    });

})();