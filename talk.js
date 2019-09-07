/*
do{
    log("找home");
    auto();
    requestScreenCapture();
    var home = images.read("/storage/emulated/0/img/home.jpg");
    var home = findImage(captureScreen(), home, {threshold: 0.8});
    if(home){
        log("找到home");
        let { x, y } = home ;
        click(x, y);
    }
  }
while(home==null);
sleep(1000);
*/
/**
 * talk
 * voice
 * menu
 * skip
 * skip2
 * ok
 */
do{
    log("找talk");
    auto();
    requestScreenCapture();
    var talk = images.read("/storage/emulated/0/img/talk.jpg");
    var talk = findImage(captureScreen(), talk, {threshold: 0.8});
    if(talk){
        log("找到talk");
        let { x, y } = talk ;
        click(x, y);
    }
  }
while(talk==null);
sleep(1000);
do{
    log("找voice");
    auto();
    requestScreenCapture();
    var voice = images.read("/storage/emulated/0/img/voice.jpg");
    var voice = findImage(captureScreen(), voice, {threshold: 0.8});
    if(voice){
        log("找到voice");
        let { x, y } = voice ;
        click(x, y);
    }
  }
while(voice==null);

sleep(2000);
do{
    log("找menu");
    auto();
    requestScreenCapture();
    var menu = images.read("/storage/emulated/0/img/menu.jpg");
    var menu = findImage(captureScreen(), menu, {threshold: 0.8});
    if(menu){
        log("找到menu"+menu);
        let { x, y } = menu ;
        click(x, y);
    }
  }
while(menu==null);
  sleep(500);
do{
    log("找skip");
    auto();
    requestScreenCapture();
    var skip = images.read("/storage/emulated/0/img/skip.jpg");
    var skip = findImage(captureScreen(), skip, {threshold: 0.8});
    if(skip){
        log("找到skip"+skip);
        let { x, y } = skip ;
        click(x, y);
    }
  }
while(skip==null);
sleep(1000);
do{
    log("找skip2");
    auto();
    requestScreenCapture();
    var skip2 = images.read("/storage/emulated/0/img/skip2.jpg");
    var skip2 = findImage(captureScreen(), skip2, {threshold: 0.8});
    if(skip2){
        log("找到skip2"+skip2);
        let { x, y } = skip2 ;
        click(x, y);
    }
  }
while(skip2==null);
sleep(1000);
do{
    log("找ok");
    auto();
    requestScreenCapture();
    var ok = images.read("/storage/emulated/0/img/ok.jpg");
    var ok = findImage(captureScreen(), ok, {threshold: 0.8});
    if(ok){
      log("找到ok"+ok);
      let { x, y } = ok ;
      click(x, y);
  }
}
while(ok==null);