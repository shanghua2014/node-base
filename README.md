## 5.6页面测试
```sh
$npm install mocha --save-dev
```
测试需要一个assert(或expect)函数。但浏览器没有，所以我们需要安装Chai断言库：
```sh
$npm install chai --save-dev
```
[测试链接-加上test参数即可]http://localhost:3000/about?test=1

## 4.6Node模块
导出/导入自定义模块

## 3.3.3视图中的动态内容

## 3.3.2 视图和静态文件
添加static中间件。中间件相当于给你想要发送的所有静态文件创建了一个路由，渲染文件并发送给客户端。

## 3.3.1 视图和布局
设置路由