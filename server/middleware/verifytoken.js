const jwt = require('jsonwebtoken');
// For Demo 
const secret = "qwert345"

exports.veriftToken = (req, res, next) => {
    const token = req.headers['token'];
    if (!token) {
        return res.status(403).send({
            message: " There will be No Token "
        })
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorthorized "
            })
        }
        req.userId = decoded.id;
        next();
    })
}