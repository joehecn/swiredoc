---
title: 测试环境
---

# 测试环境

## 两台服务器
分别模拟云端和本地window
- 云端: 8.210.238.93(172.31.0.6)
- 本地: 8.210.97.134(172.31.0.7)

## 云端: 8.210.238.93
| PORTS                                              | NAMES                    |
| -------------------------------------------------- | ------------------------:|
|                                                    | kafka_sync_mongo         |
| 0.0.0.0:80->7033/tcp                               | energy                   |
|                                                    | check-mongo-online       |
|                                                    | check-mongo-local        |
| 0.0.0.0:37017->27017/tcp                           | energydb1                |
| 0.0.0.0:27017->9092/tcp                            | kafka-docker_kafka_1     |
| 22/tcp, 2888/tcp, 3888/tcp, 0.0.0.0:2181->2181/tcp | kafka-docker_zookeeper_1 |

### kafka
- kafka-docker_kafka_1
- kafka-docker_zookeeper_1
``` yml
# docker-compose.yml
version: '3.9'
services:
  zookeeper:
    image: wurstmeister/zookeeper
    ports:
      - "2181:2181"
  kafka:
    image: wurstmeister/kafka
    depends_on:
      - zookeeper
    ports:
      - "27017:9092"
    environment:
      KAFKA_ADVERTISED_HOST_NAME: 8.210.238.93
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```
### kafka server test
- 8.210.238.93
- 172.31.0.6
``` bash
# bash
ssh -i /Users/hemiao/pem/me.pem root@8.210.238.93

# Install Docker
scp -i /Users/hemiao/pem/me.pem /Users/hemiao/fusquare/projects/swire/energy/docs/fun/docker.sh root@8.210.238.93:/root

chmod 777 docker.sh
./docker.sh

# docker-compose
curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
docker-compose --version

# kafka-docker
# https://github.com/wurstmeister/kafka-docker
scp -i /Users/hemiao/pem/me.pem -r /Users/hemiao/temp/kafka-docker/ root@8.210.238.93:/root

# https://www.jianshu.com/p/0edcc3addf3f
cd kafka-docker
docker-compose up -d
docker-compose stop

docker exec -it kafka-docker_kafka_1 bash

## 创建 topic
$KAFKA_HOME/bin/kafka-topics.sh --create --topic swire --partitions 1 --zookeeper kafka-docker_zookeeper_1:2181 --replication-factor 1
$KAFKA_HOME/bin/kafka-topics.sh --create --topic msg --partitions 2 --zookeeper kafka-docker_zookeeper_1:2181 --replication-factor 1
## 查看刚刚创建的topic
$KAFKA_HOME/bin/kafka-topics.sh --zookeeper kafka-docker_zookeeper_1:2181 --describe --topic swire
$KAFKA_HOME/bin/kafka-topics.sh --zookeeper kafka-docker_zookeeper_1:2181 --describe --topic msg
# # 发布信息
# $KAFKA_HOME/bin/kafka-console-producer.sh --topic=topic --broker-list kafka-docker_kafka_1:9092
# >ni
# >haha
# # 接收消息
# $KAFKA_HOME/bin/kafka-console-consumer.sh --bootstrap-server kafka-docker_kafka_1:9092 --from-beginning --topic topic

# # kafka集群管理界面
# docker run -itd --name=kafka-manager -p 9000:9000 -e ZK_HOSTS="8.210.238.93:2181" sheepkiller/kafka-manager
# 8.210.238.93:9000

# docker container stop $(docker container ls -a -q -f "label=io.confluent.docker")

# 释放硬盘空间
docker system prune -a -f --volumes
docker system prune -a --volumes
```
### energydb1
``` bash
ssh -i /Users/hemiao/pem/me.pem root@8.210.238.93

docker run -d -p 27017:27017 -v /"$PWD"/backups:/backups --name energydb -e MONGO_INITDB_ROOT_USERNAME=GDPfcXs6IkpMTgZ8yys -e MONGO_INITDB_ROOT_PASSWORD=UDJMgKsbhC7ulyjWk mongo

docker run -d -p 37017:27017 --name mongo \
    -e MONGO_INITDB_ROOT_USERNAME=e700191fad1c \
    -e MONGO_INITDB_ROOT_PASSWORD=5caee23e86 \
    mongo:latest

docker exec -it mongo \
    mongo -u e700191fad1c \
        -p 5caee23e86 \
        --authenticationDatabase admin

8.210.238.93:37017

docker exec -it mongo mongo

mongodump -u OjE1NTU2ND -p E4MTE5MjI2M3 -d swire -o /backups
mongorestore -u OjE1NTU2ND -p E4MTE5MjI2M3 -d swire /backups/swire

scp -i /Users/hemiao/pem/me.pem /Users/hemiao/dockermongo/backups/meterinfos.json root@8.210.238.93:/root/energydb/backups
mongoimport -d swire -c meterinfos --file /backups/meterinfos.json --drop
mongoimport --host 8.210.238.93 --port 37017 -u OjE1NTU2ND -p E4MTE5MjI2M3 -d swire -c meterinfos --file /backups/meterinfos.json --drop
```

