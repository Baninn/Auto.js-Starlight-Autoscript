console.log('脚本启动');
sleep(1000);
console.log('请求截图');
if (!requestScreenCapture(true)) {
  toast('请求截图失败');
  console.error('请求截图失败');
  exit();
}
toastLog('请求截图成功');
auto();
requestScreenCapture();
var 刷新 = images.read("/img/刷新.jpg");
var refresh = findImage(captureScreen(), 刷新, {threshold: 0.8});

log("准备找房");
do{
    log("开始找房");
    var 房 = images.read("/img/房.jpg");
    log("找到房模板");
    var room = findImage(captureScreen(), 房, {threshold: 0.8});
    if(room){
        log("room:"+room);
        log("找到房了: " + room);
        click(room.x,room.y);//防止没点到
        click(room.x,room.y);
        click(room.x,room.y);
        click(room.x,room.y);
        click(room.x,room.y);
        log("点了房"+room.x+","+room.y);
        sleep(1000);

        var 关 = images.read("/img/关.jpg");
        log("找到关模板");
        var close = findImage(captureScreen(), 关, {threshold: 0.6});
        if(close){
            log("发现房没了");
            close.x += Math.round(Math.random() * 关.getWidth());
            close.y += Math.round(Math.random() * 关.getHeight());
            click(close.x,close.y);
            sleep(500);
            room=null;//重新找房
            sleep(1000);

            shua = refresh.x + Math.round(Math.random() * 刷新.getWidth());
            xin = refresh.y + Math.round(Math.random() * 刷新.getHeight());
            click(shua, xin);
            log("点刷新");
            sleep(500);
        }else{
            log("房还在");
        }
    }else{
        log("room:"+room);
        log("没找到房");
        shua = refresh.x + Math.round(Math.random() * 刷新.getWidth());
        xin = refresh.y + Math.round(Math.random() * 刷新.getHeight());
        click(shua, xin);
        log("点刷新");
        //sleep(500);//点刷新的时间间隔
    }
    log("本次找房结束");
}
while(room==null);
sleep(3000);

var 决定 = images.read("/img/决定.jpg");
var decide = findImage(captureScreen(), 决定, {threshold: 0.8});
log("找到决定了: " + decide + decide.x + "," + decide.y);
decide.x += Math.round(Math.random() * 决定.getWidth());
decide.y += Math.round(Math.random() * 决定.getHeight());
click(decide.x, decide.y);
//click(1464,853);
sleep(2000);

//选择三个角色
var xx,yy;
log("第一个角色");
xx = 59 + Math.round(Math.random() * 140);
yy = 826 + Math.round(Math.random() * 140);
click(xx,yy);//三个角色坐标范围[59,826/198,973][232,826/371,973][402,826/541,973]
sleep(1000);
log("第二个角色");
xx = 232 + Math.round(Math.random() * 140);
yy = 826 + Math.round(Math.random() * 140);
click(xx,yy);
sleep(1000);
log("第三个角色");
xx = 402 + Math.round(Math.random() * 140);
yy = 826 + Math.round(Math.random() * 140);
click(xx,yy);
sleep(1000);

//点准备
var 准备 = images.read("/img/准备.jpg");
var ready = findImage(captureScreen(), 准备, {threshold: 0.8});
log("找到准备了: " + ready + ready.x + "," + ready.y);
ready.x += Math.round(Math.random() * 准备.getWidth());
ready.y += Math.round(Math.random() * 准备.getHeight());
click(ready.x, ready.y);
//click(1585,937);
sleep(3000);

do{
    log("找自动");

    var 自动 = images.read("/img/auto.jpg");
    var at = findImage(captureScreen(), 自动, {threshold: 0.8});
    var close = findImage(captureScreen(), 关, {threshold: 0.6});//房间被解散
    if(close){
        log("找到取消");
        close.x += Math.round(Math.random() * 关.getWidth());
        close.y += Math.round(Math.random() * 关.getHeight());
        click(close.x,close.y);
        exit();
    }
    if(at){
        log("找到自动");
        sleep(4000)
        at.x += Math.round(Math.random() * 自动.getWidth());
        at.y += Math.round(Math.random() * 自动.getHeight());
        click(at.x,at.y);
    }
    
  }
while(at==null);

do{
    log("找表情");
    var Merci = images.read("/img/Merci.jpg");
    var emoticon = findImage(captureScreen(), Merci, {threshold: 0.8});
    if(emoticon){
        log("找到表情了: " + emoticon + emoticon.x + "," + emoticon.y);
        emoticon.x += Math.round(Math.random() * Merci.getWidth());
        emoticon.y += Math.round(Math.random() * Merci.getHeight());
        click(emoticon.x, emoticon.y);
    }else{
        log("没找到表情，继续");
    }
  }
while(emoticon==null);

do{
    log("找再入室");
    var 再入室 = images.read("/img/再入室.jpg");
    var again = findImage(captureScreen(), 再入室, {threshold: 0.8});
    if(again){
        log("找到再入室");
        again.x += Math.round(Math.random() * 再入室.getWidth());
        again.y += Math.round(Math.random() * 再入室.getHeight());
        click(again.x,again.y);
    }else{
        log("没找到再入室，继续");
    }
  }
while(again==null);
sleep(2000)

var 取消 = images.read("/img/取消.jpg");
var cancel = findImage(captureScreen(), 取消, {threshold: 0.8});
if(cancel){
    log("找到取消");
    cancel.x += Math.round(Math.random() * 取消.getWidth());
    cancel.y += Math.round(Math.random() * 取消.getHeight());
    click(cancel.x,cancel.y);
}else{
    log("没找到取消");
}
//exit();