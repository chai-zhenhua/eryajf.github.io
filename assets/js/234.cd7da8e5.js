(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{799:function(s,a,t){"use strict";t.r(a);var n=t(16),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("当程序员确认可以发布版本，在由运维人员发布成功之后，测试人员发现刚刚发布版本有问题时，严重的，则需要进行回滚操作了。")]),s._v(" "),t("p",[s._v("对于程序员以及领导来说，回滚只不过是线上业务出现问题的时候一句话而已，但是对于运维人员来说，回滚则是平时就要做好准备的事情，不仅要做好准备，更要有经过演练。")]),s._v(" "),t("p",[s._v("我就曾有过自以为脚本方面都是梳理完整了放进Jenkins里，突然一天领导那边说需要回滚一下子，我当然觉得没有问题咯，于是兴致勃勃的跑去进行了回滚的操作，最后却发现，压根儿就没有成功，这就非常尴尬啦，顿时就脸红脖子粗起来，脖子粗也没用呀，问题总还要解决，于是最后只得手动打包，进行了一次原始部署了。")]),s._v(" "),t("p",[s._v("因此，回滚是一件闲时准备，战时不慌的操作，非常重要了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a8f04c8f003b90ab.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("我这里提到的回滚，都是基于Jenkins来进行部署考虑的，通过我个人对Jenkins的理解，大致分有以下方法可供选择：")]),s._v(" "),t("h2",{attrs:{id:"_1-gitlab代码回滚。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-gitlab代码回滚。"}},[s._v("#")]),s._v(" 1，gitlab代码回滚。")]),s._v(" "),t("p",[s._v("由程序员先将Git的版本回退到上一个版本，然后再一次进行部署。就实现了上个版本回退。")]),s._v(" "),t("p",[s._v("但是这种情形很容易受到影响，如果过程中有其他人进行过提交，版本不容易定位，如果牵扯到一些数据库的问题，就更加复杂，极有可能出现一些无法控制的问题，因此这是一种十分不推荐也不可取的方式。但是据我了解到一些公司就曾采用过这种方式来进行回滚的操作，想起来也是十分让人难以理解的。")]),s._v(" "),t("p",[s._v("好了废话不多说，进入今天正题。")]),s._v(" "),t("h2",{attrs:{id:"_2-脚本方式回滚。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-脚本方式回滚。"}},[s._v("#")]),s._v(" 2，脚本方式回滚。")]),s._v(" "),t("p",[s._v("在Jenkins部署脚本当中加入"),t("code",[s._v("git rev-parse HEAD")]),s._v("命令记录每次发布的版本的唯一"),t("code",[s._v("版本号")]),s._v("，并将此记录在一个"),t("code",[s._v("log")]),s._v("文件里，如果需要回滚，则由脚本取出上一次发布的版本号（命令为："),t("code",[s._v("tail -n 2 version.log | head -n 1")]),s._v("）进行版本的回退，而后在回退的基础上再发布即可。")]),s._v(" "),t("p",[s._v("这是一种非常保险，也绝对靠谱的一种方式了，非常非常推荐。")]),s._v(" "),t("p",[s._v("唯一的缺点，大概可能就是需要重新部署一次有点耗时间，对于某些高访问量（时间就是金钱）的线上业务来说，显得有点耽误工夫了。")]),s._v(" "),t("p",[s._v("具体的这种回滚方式的相关脚本以及思路的参考，我在另一篇文章当中已经写出，可以"),t("a",{attrs:{href:"https://wiki.eryajf.net/pages/639.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击这里进行跳转浏览"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"_3-war包回滚。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-war包回滚。"}},[s._v("#")]),s._v(" 3，war包回滚。")]),s._v(" "),t("p",[s._v("在每一次发布部署的同时，将每一个部署的（JAVA）war包按时间进行备份，然后再备份一个紧邻的上次发布的bak包，如果需要紧急回滚，则直接将上一个包替换当前包即可。由于一般回滚不会回滚到很久以前的版本，所以这里的备份包，保留五个即可，多余的利用脚本进行删除，避免了时间长占用空间过大的问题。")]),s._v(" "),t("p",[s._v("思路基本如上，我这里列出一个简单脚本仅供参考。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#author:eryajf")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#time:2018-7")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("project")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("code_dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/project/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tomcat_dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/tomcat_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROOTWAR_dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/WAR\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bakdir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/bak_dir\n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("MAVEN_CODE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/project/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v("\n   mvn clean "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -Dmaven.test.skip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(" -ne "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\033[31m[ error ] Failed to maven the code\\033[0m'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/WAR "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/WAR\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$code_dir")]),s._v("/51fbadmin-web/target/ROOT.war "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/WAR\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("deploy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MAVEN_CODE"')]),s._v("\n   MAVEN_CODE\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bakdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bakdir")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"backup"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ROOTWAR_dir")]),s._v("/ROOT.war "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps/ROOT.war "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps/ROOT.warbak "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bakdir")]),s._v("/ROOT_"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%y%m%d%H%M%S"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(".war\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps/ROOT."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("war,warbak"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stop tomcat_'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" java "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps/ROOT "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ROOTWAR_dir")]),s._v("/ROOT.war "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start tomcat_'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" /bin/bash /usr/local/tomcat_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v("/bin/startup.sh\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("rollback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stop tomcat_'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" java "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps/ROOT.war "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps/ROOT\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tomcat_dir")]),s._v("/webapps/ROOT."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("warbak,war"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start tomcat_'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" /bin/bash /usr/local/tomcat_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v("/bin/startup.sh\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        deploy\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rollback'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        rollback\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   *"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Usage: '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v(' {deploy | rollback}"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br")])]),t("p",[s._v("因为这个脚本是一个最后环节的，所以我简单说明一下：")]),s._v(" "),t("p",[s._v("1，脚本承接Jenkins处传递过来的两个参数，一个是mode的值，一个是project的值，mode决定是部署还是回滚，project则决定了是对哪个项目进行操作。\n2，部署的时候，先将上次备份的bak包放进一个专门存放old包的目录下，将正在用的包备份成bak包，然后进行常规的部署。\n3，如果回滚，则直接将bak还原回来，即达到回滚目的。")]),s._v(" "),t("p",[s._v("这种简洁高效，非常好用。只要在部署的时候将对应的包进行很好的安置，事情都会非常好处理的。当然了，还少一个定期清理目录下包数量的脚本，别急，您可以参考我的另外一篇文章："),t("a",{attrs:{href:"https://wiki.eryajf.net/pages/531.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何让不断增加的目录只保留五个文件？"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"_4-tag回滚。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-tag回滚。"}},[s._v("#")]),s._v(" 4，tag回滚。")]),s._v(" "),t("p",[s._v("这种回滚方案配置非常简单，而且实用性也非常强，已经在另外一篇文章中进行发布，如需浏览，可以点击跳转："),t("a",{attrs:{href:"https://wiki.eryajf.net/pages/1676.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jenkins利用tag方式进行回滚！"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);