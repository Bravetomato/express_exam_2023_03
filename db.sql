DROP DATABASE IF EXISTS wise_sayng;
CREATE DATABASE wise_saying;
USE wise_saying;

CREATE TABLE wise_saying (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    regDate DATETIME NOT NULL,
    content VARCHAR(200) NOT NULL,
    author VARCHAR(50) NOT NULL
);

INSERT INTO wise_saying
SET regDate = NOW(),
content = 'I am Ironman.',
author = 'Tony Stark';

INSERT INTO wise_saying
SET regDate = NOW(),
content = 'I can do this all day.',
author = 'Captain America';

INSERT INTO wise_saying
SET regDate = NOW(),
content = 'I have nothing to prove to you.',
author = 'Captain Marvel';

SELECT * FROM wise_saying;
