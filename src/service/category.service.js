const model = require('../model/category.model')

module.exports = {

    createModel(reqBody){
        return new model({
            name: reqBody.name,
            description: reqBody.description,
        })
    },

    allCategories(){
        return model.find()
    },

    findById(categoryId){
        return model.findById(categoryId)
    },

    insertCategory(category){
        return category.save()
    },

    updateCategoryById(categoryId, category){
        return model.findByIdAndUpdate(categoryId, category)
    },

    deleteCategoryById(categoryId){
        return model.findByIdAndDelete(categoryId)
    }

}