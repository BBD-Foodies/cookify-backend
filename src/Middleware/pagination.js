
function setPagination(req, res, next) {
    req.perPage = isNaN(Number.parseInt(req.query.perPage)) ? 10 : Number.parseInt(req.query.perPage);
    req.currentPage = isNaN(Number.parseInt(req.query.currentPage)) ? 1 : Number.parseInt(req.query.currentPage);

    delete req.query.perPage;
    delete req.query.currentPage;

    next();
};

module.exports = setPagination;
