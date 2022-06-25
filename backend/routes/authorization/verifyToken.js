const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    let token
    try {
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1]
            jwt.verify(token,process.env.JWT_SECRET, (err, decoded)=> {
                if(err) res.status(400).json({error:{message:'invalid token, failed to authorize, access denied'}})
                req.decodedUserToken = decoded
                next()
            })
        }
    } catch (err) {
        res.status(500).json({error:{message:err}})
    }
    !token && res.status(400).json({error:{message:'no token provided, access denied'}})
}


module.exports = {verifyToken}