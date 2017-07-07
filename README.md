# Future Computing

This is going to be a website logging my research on DNA computing and other types of computing like Quantum

# Requirements
* PostgreSQL
* NodeJS > v6

# API

1. [Default](#default)
2. [Users](#users)
 * [GET](#get-1)
 * [POST](#post)
3. [Users/:id](#usersid)
 * [GET](#get-2)
 * [DELETE](#delete)
 * [PUT](#put)
4. [Roles](#roles)
 * [GET](#get-3)
 * [POST](#post-1)
5. [Roles/:id](#rolesid)
 * [GET](#get-4)
 * [DELETE](#delete-1)
 * [PUT](#put-1)

## Routes:

## Default

#### GET
* Returns status (__200__) and JSON of API saying welcome


### /users/
[back to top](#future-computing)
#### GET
* Returns status (__200__) and JSON of all users and thier role(s)
* Returns status (__412__) and a JSON message if not successful.

#### POST
* Creates a new user and generates a hashed & salted password
* Assigns a default role
* Returns status (__200__) & JSON of the new user
* Returns status (__412__) and a JSON message if not successful.
###### Params:

| Name | Type | Default | Required |
|------|------|---------|----------|
| firstname | string | null | yes |
| lastname | string | null | yes |
| email | string | null | yes |
| password | string | null | yes |

### /users/:id
[back to top](#future-computing)
###### Params:
*Same for all routes* 

| Name | Type | Default | Required |
|------|------|---------|----------|
| id | int | null | yes |

#### GET
* Returns status (__200__) and JSON of all a user and thier role(s)
* Returns status (__412__) and a JSON message if not successful.

#### DELETE
* Removes User From Database
* Returns a status code of (__204__) if successful or (__412__) if not successfull.

#### PUT
__Needs Implementation__


### /roles/
[back to top](#future-computing)
#### GET
* Returns  status (__200__) and JSON of all roles
* Returns status (__412__) and a JSON message if not successful.

#### POST
* Creates a new role
* Returns  status (__200__) and JSON of the new role
* Returns status (__412__) and a JSON message if not successful.
###### Params:

| Name | Type | Default | Required |
|------|------|---------|----------|
| role | string | null | yes |


### /roles/:id
[back to top](#future-computing)
###### Params:
*Same for all routes* 

| Name | Type | Default | Required |
|------|------|---------|----------|
| id | int | null | yes |

#### GET
* Returns JSON of the found role if successful
* Returns status (__412__) if not successful.

#### PUT
__Needs Implementation__

#### DELETE
* Removes Role From Database
* Returns a status code of (__204__) if successful or (__412__) if not successful.

