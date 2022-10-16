CREATE DATABASE ta_management;
use ta_management;
CREATE TABLE users(
    email VARCHAR(50) NOT NULL PRIMARY KEY ,
    password VARCHAR(50) NOT NULL
);
INSERT INTO users(email, password) VALUES ('testEmail@gmail.com', 'password');
INSERT INTO users(email, password) VALUES ('testEmail2@gmail.com', 'password2');

SELECT email, password FROM ta_management.users t WHERE email LIKE 'testEmail2@gmail.com' AND password LIKE 'password2';