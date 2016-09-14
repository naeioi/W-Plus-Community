var multer = require('multer');
var checklogin = require('checklogin');
var logger = require('../common/logger');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/upload')
  }
});
var upload = multer({ storage: storage }).single('avatar');
var avatar = function(req, res, next) {
  checklogin(req, res);
  upload(req, res, function(err) {
    if(err) {
      res.status(200).send({
        sucess: false,
        msg: 'Unable to save upload avatar'
      })
      logger.error('Unable to save upload avatar', err);
      return;
    }

    req.session.user.avatar = req.file.filename;
    req.session.user.save(function(err) {
      if(err) {
        logger.error("Unable to update user's avatar");
        res.status(200).send({
          sucess: false,
          msg: "Unable to update user's avatar"
        })
        return;
      }
      res.send({
        sucess: true
      })
    })
  })
}

module.exports = avatar;
