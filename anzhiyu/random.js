var posts=["2024/03/13/小程序开发Day01/","2024/03/16/小程序开发Day04/","2024/03/14/小程序开发Day02/","2024/03/15/小程序开发Day03/","2024/03/13/解决Tomcat服务器启动乱码问题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };