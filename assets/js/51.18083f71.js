(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{619:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在日常工作中，会有这样的场景，为了便于测试，可能希望线上的请求能够同步到测试一部分，以便于验证某些功能，或者是在多套测试环境的情况下，希望能够将某些请求在几个环境同步，比如在 1 环境测试的时候生成了某个图片或者视频，这个生成依赖于一个请求的回调，而如果没有特别配置，则这个请求就只在当前环境中生效，这对测试工作有相当大的不便。")]),s._v(" "),a("p",[s._v("于是，我们需要引入流量复制这一概念，流量复制有不少工具可以实现，有 Gor、tcpreplay、tcpcopy 等，而今天将要使用的，是配置简单，使用方便的 NGINX 的一个模块："),a("code",[s._v("ngx_http_mirror_module")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("mirror：")]),s._v(" 中文为镜像的意思，这里指流量复制的目的地。")]),s._v(" "),a("h2",{attrs:{id:"_1-特性。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-特性。"}},[s._v("#")]),s._v(" 1，特性。")]),s._v(" "),a("ul",[a("li",[s._v("nginx 1.13.4 及后续版本内置 ngx_http_mirror_module 模块，提供流量镜像 (复制) 的功能。")]),s._v(" "),a("li",[s._v("支持流量放大，做法为：配置多份相同镜像。")]),s._v(" "),a("li",[s._v("相比 tcp-copy 的优势：无需录制流量，实时可用；配置相当简单。")]),s._v(" "),a("li",[s._v("源站请求，直接原路返回；正常配置下，mirror 请求不影响源站请求及响应，源站 nginx-server 将流量复制到 mirror 站后，两者不再有任何交集。")])]),s._v(" "),a("p",[s._v("mirror 模块在 Nginx 1.13.4 以后的版本中默认是启用的，只需看一下版本即可，不必重新编译。")]),s._v(" "),a("h2",{attrs:{id:"_2-简单配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-简单配置。"}},[s._v("#")]),s._v(" 2，简单配置。")]),s._v(" "),a("p",[s._v("先看下当前使用的 NGINX 版本：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ nginx  -V\nnginx version: nginx/1.14.0\nbuilt by gcc "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.8")]),s._v(".5 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20150623")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Red Hat "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.8")]),s._v(".5-39"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GCC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nbuilt with OpenSSL "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".2k-fips  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v(" Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("\nTLS SNI support enabled\nconfigure arguments: --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-http_v2_module --with-http_realip_module\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("接着添加如下配置：")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_processes")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("events")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_connections")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v("       mime.types")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default_type")]),s._v("  application/octet-stream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sendfile")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("keepalive_timeout")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8181")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v(" /var/log/nginx/test.log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" html/test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8282")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v(" /var/log/nginx/mir1.log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" html/mir1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8383")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v(" /var/log/nginx/mir2.log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" html/mir2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" backend")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:8181")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" test_backend1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:8282")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" test_backend2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:8383")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mirror")]),s._v(" /mirror1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mirror")]),s._v(" /mirror2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://backend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" = /mirror1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("internal")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://test_backend1"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" = /mirror2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("internal")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://test_backend2"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br")])]),a("p",[s._v("说明：")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# location /指定了源uri为/，也可以定义为其他指定接口")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mirror")]),s._v(" /mirror1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mirror /mirror指定镜像uri为/mirror")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mirror")]),s._v(" /mirror2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有多个需要复制流量的，可以配置多条")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mirror")]),s._v(" /mirror2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置多条情况下，将会起到流量放大的作用，即主配置请求一次，镜像端会有两次")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mirror_request_body on;         # 指定是否镜像请求body部分，请求自动缓存;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://backend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定处理主流量的后端Server")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" = /mirror1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("internal")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定此location只能被“内部的”请求调用，外部的调用请求会返回”Not found” (404)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://test_backend1"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定将要复制流量的Server1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" = /mirror2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("internal")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://test_backend2"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"_3-验证。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-验证。"}},[s._v("#")]),s._v(" 3，验证。")]),s._v(" "),a("p",[s._v("此时验证也非常简单，检测配置无误，然后启动 NGINX，使用 tail 同时监听三个日志，然后请求 127.0.0.1/index.html，会发现这一请求同时在日志中出现了。")]),s._v(" "),a("p",[s._v("创建一下访问内容：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/html/\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" mir1 mir2\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" test/index.html\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" mir1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mir1/index.html\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" mir2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mir2/index.html\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1/index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("请求看效果：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d9636feb9575fe2f.jpg",alt:"img"}})]),s._v(" "),a("p",[s._v("参考：")]),s._v(" "),a("ul",[a("li",[s._v("https://dwz.cn/T1rLisdA")]),s._v(" "),a("li",[s._v("https://dwz.cn/8atYbyNk")]),s._v(" "),a("li",[s._v("https://dwz.cn/UpMMbdiC")])])])}),[],!1,null,null,null);t.default=e.exports}}]);