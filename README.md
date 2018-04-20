# 示例程序

### 包含 
*　1、iview+vuex+axios 
*　2、引入了echart3.0 
*  3、引入了jquery最新版 
*  4、已配置好基本打包配置

### 运行
* npm install   
* npm run dev
* npm run build

### 部署
* nginx下 
  publicPath: '/工程名/'  指定base:'/工程名/'
* tomcat下  
  publicPath: './'   指定base: '/工程名/'
  
### 常见错误
* 部署到服务器访问空白
  解决: 检查webpack.prop配置和main.js的base
* 路由回退到404
  解决：检查main.js中的base
