---
title: 重算功能说明-20211107
---

# Manual Patching
## 功能
批量修改如下所示的各种数据原始值，提交系统重算相关统计数据
- Meter: RawKwh
- Ratio
- Chiller: FlowRate, ReturnTemp, SupplyTemp, Cwet, Cwlt, Tc, Te, Tcb, Teb

## 流程

<img :src="$withBase('/pu/patching.svg')" alt="list">

## 重算 Meter
<img :src="$withBase('/img/00-01.jpg')" alt="list">

## 重算 Ratio
<img :src="$withBase('/img/00-08.png')" alt="list">

## 重算 Chiller
<img :src="$withBase('/img/00-09.png')" alt="list">

## 用户操作
下面通过重算电表电量的示例演示操作步骤，修改其它数据与修改电量的步骤基本一致
1. 根据搜索条件批量查找数据

<img :src="$withBase('/img/00-00.png')" alt="list">

2. 下载到 CSV 文件,

<img :src="$withBase('/img/00-04.png')" alt="list">

3. 在 CSV 文件中修改数值

<img :src="$withBase('/img/00-03.jpg')" alt="list">

4. 上传修改后的 CSV 文件

<img :src="$withBase('/img/00-05.png')" alt="list">

5. 添加到重算任务

<img :src="$withBase('/img/00-06.png')" alt="list">

6. 查看任务列表

<img :src="$withBase('/img/00-07.png')" alt="list">

7. 可以 Download Excel 报表查看每个任务的详情
