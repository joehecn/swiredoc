---
title: 电表管理 - Edit (5 废弃电表)
---

# 电表管理 - Edit (5: 废弃电表)

## Demo: 1PP - 101000387
- 操作: 废弃电表

## 1. 初始状态
- Meter: 101000387

<img :src="$withBase('/img/c9-1.png')" alt="list">

## 2. 废弃电表操作
- 切换 Living 为 Dead
- 选择 Effective: 2020-02-01
- 点击 Add 按钮

<img :src="$withBase('/img/c9-2.png')" alt="list">

## 3. 目测表格对应条目
- 字段有变化
- Effective: 2020-02-01
- Status: `草稿` `Deaded`

<img :src="$withBase('/img/c9-3.png')" alt="list">

## 4. 再次打开`Edit`框
- 再次点击`Edit`按钮, 打开编辑框, 然后选择`电表相关`选项卡
- 发现多了一个红色的`节点`，标签`Draft`表明当前节点是一个草稿节点
- `Deaded` 表明当前节点被废弃了

<img :src="$withBase('/img/c9-4.png')" alt="list">

- 可以点击切换当前节点来查看各个节点的状态
- 标签`Locked`表明当前节点不可编辑，原因是挂了草稿节点
- 必须先删除草稿节点, 才能编辑这个节点

## 5. 上面的步骤都是可逆的
- 意味着每一步都能撤销
- 让我们按从下到上的顺序, 删除刚刚创建的草稿节点
- 选择末端的草稿节点，点击`Remove`按钮
- 此时应该会回到初始状态, 大家自行验证一下

## 6. 关于废弃电表的特殊处理
- 只有末支节点的状态为 `Living` 时可以点击 `Add` 按钮
- 当 切换 `Living` 为 `Dead` 时
- 1. 如果是虚拟电表，虚拟电表框的相关内容会被隐藏
- 2. 只有 `Effective` 字段可以被编辑并起作用
