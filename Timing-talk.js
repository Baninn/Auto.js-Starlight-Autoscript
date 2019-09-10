console.log('循环脚本启动');
sleep(1000);
console.log('请求截图');
if (!requestScreenCapture(true)) {
  toast('请求截图失败');
  console.error('请求截图失败');
  exit();
}
toastLog('请求截图成功');
auto();
//requestScreenCapture();

do{
    log("找home");
    var home_pic = images.read("./img/home.jpg");
    var home = findImage(captureScreen(), home_pic, {threshold: 0.8});
    if(home){
        log("找到home");
        sleep(500);
        home.x += Math.round(Math.random() * home_pic.getWidth());
        home.y += Math.round(Math.random() * home_pic.getHeight());
        click(home.x, home.y);
    }else{
        log("没找到home，继续");
    }
  }
while(home==null);

do{
    log("找一括受取");
    var 一括受取 = images.read("./img/一括受取.jpg");
    var receipt = findImage(captureScreen(), 一括受取, {threshold: 0.8});
    if(receipt){
        log("找到一括受取");
        sleep(500);
        receipt.x += Math.round(Math.random() * 一括受取.getWidth());
        receipt.y += Math.round(Math.random() * 一括受取.getHeight());
        click(receipt.x,receipt.y);
    }else{
        log("没找到一括受取，继续");
    }
  }
while(receipt==null);
sleep(500);
do{
    log("找关");
    var 一括受取 = images.read("./img/关.jpg");
    var close = findImage(captureScreen(), 关, {threshold: 0.8});
    if(close){
        log("找到关");
        sleep(500);
        close.x += Math.round(Math.random() * 关.getWidth());
        close.y += Math.round(Math.random() * 关.getHeight());
        click(close.x,close.y);
    }else{
        log("没找到关，继续");
    }
  }
while(close==null);
sleep(500);
engines.execScriptFile("/storage/emulated/0/脚本/talk.js", {
    loopTimes: 5,
    interval: 1000
});

console.setGlobalLogConfig({
    "file": "/storage/emulated/0/脚本/1.txt"
});