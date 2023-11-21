1. initialize

```
npm init --y
npm i express
npm i mongoose
 npm i --save-dev typescript
 npm i dotenv
```

2. initialize tsconfig

```
tsc --init
```

change root dir and out dir

3. create script to build tsc

```
"scripts": {
    "build": "tsc",
  },
```

4. create express app
5. create `.env` file
6. connect mongoose
   in env file

```
DATABASE_URL=mongodb+srv://admin-um:admin12345@cluster0.gexkyvp.mongodb.net/firstProject?retryWrites=true&w=majority
```

in server.ts

```js
async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    app.listen(process.env.PORT, () => {
      console.log(`server running on PORT ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
```

7. config the path of .env

```js
my-project/
  |- src/app/config/index.ts

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path : path.join(process.cwd() , '.env')})

export default{
    port : process.env.PORT,
    db_url : process.env.DATABASE_URL
}
```

8. install eslint and prettier https://blog.logrocket.com/linting-typescript-eslint-prettier
