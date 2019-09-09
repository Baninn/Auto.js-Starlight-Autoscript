auto();
requestScreenCapture();
/*
do{
    log("找home");
    var home_pic = images.read("/storage/emulated/0/img/home.jpg");
    var home = findImage(captureScreen(), home_pic, {threshold: 0.8});
    if(home){
        log("找到home");
        home.x += Math.round(Math.random() * home_pic.getWidth());
        home.y += Math.round(Math.random() * home_pic.getHeight());
        click(home.x, home.y);
    }
  }
while(home==null);
sleep(1000);
*/

do{
    log("找talk");
    var talk_pic = images.read("/storage/emulated/0/img/talk.jpg");
    var talk = findImage(captureScreen(), talk_pic, {threshold: 0.8});
    if(talk){
        log("找到talk");
        talk.x += Math.round(Math.random() * talk_pic.getWidth());
        talk.y += Math.round(Math.random() * talk_pic.getHeight());
        click(talk.x, talk.y);
    }
  }
while(talk==null);
sleep(1000);
do{
    log("找voice");
    var voice_pic = images.read("/storage/emulated/0/img/voice.jpg");
    var voice = findImage(captureScreen(), voice_pic, {threshold: 0.8});
    if(voice){
        log("找到voice");
        voice.x += Math.round(Math.random() * voice_pic.getWidth());
        voice.y += Math.round(Math.random() * voice_pic.getHeight());
        click(voice.x, voice.y);
    }
  }
while(voice==null);

sleep(2000);
do{
    log("找menu");
    auto();
    requestScreenCapture();
    var menu_pic = images.read("/storage/emulated/0/img/menu.jpg");
    var menu = findImage(captureScreen(), menu_pic, {threshold: 0.8});
    if(menu){
        log("找到menu"+menu);
        menu.x += Math.round(Math.random() * menu_pic.getWidth());
        menu.y += Math.round(Math.random() * menu_pic.getHeight());
        click(menu.x, menu.y);
    }
  }
while(menu==null);
  sleep(500);
do{
    log("找skip");
    auto();
    requestScreenCapture();
    var skip_pic = images.read("/storage/emulated/0/img/skip.jpg");
    var skip = findImage(captureScreen(), skip_pic, {threshold: 0.8});
    if(skip){
        log("找到skip"+skip);
        skip.x += Math.round(Math.random() * skip_pic.getWidth());
        skip.y += Math.round(Math.random() * skip_pic.getHeight());
        click(skip.x, skip.y);
    }
  }
while(skip==null);
sleep(1000);
do{
    log("找skip2");
    auto();
    requestScreenCapture();
    var skip2_pic = images.read("/storage/emulated/0/img/skip2.jpg");
    var skip2 = findImage(captureScreen(), skip2_pic, {threshold: 0.8});
    if(skip2){
        log("找到skip2"+skip2);
        skip2.x += Math.round(Math.random() * skip2_pic.getWidth());
        skip2.y += Math.round(Math.random() * skip2_pic.getHeight());
        click(skip2.x, skip2.y);
    }
  }
while(skip2==null);
sleep(1000);
do{
    log("找ok");
    auto();
    requestScreenCapture();
    var ok_pic = images.read("/storage/emulated/0/img/ok.jpg");
    var ok = findImage(captureScreen(), ok_pic, {threshold: 0.8});
    if(ok){
      log("找到ok"+ok);
      ok.x += Math.round(Math.random() * ok_pic.getWidth());
      ok.y += Math.round(Math.random() * ok_pic.getHeight());
      click(ok.x, ok.y);
  }
}
while(ok==null);