CREATE DATABASE alcatraz_api;


CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    genre VARCHAR(255),
    rating VARCHAR(255),
    trailer VARCHAR(255),
    director VARCHAR(255),
    stars VARCHAR(255),
    poster VARCHAR(255),
    background VARCHAR(255),
    streaming VARCHAR(255),
    category VARCHAR(255)
);

create table categories(
	id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    menu boolean
);