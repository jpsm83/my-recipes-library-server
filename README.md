### **" My Recipe Library"**


### Description

A aplication to create and manage your own recipes recepies.
Create your own recepies, organize them by cousine, type, time of preparation or simply by name.
Edit and delete anything you dont like at any time.


### MVP
App, create, read, update, delete recepies (CRUD).
You have to signin, login and logout to be able to use all the web functionality


### User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the server screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the my personal recipes homepage. 
- **sign up** - As a user I want to sign up on the web page so that I can create, edit, delete and see my own recipes.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **recipe cards** - As a user I want to see in details my recipes.
- **recipe list** - As a user I want to see the list of my recipes and filter by my preferences.


### Backlog

- See and edit my profile
- Add videos in how to cook
- Implement Passport
- jquery desktop and mobile version
- Implement cloudinary
- Implement Node-mailer
- Optimize CSS
- Optimize filters
- Add external API
- Add functionalities between local and remote recipes


### Client / Frontend

### React Router Routes (React App)
| Path                      | Component            | Permissions                 | Behavior                                                                  |
| ------------------------- | -------------------- | --------------------------- | --------------------------------------------------------------------------|
| `/`                       | SplashPage           | public `<Route>`            | Home page, Login form, link to signup, navigate to recipes after login    |
| `/signup`                 | SignupPage           | anon only `<AnonRoute>`     | Signup form, link to home, navigate to recipes after signup               |
| `/user`                   | UserProfilePage      | user only `<AnonRoute>`     | Signup form, link to home, delete profile button, update button, logout   |
|                           |                      |                             | button, navigateto recipes after update                                   |
| `/recipes`                | RecipesListPage      | user only `<PrivateRoute>`  | Shows all recipes in a list, filter recipes by cousine, type, time of     |
|                           |                      |                             | prep and name, link to create, link to a choose recipe card, logout button|
| `/recipe/:id`             | RecipeCard           | user only `<PrivateRoute>`  | Details of a recipe to edit or delete, link to recipes, link to create    |
|                           |                      |                             | recipe, logout button                                                     |
| `/recipe/:id/edit`        | RecipeCard           | user only `<PrivateRoute>`  | Create recipe form, link to recipes, update button, logout button         |
| `/recipe/create`          | CreateRecipe         | user only `<PrivateRoute>`  | Create recipe form, link to recipes, logout button                        |


### Components

- SplashPage (Home - Login)

- RecipesListPage (Recipes)

- SignupPage (Signup Form)

- CreateRecipePage (Create Form)

- RecipeCard (Recipe Detailed)

- UserProfile (User Data)

- Navbar (Logout Button)


### Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
- Recipes Service
  - recipes.list()
  - recipes.card(id)
  - recipe.edit(id)
  - recipe.create(id)
  - recipe.delete(id)
- User Service 
  - user.edit(id)
  - user.delete(id)


### Data Structure FrontEnd
|
├── public
|   └── _index.html
├── src
|   └── components
|       └── login.js
|       └── siginForm.js
|       └── recipeForm.js
|       └── navFilter.js
|       └── navbar.js
|       └── recipeList.js
|       └── recipeCard.js
|       └── logout.js
|       └── data.js
|   └── app.css
|   └── app.js
|   └── index.css
|   └── index.js
|   └── reportWebVitals.js
├── gitignore
├── package-lock.json
└── package.json
└── README.md


### Server / Backend

### Models

- User model

```javascript
{
  userName: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  recipes: []
}
```

- Recipe model

```javascript
 {
   dishName: {type: String, required: true, unique: true},
   cousine: {type: String, required: true},
   type: {type: String, required: true},
   prepTime: {type: Number, required: true},
   img: {type: String},
   ingredients: {type: String, required: true},
   preparation: {type: String, required: true},
   howToCook: {type: String, required: true}
 }
```


### API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body             | Success status | Error Status | Description                                                      |
| ----------- | ---------------------- | ------------------------ | -------------- | ------------ | ---------------------------------------------------------------- |
| GET         | `/auth/profile`   `    | Saved session            | 200            | 404          | Check if user is logged in and return profile page               |
| POST        | `/auth/signup`         | {name, email, password}  | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then |
|             |                        |                          |                |              | create user with encrypted password, and store user in session   |
| POST        | `/auth/login`          | {username, password}     | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if   |
|             |                        |                          |                |              | password matches (404), then stores user in session              |
| POST        | `/auth/logout`         | (empty)                  | 204            | 400          | Logs out the user                                                |
| GET         | `/api/recipes`         |                          | 200            | 400          | Show all recipes                                                 |                    
| GET         | `/api/recipeCard/:id`  | {id}                     | 200            | 400          | Show specific recipe                                             |
| POST        | `/api/recipeCard`      | {}                       | 201            | 400          | Create and save a new recipe                                     |
| PUT         | `/api/recipeCard/:id`  | {id}                     | 200            | 400          | edit recipe                                                      |
| DELETE      | `/api/recipeCard/:id`  | {id}                     | 201            | 400          | delete recipe                                                    |
| GET         | `/api/user`            | {id}                     | 200            | 400          | Show user                                                        |
| PUT         | `/api/user`            | {id}                     | 200            | 400          | edit user                                                        |
| DELETE      | `/api/user`            | {id}                     | 201            | 400          | delete user                                                      |


### Data Structure BackEnd
|
├── bin
|   └── www
├── configs
|   └── cors.config.js
|   └── db.config.js
|   └── middleware.config.js
|   └── session.config.js
├── models
|   └── recipes.model.js
|   └── user.model.js
├── public
|   └── images
|   └── javascript
|   └── stylesheets
├── routes
|   └── recipes.routes.js
├── gitignore
├── app.js
├── package-lock.json
└── package.json
└── Recipes App.postman_collection


### link
* [Trello](https://trello.com/b/3QyYrcJN/my-recipe-library)


### Git
* [GitHub] Server (https://github.com/jpsm83/my-recipes-library-server)
* [GitHub] Client (https://github.com/jpsm83/my-recipes-library-client)


### Slides
* [Figma](https://www.figma.com/file/qXacoaMeK3VZwah8Z5zY9i/Restaurant-Search?node-id=0%3A1)
