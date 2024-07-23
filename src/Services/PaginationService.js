function pagination(query, req) {
    return query
        .skip((req.currentPage - 1) * req.perPage)
        .limit(req.perPage);
}

module.exports = { pagination };