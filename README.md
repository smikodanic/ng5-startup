# Ng5plusStartup
> Angular 5 project startup with builtin NodeJS web server and API. Quickly build and deploy any ng5 project.

## Installation
```bash
// frontend
$ git clone git@github.com:smikodanic/ng5-startup.git
$ cd ./ng5-startup
$ npm install
$ ng serve --aot -o

// backend
$ cd ./ng5-plus/server
$ npm install
$ cd ..
$ export MONGODB_URI="mongodb://ng5plus_user:12345@5.189.161.70:27017/ng5plus-server"
$ nodemon server  (or just $ node server)
```

## Features
- integrated login
- integrated API endpoints
- API routes
- API error handlers: 404 bad API URL, error sender (console, mongodb, 3rd party), uncaught errors
- SPA (single page app) routes (Angular Router)


## Server Environment variables
- $ export NODE_ENV=development | production    (default env is development)
- $ export MONGODB_URI="mongodb://ng5plus_user:yyyyy@5.189.161.70:27017/ng5plus-server"   (enter mongodb URI)
- $ export NODE_RIND=true    (rebuild mongodb indexes)


## API Endpoints
Basic API endpoints for user registration and login. See file /server/app/routes/_api.js
```bash
- GET / (API Info)
- POST /users/register {first_name: , last_name: , username: , password: , role: 'admin | customer'}
- POST /users/login {credentials admin:test123 OR customer:test123}
- GET /users/loggedinfo (get logged user info)
- GET /admin/test  (test admin role)
- GET /customer/test  (test customer role)
```

## API Test Users
- username: 'admin' , password: 'test123' , role: 'admin'
- username: 'customer' , password: 'test123' , role: 'customer'


## Licence
Created by [Saša Mikodanić](http://www.mikosoft.info) under MIT licence.


## Contact
Contact for mongodb://ng5plus_user:yyyyy@5.189.161.70:27017/ng5plus-server MongoDB password [www.mikosoft.info](http://www.mikosoft.info) in oreder API to work properly.
