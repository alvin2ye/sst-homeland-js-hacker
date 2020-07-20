var renderUserBar = function () {
  // 删除之前的按钮 1
  $("ul.user-bar").children()[0].remove();
  $("ul.user-bar").children()[0].remove();

  // 添加菜单说明
  $("#navbar-user-menu").append('<span>菜单</span>')
  $(".user-bar").css({ "height": 50, "min-width": 100 }).attr("data-miniprogram-render", 1);


  // 加入菜单
  var btnClose = '<a class="dropdown-item" href="javascript:wx.miniProgram.navigateBack()" style="color: #e4263f;"  class="nav-link">关闭</a>';
  var btnNew = '<a class="dropdown-item" href="/topics/new">投稿</a>';
  var btnNotice = '<a class="dropdown-item" href="/notifications">我的消息</a>';
  $(".dropdown-menu").append(btnNew);
  $(".dropdown-menu").append(btnNotice);
  $(".dropdown-menu").append(btnClose);
}

// 开起来方便测试
// renderUserBar();

var ready = function () {
  if(window.__wxjs_environment === 'miniprogram')  {
    renderUserBar();
  }
}

if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
  document.addEventListener('WeixinJSBridgeReady', ready, false)
} else {
  ready()
}

// fix css bug
$(".counter").css({padding: 10})
