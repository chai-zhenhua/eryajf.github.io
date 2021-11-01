(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{639:function(s,a,t){"use strict";t.r(a);var e=t(16),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-添加客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加客户端"}},[s._v("#")]),s._v(" 1，添加客户端")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh http://repo.zabbix.com/zabbix/3.2/rhel/6/x86_64/zabbix-release-3.2-1.el6.noarch.rpm\nyum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" zabbix-agent\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/zabbix/zabbix_agentd.conf\n \n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/tmp/zabbix_agentd.log\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Server")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".66.100\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#服务器IP地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ServerActive")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".66.100\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#也是服务器IP地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Hostname")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".66.100\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#客户端本机IP地址")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"_2-启动客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动客户端"}},[s._v("#")]),s._v(" 2，启动客户端")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("systemctl  restart  zabbix-agent\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("  zabbix-agent\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_3-重启一下主程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-重启一下主程序"}},[s._v("#")]),s._v(" 3，重启一下主程序")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl  restart zabbix-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后在Web界面添加主机，稍等一会儿，就能看到本机已经被监控到了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/4a6e8919dc977008.jpg",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"_4-添加主机。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-添加主机。"}},[s._v("#")]),s._v(" 4，添加主机。")]),s._v(" "),t("p",[s._v("下边是添加主机的一个常规操作步骤：")]),s._v(" "),t("p",[t("code",[s._v("配置")]),s._v("–》"),t("code",[s._v("主机")]),s._v("–》"),t("code",[s._v("创建主机")]),s._v("–》"),t("code",[s._v("填写信息")]),s._v("（主机名，群组，IP地址，）–》"),t("code",[s._v("模板")]),s._v("（Template ICMP Ping 这个是监控主机死活 Template OS Linux 监控主机一些CPU，缓存等信息）这个选完要点"),t("code",[s._v("添加")]),s._v("–》然后"),t("code",[s._v("总添加")]),s._v("，就会出现了，等一会儿，ZBX亮了，就说明zabbix服务正常工作！！！")]),s._v(" "),t("p",[s._v("点击"),t("code",[s._v("检测中")]),s._v("—》"),t("code",[s._v("图形")]),s._v("，右上角点选之后，就能看到监控信息了。")]),s._v(" "),t("p",[s._v("一般服务端配置完成之后就能使用了，客户端安装完成之后，但是也会有在服务端无法发现的情况。")]),s._v(" "),t("p",[s._v("这个时候先在服务端安装zabbix-get软件包")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("zabbix_get -s "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.22 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10050")]),s._v(" -k "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"system.uname"')]),s._v("                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对客户端进行检验")]),s._v("\n \n -s 指定检验的客户端IP\n \n-p 指定端口 一般可以不写，默认的10050\n \n-k 是测试类型，与模板里边的对应。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("如果无法获取信息，可能有以下原因：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("1，网络不通。")])]),s._v(" "),t("li",[t("p",[s._v("2，双方是否有开启了selinux的。")])]),s._v(" "),t("li",[t("p",[s._v("3，防火墙的限制。")])])]),s._v(" "),t("p",[s._v("如果客户端开启了防火墙，则需要配置端口放行。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('iptables -I INPUT  -p tcp -m tcp --dport 10050 -m comment --comment "zabbix_agentd listen " -j ACCEPT  \n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("基本上这些是配置agent时遇到的一些坑，别的倒是没什么了。")]),s._v(" "),t("h2",{attrs:{id:"_5-解决监控界面乱码问题。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-解决监控界面乱码问题。"}},[s._v("#")]),s._v(" 5，解决监控界面乱码问题。")]),s._v(" "),t("p",[s._v("点击"),t("code",[s._v("检测中")]),s._v("—》"),t("code",[s._v("图形")]),s._v("，右上角点选之后，就能看到监控信息了。 但是能看到左下角有乱码：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7af8b18c5ef80790.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("解决起来也很简单，与这个问题类似的是，有时候公司开发会根据程序生成一些PDF，而系统中没有中文的字体，因此会导致乱码，解决方法下同：")]),s._v(" "),t("p",[t("code",[s._v("Win+R")]),s._v(" > "),t("code",[s._v("fonts")]),s._v(" > "),t("code",[s._v("拷贝微软雅黑字体")]),s._v("改名为 msyh.ttf–》上传到zabbix服务器的"),t("code",[s._v("/usr/share/zabbix/fonts")]),s._v("目录下")]),s._v(" "),t("p",[s._v("赋予权限")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" msyh.ttf\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/share/zabbix/include/defines.inc.php\n修改 zabbix php 页面配置，将"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'graphfont'")]),s._v(" 修改为 msyh\t\t（第45行）\ndefine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ZBX_GRAPH_FONT_NAME'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'msyh'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("然后去Web界面刷新一下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/4c9902c1489a4292.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("可以看到问题已经解决啦！！")])])}),[],!1,null,null,null);a.default=n.exports}}]);