---
title: chiller alarm
---

# chiller alarm
## 1. File availability summary

- 1PP, 2PP (TXT)

  building chiller day

- DEH, DOH, LIH, OIE, OXH (EXCEL)

  building month

- CP1, CPS, CPN, CP4 (EXCEL)

  building chiller month

- 3PP (SQL)

  building chiller hour

- HER (SQL)

  building chiller hour

| building | chiller | source | sn | alias                   |
| -------- | ------- | ------ | -- | ----------------------- |
| 1PP      | 1       | txt    | 1  |                         |
| 1PP      | 2       | txt    | 2  |                         |
| 1PP      | 3       | txt    | 3  |                         |
| 1PP      | 4       | txt    | 4  |                         |
| 1PP      | 5       | txt    | 5  |                         |
| 1PP      | 6       | txt    | 6  |                         |
| 2PP      | 1       | txt    | 7  |                         |
| 2PP      | 2       | txt    | 8  |                         |
| 2PP      | 3       | txt    | 9  |                         |
| 2PP      | 4       | txt    | 10 |                         |
| 2PP      | 5       | txt    | 11 |                         |
| DEH      | DeH     | xls    | 12 | Devon House_Chiller     |
| DOH      | DOH     | xls    | 12 | Dorset House_Chiller    |
| LIH      | LiH     | xls    | 12 | Lincoln House_Chiller   |
| OIE      | OIE     | xls    | 12 | One Island East_Chiller |
| OXH      | OxH     | xls    | 12 | Oxford House_Chiller    |
| CP1      | CP1_    | xls    | 12 |                         |
| CPS      | CPS_    | xls    | 12 |                         |
| CPN      | CPN_    | xls    | 12 |                         |
| CP4      | CP4_    | xls    | 12 |                         |

## 2. Data error summary (hourly data)
- 1. 检查列标是否合法，如果列标不合法，忽略整张表
- 2. 循环检查每一行
  - 2.1 检查时间是否正确，如果时间不正确，忽略此行
  - 2.2 计算 coolingload, 如果 coolingload 算不出来，报错且忽略此行
  - 2.3 检查所有其它字段，如果有问题则报错