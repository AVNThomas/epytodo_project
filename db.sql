--create database
CREATE DATABASE epytodo;

--create the user table
CREATE TABLE user(
id INT NOT NULL AUTO_INCREMENT,
email VARCHAR(150) NOT NULL UNIQUE,
password VARCHAR(150) NOT NULL,
name VARCHAR(150) NOT NULL,
firstname VARCHAR(150) NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
);

--create the todo table
CREATE TABLE todo(
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(150) NOT NULL,
description VARCHAR(2048) NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
due_time DATETIME,
status ENUM( 'not started', 'todo', 'in progress', 'done') DEFAULT 'not started',
user_id INT NOT NULL,
PRIMARY KEY (`id`)
);

--create the user table
INSERT INTO user (email, password, name, firstname) VALUES ('pierre@gmail.com', 'azerty', 'antoine', 'enzo');

--insert data in todo table
INSERT INTO todo (title, description, due_time, status, user_id) VALUES ('todo 1', 'description 1', '2020-01-01', 'not started', 1);

--display all of user table content
SELECT * FROM user;

--display one of user table content
SELECT * FROM user WHERE id = 1;

--display all of todo table content
SELECT * FROM todo;

--display one of todo table content
SELECT * FROM todo WHERE id = 1;
