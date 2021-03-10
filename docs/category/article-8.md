---
title: 电表管理 - Edit (4 虚拟电表)
---

# 电表管理 - Edit (4: 虚拟电表)

## Demo: 1PP - 101000389
- 101000389 -> v101000389
- 操作: 替换电表

## 1. 初始状态
- Meter: 101000389
- oldMeter: ""

<img :src="$withBase('/img/c7-0.png')" alt="list">

<img :src="$withBase('/img/c7-1.png')" alt="list">

## 2. 101000389 -> v101000389
- 修改 Meter: v101000389
- 按要求填充页面出现的虚拟电表框
- 选择 Effective: 2020-02-01
- 点击 Add 按钮

<img :src="$withBase('/img/c8-3.png')" alt="list">

## 3. 目测表格对应条目
- 字段有变化
- Meter: v101000389
- oldMeter: 101000389
- Effective: 2020-02-01
- Status: 草稿

<img :src="$withBase('/img/c8-4.png')" alt="list">
<img :src="$withBase('/img/c7-4_1.png')" alt="list">

## 4. 再次打开`Edit`框
- 再次点击`Edit`按钮, 打开编辑框, 然后选择`电表相关`选项卡
- 发现多了一个红色的`节点`，标签`Draft`表明当前节点是一个草稿节点

<img :src="$withBase('/img/c8-5.png')" alt="list">

- 可以点击切换当前节点来查看各个节点的状态
- 标签`Locked`表明当前节点不可编辑，原因是挂了草稿节点
- 必须先删除草稿节点, 才能编辑这个节点

## 5. 上面的步骤都是可逆的
- 意味着每一步都能撤销
- 让我们按从下到上的顺序, 删除刚刚创建的草稿节点
- 选择末端的草稿节点，点击`Remove`按钮
- 此时应该会回到初始状态, 大家自行验证一下

## 6. 关于虚拟电表的特殊处理
- 当 Meter Input 输入框的内容发生改变时
- 1. 如果首字母不是 `v`, 则会隐藏虚拟电表框，反之会显现虚拟电表框
- 2. 如果虚拟电表的Meter没有发生变化，禁止编辑虚拟电表框的相关内容
