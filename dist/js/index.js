$(function(){function t(t,s,n){this.y0=0,this.yt=0,this.next=s,this.prev=n,this.elm=t}function s(t){t.show(),t.css({left:0,opacity:1})}function n(){setTimeout(function(){s(d),p.hide(),setTimeout(function(){var s=new t(d,function(){goto(1),e()},function(){});s.listen()},r)},r)}function e(){setTimeout(function(){s(a),setTimeout(function(){s(m),setTimeout(function(){s(h),setTimeout(function(){s(T),setTimeout(function(){s(l),setTimeout(function(){s(v),setTimeout(function(){var s=new t(v,function(){goto(2),o()},function(){goto(0)});s.listen()},r)},r)},r)},r)},r)},r)},r)}function o(){setTimeout(function(){$("#st31").show().css({transition:"all 0.5s linear"}),setTimeout(function(){$("#st31").css({top:"50%",height:"100%"})},10),setTimeout(function(){$("#st32").css({height:"100%"}),setTimeout(function(){s(y),s(w),s(b),setTimeout(function(){var s=new t(b,function(){goto(3),i()},function(){goto(1)});s.listen()},r)},r)},r)},r)}function i(){setTimeout(function(){s(j),setTimeout(function(){s(x),setTimeout(function(){var s=new t(x,function(){goto(4),u()},function(){goto(2)});s.listen()},r)},r)},r)}function u(){setTimeout(function(){s(D),setTimeout(function(){s(P),setTimeout(function(){s(k),setTimeout(function(){var s=new t(k,function(){goto(5),c()},function(){goto(3)});s.listen()},r)},r)},r)},r)}function c(){setTimeout(function(){s(Y),setTimeout(function(){s(E),setTimeout(function(){s(H),setTimeout(function(){s(I),setTimeout(function(){var s=new t(I,function(){},function(){goto(4)});s.listen()},r)},r)},r)},r)},r)}var r=1e3,f=document.body.clientWidth,g=document.body.clientHeight;g>f&&$(".scene").css({height:g+"px"}),console.log(f,g);var p=$("#s1t1"),d=$("#s1t2"),a=($("#s1t3"),$("#s2t1")),m=$("#s2t2"),h=$("#s2t3"),T=$("#s2t4"),l=$("#s2t5"),v=$("#s2t6"),y=($("#s3t1"),$("#s3t2"),$("#s3t3")),w=$("#s3t4"),b=$("#s3t5"),j=$("#s4t1"),x=$("#s4t2"),D=$("#s5t1"),P=$("#s5t2"),k=$("#s5t3"),Y=$("#s6t1"),E=$("#s6t2"),H=$("#s6t3"),I=$("#s6t4");$("body").on("touchmove",function(t){return t.preventDefault(),t.stopPropagation(),!1}),window["goto"]=function(t){var s=0;t&&(s=-t*g+"px"),$("#main").css({top:s})},t.prototype.listen=function(){var t=this;this.elm.on("touchstart",function(s){s.preventDefault(),s.stopPropagation(),t.y0=s.touches[0].clientY}).on("touchmove",function(){event.preventDefault(),event.stopPropagation(),t.yt=event.touches[0].clientY}).on("touchend",function(){event.preventDefault(),event.stopPropagation(),t.yt>t.y0?"function"==typeof t.prev&&t.prev():t.yt<t.y0&&"function"==typeof t.next&&t.next(),t.y0=0,t.yt=0})};var W={pic:[{id:"#s1t1",res:"res/first.gif"},{id:"#s1t2",res:"res/bg1.jpg"},{id:"#scene2",res:"res/bg.jpg"},{id:"#s2t1",res:"res/s2t1.png"},{id:"#s2t2",res:"res/s2t2.png"},{id:"#s2t3",res:"res/s2t3.png"},{id:"#s2t4",res:"res/kungfu1.png"},{id:"#s2t5",res:"res/kungfu2.png"},{id:"#s2t6",res:"res/host.png"},{id:"#scene3",res:"res/bg.jpg"},{id:"#s3t1------",res:"res/s3t1.png"},{id:"#s3t2------",res:"res/s3t2.png"},{id:"#s3t3",res:"res/shadow1.png"},{id:"#s3t4",res:"res/shadow2.png"},{id:"#s3t5",res:"res/host.png"},{id:"#scene4",res:"res/bg4.jpg"},{id:"#s4t1",res:"res/s4t1.png"},{id:"#s4t2",res:"res/s4t2.png"},{id:"#scene5",res:"res/bg5.jpg"},{id:"#s5t1",res:"res/s5t1.png"},{id:"#s5t2",res:"res/s5t2.png"},{id:"#s5t3",res:"res/s5t3.png"},{id:"#scene6",res:"res/bg6.jpg"},{id:"#s6t1",res:"res/s6t1.png"},{id:"#s6t2",res:"res/s6t2.png"},{id:"#s6t3",res:"res/s6t3.png"},{id:"#s6t4",res:"res/host.png"}]},q=0;W.pic.forEach(function(t,s){var e=new Image;e.onload=function(){q+=1,$(t.id).css({"background-image":"url("+t.res+")"}),q==W.pic.length&&setTimeout(function(){n()},2e3)},e.src=t.res})});