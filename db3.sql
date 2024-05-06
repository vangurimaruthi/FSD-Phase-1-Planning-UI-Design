create database db3;
create table client(name varchar(20),email varchar(20),address varchar(20));
create table meeting(meetingtopic varchar(20),number int, starttime time);
ALTER USER 'root'@'localhost'IDENTIFIED WITH mysql_native_password BY 'Ramroom_mysql2';
flush privileges;
select * from client;
show tables;

