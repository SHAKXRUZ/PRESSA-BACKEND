CREATE DATABASE shakhruz;

\c shakhruz;

CREATE TABLE elon (
    id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
    sana VARCHAR NOT NULL,
    vaqt VARCHAR NOT NULL,
    yunalish VARCHAR NOT NULL,
    ichki_yunalish VARCHAR NOT NULL,
    tadbir_turi VARCHAR NOT NULL,
    link VARCHAR NOT NULL,
    ismsharif VARCHAR NOT NULL,
    professiya VARCHAR NOT NULL,
    telifon1 VARCHAR NOT NULL,
    telifon2 VARCHAR NOT NULL,
    elon_description VARCHAR NOT NULL,
    mavzumatni VARCHAR NOT NULL,
    img_url VARCHAR NOT NULL,
    tasdiqlangan VARCHAR NOT NULL DEFAULT ''
);