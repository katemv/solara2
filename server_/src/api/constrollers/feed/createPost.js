const { validationResult } = require("express-validator");

const Post = require("../../models/post");
const User = require("../../models/user");

const createPost = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const error = new Error("Validation failed, entered data is incorrect.");
        error.statusCode = 422;

        return next(error);
    }

    if (!req.file) {
        const error = new Error("No image provided.");
        error.statusCode = 422;

        return next(error);
    }

    try {
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            imageUrl: req.file.path.replace("\\" ,"/"),
            creator: req.userId
        });

        await post.save();

        const user = await User.findById(req.userId);
        user.posts.push(post);

        await user.save();

        res.status(201)
            .json({
                message: "Post created successfully!",
                post,
                creator: {
                    _id: user._id,
                    name: user.name
                }
            });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

module.exports = createPost;