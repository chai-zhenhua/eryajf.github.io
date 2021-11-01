(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{885:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简述"}},[s._v("#")]),s._v(" 1，简述")]),s._v(" "),a("p",[s._v("官方地址：https://github.com/werf/kubedog功能说明：Kubedog 是一个库，用于监视和跟踪 CI / CD 部署管道中的 Kubernetes 资源。同时它也提供了一个二进制 cli 程序，让我们能够快速通过命令行对刚刚构建成功的应用状态做一些观测与打印。")]),s._v(" "),a("h2",{attrs:{id:"_2-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装"}},[s._v("#")]),s._v(" 2，安装")]),s._v(" "),a("p",[s._v("官方在 github 已经放置了不同系统的二进制文件，直接下载添加权限即可使用，可谓开箱即用。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://storage.yandexcloud.net/kubedog/targets/releases/v0.5.0/kubedog-linux-amd64-v0.5.0\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" kubedog-linux-amd64-v0.5.0 /usr/bin/kubedog\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/bin/kubedog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("添加环境变量，如果环境变量不固定，也可以在运行的时候通过参数 "),a("code",[s._v("--kube-config")]),s._v(" 指定：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'KUBEDOG_KUBE_CONFIG=/root/.kube/config'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("查看参数：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubedog -h\nUsage:\n  kubedog "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nAvailable Commands:\n  follow\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("        Help about any "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n  multitrack  Track multiple resources using multitrack tracker\n  rollout\n  version\nFlags:\n  -h, --help                   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" kubedog\n      --kube-config string     Path to the kubeconfig "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("can be "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" with "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$KUBEDOG_KUBE_CONFIG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n      --kube-context string    The name of the kubeconfig context to use "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("can be "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" with "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$KUBEDOG_KUBE_CONTEXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n      --logs-since string      A duration like 30s, 5m, or 2h to start log records from the past. "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'all'")]),s._v(" to show all logs and "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'now'")]),s._v(" to display only new records "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"now"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -n, --namespace string       If present, the namespace scope of a resource. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --output-prefix string   Arbitrary string "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" will be prefixed to kubedog output.\n  -t, --timeout int            Timeout of operation "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" seconds. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" is "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wait")]),s._v(" forever. Default is "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default -1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nUse "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kubedog [command] --help"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information about a command.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"_3-试用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-试用"}},[s._v("#")]),s._v(" 3，试用")]),s._v(" "),a("p",[s._v("这里重要的两个参数是："),a("code",[s._v("follow")]),s._v("，"),a("code",[s._v("rollout")]),s._v("，接下来通过示例分别体验一下两个参数。")]),s._v(" "),a("h3",{attrs:{id:"_1-follow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-follow"}},[s._v("#")]),s._v(" 1，follow")]),s._v(" "),a("p",[s._v("follow 可以跟踪资源从创建到 Ready 对外提供服务的整个过程，并将 pod 日志打印。")]),s._v(" "),a("p",[s._v("首先创建一个简单的示例程序：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl apply  -f tools.yml\ndeployment.extensions/tools created\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后使用命令监听程序的事件：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubedog follow  -n "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" deployment tools\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deploy/tools added")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deploy/tools rs/tools-55887db99 po/tools-55887db99-h5knt added")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deploy/tools new rs/tools-55887db99 added")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deploy/tools become READY")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("注意")]),s._v("：这个参数进入的是终端的前台监听，不会退出终端。")]),s._v(" "),a("h3",{attrs:{id:"_2-rollout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-rollout"}},[s._v("#")]),s._v(" 2，rollout")]),s._v(" "),a("p",[s._v("rollout 与 follow 对比，不会输出 pod 运行日志，直接打印 pod 状态。")]),s._v(" "),a("p",[s._v("首先创建一个简单的示例程序：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl apply  -f tools.yml\ndeployment.extensions/tools created\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后使用命令监听程序的事件：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubedog")]),s._v(" rollout track  -n "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" deployment tools\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deploy/tools become READY")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("code",[s._v("注意")]),s._v("：我们通常可以判断这个命令的返回值来判断应用部署后的状态。另外一点就是这个命令不会在前台监听，而且在 Jenkins 流水线中，还会输出 pod 对应的日志内容。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c837eb9cb6e5aca1.jpg",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"_4-实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-实践"}},[s._v("#")]),s._v(" 4，实践")]),s._v(" "),a("p",[s._v("我们可以直接在构建命令后边添加如下命令示例：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("stage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'基于文件部署'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    when "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        environment name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'BUILD_AS_FILE'")]),s._v(",value: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    steps "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v('/deploy-k8s-yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        script "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            try "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                ansiColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xterm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    configFileProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("configFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fileId: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${K8S_AUTH}")]),s._v('"')]),s._v(", targetLocation: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin.kubeconfig"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v('"\n                            kubectl --kubeconfig admin.kubeconfig apply -f '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v("/deploy-k8s-yaml/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${YAML_PATH}")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SERVICE_NAME}")]),s._v(".yaml\n                            kubedog --kube-config admin.kubeconfig rollout track -n "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DEPLOY_ENV}")]),s._v(" deployment "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SERVICE_NAME}")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v('"\n                    '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("catch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                env.REASON "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"基于YAML文件部署出错"')]),s._v("\n                throw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("这样在应用部署之后，我们就可以很直观地观测到它在集群中的状态变化了。")]),s._v(" "),a("p",[s._v("具体日志这里就不做展示了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);