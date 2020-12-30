---
title: 太古升级计划
---

# 太古升级计划

## 需要升级配置
- 香港阿里云数据库 20G -> 40G 90美金左右

<!--
- 硬盘: 50G (已经使用70%) -> 100G
- 内存: 2G -> 4G~8G
- CPU: 1核 -> 2核~4核
-->

## 升级步骤
- step 1. 日本服务器上加消息队列
- step 2. 在新香港云服务器上开发新功能，日本服务器正常服务
- step 3. 迁移服务，停用日本服务器

### 现在状态

- 云端只用做展示数据 (查询)
- 单向数据流
- 云端数据库是单数据库

<img :src="$withBase('/pu/now.svg')" alt="now">

### step 1

<!--
- 用户可以管理电表 (增删改查)
- 双向数据流
- 线上数据库升级到集群数据库
- 本地监听线上数据库 update 事件
-->

- kafka 消息队列

<img :src="$withBase('/pu/step1.svg')" alt="step1">

### step 2

- 用户可以管理电表 (增删改查)
- 双向数据流
- 线上数据库升级到集群数据库

<img :src="$withBase('/pu/step2.svg')" alt="step2">

### step 3

- 迁移服务

<img :src="$withBase('/pu/step3.svg')" alt="step3">