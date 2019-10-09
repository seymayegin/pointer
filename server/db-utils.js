const { Pool, Client } = require('pg');

module.exports = {
    query
};

const pool = new Pool({
  user: 'jvevxicx',
  host: 'salt.db.elephantsql.com',
  database: 'jvevxicx',
  password: '4vde6z66Br3LCUEyDKMfZhML4s_e7Ijg',
  port: 5432
});

async function query(sql, params) {
	return await pool.query(sql, params);
}
