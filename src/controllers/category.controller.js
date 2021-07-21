const { allCategories, insertCategory, createModel, updateCategoryById, deleteCategoryById, findById } = require('../service/category.service')
const catchAsync = require('../utils/errors')
const { validateCategoryRequest } = require('../utils/validation')


exports.listCategories = catchAsync(async (req, _, next) => {

    req.data = await allCategories()
    next()

})

exports.getCategory = catchAsync(async (req, _, next) => {

    req.data = await findById(req.params.categoryId)
    next()

})

exports.addCategory = catchAsync(async (req, res, next) => {

    const { errors, isValid } = validateCategoryRequest(req.body)

    if(!isValid){
        return res.status(404).json(errors)
    }

    const model = createModel(req.body)
    req.data = await insertCategory(model)
    next()

})

exports.updateCategory = catchAsync(async (req, res, next) => {

    req.data = await updateCategoryById(req.params.categoryId, req.body)
    next()

})

exports.deleteCategory = catchAsync(async (req, res, next) => {

    req.data = await deleteCategoryById(req.params.categoryId)
    next()

})

