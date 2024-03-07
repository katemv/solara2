const jwt = require("jsonwebtoken");
const { JWTSecret } = require("../util/config");

module.exports = (req, res, next) => {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
        const error = new Error("Not authenticated.");
        error.statusCode = 401;
        return next(error);
    }

    let decodedToken;

    try {
        decodedToken = jwt.verify(authHeader.split(" ")[1], JWTSecret);
    } catch (error) {
        error.statusCode = 500;
        return next(error);
    }

    if (!decodedToken) {
        const error = new Error("Not authenticated.");
        error.statusCode = 401;
        return next(error);
    }

    req.userId = decodedToken.userId;
    next();
}
