(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{987:function(t,s,a){"use strict";a.r(s);var e=a(16),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("之前就听说过 neovim，只不过一直没有涉足，最近打算研究下，却发现看了不少文章都没有清晰讲解其用法，踩了一些坑之后，今天来做一下分享。")]),t._v(" "),a("h2",{attrs:{id:"_1-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[t._v("#")]),t._v(" 1，安装")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" neovim\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("更改别名，鸟枪换炮。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# edit ~/.zshrc")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("vim")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nvim'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("vi")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nvim'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"_2-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-插件"}},[t._v("#")]),t._v(" 2，插件")]),t._v(" "),a("h3",{attrs:{id:"_1-安装插件管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装插件管理器"}},[t._v("#")]),t._v(" 1，安装插件管理器")]),t._v(" "),a("p",[t._v("很多丰富的功能依赖于插件的加持，在安装插件之前，需要先安装插件的管理方式，这里使用 "),a("code",[t._v("vim-plug")]),t._v("， 命令如下：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("大多数情况下，我们在国内执行如上命令，都会得到如下回复："),a("code",[t._v("curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused")]),t._v("，此时将如下一组数据写入到 hosts 以避开这个报错：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"199.232.28.133 raw.githubusercontent.com"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/hosts \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("然后再来执行上边的安装命令，即可成功了。")]),t._v(" "),a("h3",{attrs:{id:"_2-配置插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置插件"}},[t._v("#")]),t._v(" 2，配置插件")]),t._v(" "),a("p",[t._v("插件的管理维护依赖于配置文件："),a("code",[t._v("~/.config/nvim/init.vim")]),t._v("，标准的语法格式如下：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("call plug"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#begin()")]),t._v("\ncall plug"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#end()")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("所需要安装的插件写在这两个语句中间，然后通过插件管理的命令进行配置：")]),t._v(" "),a("ul",[a("li",[t._v("安装插件："),a("code",[t._v(":PlugInstall")])]),t._v(" "),a("li",[t._v("更新插件："),a("code",[t._v(":PlugUpdate")])]),t._v(" "),a("li",[t._v("删除插件："),a("code",[t._v(":PlugClean")]),t._v(" （首先在 "),a("code",[t._v("init.vim")]),t._v(" 中，注释掉该插件，然后打开 Nvim， 使用 "),a("code",[t._v(":PlugClean")]),t._v(" 命令清除该插件）")]),t._v(" "),a("li",[t._v("查看插件状态："),a("code",[t._v(":PlugStatus")])]),t._v(" "),a("li",[t._v("升级 vim-plug："),a("code",[t._v(":PlugUpgrade")])])]),t._v(" "),a("h2",{attrs:{id:"_3-插件大全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-插件大全"}},[t._v("#")]),t._v(" 3，插件大全")]),t._v(" "),a("h3",{attrs:{id:"_1-底部状态栏vim-airline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-底部状态栏vim-airline"}},[t._v("#")]),t._v(" 1，底部状态栏"),a("code",[t._v("vim-airline")])]),t._v(" "),a("p",[t._v("默认的 iterm2 的 vim 界面中，底部状态栏内容很少，通过配置这个插件，可以让状态栏内容更加丰富一些。")]),t._v(" "),a("p",[t._v("这是安装的第一个插件，为了提供给刚刚接触的同学一个清晰的熟悉方向，我来完整演示一下安装的流程，网上有太多介绍的文章，往往都是泛泛而言，让初学的我如坠五里雾，悲剧不应重演，我只希望看到这篇文章的朋友不需要再去点开其他文章了。")]),t._v(" "),a("p",[t._v("正像上边说的，应该严格按照如上语法要求，将要安装的插件写入到配置文件中：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/.config/nvim/init.vim\ncall plug"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#begin()")]),t._v("\nPlug "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vim-airline/vim-airline'")]),t._v("\ncall plug"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#end()")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("然后输入 vim 进入到 neovim 中，接着键入"),a("code",[t._v(":PlugInstall")]),t._v("回车进行安装，其实这个地方编辑的时候已经支持补全，键入 "),a("code",[t._v("P")]),t._v("然后"),a("code",[t._v("tab")]),t._v("一下，就会补全为 "),a("code",[t._v("Plug")]),t._v("了。看到 Done 则说明已经安装成功了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e044c46c851a111a.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("然后通过两次 "),a("code",[t._v(":q")]),t._v("退出编辑器，接着再次进入，就能看到插件已经生效了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a74e76e430d4de05.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("事实上"),a("code",[t._v("vim-airline")]),t._v("提供了很多主题来支持用户自定义，不同主题可以参考"),a("a",{attrs:{href:"https://github.com/vim-airline/vim-airline/wiki/Screenshots",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。想要更改主题，首先需要安装插件 "),a("a",{attrs:{href:"https://github.com/vim-airline/vim-airline-themes",target:"_blank",rel:"noopener noreferrer"}},[t._v("vim-airlinetheme"),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/.config/nvim/init.vim\ncall plug"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#begin()")]),t._v("\nPlug "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vim-airline/vim-airline'")]),t._v("\nPlug "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vim-airline/vim-airline-themes'")]),t._v("\ncall plug"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#end()")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("安装完成之后，通过如下设置进行自定义，同样，配置仍然是写入到 "),a("code",[t._v("~/.config/nvim/init.vim")]),t._v("中。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("let")]),t._v(" g:airline_theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<theme>'")]),t._v(' " '),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 代表某个主题的名称\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-自动双引号-括号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-自动双引号-括号"}},[t._v("#")]),t._v(" 2，自动双引号 & 括号")]),t._v(" "),a("p",[t._v("我们日常在编辑器中写代码时，输入的引号或者括号都会默认自动写入一对，然后鼠标的光标停留在中间，这里我们通过插件 "),a("a",{attrs:{href:"https://github.com/jiangmiao/auto-pairs",target:"_blank",rel:"noopener noreferrer"}},[t._v("auto-paris"),a("OutboundLink")],1),t._v(" 也可以给 vim 扩展这个功能。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("Plug "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jiangmiao/auto-pairs'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("安装之后，就拥有了与编辑器一样的自动扩展引号的功能了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7ea932841608240c.gif",alt:"img"}})]),t._v(" "),a("p",[t._v("详细规则如下：")]),t._v(" "),a("p",[t._v("auto-pairs 插件的主要功能通过如下的表格进行描述 (表格中 "),a("code",[t._v("│")]),t._v(" 表示当前光标所在位置)。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("auto-pairs 功能")])]),t._v(" "),a("th",[a("strong",[t._v("支持的配对符号")])]),t._v(" "),a("th",[a("strong",[t._v("原文本")])]),t._v(" "),a("th",[a("strong",[t._v("按键")])]),t._v(" "),a("th",[a("strong",[t._v("新文本")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("成对插入")]),t._v(" "),a("td",[t._v("{}、[]、()、“”、“、”")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("[")]),t._v(" "),a("td",[t._v("[│]")])]),t._v(" "),a("tr",[a("td",[t._v("成对删除")]),t._v(" "),a("td",[t._v("{}、[]、()、“”、“、”")]),t._v(" "),a("td",[t._v("foo[│]")]),t._v(" "),a("td",[t._v("BACKSPACE")]),t._v(" "),a("td",[t._v("foo│")])]),t._v(" "),a("tr",[a("td",[t._v("删除重复成对符号")]),t._v(" "),a("td",[t._v("{}、[]、()、“”、“、”")]),t._v(" "),a("td",[t._v("foo“““│”””")]),t._v(" "),a("td",[t._v("BACKSPACE")]),t._v(" "),a("td",[t._v("foo│")])]),t._v(" "),a("tr",[a("td",[t._v("换行并自动缩进")]),t._v(" "),a("td",[t._v("{}、[]、()")]),t._v(" "),a("td",[t._v("node{│}")]),t._v(" "),a("td",[t._v("ENTER")]),t._v(" "),a("td",[t._v("node{│}")])]),t._v(" "),a("tr",[a("td",[t._v("在括号内两侧各插入空格")]),t._v(" "),a("td",[t._v("{}、[]、()")]),t._v(" "),a("td",[t._v("foo{│}")]),t._v(" "),a("td",[t._v("SPACE")]),t._v(" "),a("td",[t._v("foo{│}")])]),t._v(" "),a("tr",[a("td",[t._v("词后单引号不成对插入")]),t._v(" "),a("td",[t._v("’")]),t._v(" "),a("td",[t._v("foo│")]),t._v(" "),a("td",[t._v("’")]),t._v(" "),a("td",[t._v("foo’│")])]),t._v(" "),a("tr",[a("td",[t._v("跳过右括号")]),t._v(" "),a("td",[t._v("{}、[]、()")]),t._v(" "),a("td",[t._v("[foo│]")]),t._v(" "),a("td",[t._v("]")]),t._v(" "),a("td",[t._v("[foo]│")])]),t._v(" "),a("tr",[a("td",[t._v("在转义符 \\ 后禁用插件")]),t._v(" "),a("td",[t._v("{}、[]、()、“”、“、”")]),t._v(" "),a("td",[t._v("foo\\│")]),t._v(" "),a("td",[t._v("{")]),t._v(" "),a("td",[t._v("foo{│")])]),t._v(" "),a("tr",[a("td",[t._v("对字符串加小括号")]),t._v(" "),a("td",[t._v("C 语言风格的字符串")]),t._v(" "),a("td",[t._v("│‘foo’")]),t._v(" "),a("td",[t._v("ALT+e")]),t._v(" "),a("td",[t._v("(‘foo’)│")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-注释插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-注释插件"}},[t._v("#")]),t._v(" 3，注释插件")]),t._v(" "),a("p",[t._v("平常我们注释一行内容的时候，可能会比较麻烦，尤其是不同语言的注释，各不相同，在 vim 中操作可能会比较麻烦，而 "),a("a",{attrs:{href:"https://github.com/scrooloose/nerdcommenter",target:"_blank",rel:"noopener noreferrer"}},[t._v("nerdcommenter"),a("OutboundLink")],1),t._v(" 就是一款针对这个问题的插件。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("Plug "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scrooloose/nerdcommenter'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("用法：通过键入 "),a("code",[t._v("\\cc")]),t._v("可以对某行进行注释，使用 "),a("code",[t._v("3\\cc")]),t._v("则可以注释包含光标所在行往下三行的内容， "),a("code",[t._v("3\\ci")]),t._v("切换对应行的注释状态。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/73f15ec83d15e38b.gif",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"_4-文件管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-文件管理器"}},[t._v("#")]),t._v(" 4， 文件管理器")]),t._v(" "),a("p",[t._v("让我们在终端里也能像图形界面中一样管理系统中的文件，插件名字是："),a("a",{attrs:{href:"https://github.com/scrooloose/nerdtree",target:"_blank",rel:"noopener noreferrer"}},[t._v("scrooloose/nerdtree"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("Plug "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scrooloose/nerdtree'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("使用姿势：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v(":NERDTree")]),t._v(" 即可打开当前编辑文件所在的目录")]),t._v(" "),a("li",[t._v("按住 Ctrl, 双击 w 可以在两个窗口之间切换")]),t._v(" "),a("li",[t._v("把光标移动到该文件，然后按 o，即可在右边窗口打开该文件")]),t._v(" "),a("li",[t._v("在该窗口直接按 q 即可退出")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/916c4d7c6a2ce174.jpg",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"_5-高亮显示复制内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-高亮显示复制内容"}},[t._v("#")]),t._v(" 5，高亮显示复制内容")]),t._v(" "),a("p",[t._v("在 vim 当中我们有时候会用"),a("code",[t._v("yy")]),t._v("复制一些行，默认情况下按下"),a("code",[t._v("yy")]),t._v("之后不会有任何反应，只能凭借自己刚刚的记忆来确认复制了哪些内容，"),a("a",{attrs:{href:"https://github.com/machakann/vim-highlightedyank",target:"_blank",rel:"noopener noreferrer"}},[t._v("vim-highlightedyank"),a("OutboundLink")],1),t._v(" 插件则可以让我们在按下"),a("code",[t._v("yy")]),t._v("之后高亮显示一会儿将要复制的内容。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("Plug "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'machakann/vim-highlightedyank'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果觉得高亮显示的时间太短，可以设置增加高亮显示的时间（单位为毫秒）：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("let")]),t._v(" g:highlightedyank_highlight_duration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(' " 高亮持续时间为 '),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" 毫秒\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("目前暂时先罗列这几个，以后遇到优秀的插件，还会再收集分享。GitHub 也有很多人分享的成熟的配置，只不过如果只添加却不知道作用，似乎也用处不大。")]),t._v(" "),a("h2",{attrs:{id:"_4-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考"}},[t._v("#")]),t._v(" 4，参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jdhao.github.io/2018/09/05/centos_nvim_install_use_guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux 下 Neovim 配置 Python 开发环境指南"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://michael728.github.io/2018/12/02/tools-vim-plugin-config/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vim 插件及配置"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);