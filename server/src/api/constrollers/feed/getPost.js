const Post = require("../../models/post");

const getPost = async (req, res, next) => {
    const postId = req.params.postId;

    try {
        const post = await Post.findById(postId).populate("creator");

        if (!post) {
            const error = new Error("Could not find post.");
            error.statusCode = 404;
            return next(error);
        }

        res.status(200)
            .json({
                message: "Post fetched.",
                post
            });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

module.exports = getPost;
