/**
 * Host query and connect function  send, recieve data
 */

 import * as mysql from 'mysql2/promise';
 import config from './config';

/** create params */

const params = {
    user: config.mysql.username,
    password: config.mysql.password,
    host: config.mysql.host,
    database: config.mysql.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}

/** create pool */
const pool = mysql.createPool(params)

async function test() {
    const connection = await pool.getConnection();
    // Use the connection
    // const rows = await connection.query('SELECT something FROM sometable');
    connection.release();
}

export default pool 