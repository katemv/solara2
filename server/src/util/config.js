const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    mongoDBUri: process.env.API_URL,
}