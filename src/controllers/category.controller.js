const { allCategories, insertCategory, createModel, updateCategoryById, deleteCategoryById, findById } = require('../service/category.service')
const { convertToObject } = require('../utils/helpers')

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

        const model = createModel(req.body)
        const data = await insertCategory(model)
        return res.json(data)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

exports.updateCategory = async (req, res) => {

    try {
        const isExist = await findById(req.params.categoryId)
        if (!isExist) return res.status(400).json({ msg: 'category not exist' })

        const data = await updateCategoryById(req.params.categoryId, req.body)
        return res.json(data)

    } catch (e) {
        res.status(500).json({ msg: e })
    }

}

exports.deleteCategory = async (req, res) => {

    try {
        const isCategoryExists = await findById(convertToObject(req.params.categoryId))
        if (!isCategoryExists) return res.status(400).json({ msg: 'category not exist' })

        let filter = {}
        filter.category = req.params.categoryId
        const isRelatedToSong = await songsService.allTrack(filter)

        if (isRelatedToSong != []) return res.status(400).json({ msg: 'You cannot delete this category since there is songs related to it' })

        const data = await deleteCategoryById(convertToObject(req.params.categoryId))
        return res.json(data)

    } catch (e) {
        return res.status(500).json({ msg: e })
    }

}

