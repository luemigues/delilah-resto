const JWT = require('jsonwebtoken');

const signToken = (userId, is_admin) => {
    return JWT.sign({userId, is_admin}, process.env.SIGNATURE, {
        expiresIn: '1d'
    })
}

const verifyToken = token =>{
    return JWT.verify(token, process.env.SIGNATURE)
}

module.exports = { signToken, verifyToken };