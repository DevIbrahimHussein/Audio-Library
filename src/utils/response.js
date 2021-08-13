module.exports = {

    response_msgs : {

        BLOCKED : 'Blocked',
        IS_EXIST : 'exists',
        INCORRECT : 'INCORRECT',
        RELTATED : 'Related to',
        NOT_EXIST : 'Not exists',
        NOT_VALID_ID : 'Not valid id',
        NOT_VALID_LINK : ''
    },

    ok: function (res, data = undefined) {
        let response = {}
        response.data = data
        response.status = 200
        response.success = true
        return res.json(response)
    },

    notOk: function (res, status, message = undefined) {
        let response = {}
        response.message = message
        response.status = status
        response.success = false
        return res.json(response)
    }

}