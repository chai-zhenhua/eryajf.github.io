(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{883:function(s,n,t){"use strict";t.r(n);var a=t(16),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("官网的介绍地址：https://kubernetes.io/docs/concepts/workloads/controllers/deployment/")]),s._v(" "),t("p",[s._v("一个部署控制器提供声明更新 pods 和 ReplicaSets。")]),s._v(" "),t("p",[s._v("您在 Deployment 对象中描述了所需的状态，Deployment 控制器以受控速率将实际状态更改为所需状态。您可以定义 “部署” 以创建新的 ReplicaSet，或者删除现有的部署并使用新的部署采用所有资源。")]),s._v(" "),t("p",[s._v("注意：您不应管理部署所拥有的 ReplicaSet。应该通过操作 Deployment 对象来涵盖所有用例。如果您的用例未在下面介绍，请考虑在主 Kubernetes 存储库中打开一个问题。")]),s._v(" "),t("p",[s._v("同样，我们首先来看一个对应类型的 yaml 文件。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$cat deployment_nginx.yml\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deployment\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deployment\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("replicas")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#replicas指的是replicaset，定义了3个数目。")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matchLabels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1.12.2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义镜像，这个地方随便指定了一个版本1.12.2")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containerPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("接下来创建一下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" create -f deployment_nginx.yml\ndeployment.apps "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-deployment"')]),s._v(" created\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("使用 deployments 之后，管理方式也随之变化：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get deployment\nNAME               DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("           7s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("当然，也可以使用其他方式查看到：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get deployment\nNAME               DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("           7s\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get rs\nNAME                          DESIRED   CURRENT   READY     AGE\nnginx-deployment-7498dc98f8   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         1m\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get pods\nNAME                                READY     STATUS    RESTARTS   AGE\nnginx-deployment-7498dc98f8-2hhvg   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          1m\nnginx-deployment-7498dc98f8-gljq6   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          1m\nnginx-deployment-7498dc98f8-l5xns   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          1m\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("这里可以做一个简单的有意思的小对比，可以看到，越往上层，名称越简化，又一次，曾经我提出过的，"),t("code",[s._v("提取公因式法")]),s._v("又出现了，看到在 pods 里边的时候，每个 pod 的名称区别在于最后的那几位随机数，而到 rs 这一层，则甩掉后边的几位数，提取了前边相同的，变成"),t("code",[s._v("nginx-deployment-7498dc98f8")]),s._v("，再到 deployments 当中，数字也去掉了，直接变成了"),t("code",[s._v("nginx-deployment")]),s._v("。")]),s._v(" "),t("p",[s._v("现在还回到正规的管理来查看：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get deployment -o wide\nNAME               DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE       CONTAINERS   IMAGES         SELECTOR\nnginx-deployment   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("           5m        nginx        nginx:1.12.2   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("动态扩容管理。命令很相像的。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get deployment\nNAME               DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("           11s\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" scale deployment nginx-deployment --replicas"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\ndeployment.extensions "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-deployment"')]),s._v(" scaled\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get deployment\nNAME               DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("           1m\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" scale deployment nginx-deployment --replicas"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\ndeployment.extensions "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-deployment"')]),s._v(" scaled\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get deployment\nNAME               DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("           2m\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("升级的试验。")]),s._v(" "),t("p",[s._v("这里可以通过一些指令直接针对 pod 当中的容器进行替换，从而实现升级。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" image deployment nginx-deployment "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("nginx")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx:1.13\ndeployment.apps "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-deployment"')]),s._v(" image updated\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("发现返回值没有问题。")]),s._v(" "),t("p",[s._v("那么查看一下过程：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get rs\nNAME                          DESIRED   CURRENT   READY     AGE\nnginx-deployment-7498dc98f8   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         9m\nnginx-deployment-86cd46c4d9   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         13s\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get rs\nNAME                          DESIRED   CURRENT   READY     AGE\nnginx-deployment-7498dc98f8   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         9m\nnginx-deployment-86cd46c4d9   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         18s\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get rs\nNAME                          DESIRED   CURRENT   READY     AGE\nnginx-deployment-7498dc98f8   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         9m\nnginx-deployment-86cd46c4d9   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         22s\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get pods\nNAME                                READY     STATUS    RESTARTS   AGE\nnginx-deployment-86cd46c4d9-gbrdx   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          11s\nnginx-deployment-86cd46c4d9-hs7bf   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          26s\nnginx-deployment-86cd46c4d9-mpwtr   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          12s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("这个过程，完成记录了此 deployment 偷梁换柱（更改镜像）的过程，并且新的 pod 也成功 run 起来了。那么来查看一下，是否真的如操作所预想的：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get deployment -o wide\nNAME               DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE       CONTAINERS   IMAGES       SELECTOR\nnginx-deployment   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("           10m       nginx        nginx:1.13   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这里可以看到，我们一开始定义的版本是 1.12.2，现在已经变成了 1.13 了。这些操作过的流程，也会被记录下来，可以通过如下指令进行查看：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" rollout "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" deployment nginx-deployment\ndeployments "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-deployment"')]),s._v("\nREVISION  CHANGE-CAUSE\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("看到有两次的历史记录。现在，更神奇的操作来了，我们可以直接将版本回归到第一次部署时的版本，而不需要其他外部的任何动作。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" rollout undo deployment nginx-deployment\ndeployment.apps "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-deployment"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get deployment -o wide\nNAME               DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE       CONTAINERS   IMAGES         SELECTOR\nnginx-deployment   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("           19m       nginx        nginx:1.12.2   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("除了感慨之外，还能说啥呢，以往在这种升级以及回滚的事情上，绞尽脑汁，费尽精力，现在，一切 so easy。")]),s._v(" "),t("p",[s._v("现在再去看一下历史：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" rollout "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" deployment nginx-deployment\ndeployments "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-deployment"')]),s._v("\nREVISION  CHANGE-CAUSE\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("发现 1 被覆盖了，就会这样的轮替，以后再进行发布以及回滚，都非常的方便了。")]),s._v(" "),t("p",[s._v("现在，简单说一下网络的事儿，上边有留下过一个疑问，就是如何将 pod 的端口妥善的映射到宿主机上来，这时可以通过如下指令：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" expose deployment nginx-deployment --type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NodePort\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-deployment"')]),s._v(" exposed\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这个时候其实是使用了 service 这个概念，下边会详细了解，接着来查看一下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master deployment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get svc\nNAME               TYPE        CLUSTER-IP       EXTERNAL-IP   PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        AGE\nkubernetes         ClusterIP   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.1        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/TCP        23h\nnginx-deployment   NodePort    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.111")]),s._v(".172.137   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":32188/TCP   22s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("可以看到刚刚定义的这个 NodePort，将内部的 80 端口映射到了集群的 32188 端口上来，现在就可以通过集群 IP+32188 来访问了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3df7ca60bf926a59.jpg",alt:"image"}})])])}),[],!1,null,null,null);n.default=e.exports}}]);