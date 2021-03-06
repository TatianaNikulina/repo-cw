const db = require('../models')
const User = db.user

// next - результат успешного выполнения
checkDuplicateUsernameOrEmail = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Failed! Username is already in use!"
            })
            return null
        }
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Failed! Email is already in use!"
                })
                return null
            }
            next()
         })
    })
}

const verifySignUp = {
    checkDuplicateUsernameOrEmail
}

module.exports = verifySignUp