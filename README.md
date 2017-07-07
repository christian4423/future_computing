# Future Computing

This is going to be a website logging my research on DNA computing and other types of computing like Quantum

# API
## Routes:

### /Users

#### GET
Returns JSON of all users and thier role(s)

#### POST
* Creates a new user and generates a hashed & salted password
* Returns JSON of the new user and assigns a default role
###### Params:

| Name | Type | Default | Required |
|------|------|---------|----------|
| firstname | string | null | yes |
| lastname | string | null | yes |
| email | string | null | yes |
| password | string | null | yes |


Returns JSON of all users and thier role(s)