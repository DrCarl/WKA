document.addEventListener("DOMContentLoaded",function(){function e(){var e=document.getElementById("bg-music");e.play(),document.addEventListener("WeixinJSBridgeReady",function(){e.play()},!1)}e()}),$(function(){function e(e,t,s){this.y0=0,this.yt=0,this.next=t,this.prev=s,this.elm=e}function t(){$(".scene").hide(),$("#scene0").show()}function s(){$(".scene").hide(),$("#scene1").show(),setTimeout(function(){$("#s1t2").show()},500),setTimeout(function(){$("#s1t3").show();var s=new e($("#s1t3"),function(){n()},function(){t()});s.listen()},1e3)}function n(){$(".scene").hide(),$("#scene2").show(),setTimeout(function(){$("#s2t2").show()},500),setTimeout(function(){$("#s2t3").show()},1e3),setTimeout(function(){$("#s2t4").show()},1500),setTimeout(function(){$("#s2t5").show();var t=new e($("#s2t5"),function(){i()},function(){s()});t.listen()},2e3)}function i(){$(".scene").hide(),$("#scene3").show(),$("#s3t1").show(),setTimeout(function(){$("#s3t2").show()},500),setTimeout(function(){$("#s3t3").show()},1e3),setTimeout(function(){$("#s3t4").show(),$("#s3t5").show();var t=new e($("#s3t4"),function(){o()},function(){n()});t.listen()},1500)}function o(){$(".scene").hide(),$("#scene4").show(),setTimeout(function(){$("#s4t2").show()},500),setTimeout(function(){$("#s4t3").show();var t=new e($("#s4t3"),function(){r()},function(){i()});t.listen()},1e3)}function r(){$(".scene").hide(),$("#scene5").show(),setTimeout(function(){$("#s5t2").show()},500),setTimeout(function(){$("#s5t3").show()},1e3),setTimeout(function(){$("#s5t4").show();var t=new e($("#s5t4"),function(){c()},function(){o()});t.listen()},1500)}function c(){$(".scene").hide(),$("#scene6").show(),setTimeout(function(){$("#s6t2").show()},500),setTimeout(function(){$("#s6t3").show()},1e3),setTimeout(function(){$("#s6t4").show();var t=new e($("#s6t4"),function(){},function(){r()});t.listen()},1500)}var u=document.body.clientWidth,d=document.body.clientHeight;$("#ercode").css({height:95*d/568+"px"}),d>u&&$(".scene").css({height:d+"px"}),$("body").on("touchmove",function(e){return e.preventDefault(),e.stopPropagation(),!1}),e.prototype.listen=function(){var e=this;this.elm.on("touchstart",function(t){t.preventDefault(),t.stopPropagation(),e.y0=t.touches[0].clientY}).on("touchmove",function(){event.preventDefault(),event.stopPropagation(),e.yt=event.touches[0].clientY}).on("touchend",function(){event.preventDefault(),event.stopPropagation(),e.yt>e.y0?"function"==typeof e.prev&&e.prev():e.yt<e.y0&&"function"==typeof e.next&&e.next(),e.y0=0,e.yt=0})};var f={pic:[{id:"#s0t1aaa",res:"res/first.gif"},{id:"#s0t2",res:"res/bg1.jpg"},{id:"#scene1",res:"res/wka-bg.jpg"},{id:"#s1t1",res:"res/s1t10.png"},{id:"#s1t2",res:"res/s1t20.png"},{id:"#s1t3",res:"res/s1t2.png"},{id:"#scene2",res:"res/wka-bg.jpg"},{id:"#s2t1",res:"res/s2t10.png"},{id:"#s2t2",res:"res/s2t20.png"},{id:"#s2t3",res:"res/s2t2.png"},{id:"#s2t4",res:"res/s2t3.png"},{id:"#s2t5",res:"res/s2t4.png"},{id:"#scene3",res:"res/wka-bg.jpg"},{id:"#s3t1",res:"res/s3t10.png"},{id:"#s3t2",res:"res/s3t20.png"},{id:"#s3t3",res:"res/s3t2.png"},{id:"#s3t4",res:"res/s3t3.png"},{id:"#scene4",res:"res/wka-bg.jpg"},{id:"#s4t1",res:"res/s4t10.png"},{id:"#s4t2",res:"res/s4t20.png"},{id:"#s4t3",res:"res/s4t2.png"},{id:"#scene5",res:"res/wka-bg.jpg"},{id:"#s5t1",res:"res/s5t10.png"},{id:"#s5t2",res:"res/s5t20.png"},{id:"#s5t3",res:"res/s5t2.png"},{id:"#s5t4",res:"res/s5t3.png"},{id:"#scene6",res:"res/wka-bg.jpg"},{id:"#s6t1",res:"res/s6t10.png"},{id:"#s6t2",res:"res/s6t20.png"},{id:"#s6t3",res:"res/s6t2.png"},{id:"#s6t4",res:"res/ercode.png"}]},h=0;f.pic.forEach(function(t,n){var i=new Image;i.onload=function(){h+=1,$(t.id).css({"background-image":"url("+t.res+")"}),h==f.pic.length&&($("#s0t1").css({"background-image":"url(res/first.gif)"}),setTimeout(function(){$("#s0t2").show(),$("#s0t1").hide();var t=new e($("#s0t2"),function(){s()},function(){});t.listen()},3e3))},i.src=t.res})});