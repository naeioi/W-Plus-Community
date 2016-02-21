***Case not sensitive***

**UserInfo** collection
```javascript
{
  id: "1450000",
  avatarFile: "1450000.jpg",
  name: "李明",
  grade: "2014",
  department: "数学系-数理强化班",
  occupation: null,
  dorm: "西南一",
}
```

**UserNotification** collection
```javascript
{
  id: "1450000",
  unread: true,
  type: enum {
    "EventApplicationPass",
    "EventMemberApply",
    "ReceiveEventComment",
    "ReceiveCommentReply"
  },
  data: {Object},
  timestamp: {Mongodb - timestamp}
}
```

**Event** collection
```javascript
{
  id: 1,
  state: {
    reviewed: false, /* 是否已审核 */
    accepted: true, /* 审核结果 */  
  },
  title: "尤克里里分享会",
  description: "为了使得今天晚上我们的环境更轻松一点, 我回忆起我在1945-46年的大学年代, 经常我们喜欢玩Hawaii Guitar, 经常弹奏Hello Hawaii这个歌曲.",
  spaceID: -1, /* -1 for custom space other than officially offered */
  campus: 1, /* Campus collection: 1四平 2嘉定 3彰武 4沪西 */
  location: ["西南二", "101室"], /* 详细地址 */
  /* ALTERNATIVE: location: "三好坞" */

  due: {
    date: {date},
    start: {timestamp},
    end: {timestamp}
  },
  promoter /* 活动发起人 */: {
    id: "1450001",
    name: null,
    avatar: null
    /* If corresponding data is missing, fetch them in UserEvents */
  },
  members /* 申请加入者 */: [{
    state: {
      reviewed: false, /* 发起人是否已查看申请 */
      accepted: false, /* 申请结果 */
    },
    id: 1450002,
    name: null,
    avatar: null
    /* If corresponding data is missing, fetch them in UserEvents */
  }]
}
```

**Campus** collection
```javascript
{
  id: 1,
  name: "四平路"
}
```

**DISCRIMINATION**
* space - 校方提供活动场地，如 `W-cafe`
* facility - 校园设施，如`西南一自习室`

**SpaceInfo** collection
```javascript
{
  id: 1,
  tel: 13800000000,
  location: "彰武路",
  name: "W-cafe",
  gender: enum {"Male", "Female", "all"},
  available: true, /* 可用性, 总控制 */
  availableHour: [{
    weekday: ["mon","tue"],
    open: {timestamp},
    end: {timestamp}
  },{
    weekday: "all",
    open: {timestamp},
    end: {timestamp}
  }]
  /* 可用时间由上至下判断，短路逻辑 */
}
```

**FacilityInfo** collection
```javascript
{
  id: 1,
  location: "彰武路",
  name: "W-cafe",
  gender: enum {"Male", "Female", "all"},
  available: true, /* 可用性, 总控制 */
  availableHour: [{
    weekday: ["mon","tue"],
    open: {timestamp},
    end: {timestamp}
  },{
    weekday: "all",
    open: {timestamp},
    end: {timestamp}
  }]
  /* 可用时间由上至下判断，短路逻辑 */
}
```

**FacilityOccupation** collection
```javascript
{
  id: 1,
  userID: 1450000,
  due: {
    date: {date}
    start: {timestamp},
    end: {timestamp}
  },
}
```

**Comment** collection
```javascript
{
  id: 1,
  eventID: 2,
  parentCommentID: -1, /* -1 for normal thread, otherwise reply */
  userID: 1450000,
  content: {String}
}
```
