const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'php_training',
    password: 'Satendra@123',
    port: 5432, // default PostgreSQL port
  });
  
  module.exports = {
    query: (text, params) => pool.query(text, params),
  };