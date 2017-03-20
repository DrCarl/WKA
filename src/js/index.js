var musicOn = false
document.addEventListener('DOMContentLoaded', function () {

    function audioAutoPlay() {
        var audio = document.getElementById('bg-music');
        audio.play();
        musicOn = true;
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
            musicOn = true;
        }, false);
    }
    audioAutoPlay();

});

$(function(){

    $('#audio_btn').on('click', function(){

        if(musicOn){

            $('#bg-music')[0].pause();
            $('#audio_btn').removeClass('rotate');

        }else{

            $('#bg-music')[0].play();
            $('#audio_btn').addClass('rotate');

        }
        musicOn = !musicOn;
    })

    var INTERVAL = 1000;

    var CW = document.body.clientWidth;
    var CH = document.body.clientHeight;

    $('#ercode').css({
        height: 95 * CH / 568 + 'px',
        margin: - 95 * CH / 568 /2 + 'px'
    })

    if(CH > CW){

        $('.scene').css({

            height: CH + 'px'

        })

    }

    // 禁用默认的屏幕拖动事件，防止页面上下窜动，和左右滑动翻页
    $('body').on('touchmove', function(event){

            event.preventDefault();
            event.stopPropagation();
            return false;

    });

    function ScrollAction(elm, next, prev){
        this.y0 = 0;
        this.yt = 0;
        this.next = next;
        this.prev = prev;
        this.elm = elm;
    }

    ScrollAction.prototype.listen = function(){

        var self = this;
        this.elm.on('touchstart', function(event){

            event.preventDefault();
            event.stopPropagation();

            // 开始滑动记录原始位置
            self.y0 = event.touches[0].clientY;

        }).on('touchmove', function(){

            event.preventDefault();
            event.stopPropagation();

            // 滑动中记录最终位置
            self.yt = event.touches[0].clientY;

        }).on('touchend', function(){

            event.preventDefault();
            event.stopPropagation();

            // 执行翻页
            if(self.yt > self.y0){

                // typeof self.next == 'function' && self.next();
                typeof self.prev == 'function' && self.prev();

            }else if(self.yt < self.y0){

                // typeof self.prev == 'function' && self.prev();
                typeof self.next == 'function' && self.next();

            }else{


            }

            self.y0 = 0;
            self.yt = 0;

        });

    }

    var resList = {

        pic: [{
            id: '#s0t1aaa',
            res: 'res/first.gif'
        },{
            id: '#s0t2',
            res: 'res/bg1.jpg'
        },{
            id: '#scene1',
            res: 'res/wka-bg.jpg'
        },{
            id: '#s1t1',
            res: 'res/s1t10.png'
        },{
            id: '#s1t2',
            res: 'res/s1t20.png'
        },{
            id: '#s1t3',
            res: 'res/s1t2.png'
        },{
            id: '#scene2',
            res: 'res/wka-bg.jpg'
        },{
            id: '#s2t1',
            res: 'res/s2t10.png'
        },{
            id: '#s2t2',
            res: 'res/s2t20.png'
        },{
            id: '#s2t3',
            res: 'res/s2t2.png'
        },{
            id: '#s2t4',
            res: 'res/s2t3.png'
        },{
            id: '#s2t5',
            res: 'res/s2t4.png'
        },{
            id: '#scene3',
            res: 'res/wka-bg.jpg'
        },{
            id: '#s3t1',
            res: 'res/s3t10.png'
        },{
            id: '#s3t2',
            res: 'res/s3t20.png'
        },{
            id: '#s3t3',
            res: 'res/s3t2.png'
        },{
            id: '#s3t4',
            res: 'res/s3t3.png'
        },{
            id: '#scene4',
            res: 'res/wka-bg.jpg'
        },{
            id: '#s4t1',
            res: 'res/s4t10.png'
        },{
            id: '#s4t2',
            res: 'res/s4t20.png'
        },{
            id: '#s4t3',
            res: 'res/s4t2.png'
        },{
            id: '#scene5',
            res: 'res/wka-bg1.jpg'
        },{
            id: '#s5t1',
            res: 'res/s5t10.png'
        },{
            id: '#s5t2',
            res: 'res/s5t20.png'
        },{
            id: '#s5t3',
            res: 'res/s5t2.png'
        },{
            id: '#s5t4',
            res: 'res/s5t3.png'
        },{
            id: '#scene6',
            res: 'res/wka-bg2.jpg'
        },{
            id: '#s6t1',
            res: 'res/s6t10.png'
        },{
            id: '#s6t2',
            res: 'res/s6t20.png'
        },{
            id: '#s6t3',
            res: 'res/s6t2.png'
        },{
            id: '#s6t4',
            res: 'res/ercode.png'
        // },{
        //     id: '#s6t5',
        //     res: 'res/s6t4.png'
        }]


    }

    var cache = {}, picReadyCnt = 0;

    resList.pic.forEach(function(item, index){

        var img = new Image()
        img.onload = function(){
            // console.log(index);
            picReadyCnt = picReadyCnt + 1;

            $(item.id).css({
                'background-image': 'url(' + item.res + ')'
            });

            if(picReadyCnt == resList.pic.length){

                $('#s0t1').css({

                    'background-image': 'url(res/first.gif)'

                });

                setTimeout(function(){

                    $('#s0t2').show();
                    $('#s0t1').hide();
                    var sa0 = new ScrollAction($('#s0t2'), function(){

                        animate1()

                    }, function(){});
                    sa0.listen();

                }, 3000);

            }

        }

        img.src = item.res;

    })

    function animate0(){

        $('.scene').hide();

        $('#scene0').show();

    }

    function animate1() {

        $('.scene').hide();

        $('#scene1').show();

        setTimeout(function(){
            $('#s1t2').show();
        }, 500);

        setTimeout(function(){
            $('#s1t3').show();

            var sa1 = new ScrollAction($('#s1t3'), function(){

                animate2()

            }, function(){

                animate0();

            });
            sa1.listen();

        }, 1000);

    }

    function animate2(){

        $('.scene').hide();

        $('#scene2').show();

        setTimeout(function(){
            $('#s2t2').show();
        }, 500);

        setTimeout(function(){
            $('#s2t3').show();
        }, 1000);

        setTimeout(function(){
            $('#s2t4').show();
        }, 1500);

        setTimeout(function(){
            $('#s2t5').show();

            var sa2 = new ScrollAction($('#s2t5'), function(){

                animate3()

            }, function(){

                animate1();

            });
            sa2.listen();

        }, 2000);

    }

    function animate3(){


        $('.scene').hide();

        $('#scene3').show();
        $('#s3t1').show();

        setTimeout(function(){
            $('#s3t2').show();
        }, 500);

        setTimeout(function(){
            $('#s3t3').show();
        }, 1000);

        setTimeout(function(){
            $('#s3t4').show();
            $('#s3t5').show();

            var sa3 = new ScrollAction($('#s3t4'), function(){

                animate4()

            }, function(){

                animate2();

            });
            sa3.listen();

        }, 1500);

    }

    function animate4() {

        $('.scene').hide();

        $('#scene4').show();

        setTimeout(function(){
            $('#s4t2').show();
        }, 500);

        setTimeout(function(){
            $('#s4t3').show();

            var sa4 = new ScrollAction($('#s4t3'), function(){

                animate5()

            }, function(){

                animate3();

            });
            sa4.listen();

        }, 1000);

    }

    function animate5() {

        $('.scene').hide();

        $('#scene5').show();

        setTimeout(function(){
            $('#s5t2').show();
        }, 500);


        setTimeout(function(){
            $('#s5t3').show();
        }, 1000);

        setTimeout(function(){
            $('#s5t4').show();

            var sa4 = new ScrollAction($('#s5t4'), function(){

                animate6()

            }, function(){

                animate4();

            });
            sa4.listen();

        }, 1500);

    }

    function animate6() {

        $('.scene').hide();

        $('#scene6').show();

        setTimeout(function(){
            $('#s6t2').show();
        }, 500);


        setTimeout(function(){
            $('#s6t3').show();
        }, 1000);

        setTimeout(function(){
            $('#s6t4').show();
            // $('#s6t5').show();
            $('#ercode').show();

            var sa5 = new ScrollAction($('#s6t4'), function(){
            }, function(){

                animate5();

            });
            sa5.listen();

        }, 1500);

    }

    // animate6();

});

