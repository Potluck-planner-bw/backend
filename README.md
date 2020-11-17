# Potluck Planner REST API

Potluck Planner REST API

## Register

Register a new user to: **/api/auth/register**
HTTP Method: **[POST]**

**Body:**
```
| name      | type   | required | description                         |  
| --------  | ------ | ------- | ----------------------------------   |
| username  | String | Yes      | Must be unique/ Must be less than 100 chars |
| password  | String | Yes      | Must be unique/ Must be less than 100 chars |    
```
 
**Example:**

    {
        "id": 1,
        "username": "TJ",
        "password": "password"
    }

**Response:** (200) - created

=========================================================================

## Login

Login a user to:  **/api/auth/login**
HTTP Method: **[POST]**

**Body:**
```
| name      | type   | required | description                         |  
| --------  | ------ | ------- | ----------------------------------   |
| username  | String | Yes      | Must be unique/ Must be less than 100 chars |
| password  | String | Yes      | Must be unique/ Must be less than 100 chars |
```
 
**Example:**
```
    {
        "id": 1,
        "username": "TJ",
        "password": "password"
    }
```

**Response:** (200) - ok

(400) - unauthorized
```
{
    "message": "bad credentials"
}
```

=========================================================================

## Users Endpoints (start here)

GET a user by: **/api/users/**
HTTP Method: **[GET]**

**Body:**
```
| name      | type   | required | description                         |  
| --------  | ------ | ------- | ----------------------------------   |
| username  | String | Yes      | Must be unique/ Must be less than 100 chars |
| password  | String | Yes      | Must be unique/ Must be less than 100 chars |
```
 
**Example:**
```
    {
        "id": 1,
        "username": "Jake",
        "password": "password"
    }
```

**Response:** (200) - ok

=========================================================================

GET a user by ID: **/api/users/:id**
HTTP Method: **[GET]**

**Body:**
```
| name      | type   | required | description                         |  
| --------  | ------ | ------- | ----------------------------------   |
| username  | String | Yes      | Must be unique/ Must be less than 100 chars |
| password  | String | Yes      | Must be unique/ Must be less than 100 chars |
```
 
**Example:**
```
    {
        "id": 1,
        "username": "Jake",
        "password": "password"
    }
```

**Response:** (200) - ok

=========================================================================

PUT a user by: **/api/users/:id**
HTTP Method: **[PUT]**

**Body:**
```
| name      | type   | required | description                         |  
| --------  | ------ | ------- | ----------------------------------   |
| username  | String | Yes      | Must be unique/ Must be less than 100 chars |
| password  | String | Yes      | Must be unique/ Must be less than 100 chars |
```
 
**Example:**
```
    {
        "id": 1,
        "username": "Jake",
        "password": "password"
    }
```

**Response:** (200) - updated user information

=========================================================================

DELETE a user by ID: **/api/users/:id**
HTTP Method: **[DEL]**

**Body:**
```
| name      | type   | required | description                         |  
| --------  | ------ | ------- | ----------------------------------   |
| username  | String | Yes      | Must be unique/ Must be less than 100 chars |
| password  | String | Yes      | Must be unique/ Must be less than 100 chars |
```
 
**Example:**
```
    {
        "id": 1,
        "username": "Jake",
        "password": "password"
    }
```

**Response:** (200) - deleted user information

=========================================================================

GET a user with events: **/api/users/:id/events**
HTTP Method: **[GET]**

**Body:**
```
| name      | type   | required | description                         |  
| --------  | ------ | ------- | ----------------------------------   |
| username  | String | Yes      | Must be unique/ Must be less than 100 chars |
| password  | String | Yes      | Must be unique/ Must be less than 100 chars |
```
```
| name       | type    | required | description 
| ---------- | ------  | -------- | ------------------------------------ |
| event_name | String  | No       | Must be unique/ Must be less than 200 chars |
| time       | String  | No       | Must be unique/ Must be less than 200 chars |
| address    | String  | No       | Must be unique/ Must be less than 200 chars |
| dates      | String  | No       | Must be unique/ Must be less than 200 chars |
| guests     | String  | No       | Must be unique/ Must be less than 200 chars |
| users_id   | Integer | NO       | Must be unique/ Must be less than 200 chars |
```
 
**Example:**
```
   {
    "id": 2,
    "username": "Jake",
    "password": "password",
    "events": [
        {
            "id": 1,
            "event_name": "Fairmount Park Meet Up",
            "time": "10:00am",
            "address": "Fairmount Park, Philadelphia",
            "dates": "11-20-20",
            "guests": "TJ, Alden, Jake, Cory",
            "users_id": 2
        }
    ]
}
```

**Response:** (200) - (given view)

=========================================================================


### Events Endpoints (start here)

