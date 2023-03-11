exports.middlewareGlobal = (req, res, next) => {
    res.locals.erros = req.flash('erros');
    next();
};

exports.checkCsrfError = (err,req, res, next) => {
    if (err && 'EBADCSRFTOKEN'===err.code){
        return res.render('error');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};