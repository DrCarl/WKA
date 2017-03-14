$(function(){

    var INTERVAL = 1000;

    var CW = document.body.clientWidth;
    var CH = document.body.clientHeight;

    if(CH > CW){

        $('.scene').css({

            height: CH + 'px'

        })

    }

    console.log(CW, CH);

    var s1t1 = $('#s1t1');
    var s1t2 = $('#s1t2');
    var s1t3 = $('#s1t3');

    var s2t1 = $('#s2t1');
    var s2t2 = $('#s2t2');
    var s2t3 = $('#s2t3');
    var s2t4 = $('#s2t4');
    var s2t5 = $('#s2t5');
    var s2t6 = $('#s2t6');


    var s3t1 = $('#s3t1');
    var s3t2 = $('#s3t2');
    var s3t3 = $('#s3t3');
    var s3t4 = $('#s3t4');
    var s3t5 = $('#s3t5');

    var s4t1 = $('#s4t1');
    var s4t2 = $('#s4t2');

    var s5t1 = $('#s5t1');
    var s5t2 = $('#s5t2');
    var s5t3 = $('#s5t3');

    var s6t1 = $('#s6t1');
    var s6t2 = $('#s6t2');
    var s6t3 = $('#s6t3');
    var s6t4 = $('#s6t4');

    // 禁用默认的屏幕拖动事件，防止页面上下窜动，和左右滑动翻页
    $('body').on('touchmove', function(event){

            event.preventDefault();
            event.stopPropagation();
            return false;

    });


    window.goto = function(index){

        var top = 0;
        if(index){
            // top =  - index + '00%';
            top =  - index * CH + 'px';
        }
        $('#main').css({
            top: top
        })

    }

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
        //     id: '#scene1',
        //     res: 'res/bg1.jpg'
        // },{
            id: '#s1t1',
            res: 'res/first.gif'
        },{
            id: '#s1t2',
            res: 'res/bg1.jpg'
        },{
            id: '#scene2',
            res: 'res/bg.jpg'
        },{
            id: '#s2t1',
            res: 'res/s2t1.png'
        },{
            id: '#s2t2',
            res: 'res/s2t2.png'
        },{
            id: '#s2t3',
            res: 'res/s2t3.png'
        },{
            id: '#s2t4',
            res: 'res/kungfu1.png'
        },{
            id: '#s2t5',
            res: 'res/kungfu2.png'
        },{
            id: '#s2t6',
            res: 'res/host.png'
        },{
            id: '#scene3',
            res: 'res/bg.jpg'
        },{
            id: '#s3t1------',
            res: 'res/s3t1.png'
        },{
            id: '#s3t2------',
            res: 'res/s3t2.png'
        },{
            id: '#s3t3',
            res: 'res/shadow1.png'
        },{
            id: '#s3t4',
            res: 'res/shadow2.png'
        },{
            id: '#s3t5',
            res: 'res/host.png'
        },{
            id: '#scene4',
            res: 'res/bg4.jpg'
        },{
            id: '#s4t1',
            res: 'res/s4t1.png'
        },{
            id: '#s4t2',
            res: 'res/s4t2.png'
        },{
            id: '#scene5',
            res: 'res/bg5.jpg'
        },{
            id: '#s5t1',
            res: 'res/s5t1.png'
        },{
            id: '#s5t2',
            res: 'res/s5t2.png'
        },{
            id: '#s5t3',
            res: 'res/s5t3.png'
        },{
            id: '#scene6',
            res: 'res/bg6.jpg'
        },{
            id: '#s6t1',
            res: 'res/s6t1.png'
        },{
            id: '#s6t2',
            res: 'res/s6t2.png'
        },{
            id: '#s6t3',
            res: 'res/s6t3.png'
        },{
            id: '#s6t4',
            res: 'res/host.png'
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

                setTimeout(function(){

                    // 结束loading，加载第一页
                    animate1();

                    // goto(1);
                    // animate2();

                    // goto(2);
                    // animate3();

                    // goto(3);
                    // animate4();

                    // goto(4);
                    // animate5();

                    // animate6();
                }, 2000);

            }

        }

        img.src = item.res;

    })

    function show(elm){

        elm.show();
        elm.css({
            left: 0,
            opacity: 1
        })
    }

    function animate1(){

        setTimeout(function(){

            show(s1t2);
            s1t1.hide();
            setTimeout(function(){

                var sa1 = new ScrollAction(s1t2, function(){
                    goto(1);
                    animate2();

                }, function(){
                    // goto(1);
                });
                sa1.listen();

            }, INTERVAL);

        }, INTERVAL);

    }

    function animate2(){

        setTimeout(function(){

            show(s2t1);
            setTimeout(function(){

                show(s2t2);
                setTimeout(function(){


                    show(s2t3);
                    setTimeout(function(){


                        show(s2t4);
                        setTimeout(function(){


                            show(s2t5);
                            setTimeout(function(){


                                show(s2t6);
                                setTimeout(function(){

                                    var sa2 = new ScrollAction(s2t6, function(){
                                        goto(2);
                                        animate3();
                                    }, function(){
                                        goto(0)
                                    });
                                    sa2.listen();

                                }, INTERVAL);

                            }, INTERVAL);

                        }, INTERVAL);

                    }, INTERVAL);

                }, INTERVAL);

            }, INTERVAL);

        }, INTERVAL);

    }

    function animate3(){

        setTimeout(function(){

            // s3t1.css({

            //     // // opacity: 1
            //     // 'background-size': 'cover'

            // });

            $('#st31').show().css({

                'transition': 'all 0.5s linear'

            })

            setTimeout(function(){

                $('#st31').css({
                    'top': '50%',
                    'height': '100%'
                });

            }, 10);
            setTimeout(function(){

                // s3t2.css({

                //     // opacity: 1
                //     'background-size': 'cover'

                // });

                $('#st32').css({'height': '100%'});
                setTimeout(function(){

                    show(s3t3);
                    show(s3t4);
                    show(s3t5)
                    setTimeout(function(){

                        var sa3 = new ScrollAction(s3t5, function(){
                            goto(3);
                            animate4();
                        }, function(){
                            goto(1)
                        });
                        sa3.listen();

                    }, INTERVAL);

                }, INTERVAL);

            }, INTERVAL);

        }, INTERVAL);


    }

    function animate4(){

        setTimeout(function(){

            show(s4t1);

            setTimeout(function(){

                show(s4t2);
                setTimeout(function(){

                    var sa4 = new ScrollAction(s4t2, function(){
                        goto(4);
                        animate5();
                    }, function(){
                        goto(2)
                    });
                    sa4.listen();

                }, INTERVAL);

            }, INTERVAL);

        }, INTERVAL);


    }
    function animate5(){

        setTimeout(function(){

            show(s5t1);

            setTimeout(function(){

                show(s5t2);
                setTimeout(function(){

                    show(s5t3);
                    setTimeout(function(){

                        var sa5 = new ScrollAction(s5t3, function(){
                            goto(5);
                            animate6();
                        }, function(){
                            goto(3)
                        });
                        sa5.listen();

                    }, INTERVAL);

                }, INTERVAL);

            }, INTERVAL);

        }, INTERVAL);


    }

    function animate6(){

        setTimeout(function(){

            show(s6t1);

            setTimeout(function(){

                show(s6t2);

                setTimeout(function(){

                    show(s6t3);

                    setTimeout(function(){

                        show(s6t4);
                        setTimeout(function(){

                            var sa6 = new ScrollAction(s6t4, function(){
                            }, function(){
                                goto(4)
                            });
                            sa6.listen();

                        }, INTERVAL);

                    }, INTERVAL);

                }, INTERVAL);

            }, INTERVAL);

        }, INTERVAL);

    }

});

