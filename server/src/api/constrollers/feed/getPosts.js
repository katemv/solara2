const Post = require("../../models/post");

const getPosts = async (req, res) => {
    const currentPage = req.query.page || 1;
    const perPage = 2;

    try {
        const postCount = await Post.find().countDocuments();

        const posts = await Post.find()
            .populate("creator")
            .sort({ createdAt: -1 })
            .skip((currentPage - 1) * perPage)
            .limit(perPage);

        res.status(200)
            .json({
                message: "Fetched posts successfully.",
                posts,
                postCount,
            });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

module.exports = getPosts;