const User = require("../../models/user");

const updateStatus = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);

        if (!user) {
            const error = new Error("Could not find user.");
            error.statusCode = 404;
            return next(error);
        }

        user.status = req.body.status;

        await user.save();

        res.status(200)
            .json({
                message: "Status updated!",
                status: user.status
            });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

module.exports = updateStatus;
