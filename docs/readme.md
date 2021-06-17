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