(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{1007:function(s,a,t){"use strict";t.r(a);var e=t(16),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("今天在写脚本时用到了sed命令，其中也学到不少新的东西，特此记录一下。")]),s._v(" "),t("p",[s._v("正确的操作如下所示：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("/c "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v('"')]),s._v(" a.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b.log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这里边用到了位置参数变量，是想制作一个可以灵活控制替换内容的脚本，在外部执行脚本的时候首先输入要替换的被匹配的内容，其次是输入替换后的内容。\n执行脚本的格式大概这样：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" aa.sh abc.url  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc.url=bcd"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在配置文件当中abc.url可能不是bcd，那么通过这个脚本，就能够把他改成bcd了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c42a6e321a370ec8.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("这个地方有两个地方要注意的：")]),s._v(" "),t("ul",[t("li",[s._v("1， sed后边是双引号，而不是单引号，如果单引号，则此命令会失败。原因是因为其中含有变量。")]),s._v(" "),t("li",[s._v("2， 这个只是做一个预览式修改，并没有真正更改其中内容，所以需要导出，然后再倒回原文件。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);