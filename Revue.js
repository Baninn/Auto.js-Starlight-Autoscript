console.log('脚本启动');
sleep(2000);

auto();
requestScreenCapture();
var 开始 = images.read("./img/开始.jpg");
var start = findImage(captureScreen(), 开始, {threshold: 0.8});
log("找到开始了: " + start + start.x + "," + start.y);
start.x += Math.round(Math.random() * 开始.getWidth());
start.y += Math.round(Math.random() * 开始.getHeight());
click(start.x,start.y);

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
    log("找自动");
    var 自动 = images.read("./img/auto.jpg");
    var at = findImage(captureScreen(), 自动, {threshold: 0.8});
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
    log("找スタァスコア");
    var スタァスコア = images.read("./img/スタァスコア.jpg");
    var starscore = findImage(captureScreen(), スタァスコア, {threshold: 0.8});
    if(starscore){
        log("找到スタァスコア");
        sleep(500);
        starscore.x += Math.round(Math.random() * スタァスコア.getWidth());
        starscore.y += Math.round(Math.random() * スタァスコア.getHeight());
        click(starscore.x,starscore.y);
    }else{
        log("没找到スタァスコア，继续");
    }
  }
while(starscore==null);
sleep(2000)

//点宝箱（如果有）
//setScreenMetrics(1920, 1080);
xx = 839 + Math.round(Math.random() * 120);
yy = 425 + Math.round(Math.random() * 140);
click(xx,yy);
click(xx,yy);
click(xx,yy);
sleep(2000);
/*
var 宝石箱 = images.read("./img/宝石箱.jpg");
var box = findImage(captureScreen(), 宝石箱, {threshold: 0.8});
log("找到宝石箱了: " + box + box.x + "," + box.y);
box.x += Math.round(Math.random() * 宝石箱.getWidth());
box.y += Math.round(Math.random() * 宝石箱.getHeight());
click(box.x, box.y);
*/


//选择脚本

var floating = images.read("./img/floating.jpg");
var window = findImage(captureScreen(), floating, {threshold: 0.8});
if(window){
    log("找到悬浮窗"+ window + window.x + "," + window.y);
    window.x += Math.round(Math.random() * floating.getWidth());
    window.y += Math.round(Math.random() * floating.getHeight());
    click(window.x,window.y);
}else{
    log("没找到悬浮窗");
}
sleep(500);

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
sleep(500);

do{
    log("找脚本");
    var Revuejs = images.read("./img/Revuejs.jpg");
    var js = findImage(captureScreen(), Revuejs, {threshold: 0.8});
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