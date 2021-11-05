---
title: Swire 指南
---

# Swire 指南

## TODO LIST
- <a-checkbox checked><Badge text="4-15"/> Deaded -> Dead</a-checkbox>
- <a-checkbox checked><Badge text="4-15"/> Excel导出电表, Effective Date: 日期格式化</a-checkbox>
- <a-checkbox checked><Badge text="3-22"/> Begin date -> Start date</a-checkbox>
- <a-checkbox checked><Badge text="3-22"/> Meter ID: add icon ?</a-checkbox>
<img width="300px" :src="$withBase('/img/c0-04.jpeg')" alt="list">

- <a-checkbox checked>2020 RA Data;</a-checkbox>
- <a-checkbox checked>Chiller Alarm 报表: Latest available date 是文档的最后修改时间;</a-checkbox>
- <a-checkbox checked>Chiller Alarm 报表: 漏报错误;</a-checkbox>
- <a-checkbox checked>导入 txt, excel 的 chiller 数据时，每一行的每个单元格都要检查，所有异常报警;</a-checkbox>
- <a-checkbox checked><Badge text="暂时" type="warning"/> Dashboard, Analysis, Alarm email, Meter management 读写权限;</a-checkbox>
  - Meter mamagement 中: 暂时设定只有 admin 可以查看编辑以及重算;

  <img width="600px" :src="$withBase('/img/c0-03.jpeg')" alt="list">

- <a-checkbox checked>关于重新计算的通知email (接收者: 点击了重算按钮的人, Admin);</a-checkbox>
- <a-checkbox checked>手动修改电表的原始读数;</a-checkbox>
- <a-checkbox checked><Badge text="3-22"/> 优先处理, 通知栏 等待中进行中合并; (逻辑: 如果没有排队就直接发送进行中);</a-checkbox>
- <a-checkbox checked><Badge text="3-22"/> 优先处理, 新增 Download history 按钮，放到侧边栏抽屉;</a-checkbox>
- <a-checkbox checked><Badge text="3-22"/> 正式环境上线之前必须解决, 电表分类(included in submain) -> 标记 dead;</a-checkbox>
- <a-checkbox checked><Badge text="暂时" type="warning"/> OIE 多行电表相同的处理;( 101020250, 101020255 ) 只能编辑第一行，同时修改</a-checkbox>
  - 暂时锁定不能编辑
- 各种版面文字修改，详细看 [03122021 EDAT meter management - comment.pptx](/swiredoc/docs/03122021&#32;EDAT&#32;meter&#32;management&#32;-&#32;comment.pptx)
  - page 1
    - <a-checkbox checked><Badge text="暂时" type="warning"/> Add Filter Function</a-checkbox>
      - 暂时只能过滤 Meter name, old meter, category, zone;
      - <Badge text="3-22"/> 疑惑: Transformer 用 search 还是 filter ?
    - <a-checkbox checked>Add Remark</a-checkbox>
    - <a-checkbox checked>基础属性,电表相关 -> Description, Calculation Info</a-checkbox>
    - <a-checkbox checked><Badge text="3-22"/> Meter status: Live/Dead</a-checkbox>
    - <a-checkbox checked>虚拟电表 -> Virtual Meter</a-checkbox>
    - <a-checkbox checked>Effective -> Effective Date</a-checkbox>
    - <a-checkbox checked>Singtime -> Effective Date</a-checkbox>
    - <a-checkbox checked>SubBuilding -> Zone</a-checkbox>
  - page 3
    - <a-checkbox checked>Add icon “?”</a-checkbox>
    - <a-checkbox checked><Badge text="3-22"/> icon “?” 太大了，缩小一个字号</a-checkbox>
    - <a-checkbox checked>Add New -> New meter</a-checkbox>
    - <a-checkbox checked>EBuilding -> Building</a-checkbox>
    - <a-checkbox checked>Meter -> Meter ID</a-checkbox>
    - <a-checkbox checked>下拉菜单顺序</a-checkbox>
  - page 4
    - <a-checkbox checked>Add icon “?”</a-checkbox>
    - <a-checkbox checked>Category reorder</a-checkbox>

  - page 5
    - <a-checkbox checked>回到电表管理 -> Back</a-checkbox>
    - <a-checkbox checked>Effective -> Recalculation Start Date</a-checkbox>
    - <a-checkbox checked>Time -> Task Creation Date</a-checkbox>
    - <a-checkbox checked>Task's Historys -> Task List</a-checkbox>
    - <a-checkbox checked>Display date&time</a-checkbox>
    - <a-checkbox checked>通知 -> Notification</a-checkbox>
    - <a-checkbox checked>状态标签</a-checkbox>
  - page 6
    - <a-checkbox checked>侧边导航换三个自定义图标</a-checkbox>
      
- <a-checkbox checked>Download excel 按钮;</a-checkbox>
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