# install dependency


$ npm install express dotenv
$ npm install --save-dev @types/express @types/dotenv  @types/node 



$ npm install -g ts-node
$ npm install -g typescript
$ npm install --save-dev ts-node


run

nodemon source/server.ts


# monitor

ตามปรกติ  ใช้ nodemon app.js  หรือ  tsc --watch สำหรับ ts file 
หรือ ติดตั้ง  ts-node


nodemon --watch 'src/**/*.ts' --ignore 'src/**/*.spec.ts' --exec 'ts-node' src/app.ts

# Emit JS for just the index.ts with the compiler defaults
tsc index.ts
# Emit JS for any .ts files in the folder src, with the default settings
tsc src/*.ts

# export = vs export default

//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

# or

//------ main.js ------
import * as lib from 'lib';
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5


# api

curl --request GET 'localhost:1337/sample/ping'

curl --request POST 'localhost:3000/users' \
--data-raw ''

# mysql2

$ npm install mysql2 
$ npm install --save-dev @types/mysql2


import * as mysql from 'mysql2/promise';
const mysql = require("mysql2/promise");

console.log("Creating connection pool...")
const pool = mysql.createPool({
    host: 'localhost',
    user: 'user',
    database: 'test_db',
    password: 'password'
})

module.exports = pool;


test.js
// Require to whereever db-config is 
const pool = require('./db-config.js');

async function testQuery() {
    const results = await pool.query("select * from users");
    console.table(results[0]);
}

testQuery();

# async

In JavaScript, you have three options to write asynchronous code:
Using callbacks:

db.query( 'SELECT * FROM users WHERE id = 1', ( err, rows ) => {
  // ... use the result ...
} );

2. Using promises:

db.query( 'SELECT * FROM users WHERE id = 1' ).then( rows => {
  // ... use the result ...
} );

3. Using the await keyword:

const rows = await db.query( 'SELECT * FROM users WHERE id = 1' );

# async example

const users = await db.query( 'SELECT * FROM users WHERE id = 1' );
for ( const i in users ) {
  users[ i ].groups = await db.query( '...' );
  if ( users[ i ].is_admin )
    users[ i ].modules = await db.query( '...' );
}

const db = makeDb( config );
try {
  const someRows = await db.query( 'SELECT * FROM some_table' );
  const otherRows = await db.query( 'SELECT * FROM other_table' );
  // do something with someRows and otherRows
} catch ( err ) {
  // handle the error
} finally {
  await db.close();
}