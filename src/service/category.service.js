const model = require('../model/category.model')
const { convertToObject } = require('../utils/helpers')

module.exports = {

    createModel(reqBody) {
        return new model({
            name: reqBody.name,
            description: reqBody.description,
        })
    },

    allCategories() {
        return model.find()
    },

    findById(categoryId) {
        categoryId = convertToObject(categoryId)
        return model.aggregate([
            { $match: { _id: categoryId } }
        ])
    },

    insertCategory(category) {
        return category.save()
    },

    updateCategoryById(categoryId, category) {
        category.updatedDate = new Date()
        categoryId = convertToObject(categoryId)
        return model.updateOne(
            { _id: categoryId },
            [{
                $set: category
            }]
        )
    },

    deleteCategoryById(categoryId) {
        return model.findByIdAndDelete(categoryId)
    }

}