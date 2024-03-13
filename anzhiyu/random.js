var posts=["2024/03/13/我的第一篇博客/","2024/03/12/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };