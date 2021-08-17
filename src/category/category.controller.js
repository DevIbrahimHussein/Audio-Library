const { allCategories, insertCategory, updateCategoryById, deleteCategoryById, findById } = require('./category.service')
const { convertToObject } = require('../utils/helpers')
const Response = require('../utils/response')

exports.listCategories = async (req, res) => {

    try {

        const data = await allCategories(req.query, req.params)
        return Response.ok(res, data)

    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.getCategory = async (req, res) => {

    try {

        const data = await allCategories(req.query, req.params)
        return Response.ok(res, data)

    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.addCategory = async (req, res) => {

    try {

        await insertCategory(req.body)
        return Response.ok(res)

    } catch (e) {
        return Response.notOk(res, 500, e.message)
    }

}

exports.updateCategory = async (req, res) => {

    try {
        await updateCategoryById(req.params.categoryId, req.body)
        return Response.ok(res)

    } catch (e) {
        if(e.message == 'Category not exists')
            return Response.notOk(res, 400, e.message)

        return Response.notOk(res, 500, e.message)
    }

}

exports.deleteCategory = async (req, res) => {

    try {
        await deleteCategoryById(convertToObject(req.params.categoryId))
        return Response.ok(res)

    } catch (e) {
        if(e.message == 'Category not exists')
            return Response.notOk(res, 409, e.message)
        
        if(e.message == 'Category is related to a song')
            return Response.notOk(res, 400, e.message)
        
        return Response.notOk(res, 500, e.message)
    }

}

