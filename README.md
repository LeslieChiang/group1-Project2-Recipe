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
- Software System Architecture => Leslie (Thursday) DONE
  - Use Case UML diagrams
  - Use Case Scenario UML diagrams
  - ERD digrams 
- Git integration => CP, Leslie (Sat)
- MVC framework - nodeJS => Leslie (Sat/Sun)
- ReactJS UI frontend => CP (Fri)
- Authentication - Cookies/Session - passport.js & express-session: => Liew (Research-Fri)
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
  - Verify against HTTP Authorization Header in middleware ??
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
    - registerRouters.js
  - services
    - userService.js
    - recipeService.js
  - index.js
```

## Required End-points
- User-login
```javascript
    router.route("/login") // priority
    router.route("/logout") // priority
    router.route("/resetpassword")
    router.route("/register")
    router.route("/deleteUser")
```
- Recipe
```javascript
    router.route("/") // priority
    router.route("/add") // priority
    router.route("/edit") // priority
    router.route("/delete") // priority
    router.route("/search")
```

