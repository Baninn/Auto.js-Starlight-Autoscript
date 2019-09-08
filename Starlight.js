console.log('脚本启动')
sleep(1000)

console.log('请求截图')
if (!requestScreenCapture(true)) {
  toast('请求截图失败')
  console.error('请求截图失败')
  exit()
}
toastLog('请求截图成功')

auto();
requestScreenCapture();
var 刷新 = images.read("/storage/emulated/0/img/刷新.jpg");
var refresh = findImage(captureScreen(), 刷新, {threshold: 0.8});

log("准备找房");
do{
    log("开始找房");
    var 房 = images.read("/storage/emulated/0/img/房.jpg");
    log("找到房模板");
    var room = findImage(captureScreen(), 房, {threshold: 0.8});
    if(room){
        log("room:"+room);
        log("找到房了: " + room);
        click(room.x,room.y);
        log("点了房");
        sleep(1000);

        var 关 = images.read("/storage/emulated/0/img/关.jpg");
        log("找到关模板");
        var close = findImage(captureScreen(), 关, {threshold: 0.6});
        if(close){
            log("发现房没了");
            click(close.x,close.y);
            sleep(500);
            room=null;//重新找房
            sleep(1000);
            click(refresh.x, refresh.y);
            log("点刷新");
            sleep(500);
        }else{
            log("房还在");
        }
    }else{
        log("room:"+room);
        log("没找到房");
        //var 刷新 = images.read("/storage/emulated/0/img/刷新.jpg");
        //var refresh = findImage(captureScreen(), 刷新, {threshold: 0.8});
        click(refresh.x, refresh.y);
        log("点刷新");
        //sleep(500);
    }
    log("找房继续");
}
while(room==null);
sleep(3000);
/*
auto();
requestScreenCapture();
var decide = images.read("/storage/emulated/0/img/决定.jpg");
log("找到图了");
var decide = findImage(captureScreen(), decide, {region: [1391, 781, 500, 200],threshold: 0.8});
if(decide){
    log("找到了: " + decide);
    var { x, y } = decide;
    click(x, y);
}else{
    log("没有找到");
}
*/
//点决定
click(1464,853);
sleep(2000);

//选择三个角色
log("第一个角色");
click(59,826);//三个角色坐标范围[59,826/198,973][232,826/371,973][402,826/541,973]
sleep(1000);
log("第二个角色");
click(232,826);
sleep(1000);
log("第三个角色");
click(402,826);
sleep(1000);
/*
auto();
requestScreenCapture();
var ready = images.read("/storage/emulated/0/img/准备.jpg");
var ready = findImage(captureScreen(), ready, {threshold: 0.8});
var { x, y } = ready;
click(x, y);
*/
//点准备
log("准备OK");
click(1585,937);
sleep(3000);

do{
    log("找自动");

    var 自动 = images.read("/storage/emulated/0/img/auto.jpg");
    var at = findImage(captureScreen(), 自动, {threshold: 0.8});
    var 关 = images.read("/storage/emulated/0/img/关.jpg");//房间被解散
    var close = findImage(captureScreen(), 关, {threshold: 0.6});
    if(close){
        log("找到取消");
        click(close.x,close.y);
        exit();
    }
    if(at){
        log("找到自动");
        sleep(4000)
        click(at.x,at.y);
    }
    
  }
while(at==null);
/*
auto();
requestScreenCapture();
var Merci = images.read("/storage/emulated/0/img/Merci.jpg");
var Merci = findImage(captureScreen(), Merci, {threshold: 0.8});
var { x, y } = Merci;
click(x, y);
*/
/*
auto();
requestScreenCapture();
var again = images.read("/storage/emulated/0/img/再入室.jpg");
var again = findImage(captureScreen(), again, {threshold: 0.8});
var { x, y } = again;
click(x, y);
*/
do{
    log("找再入室");

    var 再入室 = images.read("/storage/emulated/0/img/再入室.jpg");
    var again = findImage(captureScreen(), 再入室, {threshold: 0.8});
    if(again){
        log("找到再入室");
        click(again.x,again.y);
    }else{
        log("没找到再入室，继续");
    }
  }
while(again==null);
sleep(2000)

var 取消 = images.read("/storage/emulated/0/img/取消.jpg");
var cancel = findImage(captureScreen(), 取消, {threshold: 0.8});
if(cancel){
    log("找到取消");
    click(cancel.x,cancel.y);
}else{
    log("没找到取消");
}
exit();