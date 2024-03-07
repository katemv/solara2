const multer = require("multer");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const authRoutes = require("./src/api/routes/auth");
const { mongoDBUri } = require("./src/util/config");

const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + "-" + file.originalname);
    }
});

const acceptedMimeTypes = ["image/png", "image/jpg", "image/jpeg"];
const fileFilter = (req, file, cb) => {
    cb(null, acceptedMimeTypes.includes(file.mimetype));
}

app.use(bodyParser.json());
app.use(multer({ storage: fileStorage, fileFilter }).single("image"));
app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use("/auth", authRoutes);

app.use((error, req, res) => {
    const { statusCode = 500, message, data } = error;

    return res.status(statusCode ?? 500).json({ message, data });
});

mongoose.connect(mongoDBUri)
    .then(() => {
        app.listen(8080);
    })
    .catch((err) => console.log(err));