const mockEventThumbnail = require('../static/mockEventThumbnail.png');
const mockEventPic = require('../static/mockEventPic.jpeg')

const mockSpaces = [
  {
    name: '钢琴房',
    backgroundImage: `url(${require('../static/mockSpacePic.jpg')})`,
    spaces: [{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    }],

  },
  {
    name: '钢琴房',
    backgroundImage: `url(${require('../static/mockSpacePic.jpg')})`,
    spaces: [{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    }],
    
  },{
    name: '钢琴房',
    backgroundImage: `url(${require('../static/mockSpacePic.jpg')})`,
    spaces: [{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    },{
      name: '西南一钢琴房'
    }],
    
  }
];

const mockEvent = {
  title: '尤克里里分享会',
  '_id': 1423423,
  thumbnail: mockEventThumbnail,
  pic: mockEventPic,
  peopleCnt: {
    full: 10,
    now: 2
  },
  location: '西南一2069',
  due: {
    date: '2016-03-01',
    start: '15:30',
    end: '16:30'
  },
  description: 'Maecenas bibendum non dui vel luctus. Duis suscipit consequat quam, vel viverravelit congue a. Mauris at nibh egetsapien cursus tempus. Morbi dictum non',
};

const mockComment = {
  thumbnail: require('../static/mockCommentThumbnail.png'),
  userName: '王小明',
  content: '活动需要自己带些什么呢？活动需要自己带些什么呢？活动需要自己带些什么呢？活动需要自己带些什么呢？活动需要自己带些什么呢？活动需要自己带些什么呢？活动需要自己带些什么呢？活动需要自己带些什么呢？活动需要自己带些什么呢？',
  date: '2月14日'
};

const mockPosters = [
  {
    type: 'event',
    event: mockEvent
  },
  {
    type: 'event',
    event: mockEvent
  },
  {
    type: 'event',
    event: mockEvent
  }
];

export { mockPosters, mockEvent, mockEventPic, mockEventThumbnail, mockComment, mockSpaces }
