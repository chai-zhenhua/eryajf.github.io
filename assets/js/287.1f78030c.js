(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{852:function(s,e,t){"use strict";t.r(e);var a=t(16),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("部署 kubectl 工具，创建 kubeconfig 文件。")]),s._v(" "),t("p",[s._v("kubectl 是 kubernetes 的集群管理工具，任一集群中的节点都可以通过 kubetcl 被管理。")]),s._v(" "),t("p",[s._v("本文是在 "),t("code",[s._v("master节点")]),s._v(" 部署，部署成功后会生成 /root/.kube/config 文件，kubectl 就是通过这个获取 kube-apiserver 地址、证书、用户名等信息，所以这个文件需要保管好。")]),s._v(" "),t("h2",{attrs:{id:"_1-下载安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载安装包"}},[s._v("#")]),s._v(" 1，下载安装包")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wget https://dl.k8s.io/v1.8.6/kubernetes-client-linux-amd64.tar.gz")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -xzvf kubernetes-client-linux-amd64.tar.gz")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo cp kubernetes/client/bin/kube* /usr/local/bin/")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod a+x /usr/local/bin/kube*")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export PATH=/root/local/bin:$PATH")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"_2-创建-root-kube-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-root-kube-config"}},[s._v("#")]),s._v(" 2，创建 / root/.kube/config")]),s._v(" "),t("h3",{attrs:{id:"_1-设置集群参数-server-指定-master-节点-ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置集群参数-server-指定-master-节点-ip"}},[s._v("#")]),s._v(" 1，设置集群参数,–server 指定 Master 节点 ip")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl config set-cluster kubernetes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --certificate-authority"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/ca.pem "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://192.168.106.3:6443\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_2-设置客户端认证参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置客户端认证参数"}},[s._v("#")]),s._v(" 2，设置客户端认证参数")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl config set-credentials admin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --client-certificate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/admin.pem "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --client-key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/admin-key.pem\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_3-设置上下文参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置上下文参数"}},[s._v("#")]),s._v(" 3，设置上下文参数")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl config set-context kubernetes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --cluster"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_4-设置默认上下文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置默认上下文"}},[s._v("#")]),s._v(" 4，设置默认上下文")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl config use-context kubernetes\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("admin.pem 证书 O 字段值为 system:masters，kube-apiserver 预定义的 RoleBinding cluster-admin 将 Group system:masters 与 Role cluster-admin 绑定，该 Role 授予了调用 kube-apiserver 相关 API 的权限。")]),s._v(" "),t("h2",{attrs:{id:"_3-创建-bootstrap-kubeconfig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-bootstrap-kubeconfig"}},[s._v("#")]),s._v(" 3，创建 bootstrap.kubeconfig")]),s._v(" "),t("p",[s._v("kubelet 访问 kube-apiserver 的时候是通过 bootstrap.kubeconfig 进行用户验证。")]),s._v(" "),t("h3",{attrs:{id:"_1-生成-token-变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成-token-变量"}},[s._v("#")]),s._v(" 1，生成 token 变量")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export BOOTSTRAP_TOKEN=$(head -c 16 /dev/urandom | od -An -t x | tr -d ' ')")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat > token.csv <<EOF")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BOOTSTRAP_TOKEN}")]),s._v(",kubelet-bootstrap,10001,"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"system:kubelet-bootstrap"')]),s._v("\nEOF\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv token.csv /etc/kubernetes/")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"_2-设置集群参数-server-为-master-节点-ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置集群参数-server-为-master-节点-ip"}},[s._v("#")]),s._v(" 2，设置集群参数–server 为 master 节点 ip")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl config set-cluster kubernetes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --certificate-authority"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/ca.pem "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://192.168.106.3:6443 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --kubeconfig"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bootstrap.kubeconfig\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"_3-设置客户端认证参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置客户端认证参数"}},[s._v("#")]),s._v(" 3，设置客户端认证参数")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl config set-credentials kubelet-bootstrap "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --token"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BOOTSTRAP_TOKEN}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --kubeconfig"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bootstrap.kubeconfig\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_4-设置上下文参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置上下文参数"}},[s._v("#")]),s._v(" 4，设置上下文参数")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl config set-context default \\")]),s._v("\n  --cluster"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubelet-bootstrap "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --kubeconfig"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bootstrap.kubeconfig\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_5-设置默认上下文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-设置默认上下文"}},[s._v("#")]),s._v(" 5，设置默认上下文")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl config use-context default --kubeconfig=bootstrap.kubeconfig")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv bootstrap.kubeconfig /etc/kubernetes/")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_4-创建-kube-proxy-kubeconfig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建-kube-proxy-kubeconfig"}},[s._v("#")]),s._v(" 4，创建 kube-proxy.kubeconfig")]),s._v(" "),t("h3",{attrs:{id:"_1-设置集群参数-server-参数为-master-ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置集群参数-server-参数为-master-ip"}},[s._v("#")]),s._v(" 1，设置集群参数 –server 参数为 master ip")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl config set-cluster kubernetes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --certificate-authority"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/ca.pem "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://192.168.106.3:6443 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --kubeconfig"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy.kubeconfig\n \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"_2-设置客户端认证参数-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置客户端认证参数-2"}},[s._v("#")]),s._v(" 2，设置客户端认证参数")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl config set-credentials kube-proxy "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --client-certificate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/kube-proxy.pem "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --client-key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/kube-proxy-key.pem "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --kubeconfig"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy.kubeconfig\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"_3-设置上下文参数-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置上下文参数-2"}},[s._v("#")]),s._v(" 3，设置上下文参数")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl config set-context default "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --cluster"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --kubeconfig"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy.kubeconfig\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_4-设置默认上下文-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置默认上下文-2"}},[s._v("#")]),s._v(" 4，设置默认上下文")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl config use-context default --kubeconfig=kube-proxy.kubeconfig")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv kube-proxy.kubeconfig /etc/kubernetes/")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("设置集群参数和客户端认证参数时 –embed-certs 都为 true，这会将 certificate-authority、client-certificate 和 client-key 指向的证书文件内容写入到生成的 kube-proxy.kubeconfig 文件中；")]),s._v(" "),t("p",[s._v("kube-proxy.pem 证书中 CN 为 system:kube-proxy，kube-apiserver 预定义的 RoleBinding cluster-admin 将 User system:kube-proxy 与 Role system:node-proxier 绑定，该 Role 授予了调用 kube-apiserver Proxy 相关 API 的权限；")]),s._v(" "),t("h2",{attrs:{id:"_5-同步配置文件。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-同步配置文件。"}},[s._v("#")]),s._v(" 5，同步配置文件。")]),s._v(" "),t("p",[s._v("生成的 bootstrap.kubeconfig，kube-proxy.kubeconfig 文件拷贝到其它 node 节点的 / etc/kubernetes 目录下。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp /etc/kubernetes/kube-proxy.kubeconfig node01:/etc/kubernetes/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp /etc/kubernetes/bootstrap.kubeconfig  node01:/etc/kubernetes/")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp /etc/kubernetes/kube-proxy.kubeconfig node02:/etc/kubernetes/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp /etc/kubernetes/bootstrap.kubeconfig  node02:/etc/kubernetes/")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);