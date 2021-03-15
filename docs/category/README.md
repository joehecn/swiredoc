---
title: Swire-Docs
---

# Swire-Docs

## TODO LIST
- <a-checkbox checked>2020 RA Data;</a-checkbox>
- <a-checkbox>Chiller Alarm 报表: Latest available date 是文档的最后修改时间;</a-checkbox>
- <a-checkbox>Chiller Alarm 报表: 漏报错误;</a-checkbox>
- <a-checkbox>导入 txt, excel 的 chiller 数据时，每一行的每个单元格都要检查，所有异常报警;</a-checkbox>
- <a-checkbox>Dashboard, Analysis, Alarm email, Meter management 读写权限;</a-checkbox>
- <a-checkbox>关于重新计算的通知email (接收者: 点击了重算按钮的人, Admin);</a-checkbox>
- <a-checkbox>手动修改电表的原始读数;</a-checkbox>
- <a-checkbox>通知栏 等待中进行中合并; (逻辑: 如果没有排队就直接发送进行中);</a-checkbox>
- <a-checkbox>新增 Download history 按钮，放到侧边栏抽屉;</a-checkbox>
- <a-checkbox>电表分类(included in submain) -> 标记 deaded;</a-checkbox>
- <a-checkbox>OIE 多行电表相同的处理;（101020250，101020255）只能编辑第一行，同时修改</a-checkbox>
- <a-checkbox>Download excel 按钮;</a-checkbox>
<img :src="$withBase('/img/c0-01.jpg')" alt="list">

## 问题
### meter
- 1. DEH_DEH-CH5: 5月 第三个表是估值，但是第一个表没有 dataloss
- 2. DEH_DEH-PM23: 5/20 ~ 5/22
- 3. 重复计算的问题

### chiller
- 1. 第一个表格 Latest available date 是 pp txt 文档的时间， tp cp excel, her
- 2. 第二个表格 漏掉了
- 3. 所有的报错