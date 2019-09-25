DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT, 
    PRIMARY KEY (id),
    burger_name VARCHAR(300) NOT NULL,
    devoured BOOLEAN, 
)