### kafka_sync_mongo
``` bash
# bash
ssh -i /Users/hemiao/pem/me.pem root@8.210.238.93
mkdir kafka_sync_mongo

scp -i /Users/hemiao/pem/me.pem /Users/hemiao/swire/kafka_sync_mongo/Dockerfile root@8.210.238.93:/root/kafka_sync_mongo
scp -i /Users/hemiao/pem/me.pem /Users/hemiao/swire/kafka_sync_mongo/package.json root@8.210.238.93:/root/kafka_sync_mongo
scp -i /Users/hemiao/pem/me.pem -r /Users/hemiao/swire/kafka_sync_mongo/src root@8.210.238.93:/root/kafka_sync_mongo

cd kafka_sync_mongo
docker build -t joe/kafka_sync_mongo:1.0.0 .
docker run -d -v /"$PWD"/src:/server/src --network mega-net --name kafka_sync_mongo -e NODE_ENV=server joe/kafka_sync_mongo:1.0.0
```
### energy
```
scp -i /Users/hemiao/pem/me.pem  -r /Users/hemiao/fusquare/projects/swire/energy/app root@8.210.238.93:/root/energy
scp -i /Users/hemiao/pem/me.pem  -r /Users/hemiao/fusquare/projects/swire/energy/config root@8.210.238.93:/root/energy
scp -i /Users/hemiao/pem/me.pem /Users/hemiao/fusquare/projects/swire/energy/package.json root@8.210.238.93:/root/energy
scp -i /Users/hemiao/pem/me.pem /Users/hemiao/fusquare/projects/swire/energy/app.js root@8.210.238.93:/root/energy
scp -i /Users/hemiao/pem/me.pem /Users/hemiao/fusquare/projects/swire/energy/Dockerfile root@8.210.238.93:/root/energy
ssh -i /Users/hemiao/pem/me.pem root@8.210.238.93

cd energy
docker build -t joe/energy:1.0.0 .
docker run -d -p 80:7033 -v /"$PWD"/app:/energy/app -v /"$PWD"/config:/energy/config --env DB_HOST=energydb1 --network mega-net --name energy joe/energy:1.0.0
```
### else
- check-mongo-online
- check-mongo-local

## 模拟 windows 本地: 8.210.97.134
| PORTS                                              | NAMES                    |
| -------------------------------------------------- | ------------------------:|
|                                                    | kafka_sync_mongo         |
| 0.0.0.0:80->7033/tcp                               | energy                   |
|                                                    | check-mongo-online       |
|                                                    | check-mongo-local        |
| 0.0.0.0:37017->27017/tcp                           | energydb1                |
| 0.0.0.0:27017->9092/tcp                            | kafka-docker_kafka_1     |
| 22/tcp, 2888/tcp, 3888/tcp, 0.0.0.0:2181->2181/tcp | kafka-docker_zookeeper_1 |

### dockermongo
``` bash
scp -i /Users/hemiao/pem/me.pem /Users/hemiao/pem/me.pem root@8.210.238.93:/root/energydb/backups
ssh -i /Users/hemiao/pem/me.pem root@8.210.238.93

scp -i /root/energydb/backups/me.pem -r /root/energydb/backups/swire root@8.210.97.134:/root/dockermongo/backups
scp -i /root/energydb/backups/me.pem -r /root/energydb/backups/swire root@172.31.0.7:/root/dockermongo/backups
ssh -i /Users/hemiao/pem/me.pem root@8.210.97.134

tar -xzvf swire.tar.gz
tar -zcvf swire.tar.gz swire

docker exec -it tdb1 mongo
mongorestore -u e700191fad1c -p 5caee23e86 --authenticationDatabase admin -d swire /backups/swire

```

``` bash
# Install Docker
scp -i /Users/hemiao/pem/me.pem /Users/hemiao/fusquare/projects/swire/energy/docs/fun/docker.sh root@47.242.32.120:/root

ssh -i /Users/hemiao/pem/me.pem root@47.242.32.120

chmod 777 docker.sh
./docker.sh

```