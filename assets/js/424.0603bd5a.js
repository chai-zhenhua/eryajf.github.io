(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{989:function(t,e,a){"use strict";a.r(e);var r=a(16),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("写在最前面，本人以惨痛教训告诉你，工作机不要乱升级，尤其是 10.15 这种级别的大更新。")]),t._v(" "),a("p",[t._v("如果是自己的日用机并且你喜欢折腾，欢迎体验新的 macos Catalina。")]),t._v(" "),a("p",[t._v("之前一篇文章也提到："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/cejnbYyV0AXWknG8oL0YAw",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS 13 和 macOS Catalina 初体验"),a("OutboundLink")],1),t._v("，新版本的 macOS 有很多很棒的地方，但是同样存在很多坑，虽然有些我并不认为是系统本身的问题。")]),t._v(" "),a("p",[t._v("其中最重要的是，macOS 10.15 中根目录变成了只读，原来很多喜欢往根目录 / 下面写东西的软件都会失效，对我来说，可能问题更严重一些。")]),t._v(" "),a("p",[t._v("背景故事：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f931d8628045691d.jpg",alt:"image-20191008090206601"}})]),t._v(" "),a("p",[t._v("我遇到了同样的问题……")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d18b9c48ad054175.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("一开始我是认可这种改动的，而且认为毕竟大家都是最终要升级的，总归要改的对吧？抱着这种念头用 Windows 开发了一周，最后顶不住了开始找解救方案。")]),t._v(" "),a("p",[t._v("解决方案：")]),t._v(" "),a("p",[t._v("1.关闭SIP，重启机器，开机瞬间按command+r进入救援模式，然后在实用工具中选择终端，使用如下命令管理sip")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("csrutil status\t#查看状态\ncsrutil enable\t#开启\ncsrutil disable #关闭\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("2.执行 "),a("code",[t._v("sudo mount -uw /")])]),t._v(" "),a("p",[t._v("3.根目录下新建文件夹并赋权 sudo "),a("code",[t._v("mkdir /xxx")]),t._v("，"),a("code",[t._v("sudo chmod 777 /xxx")])]),t._v(" "),a("p",[t._v("所以这种东西为什么要写死在代码呢？感谢 v 站。")]),t._v(" "),a("h1",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.v2ex.com/t/606592#reply4",target:"_blank",rel:"noopener noreferrer"}},[t._v("升级 macOS 10.15 之后根目录只读，公司项目打不开了，求助 555"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://v2ex.com/t/606592#reply8",target:"_blank",rel:"noopener noreferrer"}},[t._v("mac os 升级 catalina 之后，没有办法在根目录新建文件，导致依赖 Cat 的 Java 项目无法启动"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/fe78d2036192",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mac开启关闭SIP 系统完整性保护"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("推荐阅读")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://hellogod.cn/2019-09-22/ios-13-and-macos-catalina/",target:"_blank",rel:"noopener noreferrer"}},[t._v("体验 | iOS 13 和 macOS Catalina 初体验"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://hellogod.cn/2017-09-17/macOS-tips/",target:"_blank",rel:"noopener noreferrer"}},[t._v("macOS上的好用软件和使用Tips"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);