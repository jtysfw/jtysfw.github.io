var posts=["2024/06/21/家庭医生服务内容/","2024/06/24/安装零信任VPN教程/","2024/06/22/国家基本公共卫生服务/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };