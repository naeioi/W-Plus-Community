var checklogin = function(req, res, next) {
  if(!req.session.user) {
    res.send({
      sucess: false,
      msg: 'Not login!'
    })
    return;
  }
  if(next && typeof next === 'function')
    next();
}

module.exports = checklogin;
