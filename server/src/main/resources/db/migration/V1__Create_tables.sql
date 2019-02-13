CREATE TABLE page (
    id VARCHAR(40) PRIMARY KEY,
    title VARCHAR(max)
);

CREATE TABLE block (
    id VARCHAR(200) PRIMARY KEY,
    ordering INT DEFAULT 0,
    page_id VARCHAR(40) NOT NULL,
    title VARCHAR(max),
    content VARCHAR(max),
    FOREIGN KEY (page_id) REFERENCES page(id)
);
