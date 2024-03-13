var posts=["2024/03/12/hello-world/","2024/03/13/小程序开发环境配置/","2024/03/13/解决Tomcat服务器启动乱码问题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };