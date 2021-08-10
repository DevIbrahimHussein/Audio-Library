const model = require('./category.model')
const { convertToObject } = require('../utils/helpers')
const songsService = require('../track/track.service')

module.exports = {

    async createModel(reqBody) {
        return new model({
            name: reqBody.name,
            description: reqBody.description,
        })
    },

    allCategories(limit, skip) {
        return model.find()
            .skip(skip)
            .limit(limit)
            .lean()
    },

    async findById(categoryId) {
        // convert to object id in order to use it in aggregate function
        categoryId = convertToObject(categoryId)
        // return category
        return model.aggregate([
            { $match: { _id: categoryId } }
        ])
    },

    async insertCategory(data) {
        // create category mdoel
        const category = await module.exports.createModel(data)

        // save category into db
        category.save()
    },

    async updateCategoryById(categoryId, category) {

        // get category id
        const isCategoryExists = await model.findById(categoryId)

        // throw error if category doesn't exists
        if (!isCategoryExists) throw new Error('Category not exists')

        // update date 
        category.updatedDate = new Date()

        // remove category  
        await model.findByIdAndUpdate(categoryId, category)
    },

    async deleteCategoryById(categoryId) {

        // get category with category id
        const isCategoryExists = await model.findById(categoryId)

        // throw error if category doesn't exists
        if (!isCategoryExists) throw new Error('Category not exists')

        let filter = {}

        // add category filter
        filter.category = req.params.categoryId

        // get songs with specified category
        const isRelatedToSong = await songsService.allTrack(filter)

        // throw error when category is related to song
        if (isRelatedToSong != []) throw new Error('Category is related to a song')

        // remove category
        await model.findByIdAndDelete(categoryId)
    }

}