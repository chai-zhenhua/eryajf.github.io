(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{698:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-配置管理端。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置管理端。"}},[s._v("#")]),s._v(" 1，配置管理端。")]),s._v(" "),t("ul",[t("li",[s._v("安装apache 和php环境")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php php-pear php-mbstring ntpdate httpd php-ldap -y     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#php-ldap是让php程序连接ldap的组件")]),s._v("\nsystemctl start httpd\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" httpd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("调整apache和php的配置文件，修改apache的默认首页类型，将index.php加入其中")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/httpd/conf/httpd.conf +164\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IfModule dir_module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    DirectoryIndex  index.php\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/IfModule"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("重启apache")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl restart httpd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("修改php.ini的时区")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/php.ini \ndate.timezone "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Asia/Shanghai"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("配置phpldapadmin")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nchc.dl.sourceforge.net/project/phpldapadmin/phpldapadmin-php5/1.2.3/phpldapadmin-1.2.3.tgz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf phpldapadmin-1.2.3.tgz \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" phpldapadmin-1.2.3 /var/www/html/phpldapadmin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /var/www/html/phpldapadmin/config/config.php.example /var/www/html/phpldapadmin/config/config.php.example.bak\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /var/www/html/phpldapadmin/config/config.php.example /var/www/html/phpldapadmin/config/config.php\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("修改配置文件，填写端口，地址和RootDN")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /var/www/html/phpldapadmin/config/config.php\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$servers")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("setValue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'server'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'host'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$servers")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("setValue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'server'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'port'")]),s._v(",389"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$servers")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("setValue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'server'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'base'")]),s._v(",array"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dc=eryajf,dc=net'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("去浏览器验证登录")]),s._v(" "),t("p",[s._v("http://10.3.0.42/phpldapadmin")]),s._v(" "),t("p",[s._v("登录名为DN：cn=admin,dc=eryajf,dc=net\n密码为第二次设置的密码：eryajf@456")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/bbeb4d8cb102cc74.jpg",alt:"image-20191103202211417"}})]),s._v(" "),t("h2",{attrs:{id:"_2-思路简单梳理。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-思路简单梳理。"}},[s._v("#")]),s._v(" 2，思路简单梳理。")]),s._v(" "),t("p",[s._v("关于用户管理方面，这里简单梳理一下思路，现在看到如上图所示，在总域名之下，分了几个组别，其中cn是管理者，再往下建了两个真正存放用户的小组（当然，真实的概念可能从组织的角度去看），这里怎么看不要紧，重要的是，能用自己的思路理解了，然后运用起来就好了。")]),s._v(" "),t("p",[s._v("现在的思路是，所有用户，全部都在People这个组内，新来员工创建账号，也都分配在这里，针对一些全员性质的授权，比如全员共用的文档系统等，可以直接对这一组进行授权，也就相当于对全员进行了授权。另外的Group则可以真正作为组进行二次细分，某些重要应用，或者部分性比较强的应用，都可以通过在这个下边创建一个小组进行区分，从而授权的时候更加便捷。")]),s._v(" "),t("p",[s._v("以上两种授权方案在后边的实战配置当中都会给出演示，先按着刚刚的思路创建一些测试用户，到后边一配好，一切就都明白了。")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("创建普通用户：")]),s._v(" "),t("ul",[t("li",[s._v("在People之下点击创建新条目")]),s._v(" "),t("li",[s._v("模板选择默认")]),s._v(" "),t("li",[t("strong",[s._v("ObjectClasses")]),s._v("选择"),t("strong",[s._v("inetOrgPerson")]),s._v("，然后点击继续")]),s._v(" "),t("li",[s._v("从上而下填写，RDN选择 "),t("code",[s._v("User Name(uid)")])]),s._v(" "),t("li",[s._v("然后开始正式的人员信息填写\n"),t("ul",[t("li",[s._v("cn：zhangs")]),s._v(" "),t("li",[s._v("sn：zhangs")]),s._v(" "),t("li",[s._v("displayName：张三")]),s._v(" "),t("li",[s._v("电子邮件：zhangs@qq.com")]),s._v(" "),t("li",[s._v("ou：People")]),s._v(" "),t("li",[s._v("密码：123456")]),s._v(" "),t("li",[s._v("User Name：zhangs")])])])]),s._v(" "),t("p",[s._v("然后点击创建，提交之后，一个普通用户就创建成功了。一般情况下，应用直接通过这一曾来管理用户即可。")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("但是有些情况下，再另外拉出来一个分组，从软件的角度来分组，会更好一些。")]),s._v(" "),t("p",[s._v("创建一个应用组：")]),s._v(" "),t("ul",[t("li",[s._v("在Group之下创建新条目")]),s._v(" "),t("li",[s._v("模板选择默认")]),s._v(" "),t("li",[t("strong",[s._v("ObjectClasses")]),s._v("选择"),t("strong",[s._v("groupOfNames")]),s._v("，然后点击继续")]),s._v(" "),t("li",[s._v("从上而下填写，RDN选择 "),t("code",[s._v("cn(cn)")])]),s._v(" "),t("li",[s._v("然后开始填写组信息\n"),t("ul",[t("li",[s._v("cn：jenkins")]),s._v(" "),t("li",[s._v("member：点击后边的搜索框，选择将要包含的用户")])])])]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("然后点击创建，提交之后，就创建了一个jenkins组，配置ldap的时候，可以基于这个组来进行管理。")]),s._v(" "),t("h2",{attrs:{id:"_3-配置自助修改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置自助修改密码"}},[s._v("#")]),s._v(" 3，配置自助修改密码")]),s._v(" "),t("p",[s._v("一般情况下，我们给先入职同学创建账户的时候，都会设置一个统一的账号，然后再由该同学自助修改密码，那么，就需要部署一个自助修改密码的服务，这里采用docker方式部署，简单便捷。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" docker-compose.yml\nversion: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v("\nservices:\n  ssp-app:\n    image: registry.cn-hangzhou.aliyuncs.com/eryajf/self-service-password\n    container_name: ssp-app\n    volumes:\n      - ./data/:/www/ssp\n      - ./logs/:/www/logs\n    ports:\n      - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),s._v(":80\n    environment:\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VIRTUAL_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://10.3.0.42\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VIRTUAL_NETWORK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx-proxy\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LETSENCRYPT_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.3")]),s._v(".0.42\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LETSENCRYPT_EMAIL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Linuxlql@163.com\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDAP_SERVER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ldap://10.3.0.42:389\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDAP_STARTTLS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDAP_BINDDN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cn"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin,dc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eryajf,dc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("net\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDAP_BINDPASS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eryajf@456\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDAP_BASE_SEARCH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ou"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("People,dc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eryajf,dc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("net\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDAP_LOGIN_ATTRIBUTE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("uid\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDAP_FULLNAME_ATTRIBUTE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cn\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Active Directory mode")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# true: use unicodePwd as password field")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# false: LDAPv3 standard behavior")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ADMODE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Force account unlock when password is changed")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AD_OPT_FORCE_UNLOCK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Force user change password at next login")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AD_OPT_FORCE_PWD_CHANGE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Allow user with expired password to change password")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AD_OPT_CHANGE_EXPIRED_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Samba mode")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# true: update sambaNTpassword and sambaPwdLastSet attributes too")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# false: just update the password")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SAMBA_MODE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Shadow options - require shadowAccount objectClass")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Update shadowLastChange")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SHADOW_OPT_UPDATE_SHADOWLASTCHANGE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Hash mechanism for password:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SSHA")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SHA")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SMD5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MD5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CRYPT")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clear (the default)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# auto (will check the hash of current password)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This option is not used with ad_mode = true")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD_HASH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SHA\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Local password policy")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is applied before directory password policy")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Minimal length")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD_MIN_LENGTH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Maximal length")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD_MAX_LENGTH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Minimal lower characters")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD_MIN_LOWERCASE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Minimal upper characters")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD_MIN_UPPERCASE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Minimal digit characters")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD_MIN_DIGIT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Minimal special characters")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD_MIN_SPECIAL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Dont reuse the same password as currently")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD_NO_REUSE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Show policy constraints message:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# always")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# never")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# onerror")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD_SHOW_POLICY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("never\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Position of password policy constraints message:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# above - the form")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# below - the form")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD_SHOW_POLICY_POSITION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("above\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Who changes the password?")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Also applicable for question/answer save")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# user: the user itself")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# manager: the above binddn")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WHO_CAN_CHANGE_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("user\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Questions/answers")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use questions/answers?")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# true (default)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# false")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("QUESTIONS_ENABLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Mail")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# LDAP mail attribute")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDAP_MAIL_ATTRIBUTE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mail\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Who the email should come from")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAIL_FROM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Linuxlql@163.com\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAIL_FROM_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Password Reset\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Notify users anytime their password is changed")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NOTIFY_ON_CHANGE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PHPMailer configuration (see https://github.com/PHPMailer/PHPMailer)")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SMTP_DEBUG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SMTP_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("smtp.163.com\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SMTP_AUTH_ON")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SMTP_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Linuxlql@163.com\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SMTP_PASS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxxxxx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里是邮箱的授权码，经常配置邮箱的你，一定明白我的意思")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SMTP_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SMTP_SECURE_TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tls\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SMTP_AUTOTLS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## SMS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use sms (NOT WORKING YET)")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("USE_SMS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Reset URL (if behind a reverse proxy)")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IS_BEHIND_PROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Display help messages")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SHOW_HELP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Language")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("LANG")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("en\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Debug mode")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEBUG_MODE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Encryption, decryption keyphrase")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SECRETEKEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("secretkey\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## CAPTCHA")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use Google reCAPTCHA (http://www.google.com/recaptcha)")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("USE_RECAPTCHA")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Go on the site to get public and private key")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RECAPTCHA_PUB_KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("akjsdnkajnd\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RECAPTCHA_PRIV_KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("aksdjnakjdnsa\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Default action")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# change")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sendtoken")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sendsms")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEFAULT_ACTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("change\n    networks:\n      - proxy-tier\n    restart: always\nnetworks:\n  proxy-tier:\n    external:\n      name: nginx-proxy\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br"),t("span",{staticClass:"line-number"},[s._v("94")]),t("br"),t("span",{staticClass:"line-number"},[s._v("95")]),t("br"),t("span",{staticClass:"line-number"},[s._v("96")]),t("br"),t("span",{staticClass:"line-number"},[s._v("97")]),t("br"),t("span",{staticClass:"line-number"},[s._v("98")]),t("br"),t("span",{staticClass:"line-number"},[s._v("99")]),t("br"),t("span",{staticClass:"line-number"},[s._v("100")]),t("br"),t("span",{staticClass:"line-number"},[s._v("101")]),t("br"),t("span",{staticClass:"line-number"},[s._v("102")]),t("br"),t("span",{staticClass:"line-number"},[s._v("103")]),t("br"),t("span",{staticClass:"line-number"},[s._v("104")]),t("br"),t("span",{staticClass:"line-number"},[s._v("105")]),t("br"),t("span",{staticClass:"line-number"},[s._v("106")]),t("br"),t("span",{staticClass:"line-number"},[s._v("107")]),t("br"),t("span",{staticClass:"line-number"},[s._v("108")]),t("br"),t("span",{staticClass:"line-number"},[s._v("109")]),t("br"),t("span",{staticClass:"line-number"},[s._v("110")]),t("br"),t("span",{staticClass:"line-number"},[s._v("111")]),t("br"),t("span",{staticClass:"line-number"},[s._v("112")]),t("br"),t("span",{staticClass:"line-number"},[s._v("113")]),t("br"),t("span",{staticClass:"line-number"},[s._v("114")]),t("br"),t("span",{staticClass:"line-number"},[s._v("115")]),t("br"),t("span",{staticClass:"line-number"},[s._v("116")]),t("br"),t("span",{staticClass:"line-number"},[s._v("117")]),t("br"),t("span",{staticClass:"line-number"},[s._v("118")]),t("br"),t("span",{staticClass:"line-number"},[s._v("119")]),t("br"),t("span",{staticClass:"line-number"},[s._v("120")]),t("br"),t("span",{staticClass:"line-number"},[s._v("121")]),t("br"),t("span",{staticClass:"line-number"},[s._v("122")]),t("br"),t("span",{staticClass:"line-number"},[s._v("123")]),t("br"),t("span",{staticClass:"line-number"},[s._v("124")]),t("br"),t("span",{staticClass:"line-number"},[s._v("125")]),t("br"),t("span",{staticClass:"line-number"},[s._v("126")]),t("br"),t("span",{staticClass:"line-number"},[s._v("127")]),t("br"),t("span",{staticClass:"line-number"},[s._v("128")]),t("br"),t("span",{staticClass:"line-number"},[s._v("129")]),t("br"),t("span",{staticClass:"line-number"},[s._v("130")]),t("br"),t("span",{staticClass:"line-number"},[s._v("131")]),t("br"),t("span",{staticClass:"line-number"},[s._v("132")]),t("br"),t("span",{staticClass:"line-number"},[s._v("133")]),t("br"),t("span",{staticClass:"line-number"},[s._v("134")]),t("br")])]),t("p",[s._v("然后直接运行服务即可。访问对应端口可以看到更改密码的页面：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/36a7151eb2a6b9ef.jpg",alt:"image-20191025225415259"}})]),s._v(" "),t("p",[s._v("如果知道原来密码，直接在自助密码服务处更改即可，如果忘记原来密码，可以通过邮件方式进行更改。")])])}),[],!1,null,null,null);a.default=e.exports}}]);