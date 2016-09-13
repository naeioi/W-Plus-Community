## App <-> *Tongji Cloud*

*Unknown*

****
## Frontend <-> Backend

### Retrieve

`GET /api/my`

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
`GET /api/event`

`GET /api/eventsRoll`


`GET /api/login`

### Update
