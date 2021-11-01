(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{610:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("这个问题之前遇到过一次，也记录过解决的办法，没想到最近又安装项目，之前记录的办法竟然也不管用了。今天再来记录一下新找到的解决办法。")]),s._v(" "),t("h2",{attrs:{id:"_1-老版笔记。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-老版笔记。"}},[s._v("#")]),s._v(" 1，老版笔记。")]),s._v(" "),t("p",[s._v("pip进行安装的时候，总是报ssl的问题，可能是源的问题。")]),s._v(" "),t("p",[s._v("报错信息如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Could not "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" packages due to an EnvironmentError: HTTPSConnectionPool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'files.pythonhosted.org'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Max retries exceeded with url: /packages/5f/25/e52d3f31441505a5f3af41213346e5b6c221c9e086a166f3703d2ddaf940/pip-18.0-py2.py3-none-any.whl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Caused by SSLError"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SSLError"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", u"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed (_ssl.c:590)'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(","),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("网上有说安装方式用：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --index-url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://pypi.python.org/simple/ --trusted-host pypi.python.org pythonPackageName\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".pip --trusted-host pypi.python.org "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pythonPackageName\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v('其中 "pythonPackageName" 是你要安装的库名称（比如：requests、lxml等）')]),s._v(" "),t("p",[s._v("然而经过测试发现并不行。")]),s._v(" "),t("p",[s._v("于是采用豆瓣源进行安装：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("pip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" requests -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("aioredis")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(".0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("但是这个也只是单个安装的时候没有问题，用-r进行安装又不行了。")]),s._v(" "),t("p",[s._v("于是写入到配置里边：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /root/.pip\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.pip/pip.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("EOF\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("global"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n\tindex-url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" http://pypi.douban.com/simple\n\ttrusted-host "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pypi.douban.com\n\tEOF\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("然后直接"),t("code",[s._v("pip install pack")]),s._v("即可。")]),s._v(" "),t("p",[s._v("但是发现还会报错。\n"),t("code",[s._v("祭出神器")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("packge")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v("  requirements.txt"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" requests -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$packge")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个确实是神器，非常好用！")]),s._v(" "),t("h2",{attrs:{id:"_2-安装遇到ssl问题。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装遇到ssl问题。"}},[s._v("#")]),s._v(" 2，安装遇到ssl问题。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker\nCollecting docker\n  Could not fetch URL https://pypi.python.org/simple/docker/: There was a problem confirming the ssl certificate: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SSL: CERTIFICATE_VERIFY_FAILED"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" certificate verify failed "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_ssl.c:777"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("- skipping\n  Could not "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" a version that satisfies the requirement docker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from versions: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nNo matching distribution found "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("解决办法：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" .pip\n\t"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .pip \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后新增配置文件。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" pip.conf \n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("global"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000")]),s._v(" \nindex-url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" http://pypi.douban.com/simple/  \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \nuse-mirrors "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" \nmirrors "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" http://pypi.douban.com/simple/  \ntrusted-host "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pypi.douban.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("然后咋pip install 就好了。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost .pip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker\nCollecting docker\n  Downloading http://pypi.doubanio.com/packages/06/0b/ce97eb31058eddaef316973b8299b737ebab0bcb5798fd5a3225d53b4455/docker-3.5.0-py2.py3-none-any.whl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("125kB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 133kB "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".4MB/s\nCollecting docker-pycreds"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3")]),s._v(".0 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/ea/bf/7e70aeebc40407fbdb96fa9f79fc8e4722ea889a99378303e3bcc73f4ab5/docker_pycreds-0.3.0-py2.py3-none-any.whl\nCollecting requests"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.18")]),s._v(".0,"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.14")]),s._v(".2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/65/47/7e02164a2a3db50ed6d8a6ab1d6d60b69c4c3fdf57a284257925dfc12bda/requests-2.19.1-py2.py3-none-any.whl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("91kB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 92kB "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(".0MB/s\nCollecting websocket-client"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.32")]),s._v(".0 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/14/d4/6a8cd4e7f67da465108c7cc0a307a1c5da7e2cdf497330b682069b1d4758/websocket_client-0.53.0-py2.py3-none-any.whl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("198kB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 204kB "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".4MB/s\nCollecting six"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.4")]),s._v(".0 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/67/4b/141a581104b1f6397bfa78ac9d43d8ad29a7ca43ea90a2d863fe3056e86a/six-1.11.0-py2.py3-none-any.whl\nCollecting urllib"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.24")]),s._v(","),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.21")]),s._v(".1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from requests"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.18")]),s._v(".0,"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.14")]),s._v(".2-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/bd/c9/6fdd990019071a4a32a5e7cb78a1d92c53851ef4f56f62a3486e6a7d8ffb/urllib3-1.23-py2.py3-none-any.whl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("133kB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 143kB "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(".9MB/s\nCollecting chardet"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1")]),s._v(".0,"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v(".2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from requests"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.18")]),s._v(".0,"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.14")]),s._v(".2-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/bc/a9/01ffebfb562e4274b6487b4bb1ddec7ca55ec7510b22e4c51f14098443b8/chardet-3.0.4-py2.py3-none-any.whl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("133kB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 143kB "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(".9MB/s\nCollecting idna"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.8")]),s._v(","),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from requests"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.18")]),s._v(".0,"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.14")]),s._v(".2-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/4b/2a/0276479a4b3caeb8a8c1af2f8e4355746a97fab05a372e4a2c6a6b876165/idna-2.7-py2.py3-none-any.whl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("58kB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 61kB "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(".1MB/s\nCollecting certifi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017.4")]),s._v(".17 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from requests"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.18")]),s._v(".0,"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.14")]),s._v(".2-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/df/f7/04fee6ac349e915b82171f8e23cee63644d83663b34c539f7a09aed18f9e/certifi-2018.8.24-py2.py3-none-any.whl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("147kB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 153kB "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(".5MB/s\nInstalling collected packages: six, docker-pycreds, urllib3, chardet, idna, certifi, requests, websocket-client, docker\nSuccessfully installed certifi-2018.8.24 chardet-3.0.4 docker-3.5.0 docker-pycreds-0.3.0 idna-2.7 requests-2.19.1 six-1.11.0 urllib3-1.23 websocket-client-0.53.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("h2",{attrs:{id:"_3-升级pip一直报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-升级pip一直报错"}},[s._v("#")]),s._v(" 3，升级pip一直报错")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost  ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --upgrade pip\nCollecting pip\nException:\nTraceback "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("most recent call last"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/basecommand.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("215")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" main\n    status "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self.run"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options, args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/commands/install.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("307")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" run\n    requirement_set.prepare_files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("finder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/req/req_set.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("370")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" prepare_files\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ignore_dependencies")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("self.ignore_dependencies"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/req/req_set.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("587")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" _prepare_file\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("session")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("self.session, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hashes")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hashes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/download.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("810")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" unpack_url\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hashes")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hashes\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/download.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("649")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" unpack_http_url\n    hashes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/download.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("842")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" _download_http_url\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("stream")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("True,\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/_vendor/requests/sessions.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("487")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" get\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" self.request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GET'")]),s._v(", url, **kwargs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/download.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("378")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" request\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" super"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PipSession, self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("method, url, *args, **kwargs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/_vendor/requests/sessions.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("475")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" request\n    resp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self.send"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("prep, **send_kwargs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/_vendor/requests/sessions.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("585")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" send\n    r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" adapter.send"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request, **kwargs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/_vendor/cachecontrol/adapter.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" send\n    resp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" super"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CacheControlAdapter, self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".send"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request, **kw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/_vendor/requests/adapters.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("477")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" send\n    raise SSLError"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("request")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSSLError: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SSL: CERTIFICATE_VERIFY_FAILED"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" certificate verify failed "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_ssl.c:618"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nYou are using pip version "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.1")]),s._v(".2, however version "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.2")]),s._v(".2 is available.\nYou should consider upgrading via the "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pip install --upgrade pip'")]),s._v(" command.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])]),t("p",[s._v("这个时候用如下命令更新：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost  ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --upgrade --trusted-host pypi.org --trusted-host files.pythonhosted.org pip\nCollecting pip\n  Downloading https://files.pythonhosted.org/packages/8d/07/f7d7ced2f97ca3098c16565efbe6b15fafcba53e8d9bdb431e09140514b0/pip-19.2.2-py2.py3-none-any.whl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".4MB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".4MB 134kB/s\nInstalling collected packages: pip\n  Found existing installation: pip "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.1")]),s._v(".2\n    Uninstalling pip-8.1.2:\n      Successfully uninstalled pip-8.1.2\nSuccessfully installed pip-19.2.2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost  ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pip")]),s._v(" -V\npip "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.2")]),s._v(".2 from /usr/lib/python2.7/site-packages/pip "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("python "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);