POST a new event by: **/api/events/**
HTTP Method: **[POST]**

**Body:**
```
| name       | type    | required | description 
| ---------- | ------  | -------- | ------------------------------------ |
| event_name | String  | No       | Must be unique/ Must be less than 200 chars |
| time       | String  | No       | Must be unique/ Must be less than 200 chars |
| address    | String  | No       | Must be unique/ Must be less than 200 chars |
| dates      | String  | No       | Must be unique/ Must be less than 200 chars |
| guests     | String  | No       | Must be unique/ Must be less than 200 chars |
| users_id   | Integer | NO       | Must be unique/ Must be less than 200 chars |
```
 
**Example:**
```
    [
    {
        "id": 1,
        "event_name": "Fairmount Park Meet Up",
        "time": "10:00am",
        "address": "Fairmount Park, Philadelphia",
        "dates": "11-20-20",
        "guests": "TJ, Alden, Jake, Cory",
        "users_id": 2
    }
]
```

**Response:** (200) - event created successfully

=========================================================================

GET all events by: **/api/events/**
HTTP Method: **[GET]**

**Body:**
```
| name       | type    | required | description 
| ---------- | ------  | -------- | ------------------------------------ |
| event_name | String  | No       | Must be unique/ Must be less than 200 chars |
| time       | String  | No       | Must be unique/ Must be less than 200 chars |
| address    | String  | No       | Must be unique/ Must be less than 200 chars |
| dates      | String  | No       | Must be unique/ Must be less than 200 chars |
| guests     | String  | No       | Must be unique/ Must be less than 200 chars |
| users_id   | Integer | NO       | Must be unique/ Must be less than 200 chars |
```
 
**Example:**
```
[
    {
        "id": 1,
        "event_name": "Fairmount Park Meet Up",
        "time": "10:00am",
        "address": "Fairmount Park, Philadelphia",
        "dates": "11-20-20",
        "guests": "TJ, Alden, Jake, Cory",
        "users_id": 2
    }
]
```

**Response:** (200)

=========================================================================

GET events by ID:  **/api/events/:id**
HTTP Method: **[GET]**

**Body:**
```
| name       | type    | required | description 
| ---------- | ------  | -------- | ------------------------------------ |
| event_name | String  | No       | Must be unique/ Must be less than 200 chars |
| time       | String  | No       | Must be unique/ Must be less than 200 chars |
| address    | String  | No       | Must be unique/ Must be less than 200 chars |
| dates      | String  | No       | Must be unique/ Must be less than 200 chars |
| guests     | String  | No       | Must be unique/ Must be less than 200 chars |
| users_id   | Integer | NO       | Must be unique/ Must be less than 200 chars |
```
 
**Example:**
```
[
    {
        "id": 1,
        "event_name": "Fairmount Park Meet Up",
        "time": "10:00am",
        "address": "Fairmount Park, Philadelphia",
        "dates": "11-20-20",
        "guests": "TJ, Alden, Jake, Cory",
        "users_id": 2
    }
]
```

**Response:** (200)

=========================================================================

PUT events by: **/api/events/:id**
HTTP Method: **[PUT]**

**Body:**
```
| name       | type    | required | description 
| ---------- | ------  | -------- | ------------------------------------ |
| event_name | String  | No       | Must be unique/ Must be less than 200 chars |
| time       | String  | No       | Must be unique/ Must be less than 200 chars |
| address    | String  | No       | Must be unique/ Must be less than 200 chars |
| dates      | String  | No       | Must be unique/ Must be less than 200 chars |
| guests     | String  | No       | Must be unique/ Must be less than 200 chars |
| users_id   | Integer | NO       | Must be unique/ Must be less than 200 chars |
```
 
**Example:**
```
[
    {
        "id": 2,
        "event_name": "Thanksgiving Food Drive 2020",
        "time": "10:00am",
        "address": "Phoenix, Arizona",
        "dates": "11-20-20",
        "guests": "TJ, Alden, Jake, Cory",
        "users_id": 2
    }
]
```

**Response:** (200)

=========================================================================

DELETE events by: **/api/events/:id**
HTTP Method: **[DEL]**

**Body:**
```
| name       | type    | required | description 
| ---------- | ------  | -------- | ------------------------------------ |
| event_name | String  | No       | Must be unique/ Must be less than 200 chars |
| time       | String  | No       | Must be unique/ Must be less than 200 chars |
| address    | String  | No       | Must be unique/ Must be less than 200 chars |
| dates      | String  | No       | Must be unique/ Must be less than 200 chars |
| guests     | String  | No       | Must be unique/ Must be less than 200 chars |
| users_id   | Integer | NO       | Must be unique/ Must be less than 200 chars |
```
 
**Example:**
```
[
    {
        "id": 2,
        "event_name": "Thanksgiving Food Drive 2020",
        "time": "10:00am",
        "address": "Phoenix, Arizona",
        "dates": "11-20-20",
        "guests": "TJ, Alden, Jake, Cory",
        "users_id": 2
    }
]
```

**Response:** (200) - event successfully deleted

