# Auto.js-Starlight-Autoscript

基于Auto.js的少女歌剧自动刷协力脚本

最近少鸽手游的协力可以拿牌子换宝冠，对于升R8 R9非常有用

无奈协力房间太少，好不容易刷出来一个房，立刻就满了

而且想要无缝协力的话，两个半小时就要打5把

手点太费时间，就入门了Auto.js写了一个脚本

（这样就可以边协力边邦邦了

### 使用说明

1. 下载项目
	[点击下载最新项目包](https://codeload.github.com/Baninn/Auto.js-Starlight-Autoscript/zip/master)

2. 安装auto.js，在设置中开启`音量上键停止所有脚本`

3. 将项目中的全部文件放置于手机存储

	默认目录 `/storage/emulated/0/脚本/`
	
4. 使用 `Auto.js` 运行 `*.js` 格式的脚本文件

   打开悬浮窗，进入房间选择页面，开启脚本

**注意：该脚本仅在小米6 MIUI 10.3 Android8.0.0 测试通过**

​			**理论上Android7.0以上16:9的1080P屏幕都可以使用**

更多功能完善中，欢迎提交issue

（这么冷门的手游会有人用吗）（悲）

### 功能简介
* Starlight.js 用来刷协力

	请先进入房间选择界面
	
	启动 Startlight.js 以开启循环
	
	由于auto.js自带循环功能与请求截图权限有冲突（暂无法解决）
	
	默认无限循环（直到体力耗尽），请务必开启悬浮窗并最好保持在屏幕左侧边缘
	
	默认选择前三个补胎烧酒，请先设置好队伍
	
	脚本正在执行点击/滑动时请勿操作屏幕
	
* talk.js 自动点击マイシアター里的对话拿体力

	请先进入マイシアター页面再启动脚本
	
* Revue.js 和 Retire.js 自动PVP和自动投降

	请先进入有-開始-的页面（选队伍的前一个页面）再启动脚本

	默认无限循环，宝石箱满不会继续操作

	仍然想打请手动点击弹出窗口的-開始-

	务必把悬浮窗放在屏幕背景纯色的位置

* 所有脚本均加入点击坐标随机偏移

	（这么冷门的手游也封脚本吗）（悲×2）
	
* 新增アルテミス活动自动打杂鱼关和开箱子

	运行Event.js
	请务必把悬浮窗放在最左下角


### 预计增加的功能（咕）
* ~~循环运行脚本~~ （已可用）
* 定时启动脚本（无缝协力和对话）
* 适配不同分辨率 （有人提我就做）
* 打包成apk （Auto.js作者弃坑了我也。。

