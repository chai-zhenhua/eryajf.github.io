(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{683:function(s,t,n){"use strict";n.r(t);var a=n(16),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("新办公室网络与腾讯云内网同网段主机，部分能通，部分不通，再三确认配置，均无问题，后来定位到问题："),n("code",[s._v("办公室内网网段与不通的主机中docker网络网段冲突")]),s._v("，以至于始终不通，那么可以通过更改网段来解决，也可以通过调整办公室内网网段来解决。")]),s._v(" "),n("p",[s._v("docker 更改网段操作如下。")]),s._v(" "),n("ul",[n("li",[s._v("安装 brctl 命令")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" bridge-utils -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("删除旧网络")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker stop\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" dev docker0 down\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" dev br-7eaec4fdf810 down\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" brctl delbr docker0\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" brctl delbr br-7eaec4fdf810\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("此时老的网络已经全部清除，接着修改配置文件，重启即可将新的网段生效。")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/docker/daemon.json\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://yr84fwcf.mirror.aliyuncs.com"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry.docker-cn.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bip"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.1/24"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"graph"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/docker/docker-root-dir"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("重启 docker 服务可以看到新的网段。")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a8530db9a1aeead1.jpg",alt:"img"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);