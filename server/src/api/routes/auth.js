const express = require("express");
const { check, body } = require("express-validator");

const authController = require("../constrollers/authController");
const User = require("../models/user");

const router = express.Router();



// /login => POST
router.post("/login", authController.login);

// /signup => POST
router.post(
    "/signup",
    [
        check("email")
            .isEmail()
            .withMessage("Please enter a valid email.")
            .normalizeEmail()
            .custom((value) => {
                return User.findOne({ email: value })
                    .then((userDoc) => {
                        if (userDoc) {
                            return Promise.reject("E-Mail already exists.")
                        }
                    })
            }),
        body("password", "Please enter a password with at least 5 characters.")
            .isLength({ min: 5 })
            .trim(),
    ],
    authController.signup
);

module.exports = router;
