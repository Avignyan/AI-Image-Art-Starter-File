const jwr = require('jsonwebtoken');
const { customError } = require('./error');

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        throw new customError('Authentication Failed', 401);
    }
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if(err) {
            throw new customError('Authentication Failed', 403);
        }
        req.user = data._id;
        next();
    });
}

module.exports = verifyToken;
