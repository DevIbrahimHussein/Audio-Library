const express = require('express')
const router = express.Router()
const validation = require('./category.validator')
const controller = require('./category.controller')

router.post('/category',
    validation.validateCategoryRequest,
    controller.addCategory
)

router.get('/categories',
    controller.listCategories
)

router.get('/category/:categoryId',
    controller.getCategory
)

router.put('/category/:categoryId',
    controller.updateCategory
)

router.delete('/category/:categoryId',
    controller.deleteCategory
)

module.exports = router