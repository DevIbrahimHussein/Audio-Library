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

        return model.aggregate([
            { $match : { _id : categoryId } }
        ])
    },

    insertCategory(category){
        return category.save()
    },

    updateCategoryById(categoryId, category){
        return model.updateOne(
            { _id: categoryId },
            [{
                $set : category
            }]
        )
    },

    deleteCategoryById(categoryId){
        return model.findByIdAndDelete(categoryId)
    }

}