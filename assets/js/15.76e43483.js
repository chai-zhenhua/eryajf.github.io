(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{583:function(s,a,t){"use strict";t.r(a);var e=t(16),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("磁盘分区的时候，平常都是使用交互式的方式进行，但是交互式有时候对一些批量的，或者脚本式的，就不那么友好了，今天刚好要对一批设备初始化进行分区操作，几百 G 的以及十来 T 的都有，因此两个分区命令的非交互式这里一并拿下了。")]),s._v(" "),t("h2",{attrs:{id:"_1-fdisk-分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-fdisk-分区"}},[s._v("#")]),s._v(" 1，fdisk 分区")]),s._v(" "),t("p",[s._v("直接进入正题，关于两种分区方式的选型等问题，这里不做讨论。")]),s._v(" "),t("p",[s._v("创建如下交互文本：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" fdisk.txt\nn\n\n\n\n\nw\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("code",[s._v("注意：")]),s._v("文件内容就两步，一个 "),t("code",[s._v("n")]),s._v("，一个 "),t("code",[s._v("w")]),s._v("，但是注意中间有 4 个换行，表示分区过程选项保持默认，如此分配整个磁盘为一个分区。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" /dev/vdb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./fdisk.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" /dev/vdc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./fdisk.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("接下来就是格式化，挂载的事情了，比较常规，下边会给出例子，这里不多赘述。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ccd8c6e927c02039.jpg",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"_2-parted-风格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-parted-风格"}},[s._v("#")]),s._v(" 2，parted 风格")]),s._v(" "),t("p",[s._v("debian 系统默认没有 parted 命令，需要先安装：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parted")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后创建如下交互文本：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" parted.txt\nmklabel gpt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nmkpart\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\next4\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%\nIgnore\nq\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("文本内也都是格式化过程中需要的步骤，同样是将整块磁盘分给一个分区。")]),s._v(" "),t("p",[s._v("然后进行分区：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parted")]),s._v(" /dev/vdd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./parted.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parted")]),s._v(" /dev/vde "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./parted.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parted")]),s._v(" /dev/vdf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./parted.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parted")]),s._v(" /dev/vdg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./parted.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parted")]),s._v(" /dev/vdh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./parted.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parted")]),s._v(" /dev/vdi "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./parted.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parted")]),s._v(" /dev/vdj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./parted.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parted")]),s._v(" /dev/vdk "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./parted.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parted")]),s._v(" /dev/vdl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./parted.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parted")]),s._v(" /dev/vdm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./parted.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parted")]),s._v(" /dev/vdn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./parted.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parted")]),s._v(" /dev/vdo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./parted.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("然后对如上分区进行格式化：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mkfs.ext4 /dev/vdb1\nmkfs.ext4 /dev/vdc1\nmkfs.ext4 /dev/vdd1\nmkfs.ext4 /dev/vde1\nmkfs.ext4 /dev/vdf1\nmkfs.ext4 /dev/vdg1\nmkfs.ext4 /dev/vdh1\nmkfs.ext4 /dev/vdi1\nmkfs.ext4 /dev/vdj1\nmkfs.ext4 /dev/vdk1\nmkfs.ext4 /dev/vdl1\nmkfs.ext4 /dev/vdm1\nmkfs.ext4 /dev/vdn1\nmkfs.ext4 /dev/vdo1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("接着创建需要挂载的目录：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" data00 data01 data02 data03 data04 data05 data06 data07 data08 data09 data10 data11 data12 data13\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后将自动挂载写入配置：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/vdb1 /data00 ext4  defaults 0 0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/vdc1 /data01 ext4  defaults 0 0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/vdd1 /data02 ext4  defaults 0 0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/vde1 /data03 ext4  defaults 0 0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/vdf1 /data04 ext4  defaults 0 0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/vdg1 /data05 ext4  defaults 0 0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/vdh1 /data06 ext4  defaults 0 0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/vdi1 /data07 ext4  defaults 0 0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/vdj1 /data08 ext4  defaults 0 0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/vdk1 /data09 ext4  defaults 0 0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/vdl1 /data10 ext4  defaults 0 0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/vdm1 /data11 ext4  defaults 0 0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/vdn1 /data12 ext4  defaults 0 0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dev/vdo1 /data13 ext4  defaults 0 0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/fstab\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("执行加载命令，查看是否正常。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -a\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("记录两个常用分区命令的非交互方式，方便日常的操作。")]),s._v(" "),t("h2",{attrs:{id:"_3-插曲"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-插曲"}},[s._v("#")]),s._v(" 3，插曲")]),s._v(" "),t("p",[s._v("过程中还遇到过一个插曲，"),t("code",[s._v("vdc")]),s._v("磁盘应该按照 fdisk 风格来分区即可，因为这个磁盘并没有超过 2T，可以直接分区，但是当时搞错了分区名称，于是误把此分区给搞成了 gpt 风格的，这个时候想要改回 mbr 分区类型，发现并不太容易。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parted")]),s._v(" /dev/vdc\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parted"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("mktable\nNew disk label type? msdos\nWarning: The existing disk label on /dev/vdc will be destroyed and all data on\nthis disk will be lost. Do you want to continue?\nYes/No?Yes\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("code",[s._v("注意：")]),s._v("这个地方在重新定义分区类型的时候，并不能写 mbr，或者形如其他分区写成 dos，如果写成这些，命令行将会一直报错，正确的应该是 "),t("code",[s._v("msdos")]),s._v("，然后在保存退出，这个时候此分区就变回所谓的 mbr 分区了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);