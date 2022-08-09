# UserAPI.

Steps to run this project

1. start the application

``` 
npm run dev 
``` 

2. Setup database settings inside `data-source.ts` file
3. Run  tests:
```
npm test
```

## API routes

#### `PUT /user` Creates a new user.

#### `GET /users` Returns all user registered on Database.

#### `UPDATE /user/:id` Updates user informations.
> `id` and `name` required.

#### `DELETE /user/:id` Deletes a user given a id.
> `id` required.

