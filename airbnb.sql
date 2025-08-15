create database airbnb;
use airbnb;
create table homes (houseName varchar(255), price double, location varchar(45), rating double, photo varchar(255),descrip longtext);
INSERT INTO homes (houseName, price, location, rating, photo, description) VALUES ('Royal Palace',98000,'Delhi',5.5,