const path = require("path");
const fs = require("fs");

const Post = require("../../models/post");
const User = require("../../models/user");

const deletePost = async (req, res, next) => {
    const postId = req.params.postId;

    try {
        const post = await Post.findById(postId);


        if (!post) {
            const error = new Error("Could not find post.");
            error.statusCode = 404;
            return next(error);
        }

        if (post.creator.toString() !== req.userId) {
            const error = new Error("Not authorized.");
            error.statusCode = 403;
            return next(error);
        }

        clearImage(post.imageUrl);

        await Post.findOneAndDelete({ _id: postId });

        const user = await User.findById(req.userId);
        user.posts.pull(postId);

        await user.save();

        res.status(200)
            .json({
                message: "Deleted post."
            });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

const clearImage = (filePath) => {
    filePath = path.join(__dirname, "..", filePath);

    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => console.log("Error fs.unlink", err));
    }
}

module.exports = deletePost;
