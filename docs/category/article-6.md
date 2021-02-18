---
title: 电表管理 - Edit (场景二 2个主节点)
---

# 电表管理 - Edit (场景二: 2个主节点)

## Demo: 1PP - 101000610
- 当有多个主节点并且还没有添加草稿节点时, 我们可以切换到任意一个主节点来添加草稿节点
- 这次我们选择第一个主节点来添加草稿节点
- 当然，你也可以选择第二个主节点自行测试
- 操作: 改变电表分类

## 1. 初始状态
- 注意末尾节点的分类是 CT
- 现在我们切换到第一个主节点
- Category: TEN

<img :src="$withBase('/img/c6-0.png')" alt="list">

<img :src="$withBase('/img/c6-1.png')" alt="list">
<img :src="$withBase('/img/c6-2.png')" alt="list">

## 2. 改变分类 ( TEN -> AirSide )
- 选择 Category: AirSide
- 选择 Effective: 2020-02-01 ( 必须大于上一个节点的日期 )
- 点击 Add 按钮

<img :src="$withBase('/img/c6-3.png')" alt="list">

## 3. 目测表格对应条目
- 字段有变化
- Category: AirSide
- Effective: 2020-02-01
- Status: 草稿

<img :src="$withBase('/img/c6-4.png')" alt="list">

## 4. 再次打开`Edit`框
- 再次点击`Edit`按钮, 打开编辑框, 然后选择`电表相关`选项卡
- 发现多了一个红色的`节点`，标签`Draft`表明当前节点是一个草稿节点

<img :src="$withBase('/img/c6-5.png')" alt="list">

- 可以点击切换当前节点来查看各个节点的状态
- 标签`Locked`表明当前节点不可编辑，原因是挂了草稿节点
- 必须先删除草稿节点, 才能编辑这个节点

## 5. 再添加一个节点
- 我们切换回末端的红色草稿节点, 再添加一个节点，同样:
- 选择 Category: CHWP
- 选择 Effective: 2020-03-01
- 点击 Add 按钮

## 6. 表格对应条目的字段又更新了
- Category: CHWP
- Effective: 2020-03-01
- Status: 草稿

<img :src="$withBase('/img/c6-8.png')" alt="list">

## 7. 上面的步骤都是可逆的
- 意味着每一步都能撤销
- 让我们按从下到上的顺序, 删除刚刚创建的两个草稿节点
- 选择末端的草稿节点，点击`Remove`按钮，重复此操作两次
- 此时应该会回到初始状态, 大家自行验证一下
