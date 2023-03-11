module.exports = (req, res, next) => {
    console.log('passei no middleware global');
    next();
};

exports.checkCsrfError = (err,req, res, next) => {
    if (err && 'EBADCSRFTOKEN'===err.code){
        return res.render('error');
    }
};