(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{845:function(s,n,e){"use strict";e.r(n);var a=e(16),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("有时候可能某个节点需要某些维护，需要从集群中踢出，那么如何才能妥善将某个节点踢出呢？")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("第一步：下线节点")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# 通过节点name下线\nPUT _cluster/settings\n{\n  "transient" : {\n    "cluster.routing.allocation.exclude._name" : "elk-node2"\n  }\n}\n# 通过IP下线\nPUT _cluster/settings\n{\n  "transient" : {\n    "cluster.routing.allocation.exclude._ip" : "10.3.3.3"\n  }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("表示第二个节点将要下线，操作之后就能够看到节点2上的分片都会往其他节点转移了。等转移完毕之后，就能下线了。")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d7d6941df389a26f.jpg",alt:""}})])]),s._v(" "),e("li",[e("p",[s._v("加回节点")]),s._v(" "),e("p",[s._v("如果只是重启节点，然后还要加入集群，可以转移完毕，重启，然后执行如下命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('PUT _cluster/settings\n{\n  "transient" : {\n    "cluster.routing.allocation.exclude._name" : ""\n  }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("让 "),e("code",[s._v("_name")]),s._v("设为空，就好了。当然这个地方也可以替换成ip,host都可以。")])])]),s._v(" "),e("p",[s._v("其中下线的时候，可能会因为一些默认参数，导致下线速度很慢，可以通过如下参数进行一些调整。")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("调整单个节点的入口并发恢复的分片数量，默认是2")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('PUT _cluster/settings\n{\n  "transient" : {\n    "cluster.routing.allocation.node_concurrent_incoming_recoveries" : "3"\n  }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("调整单个节点的出口并发恢复的分片数量，默认是2")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('PUT _cluster/settings\n{\n  "transient" : {\n    "cluster.routing.allocation.node_concurrent_outgoing_recoveries" : "3"\n  }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("blockquote",[e("p",[s._v("如上两个参数在遇到节点需要上下线时调整移动队列有非常大的作用。")])])]),s._v(" "),e("li",[e("p",[s._v("集群内同时启动的数据任务个数，默认是2个")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('PUT _cluster/settings\n{\n  "transient" : {\n    "cluster.routing.allocation.cluster_concurrent_rebalance" : "30"\n  }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("调整恢复速度")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('PUT /_cluster/settings\n{\n  "transient": {"indices.recovery.max_bytes_per_sec": "1580m"}\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])])])}),[],!1,null,null,null);n.default=t.exports}}]);