exports.index = function(req, res, next) {
  var User = req.app.models.user;
  User.findById(0, function(user) {
    // res.send('existe un usuario: ' + user.name + ' - ' + user.email);
  	res.render('index', { user: user });
  });
};