=========================================================================


### Food Endpoints (start here)

GET all food items by: **/api/foods/**
HTTP Method: **[GET]**

**Body:**
```
| name       | type    | required | description 
| ---------- | ------  | -------- | ---------------------         |
| food_item  | String  | Yes      |  Must be less than 100 chars  |
| events_id  | integer | Yes      |  Must be less than 100 chars  |
| completed  | boolean | Yes      |  Must be 0(false) or 1(true)  | 
```
 
**Example:**
```
[
    {
        "id": 1,
        "food_item": "Ketchup",
        "events_id": 2,
        "completed": 0
    },
    {
        "id": 2,
        "food_item": "Mustard",
        "events_id": 2,
        "completed": 0
    },
    {
        "id": 3,
        "food_item": "Burger",
        "events_id": 1,
        "completed": 1
    }
]
```

**Response:** (200)

=========================================================================

GET a food item by ID: **/api/foods/:id**
HTTP Method: **[GET]**

**Body:**
```
| name       | type    | required | description 
| ---------- | ------  | -------- | ---------------------         |
| food_item  | String  | Yes      |  Must be less than 100 chars  |
| events_id  | integer | Yes      |  Must be less than 100 chars  |
| completed  | boolean | Yes      |  Must be 0(false) or 1(true)  | 
```
 
**Example:**
```
[
    {
        "id": 2,
        "food_item": "Mustard",
        "events_id": 2,
        "completed": 0
    }
]
```

**Response:** (200) - view given

=========================================================================

POST a food item by: **/api/foods/**
HTTP Method: **[POST]**

**Body:**
```
| name       | type    | required | description 
| ---------- | ------  | -------- | ---------------------         |
| food_item  | String  | Yes      |  Must be less than 100 chars  |
| events_id  | integer | Yes      |  Must be less than 100 chars  |
| completed  | boolean | Yes      |  Must be 0(false) or 1(true)  | 
```
 
**Example:**
```
[
    {
        "id": 2,
        "food_item": "Ketchup",
        "events_id": 2,
        "completed": 0
    }
]
```

**Response:** (200) - Food item successfully created

=========================================================================

PUT a food item by ID: **/api/foods/:id**
HTTP Method: **[POST]**

**Body:**
```
| name       | type    | required | description 
| ---------- | ------  | -------- | ---------------------         |
| food_item  | String  | Yes      |  Must be less than 100 chars  |
| events_id  | integer | Yes      |  Must be less than 100 chars  |
| completed  | boolean | Yes      |  Must be 0(false) or 1(true)  | 
```
 
**Example:**
```
[
    {
        "id": 2,
        "food_item": "Potato Salad",
        "events_id": 2,
        "completed": 0
    }
]
```

**Response:** (200) - Food item updated successfully

=========================================================================

DELETE a food item by ID: **/api/foods/:id**
HTTP Method: **[DEL]**

**Body:**
```
| name       | type    | required | description 
| ---------- | ------  | -------- | ---------------------         |
| food_item  | String  | Yes      |  Must be less than 100 chars  |
| events_id  | integer | Yes      |  Must be less than 100 chars  |
| completed  | boolean | Yes      |  Must be 0(false) or 1(true)  | 
```
 
**Example:**
```
[
    {
        "id": 2,
        "food_item": "Potato Salad",
        "events_id": 2,
        "completed": 0
    }
]
```

**Response:** 200 - Food item deleted successfully

=========================================================================

GET a food with events:  **/api/foods/:id/events**
HTTP Method: **[GET]**

**Body:**
```
| name       | type    | required | description 
| ---------- | ------  | -------- | ------------------------------------ |
| event_name | String  | No       | Must be unique/ Must be less than 200 chars |
| time       | String  | No       | Must be unique/ Must be less than 200 chars |
| address    | String  | No       | Must be unique/ Must be less than 200 chars |
| dates      | String  | No       | Must be unique/ Must be less than 200 chars |
| guests     | String  | No       | Must be unique/ Must be less than 200 chars |
| users_id   | Integer | NO       | Must be unique/ Must be less than 200 chars |
```

```
| name       | type    | required | description 
| ---------- | ------  | -------- | ---------------------         |
| food_item  | String  | Yes      |  Must be less than 100 chars  |
| events_id  | integer | Yes      |  Must be less than 100 chars  |
| completed  | boolean | Yes      |  Must be 0(false) or 1(true)  | 
```
 
**Example:**
```
{
    "id": 1,
    "event_name": "Fairmount Park Meet Up",
    "time": "10:00am",
    "address": "Fairmount Park, Philadelphia",
    "dates": "11-20-20",
    "guests": "TJ, Alden, Jake, Cory",
    "users_id": 2,
    "food": [
        {
            "id": 3,
            "food_item": "Burger",
            "events_id": 1,
            "completed": 1
        }
    ]
}
```

**Response:** 200 - View given

=========================================================================
