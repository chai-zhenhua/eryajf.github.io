(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{773:function(t,s,a){"use strict";a.r(s);var n=a(16),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-手动上传包。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-手动上传包。"}},[t._v("#")]),t._v(" 1，手动上传包。")]),t._v(" "),a("p",[t._v("之前有不少人问过nexus私服搭建好了之后，我该如何将一些新的外部包上传到私服当中呢，其实是非常简单的。")]),t._v(" "),a("p",[t._v("首先是要登录上去，然后点击 "),a("code",[t._v("Upload")]),t._v("，找到 "),a("code",[t._v("maven-local")]),t._v("将jar包找到选中，然后填写对应的三个定位信息即可上传。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/bedb667e8c85b089.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("在引用的时候，道理是一样的，将刚刚定义的三个定位信息写入到项目的pom文件当中，即可引用。")]),t._v(" "),a("h2",{attrs:{id:"_2-引用snapshot的一个坑。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-引用snapshot的一个坑。"}},[t._v("#")]),t._v(" 2，引用SNAPSHOT的一个坑。")]),t._v(" "),a("p",[t._v("前天一个开发者过来找到我，说自己通过命令行往私服上传了一个"),a("code",[t._v("SNAPSHOT")]),t._v("（关于快照包的概念请自行百度，这里不赘述了）包，接着就在pom当中引用这个包，发现总是报错，报错内容大概如下：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Failed to execute goal on project ishangjie-admin-service: Could not resolve dependencies "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" project com.ald.ishangjie:ishangjie-admin-service:jar:1.0.0: Could not "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" artifact com.ald.ishangjie:ishangjie-activity-service-client:jar:0.0.1-SNAPSHOT -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Help "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" To see the full stack trace of the errors, re-run Maven with the -e switch.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Re-run Maven using the -X switch to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" full debug logging.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" For "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information about the errors and possible solutions, please "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v(" the following articles:\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Help "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" http://cwiki.apache.org/confluence/display/MAVEN/DependencyResolutionException\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("大概意思就是无法引用到。")]),t._v(" "),a("p",[t._v("后来在其他地方找到了答案：")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("blockquote",[a("p",[t._v("Maven内置的插件远程仓库配置，"),a("strong",[t._v("关闭了对SNAPSHOT的支持")]),t._v("，防止不稳定的构建")])])]),t._v(" "),a("p",[t._v("所以解决办法最关键的是：在maven 的conf 目录下的setting.xml 文件中，"),a("strong",[t._v("添加对SNAPSHOT的支持")]),t._v("，将 "),a("code",[t._v("false")]),t._v("改为 "),a("code",[t._v("true")]),t._v("即可。")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("snapshots")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n　　"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("snapshots")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("现在再去进行构建，就不会报刚刚的错误了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0d230885e915a821.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("参考地址：http://t.cn/AiCnBtIR")])])}),[],!1,null,null,null);s.default=e.exports}}]);