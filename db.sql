CREATE DATABASE bookDB;

CREATE TABLE book (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(20),
    description VARCHAR(255)
);

-- Create
INSERT INTO book (id, name, description) 
VALUES
(101, X, beatiful book);

-- Read All
SELECT * FROM book;

-- Read just One
SELECT * FROM book WHERE id=101;

-- Delete
DELETE FROM book WHERE id=101;

-- Update
UPDATE book SET name="www", description="adakaadkajda" WHERE id=102;