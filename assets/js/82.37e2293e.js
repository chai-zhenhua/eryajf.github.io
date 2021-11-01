(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{650:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("prometheus 监控 es，同样采用 exporter 的方案。")]),s._v(" "),t("ul",[t("li",[s._v("项目地址：\n"),t("ul",[t("li",[s._v("elasticsearch_exporter：https://github.com/justwatchcom/elasticsearch_exporter")])])])]),s._v(" "),t("h2",{attrs:{id:"_1、安装部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装部署"}},[s._v("#")]),s._v(" 1、安装部署")]),s._v(" "),t("p",[s._v("现有 es 三节点的集群，环境大概如下：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("主机")]),s._v(" "),t("th",[s._v("组件")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("10.3.6.30–es-node1")]),s._v(" "),t("td",[s._v("es，nginx")])]),s._v(" "),t("tr",[t("td",[s._v("10.3.6.125–es-node2")]),s._v(" "),t("td",[s._v("es")])]),s._v(" "),t("tr",[t("td",[s._v("10.3.6.124–es-node3")]),s._v(" "),t("td",[s._v("es,kibana")])])])]),s._v(" "),t("p",[s._v("接着分别在如上三台主机上进行如下配置：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/justwatchcom/elasticsearch_exporter/releases/download/v1.1.0/elasticsearch_exporter-1.1.0.linux-amd64.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf elasticsearch_exporter-1.1.0.linux-amd64.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" elasticsearch_exporter-1.1.0.linux-amd64 /usr/local/elasticsearch_exporter\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("启动监控客户端：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./elasticsearch_exporter --web.listen-address "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":9109"')]),s._v("  --es.uri http://10.3.6.30:9200 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用 systemd 管理：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /lib/systemd/system/es_exporter.service\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("The es_exporter\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("prometheus\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/elasticsearch_exporter/elasticsearch_exporter --web.listen-address "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":9308"')]),s._v(" --es.uri http://127.0.0.1:9200\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("启动：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("systemctl daemon-reload\nsystemctl start es_exporter\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("查看 metrics：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9109/metrics\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_2-配置-prometheus-yml-添加监控目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-prometheus-yml-添加监控目标"}},[s._v("#")]),s._v(" 2，配置 prometheus.yml 添加监控目标")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/prometheus/prometheus.yml\n  - job_name: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'elasticsearch'")]),s._v("\n    scrape_interval: 60s\n    scrape_timeout:  30s\n    metrics_path: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/metrics"')]),s._v("\n    static_configs:\n    - targets:\n      - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10.3.0.41:9109'")]),s._v("\n      labels:\n        service: elasticsearch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("重启服务。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ systemctl restart prometheus\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或者通过命令热加载：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v("  -XPOST localhost:9090/-/reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_5-配置-grafana-的模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置-grafana-的模板"}},[s._v("#")]),s._v(" 5，配置 Grafana 的模板")]),s._v(" "),t("p",[s._v("模板通过 json 文件进行导入，文件就在解压的包内。")]),s._v(" "),t("p",[s._v("参考地址：https://shenshengkun.github.io/posts/550bdf86.html")]),s._v(" "),t("p",[s._v("或者通过如下 ID 进行导入："),t("code",[s._v("2322")]),s._v("以及其他。")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://t.eryajf.net/imgs/2021/09/15d9b303afb54a21.jpg",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/15d9b303afb54a21.jpg",alt:"img"}}),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"_6-开启认证的启动方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-开启认证的启动方式"}},[s._v("#")]),s._v(" 6，开启认证的启动方式")]),s._v(" "),t("p",[s._v("如果 es 开启了认证，那么启动的时候需要将用户名密码加载进去：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("lasticsearch_exporter --web.listen-address "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":9308"')]),s._v("  --es.uri http://username:password@192.168.10.3:9200 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其中使用的是"),t("code",[s._v("monitoring")]),s._v("的用户密码。")]),s._v(" "),t("p",[s._v("当然，除去这种命令行的启动方式之外，还可以像上边一样，基于 systemd 进行管理，只需将认证的参数信息写入到如下内容当中：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/default/elasticsearch_exporter\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EXPORTER_ARGS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--es.uri=http://username:password@192.168.10.3:9200"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("接着将启动配置文件封装成如下脚本：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/init.d/elasticsearch_exporter\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chkconfig: 2345 60 20")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# description: elasticsearch_exporter")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("elasticsearch_exporter\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SCRIPT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/bin/'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PIDFILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/run/'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v('.pid"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOGFILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/log/'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v('.log"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ENVFILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/default/'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://192.10.10.1'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EXPORTER_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NAME")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EXPORTER_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9114"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取本机ip")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPADDR"')]),s._v(" /etc/sysconfig/network-scripts/ifcfg-eth0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -Eo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"([0-9]{1,3}\\.){3}[0-9]{1,3}"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("register_exporter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("json_data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"service_id":"\'')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${EXPORTER_NAME}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${IP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'","job":"\'')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${EXPORTER_NAME}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'","ip":"\'')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${IP}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'","port":"\'')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$EXPORTER_PORT")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'","tags":"","meta": {"hostname": "\'')]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"}}'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --connect-timeout "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -s -X POST -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-type: application/json"')]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${json_data}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$URL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("start")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PIDFILE}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -0 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PIDFILE}")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v(" already running with PID "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("PIDFILE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&2")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Starting '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&2")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ENVFILE}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CMD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SCRIPT}")]),s._v(" --web.listen-address="),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${IP}")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${EXPORTER_PORT}")]),s._v(" --log.level=error "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${EXPORTER_ARGS}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v('"')]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CMD}")]),s._v(" &> "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${LOGFILE}")]),s._v(" & echo \\"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$!")]),s._v(" > "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PIDFILE}")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "${NAME} started with PID $(cat ${PIDFILE})')]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n  sleep 1\n  if [ -f "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PIDFILE}")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ] && kill -0 '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PIDFILE}")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' &> /dev/null; then\n    echo "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v(" started successfully."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n    register_exporter\n  else\n    echo "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v(" was not started OK"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n    return 1\n  fi\n}\nstop() {\n  if [ ! -f "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDFILE")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ] || ! kill -0 '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDFILE")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' &> /dev/null; then\n    echo "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v(" not running"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n    return 1\n  fi\n  echo "')]),s._v("Stopping "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n  kill -15 '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDFILE")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('\n  rm -f "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDFILE")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  echo "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v(" stopped"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n}\nstatus() {\n  if [ ! -f "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDFILE")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ] || ! kill -0 '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDFILE")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' &> /dev/null; then\n    echo "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v(" is not running"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n  else\n    echo "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v(" is running"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n  fi\n}\nuninstall() {\n  echo -n "')]),s._v("Are you really sure you want to uninstall "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NAME}")]),s._v("? That cannot be undone. "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("yes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("No"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  local SURE\n  read SURE\n  if [ "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SURE")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" = "')]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ]; then\n    stop\n    rm -f "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDFILE")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n    echo "')]),s._v("Notice: log "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" is not be removed: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$LOGFILE'")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" >&2\n    update-rc.d -f <NAME> remove\n    rm -fv "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n  fi\n}\ncase "')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" in\n  start)\n    start\n    ;;\n  stop)\n    stop\n    ;;\n  uninstall)\n    uninstall\n    ;;\n  restart)\n    stop\n    start\n    ;;\n  status)\n  status\n  ;;\n  register)\n  register_exporter\n  ;;\n  *)\n    echo "')]),s._v("Usage: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("stop"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("status"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("register"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("uninstall"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('"\n'),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br")])]),t("p",[s._v("此处服务启动之后将会自动注册到统一的注册中心去，而不必再手动添加配置。")])])}),[],!1,null,null,null);a.default=e.exports}}]);