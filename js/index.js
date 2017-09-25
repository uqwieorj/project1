/**
 * Created by BHG on 2017/9/18.
 */
$(function(){
    var index = 0;//定义一个变量，存放下标
    var timer;//定义一个变量，存放定时器
    var imgLength=$(".banner ul li").length; //获取li的数量
    //为banner添加宽度
   var wth = $(window).width();
    //console.log(wth);
    $(".banner ul").css({
        "width":wth*imgLength
    });
    $(".banner ul li").css({
        "width":wth
    });
    $(".banner_bottom").css({
        "width":wth
    });
    $(".dian").css({
        "width":imgLength*25+"px"
    });

    //左右按钮的点击事件
    //左按钮的点击切图 click点击事件
    $(".banner_bottom_left").click(function(){
        index--;//点击一次，index值增大一次
        move();//调用切换图片的方法
    });
    //右按钮的点击切图 click点击事件
    $(".banner_bottom_right").click(function(){
        index++;//点击一次，index值增大一次
        move();//调用切换图片的方法
    });
    console.log(index);
    //封装一个切换图片的方法
    function move(){
        //检测有边界
        if(index >= imgLength){
            $(".banner ul").css({
                left:0
            });
            index = 1;
        }

        //检测左边界
        if(index<=-1){
            $(".banner ul").css({
                left:-(imgLength-1)*wth
            });
            index = imgLength-2;
        }

        //缓缓切图
        $(".banner ul").stop().animate({
            left:-index*wth
        },2000)

        //判断小圆点的右边界
        if(index == imgLength-1){
            $(".dian i").eq(0).addClass("current").siblings().removeClass("current");
        }

        //切换小圆点的样式
        $(".dian i").eq(index).addClass("current").siblings().removeClass("current");
    }

    autoPlay();//调用自动播放的方法

    //自动播放
    function autoPlay(){
        timer = setInterval(function(){
            index++;
            move();
        },3000)
    }
        //鼠标放上去停止播放，离开时继续播放
    $(".banner").hover(function(){
        //鼠标移入时
        $(".banner_bottom").css({
            opacity:1
        });
        clearInterval(timer);
    },function(){
        //离开时继续播放
        autoPlay();
        $(".banner_bottom").css({
            opacity:0
        })
    });

        //点击小圆点切换对应的图片
    $(".dian i").click(function(){
        index = $(this).index();
        move();
    });

    //动画

//获取键盘上对应的ascII码
//    $(document).keydown(function(event){
//        alert(event.keyCode);
//    });
//定义touzi的初始位置
    var tz_left = 200;
    var tz_top = -120;
    $(".touzi").css({
        top:tz_top,
        left:tz_left
    })
    //当按下键盘上的左右方面键时38,40,37,39
    $(document).keydown(function(event){
//判断当event.keyCode 为37时（即左方面键），执行函数to_left();
//判断当event.keyCode 为39时（即右方面键），执行函数to_right();
        if(event.keyCode == 37){
            to_left();
        }else if (event.keyCode == 39){
            to_right();
        }else if (event.keyCode == 38){
            to_top();
        }else if (event.keyCode == 40){
            to_bottom();
        }
    });
//定义上下左右函数
    function to_right(){
        $(".touzi").css({
            left:tz_left+100
        })
    }
    function to_left(){
        $(".touzi").css({
            left:tz_left-100
        })
    }
    function to_top(){
        $(".touzi").css({
            left:tz_top-100
        })
    }
    function to_bottom(){
        $(".touzi").css({
            left:tz_top+100
        })
    }
});

var testAlert=function(){
    var choose = window.confirm("弹出警告框！");
    if(choose = true){
        window.prompt("随便你了");
    }
};
var testScrollBy = function () {
    window.scrollTo(0,0);
};
var testScrollTo = function () {
    window.scrollTo(0,10000);
};
