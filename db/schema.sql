DROP DATABASE IF EXISTS burgers;
CREATE DATABASE burgers;
USE burgers;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY SELECT (id),
)