
exports.index = (req,res) => {
    res.render('index');
};

exports.setPost = (req, res) => {
    res.send(`Cliente: ${req.body.cliente}`);
};