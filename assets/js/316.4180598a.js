(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{882:function(s,n,a){"use strict";a.r(n);var t=a(16),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("刚刚默认创建的 pod 就只有一个，那么如何创建多个 pod，以及动态扩容呢。")]),s._v(" "),a("p",[s._v("我们进行如下操作之前，先将之前启动的 nginx 的 pod 删掉，使用如下指令：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master pod-basic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" delete -f pod_nginx.yml\npod "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v(" deleted\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master pod-basic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get pods\nNo resources found.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_1-replicationcontroller。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-replicationcontroller。"}},[s._v("#")]),s._v(" 1，ReplicationController。")]),s._v(" "),a("p",[s._v("现在来看一个新的 yaml 文件：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$cat rc_nginx.yml\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ReplicationController\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("这是一个"),a("code",[s._v("ReplicaSet")]),s._v("类型的，下边又可以看到定义的数字是 3，也就是启动 3 个 pod。")]),s._v(" "),a("p",[s._v("现在开始创建：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas-set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" create -f rc_nginx.yml\nreplicationcontroller "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v(" created\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas-set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get pods\nNAME          READY     STATUS              RESTARTS   AGE\nnginx-2qzvm   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          7s\nnginx-c5nk4   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1       ContainerCreating   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          7s\nnginx-r2zcm   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1       ContainerCreating   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          7s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("这里可以看到，已经有三个了，其中有两个的状态还是启动中的，那么等待一会儿，就也 running 起来了。")]),s._v(" "),a("p",[s._v("这个时候还可以使用另外一个命令来查看状态：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas-set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get rc\nNAME      DESIRED   CURRENT   READY     AGE\nnginx     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         1m\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("此时，我们尝试一下删除其中的一个 pod，看看会有什么效果。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas-set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get pods\nNAME          READY     STATUS    RESTARTS   AGE\nnginx-2qzvm   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          4m\nnginx-c5nk4   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          4m\nnginx-r2zcm   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          4m\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas-set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" delete pods nginx-2qzvm\npod "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-2qzvm"')]),s._v(" deleted\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas-set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get pods\nNAME          READY     STATUS              RESTARTS   AGE\nnginx-c5nk4   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          5m\nnginx-qlwl2   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1       ContainerCreating   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2s\nnginx-r2zcm   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          5m\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("删除了一个，然后再次查看的时候，发现又有一个新的 pod 在生成中了，也就是说，当 pod 以这种"),a("code",[s._v("kind: ReplicationController")]),s._v("方式启动的时候，会维持住 3 个这个数目。这就是他的特性，因此在启动一个 pod 的时候，是推荐使用这种方式的，即便数目是 1 个，那么即便这个 pod 会在某个时刻某个原因退出了，仍旧会被自动创建恢复出来。")]),s._v(" "),a("p",[s._v("在动态扩容管理方面，我们需要引入到另外一个参数"),a("code",[s._v("scale。")])]),s._v(" "),a("p",[s._v("依旧是先看下用法：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root @ master replicas-set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" $ kubectl scale --help\n为Deployment，ReplicaSet，Replication Controller或StatefulSet设置新大小。\n \nScale还允许用户为缩放操作指定一个或多个前提条件。\n \n如果指定了--current-replicas或--resource-version，则在尝试扩展之前验证它，并且它是\n保证在将比例发送到服务器时前提条件成立。\n \n例子：\n  ＃将名为"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v("的复制集缩放为3。\n  kubectl scale --replicas "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" rs / foo\n \n  ＃将由“foo.yaml”中指定的类型和名称标识的资源缩放为3。\n  kubectl scale --replicas "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" -f foo.yaml\n \n  ＃如果名为mysql当前大小的部署为2，则将mysql扩展为3。\n  kubectl scale --current-replicas "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" --replicas "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" deployment / mysql\n \n  ＃缩放多个复制控制器。\n  kubectl scale --replicas "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" rc / foo rc / bar rc / baz\n \n  ＃将名为"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'web'")]),s._v("的statefulset缩放为3。\n  kubectl scale --replicas "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" statefulset / web\n \n选项：\n      --all "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" false：选择指定资源类型的命名空间中的所有资源\n      --current-replicas "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" -1：当前大小的前提条件。要求资源的当前大小与此匹配\n价值以便扩大规模。\n  -f， - filename "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：标识要设置新大小的资源的文件的文件名，目录或URL\n      --include-extended-apis "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" true：如果为true，则通过调用API服务器包含新API的定义。 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("默认为true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  -o， - output "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("：输出模式。使用“-o name”表示较短的输出（资源/名称）。\n      --record "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" false：在资源注释中记录当前kubectl命令。如果设置为false，请不要记录\n命令。如果设置为true，则记录该命令。如果未设置，则默认仅更新现有注释值\n已经存在。\n  -R， - recursive "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" false：递归处理-f， - filename中使用的目录。在您想要管理时很有用\n在同一目录中组织的相关清单。\n      --replicas "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" -1：新的所需副本数。需要。\n      --resource-version "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("：资源版本的前提条件。要求当前资源版本与此匹配\n价值以便扩大规模。\n  -l， - selector "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("：要过滤的选择器（标签查询），支持"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'='")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'=='")]),s._v("和"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'！='")]),s._v("。（例如-l key1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value1，key2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value2）\n      --timeout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0s：放弃缩放操作之前等待的时间长度，零表示不等待。任何其他\n值应包含相应的时间单位（例如1s，2m，3h）。\n \n用法：\n  kubectl scale "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--resource-version "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" - current-replicas "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --replicas "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" COUNT（-f FILENAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" TYPE NAME）\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n \n使用“kubectl options”获取全局命令行选项列表（适用于所有命令）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])]),a("p",[s._v("现在，我想把刚刚启动的 nginx 的 3 个 pod 变成两个，可如下操作：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas-set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" scale rc nginx --replicas"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nreplicationcontroller "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v(" scaled\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas-set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get pods\nNAME          READY     STATUS    RESTARTS   AGE\nnginx-c5nk4   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          13m\nnginx-r2zcm   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          13m\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas-set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get rc\nNAME      DESIRED   CURRENT   READY     AGE\nnginx     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         14m\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("这时看到已经剩下两个了。那么扩容也是一样的，直接扩容就行了。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas-set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" scale rc nginx --replicas"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\nreplicationcontroller "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v(" scaled\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas-set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get pods\nNAME          READY     STATUS              RESTARTS   AGE\nnginx-99nns   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1       ContainerCreating   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2s\nnginx-c5nk4   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          42m\nnginx-fjnrn   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1       ContainerCreating   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2s\nnginx-r2zcm   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          42m\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master replicas-set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get rc\nNAME      DESIRED   CURRENT   READY     AGE\nnginx     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         42m\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("就这样，非常方便的就实现了扩容等操作了。")])])}),[],!1,null,null,null);n.default=e.exports}}]);