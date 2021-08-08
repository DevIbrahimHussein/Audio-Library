module.exports = {

    ok: function (res, status, msg = undefined, data = undefined) {

        let response = {}
        res.status = status
        response.data = data
        response.success = true
        response.message = msg
        return res.json(response)

    },

    notOk: function (res, status, message = undefined) {

        let response = {}
        response.message = message
        res.status = status
        response.success = false
        return res.json(response)

    }

}