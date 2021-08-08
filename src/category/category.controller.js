const { allCategories, insertCategory, updateCategoryById, deleteCategoryById, findById } = require('./category.service')
const { convertToObject } = require('../utils/helpers')
const Response = require('../utils/response')

exports.listCategories = async (req, res) => {

    try {

        const data = await allCategories()
        return res.json(data)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.getCategory = async (req, res) => {

    try {

        const data = await findById(req.params.categoryId)
        return res.json(data)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.addCategory = async (req, res) => {

    try {

        await insertCategory(req.body)
        return Response.ok(res, 200, undefined, undefined)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.updateCategory = async (req, res) => {

    try {
        await updateCategoryById(req.params.categoryId, req.body)
        return Response.ok(res, 200, undefined, undefined)

    } catch (e) {
        res.status(500).json({ msg: e })
    }

}

exports.deleteCategory = async (req, res) => {

    try {

        await deleteCategoryById(convertToObject(req.params.categoryId))
        return Response.ok(res, 200, undefined, undefined)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

