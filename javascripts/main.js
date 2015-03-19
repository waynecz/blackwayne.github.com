$(function(){
	var wh=$(window).height();
	$("header").css("height",wh+10);
	
	$("#nav").find(".nav_f_l").mouseover(function(){
		$(this).children("ul").stop();
		
		/*$("header span").stop();*/
		$(this).children("ul").fadeIn(300);
		
	   /* $("header span").fadeIn(200); */
		});
    $(".nav_f_l").mouseout(function(){
		$(this).children("ul").stop();
		
		/*$("header span").stop();*/
		$(this).children("ul").fadeOut(100);
		
	    /* $("header span").fadeOut(200); */
		});
		//导航菜单hover特效
	$("#logo1").mouseover(function(){
		$(this).attr("src","img/logo_words2.png");
		
		});
	$("#logo1").mouseout(function(){
		$(this).attr("src","img/logo_words.png");
		//logo字hover变颜色
		});	
	$("#logo2").mouseover(function(){
		$(this).css({"transform":"rotate(360deg) scale(1.1)","left":80,"top":100});
		
		});	//剑hover特效通过屏幕滚动自动取消版本	
	$("#logo2").click(function(){
				$("body,html").stop();
				$("body,html").animate({scrollTop:5000},1500);
				});	
		
	/*function delay(t1,t2,dom){
		setTimeout(function(){dom.fadeIn(t1)},t2)};*/
		
	$(window).scroll(function(){
		var n=$("#nav");
		var nw=$("#nav_wrap");
		var s_h=$(".nav_f_l ul li");
		var top=$(window).scrollTop();
		var lg1=$("#logo1");
		var lg2=$("#logo2");
		var lg3=$("#logo3");
		console.log(top);
		
	    $("#logo2").mouseover(function(){
			if(top<1400&&top>=0) {
		$(this).css({"transform":"rotate(360deg) scale(1.1)","left":80,"top":100});}
		   else  if(top>=1400) {
		$(this).css({"transform":"rotate(540deg) scale(1.1)","left":80,"top":100});}
		});	
		
		$("#logo2").click(function(){
			if (top<1400){
				$("body,html").stop();
				$("body,html").animate({scrollTop:5000},1500);
				}
			else if (top>=1400){
				$("body,html").stop();
				$("body,html").animate({scrollTop:0},1500);
	            }
			
			});
	/*	$("#logo2").mouseover(function(){
		$(this).css({"transform":"rotate(180deg) scale(1.1)","left":80,"top":100});
		
		});	
	$("#logo2").mouseout(function(){
		 if (top>=300){
	    lg2.css({"transform":"rotate(0deg) scale(.4)","left":30,"top":-20});
		}
	    else if (top<300 ) {
		lg2.css({"transform":"rotate(-90deg) scale(1)","left":70,"top":17});
		}  //剑hover特效通过鼠标移出取消版本，有微小BUG	
		
		
		
		});	*/
		
		
		if (top>=110){
		
			n.css({"top":25});
			
			};
	 if (top>=300){
			nw.stop();
			n.css({"font-size":"1.0rem"});
			s_h.css({"width":"130px"});
			lg1.css({"top":25,"transform":"scale(.95)",});
			lg2.css({"transform":"rotate(0deg) scale(.4)","left":30,"top":-20});
			lg3.fadeIn(400);
			/*delay(400,500,nw);*/
			nw.fadeIn(600);
			}
	else if (top<200 ) {
			nw.stop();
			lg2.stop();
			n.css({'top':50,"font-size":"1.5rem"});
			s_h.css({"width":"150px"});
			lg1.css({"top":30,"transform":"scale(1)",});
			lg2.css({"transform":"rotate(-90deg) scale(1)","left":70,"top":17});
			lg3.fadeOut(100);
			nw.fadeOut(100);
			};
		});
	//导航随页面滚动的动画
		
	
});
