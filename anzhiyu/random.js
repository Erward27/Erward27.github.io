var posts=["2025/08/30/hello-world/","2025/08/30/some-talking/","2025/08/30/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };