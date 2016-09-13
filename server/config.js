
var mock = true;

var config = {
  log_filename: 'server-log.txt',
  port: '3030',
  mockPort: '4333',
  debug: true,
  /* 同心云接入参数 */
  appId: '000200',
  key: '101',
  appSecret: 'w-plus',
  /* --- */
  "session_secret": '$w-plus$51f7bed9b9bfe7',
  getSidUrl: mock ? 'http://127.0.0.1:4333/getSid' : 'http://data.tongji.edu.cn:8080/dataservice/ws/rest/getSid',
  db: 'mongodb://127.0.0.1',
}

module.exports = config;
