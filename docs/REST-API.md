## App <-> *Tongji Cloud*

*Unknown*

****
## Frontend <-> Backend

### Retrieve

`GET /get/userInfo`

Get basic info of a user. Return info of current user if `id` is not specific.
```
@param {String} [id]
@returns {
  name: {String},
  id: {String},
  avatar: {base64String},
  dorm: {String},
  occupation: {String} "student" | "teacher",
  grade: {String}
}
```
`GET /get/event`

`GET /get/eventsRoll`

`GET /get/comment`

`GET `

### Update
