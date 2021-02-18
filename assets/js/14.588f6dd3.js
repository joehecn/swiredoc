(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{812:function(e,s,t){"use strict";t.r(s);var a=t(113),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"测试环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试环境"}},[e._v("#")]),e._v(" 测试环境")]),e._v(" "),t("h2",{attrs:{id:"两台服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两台服务器"}},[e._v("#")]),e._v(" 两台服务器")]),e._v(" "),t("p",[e._v("分别模拟云端和本地window")]),e._v(" "),t("ul",[t("li",[e._v("云端: 8.210.238.93(172.31.0.6)")]),e._v(" "),t("li",[e._v("本地: 8.210.97.134(172.31.0.7)")])]),e._v(" "),t("h2",{attrs:{id:"云端-8-210-238-93"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#云端-8-210-238-93"}},[e._v("#")]),e._v(" 云端: 8.210.238.93")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("PORTS")]),e._v(" "),t("th",{staticStyle:{"text-align":"right"}},[e._v("NAMES")])])]),e._v(" "),t("tbody",[t("tr",[t("td"),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("kafka_sync_mongo")])]),e._v(" "),t("tr",[t("td",[e._v("0.0.0.0:80->7033/tcp")]),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("energy")])]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("check-mongo-online")])]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("check-mongo-local")])]),e._v(" "),t("tr",[t("td",[e._v("0.0.0.0:37017->27017/tcp")]),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("energydb1")])]),e._v(" "),t("tr",[t("td",[e._v("0.0.0.0:27017->9092/tcp")]),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("kafka-docker_kafka_1")])]),e._v(" "),t("tr",[t("td",[e._v("22/tcp, 2888/tcp, 3888/tcp, 0.0.0.0:2181->2181/tcp")]),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("kafka-docker_zookeeper_1")])])])]),e._v(" "),t("h3",{attrs:{id:"kafka"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka"}},[e._v("#")]),e._v(" kafka")]),e._v(" "),t("ul",[t("li",[e._v("kafka-docker_kafka_1")]),e._v(" "),t("li",[e._v("kafka-docker_zookeeper_1")])]),e._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# docker-compose.yml")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'3.9'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("zookeeper")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" wurstmeister/zookeeper\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2181:2181"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kafka")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" wurstmeister/kafka\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("depends_on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" zookeeper\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"27017:9092"')]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("KAFKA_ADVERTISED_HOST_NAME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 8.210.238.93\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("KAFKA_ZOOKEEPER_CONNECT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" zookeeper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2181")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" /var/run/docker.sock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("/var/run/docker.sock\n")])])]),t("h3",{attrs:{id:"kafka-server-test"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka-server-test"}},[e._v("#")]),e._v(" kafka server test")]),e._v(" "),t("ul",[t("li",[e._v("8.210.238.93")]),e._v(" "),t("li",[e._v("172.31.0.6")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# bash")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" -i /Users/hemiao/pem/me.pem root@8.210.238.93\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install Docker")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" -i /Users/hemiao/pem/me.pem /Users/hemiao/fusquare/projects/swire/energy/docs/fun/docker.sh root@8.210.238.93:/root\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("777")]),e._v(" docker.sh\n./docker.sh\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# docker-compose")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -L "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://github.com/docker/compose/releases/download/1.27.4/docker-compose-'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("uname")]),e._v(" -s"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("uname")]),e._v(" -m"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(" -o /usr/local/bin/docker-compose\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s /usr/local/bin/docker-compose /usr/bin/docker-compose\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x /usr/local/bin/docker-compose\ndocker-compose --version\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# kafka-docker")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# https://github.com/wurstmeister/kafka-docker")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" -i /Users/hemiao/pem/me.pem -r /Users/hemiao/temp/kafka-docker/ root@8.210.238.93:/root\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# https://www.jianshu.com/p/0edcc3addf3f")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" kafka-docker\ndocker-compose up -d\ndocker-compose stop\n\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it kafka-docker_kafka_1 "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## 创建 topic")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KAFKA_HOME")]),e._v("/bin/kafka-topics.sh --create --topic swire --partitions "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" --zookeeper kafka-docker_zookeeper_1:2181 --replication-factor "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KAFKA_HOME")]),e._v("/bin/kafka-topics.sh --create --topic msg --partitions "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" --zookeeper kafka-docker_zookeeper_1:2181 --replication-factor "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## 查看刚刚创建的topic")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KAFKA_HOME")]),e._v("/bin/kafka-topics.sh --zookeeper kafka-docker_zookeeper_1:2181 --describe --topic swire\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KAFKA_HOME")]),e._v("/bin/kafka-topics.sh --zookeeper kafka-docker_zookeeper_1:2181 --describe --topic msg\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# # 发布信息")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# $KAFKA_HOME/bin/kafka-console-producer.sh --topic=topic --broker-list kafka-docker_kafka_1:9092")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# >ni")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# >haha")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# # 接收消息")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# $KAFKA_HOME/bin/kafka-console-consumer.sh --bootstrap-server kafka-docker_kafka_1:9092 --from-beginning --topic topic")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# # kafka集群管理界面")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# docker run -itd --name=kafka-manager -p 9000:9000 -e ZK_HOSTS="8.210.238.93:2181" sheepkiller/kafka-manager')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 8.210.238.93:9000")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# docker container stop $(docker container ls -a -q -f "label=io.confluent.docker")')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 释放硬盘空间")]),e._v("\ndocker system prune -a -f --volumes\ndocker system prune -a --volumes\n")])])]),t("h3",{attrs:{id:"energydb1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#energydb1"}},[e._v("#")]),e._v(" energydb1")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" -i /Users/hemiao/pem/me.pem root@8.210.238.93\n\ndocker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("27017")]),e._v(":27017 -v /"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PWD")]),e._v('"')]),e._v("/backups:/backups --name energydb -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MONGO_INITDB_ROOT_USERNAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("GDPfcXs6IkpMTgZ8yys -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MONGO_INITDB_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("UDJMgKsbhC7ulyjWk mongo\n\ndocker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("37017")]),e._v(":27017 --name mongo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MONGO_INITDB_ROOT_USERNAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("e700191fad1c "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MONGO_INITDB_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("5caee23e86 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    mongo:latest\n\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it mongo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    mongo -u e700191fad1c "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        -p 5caee23e86 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        --authenticationDatabase admin\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8.210")]),e._v(".238.93:37017\n\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it mongo mongo\n\nmongodump -u OjE1NTU2ND -p E4MTE5MjI2M3 -d swire -o /backups\nmongorestore -u OjE1NTU2ND -p E4MTE5MjI2M3 -d swire /backups/swire\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" -i /Users/hemiao/pem/me.pem /Users/hemiao/dockermongo/backups/meterinfos.json root@8.210.238.93:/root/energydb/backups\nmongoimport -d swire -c meterinfos --file /backups/meterinfos.json --drop\nmongoimport --host "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8.210")]),e._v(".238.93 --port "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("37017")]),e._v(" -u OjE1NTU2ND -p E4MTE5MjI2M3 -d swire -c meterinfos --file /backups/meterinfos.json --drop\n")])])]),t("h3",{attrs:{id:"kafka-sync-mongo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka-sync-mongo"}},[e._v("#")]),e._v(" kafka_sync_mongo")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# bash")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" -i /Users/hemiao/pem/me.pem root@8.210.238.93\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" kafka_sync_mongo\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" -i /Users/hemiao/pem/me.pem /Users/hemiao/swire/kafka_sync_mongo/Dockerfile root@8.210.238.93:/root/kafka_sync_mongo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" -i /Users/hemiao/pem/me.pem /Users/hemiao/swire/kafka_sync_mongo/package.json root@8.210.238.93:/root/kafka_sync_mongo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" -i /Users/hemiao/pem/me.pem -r /Users/hemiao/swire/kafka_sync_mongo/src root@8.210.238.93:/root/kafka_sync_mongo\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" kafka_sync_mongo\ndocker build -t joe/kafka_sync_mongo:1.0.0 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\ndocker run -d -v /"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PWD")]),e._v('"')]),e._v("/src:/server/src --network mega-net --name kafka_sync_mongo -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("NODE_ENV")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("server joe/kafka_sync_mongo:1.0.0\n")])])]),t("h3",{attrs:{id:"energy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#energy"}},[e._v("#")]),e._v(" energy")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('scp -i /Users/hemiao/pem/me.pem  -r /Users/hemiao/fusquare/projects/swire/energy/app root@8.210.238.93:/root/energy\nscp -i /Users/hemiao/pem/me.pem  -r /Users/hemiao/fusquare/projects/swire/energy/config root@8.210.238.93:/root/energy\nscp -i /Users/hemiao/pem/me.pem /Users/hemiao/fusquare/projects/swire/energy/package.json root@8.210.238.93:/root/energy\nscp -i /Users/hemiao/pem/me.pem /Users/hemiao/fusquare/projects/swire/energy/app.js root@8.210.238.93:/root/energy\nscp -i /Users/hemiao/pem/me.pem /Users/hemiao/fusquare/projects/swire/energy/Dockerfile root@8.210.238.93:/root/energy\nssh -i /Users/hemiao/pem/me.pem root@8.210.238.93\n\ncd energy\ndocker build -t joe/energy:1.0.0 .\ndocker run -d -p 80:7033 -v /"$PWD"/app:/energy/app -v /"$PWD"/config:/energy/config --env DB_HOST=energydb1 --network mega-net --name energy joe/energy:1.0.0\n')])])]),t("h3",{attrs:{id:"else"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#else"}},[e._v("#")]),e._v(" else")]),e._v(" "),t("ul",[t("li",[e._v("check-mongo-online")]),e._v(" "),t("li",[e._v("check-mongo-local")])]),e._v(" "),t("h2",{attrs:{id:"模拟-windows-本地-8-210-97-134"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模拟-windows-本地-8-210-97-134"}},[e._v("#")]),e._v(" 模拟 windows 本地: 8.210.97.134")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("PORTS")]),e._v(" "),t("th",{staticStyle:{"text-align":"right"}},[e._v("NAMES")])])]),e._v(" "),t("tbody",[t("tr",[t("td"),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("kafka_sync_mongo")])]),e._v(" "),t("tr",[t("td",[e._v("0.0.0.0:80->7033/tcp")]),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("energy")])]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("check-mongo-online")])]),e._v(" "),t("tr",[t("td"),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("check-mongo-local")])]),e._v(" "),t("tr",[t("td",[e._v("0.0.0.0:37017->27017/tcp")]),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("energydb1")])]),e._v(" "),t("tr",[t("td",[e._v("0.0.0.0:27017->9092/tcp")]),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("kafka-docker_kafka_1")])]),e._v(" "),t("tr",[t("td",[e._v("22/tcp, 2888/tcp, 3888/tcp, 0.0.0.0:2181->2181/tcp")]),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("kafka-docker_zookeeper_1")])])])]),e._v(" "),t("h3",{attrs:{id:"dockermongo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockermongo"}},[e._v("#")]),e._v(" dockermongo")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" -i /Users/hemiao/pem/me.pem /Users/hemiao/pem/me.pem root@8.210.238.93:/root/energydb/backups\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" -i /Users/hemiao/pem/me.pem root@8.210.238.93\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" -i /root/energydb/backups/me.pem -r /root/energydb/backups/swire root@8.210.97.134:/root/dockermongo/backups\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" -i /root/energydb/backups/me.pem -r /root/energydb/backups/swire root@172.31.0.7:/root/dockermongo/backups\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" -i /Users/hemiao/pem/me.pem root@8.210.97.134\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -xzvf swire.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -zcvf swire.tar.gz swire\n\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it tdb1 mongo\nmongorestore -u e700191fad1c -p 5caee23e86 --authenticationDatabase admin -d swire /backups/swire\n\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install Docker")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("scp")]),e._v(" -i /Users/hemiao/pem/me.pem /Users/hemiao/fusquare/projects/swire/energy/docs/fun/docker.sh root@47.242.32.120:/root\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" -i /Users/hemiao/pem/me.pem root@47.242.32.120\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("777")]),e._v(" docker.sh\n./docker.sh\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);