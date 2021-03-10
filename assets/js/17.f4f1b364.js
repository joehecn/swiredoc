(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{819:function(t,_,v){"use strict";v.r(_);var a=v(114),i=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"电表管理-edit-4-虚拟电表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#电表管理-edit-4-虚拟电表"}},[t._v("#")]),t._v(" 电表管理 - Edit (4: 虚拟电表)")]),t._v(" "),v("h2",{attrs:{id:"demo-1pp-101000389"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#demo-1pp-101000389"}},[t._v("#")]),t._v(" Demo: 1PP - 101000389")]),t._v(" "),v("ul",[v("li",[t._v("101000389 -> v101000389")]),t._v(" "),v("li",[t._v("操作: 替换电表")])]),t._v(" "),v("h2",{attrs:{id:"_1-初始状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始状态"}},[t._v("#")]),t._v(" 1. 初始状态")]),t._v(" "),v("ul",[v("li",[t._v("Meter: 101000389")]),t._v(" "),v("li",[t._v('oldMeter: ""')])]),t._v(" "),v("img",{attrs:{src:t.$withBase("/img/c7-0.png"),alt:"list"}}),t._v(" "),v("img",{attrs:{src:t.$withBase("/img/c7-1.png"),alt:"list"}}),t._v(" "),v("h2",{attrs:{id:"_2-101000389-v101000389"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-101000389-v101000389"}},[t._v("#")]),t._v(" 2. 101000389 -> v101000389")]),t._v(" "),v("ul",[v("li",[t._v("修改 Meter: v101000389")]),t._v(" "),v("li",[t._v("按要求填充页面出现的虚拟电表框")]),t._v(" "),v("li",[t._v("选择 Effective: 2020-02-01")]),t._v(" "),v("li",[t._v("点击 Add 按钮")])]),t._v(" "),v("img",{attrs:{src:t.$withBase("/img/c8-3.png"),alt:"list"}}),t._v(" "),v("h2",{attrs:{id:"_3-目测表格对应条目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-目测表格对应条目"}},[t._v("#")]),t._v(" 3. 目测表格对应条目")]),t._v(" "),v("ul",[v("li",[t._v("字段有变化")]),t._v(" "),v("li",[t._v("Meter: v101000389")]),t._v(" "),v("li",[t._v("oldMeter: 101000389")]),t._v(" "),v("li",[t._v("Effective: 2020-02-01")]),t._v(" "),v("li",[t._v("Status: 草稿")])]),t._v(" "),v("img",{attrs:{src:t.$withBase("/img/c8-4.png"),alt:"list"}}),t._v(" "),v("img",{attrs:{src:t.$withBase("/img/c7-4_1.png"),alt:"list"}}),t._v(" "),v("h2",{attrs:{id:"_4-再次打开edit框"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-再次打开edit框"}},[t._v("#")]),t._v(" 4. 再次打开"),v("code",[t._v("Edit")]),t._v("框")]),t._v(" "),v("ul",[v("li",[t._v("再次点击"),v("code",[t._v("Edit")]),t._v("按钮, 打开编辑框, 然后选择"),v("code",[t._v("电表相关")]),t._v("选项卡")]),t._v(" "),v("li",[t._v("发现多了一个红色的"),v("code",[t._v("节点")]),t._v("，标签"),v("code",[t._v("Draft")]),t._v("表明当前节点是一个草稿节点")])]),t._v(" "),v("img",{attrs:{src:t.$withBase("/img/c8-5.png"),alt:"list"}}),t._v(" "),v("ul",[v("li",[t._v("可以点击切换当前节点来查看各个节点的状态")]),t._v(" "),v("li",[t._v("标签"),v("code",[t._v("Locked")]),t._v("表明当前节点不可编辑，原因是挂了草稿节点")]),t._v(" "),v("li",[t._v("必须先删除草稿节点, 才能编辑这个节点")])]),t._v(" "),v("h2",{attrs:{id:"_5-上面的步骤都是可逆的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-上面的步骤都是可逆的"}},[t._v("#")]),t._v(" 5. 上面的步骤都是可逆的")]),t._v(" "),v("ul",[v("li",[t._v("意味着每一步都能撤销")]),t._v(" "),v("li",[t._v("让我们按从下到上的顺序, 删除刚刚创建的草稿节点")]),t._v(" "),v("li",[t._v("选择末端的草稿节点，点击"),v("code",[t._v("Remove")]),t._v("按钮")]),t._v(" "),v("li",[t._v("此时应该会回到初始状态, 大家自行验证一下")])]),t._v(" "),v("h2",{attrs:{id:"_6-关于虚拟电表的特殊处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-关于虚拟电表的特殊处理"}},[t._v("#")]),t._v(" 6. 关于虚拟电表的特殊处理")]),t._v(" "),v("ul",[v("li",[t._v("当 Meter Input 输入框的内容发生改变时")]),t._v(" "),v("li",[v("ol",[v("li",[t._v("如果首字母不是 "),v("code",[t._v("v")]),t._v(", 则会隐藏虚拟电表框，反之会显现虚拟电表框")])])]),t._v(" "),v("li",[v("ol",{attrs:{start:"2"}},[v("li",[t._v("如果虚拟电表的Meter没有发生变化，禁止编辑虚拟电表框的相关内容")])])])])])}),[],!1,null,null,null);_.default=i.exports}}]);