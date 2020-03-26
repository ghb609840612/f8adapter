# F8 App 2017

This is the entire source code of the official [F8](https://fbf8.com/) app of 2017, available on [Google Play](https://play.google.com/store/apps/details?id=com.facebook.f8) and the [App Store](https://itunes.apple.com/us/app/f8/id853467066).

<img src=".github/screenshot-app@2x.png" width="800">


## How We Build It

We've created a series of tutorials at http://makeitopen.com/ that explain how we built the app, and that dive into how we used React Native, Redux, Relay, GraphQL, and more.

Check out how to set the app up for local development [here](http://makeitopen.com/docs/en/1-A1-local-setup.html)!

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

Welcome to the f8adapter wiki!
## 简介
* 来源
> https://github.com/fbsamples/f8app
> 原项目无法构建，一是被废弃，二是依赖有问题
* 目的
> 该项目使用RN，graphql，relay，parse-server，parse-dashboard,mongo-db
> 虽然项目废弃，但项目架构依然存在，依然有不小的学习价值，可以运行起来后，感觉又有了灵魂
## 准备（由于windows10系统，android环境，所以只有android是好的）
* docker容器： 我用的是Docker for Windows Installer，安装这个后，模拟器是不能用了，真机调吧
* mongo-db: 自己配置，教程一堆
## 打开项目
* npm install
* npm run server（先开启Docker desk）
> 检查下，在浏览器中输入**http://localhost:4040/apps** 检查parse-board是否启动成功 一般用户名密码是admin
不会上传截图。。
> **http://localhost:4000/** 检查parse-server是否成功
## 编译项目
> 初次运行还是建议android studio，配置好android环境运行起来后，下次就可以不用studio了
> `每次RN代码有修改并需要生效时，需要用这个命令，将RN代码打成bundle在android assets目录下，命令如下：react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/` dev后的参数可修改，如果想要调试时设为true
> 可以npm run android了
## 小发现
* 在setup.js中将Playground放开，就可以在其中渲染任意组件，方便查看单个组件的效果
## so enjoy it！
