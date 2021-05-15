# CRUD-REST-API-example-Node-PostgreSQL-

GET "/users" returns an array of json objects with users id, name and email: 
```
  [
    {
    "id": 1,
    "name": "Mely",
    "email": "a@a.com"
    },
    {
    "id": 13,
    "name": "Bubu",
    "email": "c@c.com"
    },
  ]
```

GET "/users/:id" returns a json object with the user whose id was specified in the url: 
```
  {
  "id": 13,
  "name": "Bubu",
  "email": "c@c.com"
  }
```

GET "/user" returns a json object with the user whose email was specified in the request body: 
```
  {
  "id": 13,
  "name": "Bubu",
  "email": "c@c.com"
  }
```

GET "/counter/add" increments a counter by one

GET "/counter/show" shows the counter's value in json format:
```
  {
    number: 1
  }
```

POST "/users" creates a user with the email and name specified in the request body

PUT "/users/:id" updates the user with the specified :id with the email and name specified in the request body

DELETE "/users/:id" deletes the user with the specified :id

followed https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/ 