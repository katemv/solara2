const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const User = require("../../models/user");

const signup = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log("errors", errors);
        const error = new Error("Validation failed");
        error.statusCode = 422;
        error.data = errors.array();

        return next(error);
    }

    bcrypt
        .hash(req.body.password, 12)
        .then((hashedPassword) => {
            const user = new User({
                email: req.body.email,
                name: req.body.name,
                password: hashedPassword
            });

            return user.save();
        })
        .then((user) => {
            res.status(201).json({ message: "User created!", userId: user._id })
        })
        .catch((err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

module.exports = signup;
