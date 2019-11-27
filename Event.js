console.log('脚本启动');
sleep(1000);
auto();
requestScreenCapture();
/*
副本
选人
开始
赢了
结束
多点一下
下一个
取消好友（若有
开箱子（若有
开：右边按钮，石头确认，点结果
不开：左边按钮，点结果
*/
var count=4;
var 副本 = images.read("./img/副本.jpg");
var fu,ben,wait = 0;
do{
    log("开始找关");
    var fight = findImage(captureScreen(), 副本, {threshold: 0.8});
    if(fight){
        sleep(500);
        fu = fight.x + Math.round(Math.random() * 副本.getWidth());
        ben = fight.y + Math.round(Math.random() * 副本.getHeight());
        click(fu, ben);
    }
    count-=1;
    if(count == 0)
    {
        var 老板 = images.read("./img/boss.jpg");
        var boss = findImage(captureScreen(), 老板, {threshold: 0.8});
        if(boss){
            log("找到boss");
            wait=1;
            sleep(500);
            fu = boss.x + Math.round(Math.random() * 老板.getWidth());
            ben = boss.y + Math.round(Math.random() * 老板.getHeight());
            click(fu, ben);

            do{
                log("找下一个");
                var 下一个 = images.read("./img/下一个.jpg");
                var next = findImage(captureScreen(), 下一个, {threshold: 0.8});
                if(next){
                    log("找到下一个");
                    sleep(500);
                    next.x += Math.round(Math.random() * 下一个.getWidth());
                    next.y += Math.round(Math.random() * 下一个.getHeight());
                    click(next.x,next.y);
                }else{
                    log("没找到下一个，继续");
                }
              }
            while(next==null);

        }else{
            log("没找到boss");
        }

        break;
    }
        
}
while(fight==null);

sleep(500);
do{
    var 助战 = images.read("./img/FP.jpg");
    var support = findImage(captureScreen(), 助战, {threshold: 0.8});
    if(support){
        log("找到助战");
        sleep(500);
        support.x += Math.round(Math.random() * 助战.getWidth());
        support.y += Math.round(Math.random() * 助战.getHeight());
        click(support.x, support.y);
    }else{
        log("没找到助战");
    }
}
while(support==null)

sleep(500);

do{
    log("找开始2");
    var 开始2 = images.read("./img/开始2.jpg");
    var start2 = findImage(captureScreen(), 开始2, {threshold: 0.8});
    if(start2){
        log("找到开始2了: " + start2 + start2.x + "," + start2.y);
        sleep(1000);
        start2.x += Math.round(Math.random() * 开始2.getWidth());
        start2.y += Math.round(Math.random() * 开始2.getHeight());
        click(start2.x,start2.y);
    }
  }
while(start2==null);

do{
    log("找赢");
    var 赢 = images.read("./img/赢.jpg");
    var win = findImage(captureScreen(), 赢, {threshold: 0.8});
    if(win){
        log("找到赢");
        sleep(500);
        win.x += Math.round(Math.random() * 赢.getWidth());
        win.y += Math.round(Math.random() * 赢.getHeight());
        click(win.x,win.y);
    }else{
        log("没找到赢，继续");
    }
  }
while(win==null);

do{
    log("找条");
    var 条 = images.read("./img/条.jpg");
    var end = findImage(captureScreen(), 条, {threshold: 0.8});
    if(end){
        log("找到条");
        sleep(500);
        end.x += Math.round(Math.random() * 条.getWidth());
        end.y += Math.round(Math.random() * 条.getHeight());
        click(end.x,end.y);
    }else{
        log("没找到条，继续");
    }
  }
while(end==null);

//多点一下
click(fu, ben);
click(fu, ben);

do{
    log("找下一个");
    sleep(500);
    click(fu, ben);
    var 下一个 = images.read("./img/下一个.jpg");
    var next = findImage(captureScreen(), 下一个, {threshold: 0.8});
    if(next){
        log("找到下一个");
        sleep(500);
        next.x += Math.round(Math.random() * 下一个.getWidth());
        next.y += Math.round(Math.random() * 下一个.getHeight());
        click(next.x,next.y);
    }else{
        log("没找到下一个，继续");
    }
  }
while(next==null);

count = 4;
do{
    log("找取消");
    //sleep(500);
    var 取消 = images.read("./img/取消.jpg");
    var cancel = findImage(captureScreen(), 取消, {threshold: 0.8});
    if(cancel){
        log("找到取消");
        sleep(500);
        cancel.x += Math.round(Math.random() * 取消.getWidth());
        cancel.y += Math.round(Math.random() * 取消.getHeight());
        click(cancel.x,cancel.y);
    }else{
        log("没找到取消，继续");
        count-=1;
    }
    if(count == 0)
        break;
  }
while(cancel==null);//不满足时跳出

sleep(2000)

count = 4;
do{
    log("找箱子");
    //sleep(500);
    //var 箱子 = images.read("./img/开箱子.jpg");
    var 免费 = images.read("./img/20%.jpg");
    var box = findImage(captureScreen(), 免费, {threshold: 0.8});
    if(box){//不开箱子
        log("找到箱子");
        sleep(500);
        box.x += Math.round(Math.random() * 免费.getWidth());
        box.y += Math.round(Math.random() * 免费.getHeight());
        click(box.x,box.y);
        sleep(4000);
        click(fu, ben);
        click(fu, ben);
    }
    /*if(box){//用钻开箱子
        log("找到箱子");
        sleep(500);
        box.x += Math.round(Math.random() * 箱子.getWidth());
        box.y += Math.round(Math.random() * 箱子.getHeight());
        click(box.x,box.y);
        sleep(500);
        log("找OK");

        var OK = images.read("./img/红OK.jpg");
        var determine = findImage(captureScreen(), OK, {threshold: 0.8});
        if(determine){
            log("找到OK");
            determine.x += Math.round(Math.random() * OK.getWidth());
            determine.y += Math.round(Math.random() * OK.getHeight());
            click(determine.x,determine.y);
            sleep(4000);
            click(fu, ben);
            click(fu, ben);
        }else{
            log("没找到OK");
        }
    }*/
    else{
        log("没找到箱子，继续");
        log("count="+count);
        count-=1;
    }
    if(count == 0)
        break;
}
while(box == null);//不满足时跳出

sleep(500);

if(wait == 1){
    sleep(4000);
    click(fu, ben);
    sleep(2000);
}

//重复运行
var event用float = images.read("./img/event用float.jpg");
var window = findImage(captureScreen(), event用float, {threshold: 0.8});
if(window){
    log("找到悬浮窗");
    window.x += Math.round(Math.random() * event用float.getWidth());
    window.y += Math.round(Math.random() * event用float.getHeight());
    click(window.x,window.y);
}else{
    log("没找到悬浮窗");
}
sleep(500)

var jsmenu = images.read("./img/jsmenu.jpg");
var list = findImage(captureScreen(), jsmenu, {threshold: 0.8});
if(list){
    log("找到脚本列表");
    list.x += Math.round(Math.random() * jsmenu.getWidth());
    list.y += Math.round(Math.random() * jsmenu.getHeight());
    click(list.x,list.y);
}else{
    log("没找到脚本列表");
}
sleep(500)

do{
    log("找脚本");
    var Event = images.read("./img/Event.jpg");
    var js = findImage(captureScreen(), Event, {threshold: 0.8});
    if(js){
        log("找到脚本");
        click(js.x,js.y);
    }else{
        log("没找到脚本");
        swipe(1020, 754, 1020, 369, 200);//1020，754/1020，369
        sleep(500)
    }
  }
  while(js==null);