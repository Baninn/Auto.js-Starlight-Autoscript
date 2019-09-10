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
/*
engines.execScriptFile("/storage/emulated/0/脚本/Starlight.js", {
    loopTimes: 5,
    interval: 3000
});
*/

engines.execScriptFile("/storage/emulated/0/脚本/Starlight.js");
sleep(3000);
engines.execScriptFile("/storage/emulated/0/脚本/Starlight.js");
sleep(3000);
engines.execScriptFile("/storage/emulated/0/脚本/Starlight.js");
sleep(3000);
engines.execScriptFile("/storage/emulated/0/脚本/Starlight.js");
sleep(3000);
engines.execScriptFile("/storage/emulated/0/脚本/Starlight.js");