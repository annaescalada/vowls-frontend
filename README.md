# Quick Compo

<br>

## Description

This is an app to generate healthy and nutritionally complete bowls for vegans. The app helps vegans to make better food choices to make sure their diet is balanced.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start generating vowls
-  **Login:** As a user I can login to the platform so that I can start using vowls
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **NutriForm** As a user I can complete my registration filling the nutriform
-  **Profile** As a user I can see my profile
-  **Edit User profile** As a user I can edit my profile
-  **Delete User profile** As a user I can delete my profile

-  **See my personalized food groups** As a user I can see personalized portion sizes of each food group
-  **See personalized meals** As a user I can see food groups distributed in 5 meals

-  **Add Vowl** As a user I can add a vowl
-  **View Vowls details** As a user I want to see my saved vowls details
-  **Delete Vowls** As a user I want to sbe able to delete my saved vowls

## Backlog

User profile:
- Add type of diet: vegan / vegetarian
- Add nutritional goal
- Add food allergies

Foods tag:
- As a user I can select what foods I have consumed to get a daily score.
- As a user I can save my daily score and visualized it in a calendar.

Vowls tag:
- As I user I generate breakfast and snacks.

Menu tag:
- As a user I can generate menus and shopping lists.

<br>


# Client / Frontend

## Routes
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | LoginPage            | anon only   | Login form, link to signup, navigate to vowls page after login |

| `/signup`                 | SignupPage           | anon only   | Signup form, link to login, navigate to vowls page after signup |
|
| `/nutriform`              | NutriForm            | user only, !completed   | Shows a form to completed nutritional profile                              |
| `/profile        `        | Profile              | user only, completed   | Shows user's profile                                           |

| `foods           `        | Foods                | user only, completed   | Details of a tournament to edit                              |
| `/meals`                  | Meals                | user only, completed   | Shows personalized portions of each ingredient                                            |
| `/vowls`                  | Vowls                | user only, completed   | Shows saved vowls and vowl generator.                              |


## Components

- Logo

- Login

- NutriForm

- Profile

- Foods

- Meals

- Vowls

- Navbar



## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.update(newUser)
  - auth.changePassword(newPassword)
  - auth.delete()

- Food Service
  - Food.list()
  
- Vowls Service 

  - vowls.list()
  - vowls.save(vowl)
  - vowls.delete(id)

<br>


# Server / Backend


## Models

User model

```javascript
{
  email:String // required & unique
  password:String // required
  name:String
  birth:Date
  gender:String // enum: male, female
  weight:Number
  height:Number
  portion:Number
  IMC:Number
  GED:Number
  Vowls:[String]
  completed:Boolean
  Timestamp
}
```

Food model

```javascript
 {
   name:String,
   img:String,
   type:String, // enum: fruit, berries, proteins, cereals, tubers, cruciferous, greens, otherveg, omega, fat, dairy, salsa
   portion:Number
 }
```

Vowl model

```javascript
{
  fruit: [{type: Schema.Types.ObjectId,ref:'food'}],
  berries: [{type: Schema.Types.ObjectId,ref:'food'}],
  proteins: [{type: Schema.Types.ObjectId,ref:'food'}],
  cereals: [{type: Schema.Types.ObjectId,ref:'food'}],
  tubers: [{type: Schema.Types.ObjectId,ref:'food'}],
  cruciferous: [{type: Schema.Types.ObjectId,ref:'food'}],
  greens: [{type: Schema.Types.ObjectId,ref:'food'}],
  othervegs: [{type: Schema.Types.ObjectId,ref:'food'}],
  omega: [{type: Schema.Types.ObjectId,ref:'food'}],
  fat: [{type: Schema.Types.ObjectId,ref:'food'}],
  dairy: [{type: Schema.Types.ObjectId,ref:'food'}],
  salsa: [{type: Schema.Types.ObjectId,ref:'food'}],
}
```

<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | /auth/me                    | (empty)                       | 200            | 404          | Check if user is logged in and return session information        |

| POST        | /auth/signup                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |

| POST        | /auth/login                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |

| POST        | /auth/logout                | (empty)                      | 204            | 400          | Checks if user is logged in and logs out the user                                            |

| UPDATE        | /auth/update              | {name, birth, gender, weight, height, portion, IMC, GED} | 204 | 400 | Checks if user is logged in and fields not empty (422), updates user information                                         |

| UPDATE        | /auth/change-password      | {password}                   | 204            | 400          | Checks if user is logged in and field is not empty, updates user password                                            |

| DELETE        | /auth/delete                | (empty)                     | 201            | 400          | Checks if user is logged in and deletes user account                                            |

| GET         | /foods/all              |   (empty)                   | 200          | 400          | Checks if user is logged in and shows all foods.                                        |
| GET         | /vowl/getOne/:id              |   (empty)                   | 200          | 400          | Checks if user is logged in and shows one specific vowl. 

| GET         | /vowls/all                     |   (empty)                  | 200          | 400          | Checks if user is logged in and shows all saved vowls.                                        |

| POST         | /vowls/save                   | {user, foods}        | 200          |  400        | Checks if user is logged in and fields not empty (422), creates a new vowl.                              |

| DELETE      | /vowls/delete/:id     | (body)                               | 201         | 400          | Checks if user is logged in and if vowl exists, deletes specific vowl                                            |


<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/F4dCC2Pa/vowls) 
or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)