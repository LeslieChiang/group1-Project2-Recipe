## Module 3 Project Proposal & Scopes: 
# My Cooking-Recipes Web App

A web app that allows registered user to keep their secret recipes online which allow user to key their recipes with images.
- allow user to list the 
  - ingredients, 
  - cooking methods, 
  - utensils required
  - relevant images on a persistent storage.
- user can edit/delete all their above inputs with date-stamp.
- categorization of their recipes store
  - SEAsian/Oriental/Western
  - Dish types (Starter/Main/Desert/Beverage/Bakeries).


## Type of integration required:
- React-JS frontend + node-JS backend
- Registration as verified user (name, email address and password)
- Heroku PostgreSQL (Database for users registration & login, Database for recipes storage + images)
- Server-less Deployment on Heroku


## Scopes of work:
- Software System Architecture => Leslie (Thursday 3/3) DONE
  - Use Case UML diagrams
  - Use Case Scenario UML diagrams
  - ERD digrams => Keith/Mani DONE (7/3)
- Git integration => CP, Leslie 
- MVC framework - nodeJS => Leslie 
- ReactJS UI frontend => CP 
- Authentication - Cookies/Session - passport.js & express-session: => Liew/Leslie
- ORM-Sequelize + HerokuPostgres (refer to ERD) => Mani, Keith
- Heroku Deployment.


## Technologies used:
- nodeJS
- ExpressJS
  - Middleware
  - Routing
  - Cookies & Session
- SequelizeJS
  - ORM
  - Queries
- Application Security (Passport, Bcrypt & JWT) - 
  - Authentication
  - Passport.js session 
- Model View Controller Architecture


```javascript
Project structure:
- client/
  - src 
    - index.js 
- server/
  - controllers/
    - userController.js
    - recipeController.js
  - models
    - index.js
    - ingredient.model.js
    - receipe_ingredient.model.js
    - recipe.model.js
    - user.model.js
  - routes
    - index.js
    - loginRoutes.js
  - services
    - userService.js
    - recipeService.js
  - index.js
```

## Required End-points
- User-login
```javascript
    router.route("/register") // added Leslie
    router.route("/login") // priority Liew
    router.route("/logout") // priority added Liew
    router.route("/resetpassword") 
    router.route("/deleteUser")
```
- Recipe
```javascript
    router.route("/") // route to /login if user not login // priority Mani
    router.route("/add") // user.isAuthenticated() // priority CP
    router.route("/edit") // user.isAuthenticated() // priority CP
    router.route("/delete") // user.isAuthenticated() // priority Keith
    router.route("/search") // user.isAuthenticated() // Charles
```

