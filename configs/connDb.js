const initOptions = {/* initialization options */};
const pgp = require('pg-promise')(initOptions);

//using pgadmin4 ver 5.2
const conn = {
    host: 'localhost',
    port: 5432,
    database: 'QLBH',
    user: 'postgres',
    password: 'lehuudung01',
    max: 30 // use up to 30 connections

    // "types" - in case you want to set custom type parsers on the pool level
};

const db = pgp(conn);

module.exports = db;