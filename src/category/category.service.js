const model = require('./category.model')
const { convertToObject } = require('../utils/helpers')
const songsService = require('../track/track.service')
const Response = require('../utils/response')

module.exports = {

    async createModel(reqBody) {
        return new model({
            name: reqBody.name,
            description: reqBody.description,
        })
    },

    allCategories(query, params) {

        let aggregate_array = []
        let filter = {}

        if(params.categoryId) filter._id = convertToObject(params.categoryId)

        if(filter) aggregate_array.push({ $match: filter })

        if(query.limit) aggregate_array.push({ $limit : Number(query.limit) })

        if(query.skip) aggregate_array.push({ $skip : Number(query.skip) })

        return model.aggregate(aggregate_array)
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
        if (!isCategoryExists) throw new Error(Response.response_msgs.IS_EXIST)

        // update date 
        category.updatedDate = new Date()

        // remove category  
        await model.findByIdAndUpdate(categoryId, category)
    },

    async deleteCategoryById(categoryId) {

        // get category with category id
        const isCategoryExists = await model.findById(categoryId)

        // throw error if category doesn't exists
        if (!isCategoryExists) throw new Error(Response.response_msgs.NOT_EXIST)

        let filter = {}

        // add category filter
        filter.category = req.params.categoryId

        // get songs with specified category
        const isRelatedToSong = await songsService.allTrack(filter)

        // throw error when category is related to song
        if (isRelatedToSong != []) throw new Error(Response.response_msgs.RELTATED)

        // remove category
        await model.findByIdAndDelete(categoryId)
    }

}