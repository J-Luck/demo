#设置编码
SET NAMES UTF8;

# 丢弃指定的数据库，如果存在
DROP DATABASE IF EXISTS jiaju;

#创建库jiaju设置编码utf8
CREATE DATABASE jiaju CHARSET = UTF8;

#进入库
use jiaju;

#创建用户表 j_user
CREATE TABLE j_user(
  uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  phone VARCHAR(16),
  user_name VARCHAR(32),
  address VARCHAR(150)
);

#插入数据
INSERT INTO j_user VALUES(1,"tom","123456","12345678911","张三","北京市万寿路");
INSERT INTO j_user VALUES(2,"tom","1245678","12345678911","李四","北京市万寿路");
INSERT INTO j_user VALUES(3,"tom","786787","12345678911","王瑞","北京市万寿路");
INSERT INTO j_user VALUES(4,"tom","867875","12345678911","哈克龙","北京市万寿路");
INSERT INTO j_user VALUES(5,"tom","4567867","12345678911","夏露露","北京市万寿路");


















