console.log('脚本启动')
auto()
sleep(1000)

console.log('请求截图')
if (!requestScreenCapture(true)) {
  toast('请求截图失败')
  console.error('请求截图失败')
  exit()
}
toastLog('请求截图成功')
/*
const SDCARD = files.getSdcardPath()
const BASE = ''
// const BASE = SDCARD + '/Pictures/'
requiresApi(24)

function capture() {
  let cap = captureScreen()
  images.save(cap, SDCARD + '/img/cap.jpg')
  return cap
}
*/
/*

或者
do{
    找房；
    if没找到{
        刷新；
    }
}
while(找到房=true);
找OK；
*/
log("准备找房");
do{
    log("开始找房");
    auto();
    requestScreenCapture();
    var 房 = images.read("/storage/emulated/0/img/房.jpg");
    log("找到房模板");
    var room = findImage(captureScreen(), 房, {threshold: 0.8});
    if(room){
        log("room:"+room);
        log("找到房了: " + room);
        let { x, y } = room;
        click(x, y);
        log("点了房");
        sleep(1000);
        auto();
        requestScreenCapture();
        var close = images.read("/storage/emulated/0/img/关.jpg");
        log("找到关模板");
        var close = findImage(captureScreen(), close, {threshold: 0.6});
        if(close){
            log("发现房没了");
            let { x, y } = close;
            click(x, y);
            sleep(500);
            room=null;
        }else{
            log("房还在");
        }
    }else{
        log("room:"+room);
        log("没找到房");
        auto();
        requestScreenCapture();
        var 刷新 = images.read("/storage/emulated/0/img/刷新.jpg");
        var refresh = findImage(captureScreen(), 刷新, {threshold: 0.8});
        let { x, y } = refresh;
        click(x, y);
        log("点刷新");
        sleep(500);
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
    let { x, y } = decide;
    click(x, y);
}else{
    log("没有找到");
}
*/
//点决定
click(1464,853);
sleep(2000);

//选择三个角色
click(59,826);//三个角色坐标范围[59,826/198,973][232,826/371,973][402,826/541,973]
sleep(1000);
click(232,826);
sleep(1000);
click(402,826);
sleep(1000);
/*
auto();
requestScreenCapture();
var ready = images.read("/storage/emulated/0/img/准备.jpg");
var ready = findImage(captureScreen(), ready, {threshold: 0.8});
let { x, y } = ready;
click(x, y);
*/
//点准备
click(1585,937);
sleep(3000);

do{
    log("找自动");
    auto();
    requestScreenCapture();
    var at = images.read("/storage/emulated/0/img/auto.jpg");
    var at = findImage(captureScreen(), at, {threshold: 0.8});
    if(at){
        log("找到自动");
        sleep(4000)
        let { x, y } = at;
        click(x, y);
    }
    log("没找到自动，继续");
  }
while(at==null);
/*
auto();
requestScreenCapture();
var Merci = images.read("/storage/emulated/0/img/Merci.jpg");
var Merci = findImage(captureScreen(), Merci, {threshold: 0.8});
let { x, y } = Merci;
click(x, y);
*/
/*
auto();
requestScreenCapture();
var again = images.read("/storage/emulated/0/img/再入室.jpg");
var again = findImage(captureScreen(), again, {threshold: 0.8});
let { x, y } = again;
click(x, y);
*/
do{
    log("找再入室");
    auto();
    requestScreenCapture();
    var again = images.read("/storage/emulated/0/img/再入室2.jpg");
    var again = findImage(captureScreen(), again, {threshold: 0.8});
    if(again){
        log("找到再入室");
        let { x, y } = again;
        click(x, y);
    }else{
        log("没找到再入室，继续");
    }
  }
while(again==null);
sleep(2000)

auto();
requestScreenCapture();
var cancel = images.read("/storage/emulated/0/img/取消2.jpg");
var cancel = findImage(captureScreen(), cancel, {threshold: 0.8});
if(cancel){
    log("找到取消");
    let { x, y } = cancel;
    click(x, y);
}else{
    log("没找到取消");
}

