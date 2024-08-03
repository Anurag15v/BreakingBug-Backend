const jwt = require("jsonwebtoken");

const createNewToken = (payload) => {

    // return jwt.sign({ userId: payload }, process.getuid.SECRET_KEY, { expiresIn: '10d' }); // no attribute getuid
    return jwt.sign({ userId: payload }, process.env.SECRET_KEY, { expiresIn: '10d' }); // process has attribute env
}

module.exports = {createNewToken}; // exported createNewToken