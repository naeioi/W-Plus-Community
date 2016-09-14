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
`POST /api/launch` an event
```
HTTP form上传(multipart/form-data)
ref: 1. https://github.com/expressjs/multer
     2. http://stackoverflow.com/questions/8659808

@param
  title: String,
  content: String,
  start_time: Date,
  end_time: Date,
  space_id: ObjectId,
  custom_space: String,
  capacity: Number,
  campus: String,
  pics: url to Binary,
        ( store in server/../public/upload,
          random name )  
```
`POST /api/reserve` an space
  not implemented yet.
`POST /api/join` an event
```
@param
  event_id: ObjectId
```
`POST /api/reply` to an event
