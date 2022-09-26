const logMiddleware = (req, res, next) => {
    console.log(
        `\tmethod: ${req.method}`,
        `\tURL: ${req.url}`
    );
    next();
};

module.exports = logMiddleware;