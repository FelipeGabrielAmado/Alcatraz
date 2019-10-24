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
    poster VARCHAR(255)
);

INSERT INTO movies VALUES (default, 'Joker',
'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: "The Joker".',
'Crime, Drama, Thriller',
'8.9/10',
'https://www.youtube.com/watch?v=zAGVQLHvwOY',
'Todd Phillips',
'Joaquin Phoenix, Robert De Niro',
'https://cenapop.uol.com.br/wordpress/wp-content/uploads/2019/04/joker-filme.jpg'
);

select * from users;
