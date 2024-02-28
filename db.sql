CREATE DATABASE bookDB;

CREATE TABLE book (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(20),
    description VARCHAR(255)
);

INSERT INTO book (id, name, description) 
VALUES
(101, X, beatiful book);

SELECT * FROM book;

SELECT * FROM book WHERE id=101;

DELETE FROM book WHERE id=101;