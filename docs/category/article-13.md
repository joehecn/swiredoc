---
title: 从哪个节点时间开始重算 ?
---

# 从哪个节点时间开始重算 ?

## 只看单个电表有3种情况

- 1.
新增电表: 只有草稿节点

从第一个草稿节点的时间开始重算

<img :src="$withBase('/img/c13-01.png')" alt="list">

- 2.
从最后一个主节点加草稿节点

从第一个草稿节点的时间开始重算

<img :src="$withBase('/img/c13-02.png')" alt="list">

- 3.
从最后一个主节点前面任意个主节点加草稿节点

比较红框两个节点，哪个节点的时间在前面就按哪个算

<img :src="$withBase('/img/c13-03.png')" alt="list">

## 按大楼算
为了简化算法，实际上系统是按大楼算，每个大楼对应一个重算的开始时间，

这个开始时间是前面的算法算出来每个需要重算的电表的时间，再取一个最小值。