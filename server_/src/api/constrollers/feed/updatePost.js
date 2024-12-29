const { validationResult } = require("express-validator");
const Post = require("../../models/post");

const updatePost = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const error = new Error("Validation failed, entered data is incorrect.");
        error.statusCode = 422;

        return next(error);
    }

    let imageUrl = req.body.image;

    if (req.file) {
        imageUrl = req.file.path.replace("\\" ,"/");
    }

    if (!imageUrl) {
        const error = new Error("No file picked.");
        error.statusCode = 422;

        return next(error);
    }

    try {
        const post = await Post.findById(req.params.postId).populate("creator");

        if (!post) {
            const error = new Error("Could not find post.");
            error.statusCode = 404;
            return next(error);
        }

        if (post.creator._id.toString() !== req.userId) {
            const error = new Error("Not authorized.");
            error.statusCode = 403;
            return next(error);
        }

        post.title = req.body.title;
        post.content = req.body.content;
        post.imageUrl = imageUrl;

        if (req.body.image !== post.imageUrl) {
            clearImage(post.imageUrl);
        }

        await post.save();

        res.status(200)
            .json({
                message: "Post updated!",
                post
            });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

module.exports = updatePost;