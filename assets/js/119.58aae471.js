(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{684:function(e,a,s){"use strict";s.r(a);var t=s(16),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"_1-查看磁盘占用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看磁盘占用"}},[e._v("#")]),e._v(" 1，查看磁盘占用")]),e._v(" "),s("p",[s("strong",[e._v("docker system df")]),e._v(" 命令，类似于 "),s("strong",[e._v("Linux")]),e._v("上的 "),s("strong",[e._v("df")]),e._v(" 命令，用于查看 "),s("strong",[e._v("Docker")]),e._v(" 的磁盘使用情况：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("docker system df\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v("TYPE")]),e._v("列出了 "),s("strong",[e._v("Docker")]),e._v(" 使用磁盘的 "),s("strong",[e._v("4")]),e._v(" 种类型：")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Images")]),e._v(" ：所有镜像占用的空间，包括拉取下来的镜像，和本地构建的。")]),e._v(" "),s("li",[s("strong",[e._v("Containers")]),e._v(" ：运行的容器占用的空间，表示每个容器的读写层的空间。")]),e._v(" "),s("li",[s("strong",[e._v("Local Volumes")]),e._v(" ：容器挂载本地数据卷的空间。")]),e._v(" "),s("li",[s("strong",[e._v("Build Cache")]),e._v(" ：镜像构建过程中产生的缓存空间（只有在使用 "),s("strong",[e._v("BuildKit")]),e._v(" 时才有，"),s("strong",[e._v("Docker 18.09")]),e._v(" 以后可用）。")])]),e._v(" "),s("p",[e._v("最后的 "),s("strong",[e._v("RECLAIMABLE")]),e._v(" 是可回收大小。")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("docker system prune")]),e._v(" : 可以用于清理磁盘，删除关闭的容器、无用的数据卷和网络，以及 "),s("strong",[e._v("dangling")]),e._v(" 镜像（即无 "),s("strong",[e._v("tag")]),e._v(" 的镜像）。")]),e._v(" "),s("li",[s("strong",[e._v("docker system prune -a")]),e._v(" : 清理得更加彻底，可以将没有容器使用 "),s("strong",[e._v("Docker")]),e._v("镜像都删掉。\n注意，这两个命令会把你暂时关闭的容器，以及暂时没有用到的 "),s("strong",[e._v("Docker")]),e._v(" 镜像都删掉了。")])]),e._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3714334f8a08107e.jpg",alt:"eb0053333dd237a83651ec97816cae17"}})]),e._v(" "),s("h2",{attrs:{id:"_2-清理镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-清理镜像"}},[e._v("#")]),e._v(" 2，清理镜像")]),e._v(" "),s("h3",{attrs:{id:"_1-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[e._v("#")]),e._v(" 1，介绍")]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("docker image prune")]),e._v("可以 删除未使用的映像，注意"),s("a",{attrs:{href:"https://docs.docker.com/engine/api/v1.21/",target:"_blank",rel:"noopener noreferrer"}},[e._v("API 1.21+"),s("OutboundLink")],1),e._v("要使用此命令，客户端和守护进程API都必须至少是 "),s("a",{attrs:{href:"https://docs.docker.com/engine/api/v1.21/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.21"),s("OutboundLink")],1),e._v(" 。")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker image prune -h\nFlag shorthand -h has been deprecated, please use --help\n\nUsage:  docker image prune "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\nRemove unused images\n\nOptions:\n  -a, --all             Remove all unused images, not just dangling ones 删除所有未使用的映像，而不仅仅是悬空映像\n      --filter filter   Provide filter values "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("e.g. "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'until=<timestamp>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" 提供过滤值（例如'until "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("“）\n  -f, --force           Do not prompt "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" confirmation 不要提示确认\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("h3",{attrs:{id:"_2-删除所有悬空镜像。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-删除所有悬空镜像。"}},[e._v("#")]),e._v(" 2，删除所有悬空镜像。")]),e._v(" "),s("p",[e._v("删除所有悬空映像。如果"),s("code",[e._v("-a")]),e._v("指定，还将删除任何容器未引用的所有映像。")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker image prune -a\nWARNING"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" This will remove all images without at least one container associated to them.\nAre you sure you want to continue? "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("y/N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" y\nDeleted Images:\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"_3-过滤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-过滤"}},[e._v("#")]),e._v(" 3，过滤")]),e._v(" "),s("p",[e._v("过滤标志（"),s("code",[e._v("--filter")]),e._v("）格式为"),s("code",[e._v('"key = value"')]),e._v("。如果有多个过滤器，则传递多个标志（例如"),s("code",[e._v('--filter "foo=bar" --filter "bif=baz"')]),e._v("）")]),e._v(" "),s("p",[e._v("目前支持的过滤器是：")]),e._v(" "),s("ul",[s("li",[e._v("until（"),s("code",[e._v("<timestamp>")]),e._v("） - 仅删除在给定时间戳之前创建的映像")]),e._v(" "),s("li",[e._v("标签（"),s("code",[e._v("label=<key>")]),e._v("，"),s("code",[e._v("label=<key>=<value>")]),e._v("，"),s("code",[e._v("label!=<key>")]),e._v("，或"),s("code",[e._v("label!=<key>=<value>")]),e._v("） -仅删除与映像（或没有，如果"),s("code",[e._v("label!=...")]),e._v("被使用）指定的标签。")])]),e._v(" "),s("p",[e._v("该"),s("code",[e._v("until")]),e._v("过滤器可以是Unix的时间戳，日期格式的时间戳，或持续时间字符串（例如，去"),s("code",[e._v("10m")]),e._v("，"),s("code",[e._v("1h30m")]),e._v("）计算相对于守护机器的时间。支持的格式为日期格式时间戳包括RFC3339Nano，RFC3339， ，"),s("code",[e._v("2006-01-02T15:04:05")]),e._v("，"),s("code",[e._v("2006-01-02T15:04:05.999999999")]),e._v("，"),s("code",[e._v("2006-01-02Z07:00")]),e._v("和"),s("code",[e._v("2006-01-02")]),e._v("。如果在时间戳结束时未提供a "),s("code",[e._v("Z")]),e._v("或 "),s("code",[e._v("+-00:00")]),e._v("时区偏移，则将使用守护程序上的本地时区。提供Unix时间戳时输入秒[.nanoseconds]，其中秒是自1970年1月1日（午夜UTC / GMT）以来经过的秒数，不计算闰秒（也称为Unix纪元或Unix时间）和可选项。纳秒字段是一秒的一小部分，不超过九位数。")]),e._v(" "),s("p",[e._v("的"),s("code",[e._v("label")]),e._v("过滤器接受两种格式。一个是"),s("code",[e._v("label=...")]),e._v("（"),s("code",[e._v("label=<key>")]),e._v("或"),s("code",[e._v("label=<key>=<value>")]),e._v("），它删除具有指定标签的映像。另一种格式是"),s("code",[e._v("label!=...")]),e._v("（"),s("code",[e._v("label!=<key>")]),e._v("或"),s("code",[e._v("label!=<key>=<value>")]),e._v("），它删除没有指定标签的映像。")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("预测将被删除的内容")])]),e._v(" "),s("p",[e._v("如果使用正过滤（测试标签是否存在或标签是否具有特定值），则可以使用"),s("code",[e._v("docker image ls")]),e._v("相同的过滤语法查看哪些映像与过滤器匹配。")]),e._v(" "),s("p",[e._v("但是，如果使用的是负过滤（测试对于不存在标签的或标签并"),s("em",[e._v("不")]),e._v("具有特定的值），这种类型的滤波器的不与工作"),s("code",[e._v("docker image ls")]),e._v("所以不能容易地预测哪些映像将被移除。此外，即使您正在使用，确认提示"),s("code",[e._v("docker image prune")]),e._v(" 始终会警告"),s("em",[e._v("所有")]),e._v("悬空映像将被删除 "),s("code",[e._v("--filter")]),e._v("。")])]),e._v(" "),s("p",[e._v("以下删除之前创建的映像"),s("code",[e._v("2021-01-01T00:00:00")]),e._v("。")]),e._v(" "),s("p",[e._v("查看：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker images --format "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'table {{.Repository}}\\t{{.Tag}}\\t{{.ID}}\\t{{.CreatedAt}}\\t{{.Size}}'")]),e._v("\nREPOSITORY                                        TAG       IMAGE ID       CREATED AT                      SIZE\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("                                              latest    65f677cc947a   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-19 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v(":38:05 +0800 CST   445MB\nregistry.cn-hangzhou.aliyuncs.com/eryajf/centos   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.8")]),e._v("       5ea7c3a67505   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("-11-01 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("18")]),e._v(":32:46 +0800 CST   475MB\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("执行删除：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker image prune -a --force --filter "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"until=2021-01-01T00:00:00"')]),e._v("\nDeleted Images:\nuntagged: registry.cn-hangzhou.aliyuncs.com/eryajf/centos:7.8\nuntagged: registry.cn-hangzhou.aliyuncs.com/eryajf/centos@sha256:f7c413edcad7a3389e079cf04b4cddb46c96d67d29bf8c0d48dbd1ceeee2b474\ndeleted: sha256:5ea7c3a675055762552ad50b6f293bb050bdee188da3a2c37c61be90450f5987\ndeleted: sha256:c8279b704e4fb851f28a3fe2f02365df13bed3b6cc9b1fae6b2c50d562b04cec\ndeleted: sha256:e5a0eda56319769809257786837e4478e778aba54cdac72a468a8ac053637ca4\ndeleted: sha256:da34d2fe9e29af7b5ad6447089b19c2d0c7aa11d79641ca25e3de88a851706c7\ndeleted: sha256:613be09ab3c0860a5216936f412f09927947012f86bfa89b263dfa087a725f81\n\nTotal reclaimed space: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("475")]),e._v(".2MB\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("可以看到在这个时间点之前的centos镜像被删除了。如果这个镜像在占用状态，则不会删除。查看验证：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker images --format "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'table {{.Repository}}\\t{{.Tag}}\\t{{.ID}}\\t{{.CreatedAt}}\\t{{.Size}}'")]),e._v("\nREPOSITORY   TAG       IMAGE ID       CREATED AT                      SIZE\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("         latest    65f677cc947a   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("-08-19 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v(":38:05 +0800 CST   445MB\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[s("strong",[s("code",[e._v("其他一些用法")])]),e._v("：")]),e._v(" "),s("blockquote",[s("ul",[s("li",[s("p",[e._v("删除超过10天"),s("code",[e._v("240h")]),e._v("前创建的映像：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker image prune -a --force --filter "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"until=240h"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("使用标签删除映像"),s("code",[e._v("deprecated")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker image prune --filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"label=deprecated"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("删除标签"),s("code",[e._v("maintainer")]),e._v("设置为的映像"),s("code",[e._v("john")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker image prune --filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"label=maintainer=john"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("删除没有"),s("code",[e._v("maintainer")]),e._v("标签的映像：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker image prune --filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"label!=maintainer"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("删除维护者标签未设置为的映像"),s("code",[e._v("john")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker image prune --filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"label!=maintainer=john"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])])]),e._v(" "),s("p",[s("strong",[e._v("注意")]),e._v("：在"),s("code",[e._v("prune")]),e._v("删除任何内容之前，系统会提示您进行确认，但不会显示可能删除的内容列表。此外，"),s("code",[e._v("docker image ls")]),e._v("不支持负过滤，因此很难预测实际将删除哪些映像。")]),e._v(" "),s("h2",{attrs:{id:"_3-定义容器日志大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-定义容器日志大小"}},[e._v("#")]),e._v(" 3，定义容器日志大小")]),e._v(" "),s("p",[e._v("在docker环境部署之后，我们可以直接通过配置文件参数来定义单个容器日志的大小，在/etc/docker/daemon.json添加如下配置后重启docker：")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"log-opts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"max-size"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"300M"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"max-file"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"3"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"data-root"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/data/docker/docker-data/"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[s("strong",[e._v("注意：已存在的容器需要删除重建后才可以生效，因此尽量在docker投入生产之前进行配置。")])]),e._v(" "),s("blockquote",[s("p",[e._v("参数说明：max-size指定日志文件最大空间，max-file指定日志滚动的次数，以上配置单个容器最大日志为900M。data-root指定docker数据目录。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);