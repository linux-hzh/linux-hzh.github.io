var posts=["2024/03/18/git系列入门/","2024/03/17/maven入门/","2024/03/13/小程序开发Day01/","2024/03/17/markdown语法/","2024/03/14/小程序开发Day02/","2024/03/16/小程序开发Day04/","2024/03/15/小程序开发Day03/","2024/03/13/解决Tomcat服务器启动乱码问题/","2024/03/18/微信公众号申请流程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };