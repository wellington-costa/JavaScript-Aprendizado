const login = require('./loginController');
exports.index = (req,res) => {
   
    if(!req.session.user) return login.index;
    
    res.render('index');
    
};

exports.setPost = (req, res) => {
    res.send(``);
};