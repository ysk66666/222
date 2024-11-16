 $(function(){

    // SCROLL LOAD
    var scrollLoad = (function (options) {
    var defaults = (arguments.length == 0) ? { src: 'xSrc', time: 300} : { src: options.src || 'xSrc', time: options.time ||300};
    var camelize = function (s) {
        return s.replace(/-(\w)/g, function (strMatch, p1) {
            return p1.toUpperCase();
        });
    };
    this.getStyle = function (element, property) {
        if (arguments.length != 2) return false;
        var value = element.style[camelize(property)];
        if (!value) {
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var css = document.defaultView.getComputedStyle(element, null);
                value = css ? css.getPropertyValue(property) : null;
            } else if (element.currentStyle) {
                value = element.currentStyle[camelize(property)];
            }
        }
        return value == 'auto' ? '' : value;
    };
    var _init = function () {
        var offsetPage = window.pageYOffset ? window.pageYOffset : window.document.documentElement.scrollTop,
            offsetWindow = offsetPage + Number(window.innerHeight ? window.innerHeight : document.documentElement.clientHeight),
            docImg = document.images,
            _len = docImg.length;
        if (!_len) return false;
        for (var i = 0; i < _len; i++) {
            var attrSrc = docImg[i].getAttribute(defaults.src),
                o = docImg[i], tag = o.nodeName.toLowerCase();
            if (o) {
                postPage = o.getBoundingClientRect().top + window.document.documentElement.scrollTop + window.document.body.scrollTop; postWindow = postPage + Number(this.getStyle(o, 'height').replace('px', ''));
                if ((postPage > offsetPage && postPage < offsetWindow) || (postWindow > offsetPage && postWindow < offsetWindow)) {
                    if (tag === "img" && attrSrc !== null) {
                        o.setAttribute("src", attrSrc);
                    }
                    o = null;
                }
            }
        };
        window.onscroll = function () {
            setTimeout(function () {
                _init();
            }, defaults.time);
        }
    };
    return _init();
    });
    scrollLoad();


 	$(".swipebox").swipebox();

 	 $("#owl-demo").owlCarousel({
	    items :4,
	    lazyLoad : true,
	    autoPlay : true,
	    navigation : false,
	    navigationText :  false,
	    pagination : true,
	  });

 	 $().UItoTop({ easingType: 'easeOutQuart',text:'' });

 	/*==============================================================*/
    // Home Text Slide
    /*==============================================================*/
	(function () {
		var foo = $('#typer');

		foo.typer([foo.text(),foo.text(),foo.text()]);
		foo = $('#follow');
		foo.typer([foo.text(), foo.text()]);	
	}());
//*************************************************************
/**
*	Author: jicunblog.cn
*	手机 pc 焦点图优化插件
*   参数说明：
*	wWidth: 设定显示窗口大小  做为替换标准
*	data-m data-p 为手机、pc 图片数据位置
*/

 	$.fn.pMcarousel=function(wWidth){
 		var wW = $(window).width();

	 		$(this).each(function(){
	 			var obj = $(this).find('img');

	 			if(wW<=wWidth){
	 				obj.attr('src',obj.attr('data-m'));
	 			}else{
	 				obj.attr('src',obj.attr('data-p'));
	 			}
	 			return;
	 		});

 	};
 	// 手机 pc 焦点图替换
	$(window).on('load resize',function(){
		$(".carousel-inner .item").pMcarousel('460');
	});

 	//左侧类别效果
 	/*$(".js").leftnav();*/

	 	

//*************************************************************
/**
*	点击事件隐藏显示切换
*	参数说明：
*	hs: 点击事件标签的元素(默认值是:.talk_hidden span)
*	hb: 隐藏显示触发的容器的元素(默认值是:.talk_body)
*/
	
		$.fn.hidd=function(options){
			$.fn.hidd.defs={
				hs: ".talk_hidden span",
				hb: ".talk_body"
			};
			var opts = $.extend({},$.fn.hidd.defs,options);
			var hidden_cur=$(opts.hs,$(this));	//获取标签
			var hidden_box=$(opts.hb,$(this));		//获取显示的容器
			hidden_cur.click(
				function(){
					hidden_box.toggle("slow");
				}
			);
		};

		//客服咨询隐藏显示
		$("#talk").hidd();	

 });