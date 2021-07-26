const { isUserExist, signToken, signup } = require('../service/user.service')

exports.signup = async(req, res) => {

    try {

        const user = signup(req.body)

        if(!user) return res.status(400).send({
            'msg': 'failed'
        })
        
        return res.end()

    } catch(e) {
        return res.status(500).send(e)
    }

}

exports.login = async(req, res, next) => {

    try {

        const isExist = isUserExist(req.body)

        if(!isExist)
            return res.status(400).json({
                msg: 'email or password is incorrect'
            })
        
        const token = signToken(req.body)

        req.data = token

    } catch(e){
        return res.status(500).send(e)
    }

}

