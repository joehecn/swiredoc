---
title: 联通测试
---

# 联通测试

## watchMsg.js
``` js

const kafka = require('kafka-node')
const Consumer = kafka.Consumer

const client = new kafka.KafkaClient({
  kafkaHost: '8.210.238.93:27017'
})

const consumer = new Consumer(
  client,
  [
    { topic: 'msg', partition: 0, offset: 0 }
  ],
  {
    autoCommit: false
  }
)

consumer.on('message', function (message) {
  console.log(message)
})

```

## sendMsg.js

``` js

const kafka = require('kafka-node')
const Producer = kafka.Producer

const client = new kafka.KafkaClient({
  kafkaHost: '8.210.238.93:27017'
})

const producer = new Producer(client)

const payloads = [
  { topic: 'msg', messages: 'hi kafka msg', partition: 0 }
]

producer.on('ready', function () {
  producer.send(payloads, function (err, data) {
    console.log(err)
    console.log(data)
  })
})

producer.on('error', function (err) {
  console.log(err)
})

```