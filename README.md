# board
这是一个board的模板：管理人员可以通过该board封装数据，其它用户可以查看以图表形式展示的管理人员封装的数据。
##环境：
1、硬件环境 Windows/linux    
2、软件环境 nodejs + express + socket.io + redis + mysql
##搭建步骤
1、将项目克隆到本地：git clone +url     
---
2、安装express     
  （1）首先，express是nodejs平台上的web开发框架，所以安装express之前必须先安装nodejs，这里省略；    
  （2）然后，安装express框架：npm install -g express-generator（这是在全局环境中安装express）    
3、搭建express框架    
  （1）express -e filename
此步骤是安装基本的express框架，会自动生成工作目录。
其中，filename是总的工作目录；app.js是入口函数所在文件；public文件夹下有images（放图片）、javascripts（放js文件）、stylesheets（放CSS文件）；views文件夹下放html文件。
（2）cd filename && npm install
此步骤是在filename文件夹下安装依赖
4、安装数据库redis
（1）Windows下安装：略
（2）Linux下安装：略
5、运行整个项目
（1）启动数据库redis：
Windows下：先打开redis-server.exe，再打开redis-cli.exe；
Linux下：
（2）启动服务器：
Windows下：通过终端进入到www文件所在目录，然后输入命令：node www；
Linux下：
（3）在浏览器中输入网址：localhost:3000，进入网站首页
（4）展示后台的数据到board上：通过终端进入到testPublish.js文件所在目录，然后输入命令：node testPublish.js


