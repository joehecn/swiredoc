---
title: meter alarm
---

# meter alarm
>1. Data loss summary (30min data)  
计算所有的 data loss 的时段  
无法直接算，因为丢失的数并没有被记录  
通过反向思维  
我们可以先把所有 `Absolute Kwh` 不为 `null` 的时段统计出来  
那些没有被填充的时段就是我们要的结果  
这里粗略算24小时有没有数

>2. Data error summary (30min data)  
1 `Absolute kwh` is 0  
2 `Absolute Kwh` > 100000  
4 相邻两次取数的时间间隔 大于 30分钟

>3. Estimated monthly energy consumption in Dashboard  
104 插值算法取均值

# meter alarm

## energy
- dataLossSummaryBody: Data loss summary (30min data)  
每小时丢失的数据  
kwhs
``` sql

```

- dataErrorSummaryBody: Data error summary (30min data)  
每小时出错的数据  
kwhs
``` sql
```

- dataEstimatedBody: Estimated monthly energy consumption in Dashboard  
通过插值算法估算出来的每月耗电量
monthkwhs
``` sql
```

## schedule