const { allCategories, insertCategory, createModel, updateCategoryById, deleteCategoryById, findById } = require('../service/category.service')
const { convertToObject } = require('../utils/helpers')

exports.listCategories = async (req, res, next) => {

    try {

        const data = await allCategories()
        return res.json(data)

    } catch(e) {
        return res.status(500).json({ msg: e })
    }
    
}

exports.getCategory = async (req, res, next) => {

    try {

        const data = await findById(convertToObject(req.params.categoryId))
        return res.json(data)

    } catch(e) {
        return res.status(500).json({ msg: e })
    }

}

exports.addCategory = async (req, res, next) => {

    try {

        const model = createModel(req.body)
        const data = await insertCategory(model)
        return res.json(data)

    } catch(e){
        return res.status(500).json({ msg: e })
    }

}

exports.updateCategory = async (req, res, next) => {

    try{

        const data = await updateCategoryById(convertToObject(req.params.categoryId), req.body)
        return res.json(data)

    } catch(e){
        res.status(500).json({ msg: e })
    }

}

exports.deleteCategory = async (req, res, next) => {

    try {

        const data = await deleteCategoryById(convertToObject(req.params.categoryId))
        return res.json(data)

    } catch(e){
        return res.status(500).json({ msg: e })
    }

}

