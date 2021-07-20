const model = require('../model/category.model')

module.exports = {

    createModel(reqBody){
        return new model(reqBody)
    },

    allCategories(){
        return model.find()
    },

    insertAlbum(category){
        return category.save()
    },

    updateCategoryById(categoryId, category){
        return model.findByIdAndUpdate(categoryId, category)
    },

    deleteAlbumById(categoryId){
        return model.findByIdAndDelete(categoryId)
    }

}