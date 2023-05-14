CREATE DATABASE shakhruz;

\c shakhruz;

CREATE TABLE admin (
    id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
    admin VARCHAR NOT NULL,
    password VARCHAR NOT NULL
);