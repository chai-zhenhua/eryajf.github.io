(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{668:function(a,n,t){"use strict";t.r(n);var e=t(16),s=Object(e.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("有时候一些机器在前期规划的时候，磁盘并没有合理规划，可能根分区分配了很小的空间，或者某个当前业务正在占用的分区很小，服务还并不太允许停机调整，而且磁盘前期也没有做成lvm可扩容的格式。")]),a._v(" "),t("p",[a._v("这个时候，使用如下步骤，可以非常快捷方便地将当前目录磁盘压力释放掉。")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://t.eryajf.net/imgs/2021/09/31a4e0cc9827ce7c.jpg",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/31a4e0cc9827ce7c.jpg",alt:"img"}}),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("比如我现在在根目录下存了一些代码编译的缓存，这个缓存日益壮大，直到现在快要逼破根分区的整个磁盘，而同时本机还有一个分区，这个分区有相当大的空闲，可用如下方式操作。")]),a._v(" "),t("p",[a._v("比如我发布的中心机上有很多依赖包的缓存，这个包又不便于直接删除，就可以通过下方的操作解决。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /data/build/cache/yarn/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rsync")]),a._v(" -avl /home/www/.cache/yarn/ /data/build/cache/yarn/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf /home/www/.cache/yarn/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" -snf /data/build/cache/yarn /home/www/.cache/yarn\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("这个时候，只要手快，趁程序不注意，是完全可以无缝将数据切走的！！")])])}),[],!1,null,null,null);n.default=s.exports}}]);