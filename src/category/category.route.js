const express = require('express')
const router = express.Router()

router.post('/category',
    validateCategoryRequest,
    addCategory
)

router.get('/categories',
    listCategories
)

router.get('/category/:categoryId',
    getCategory
)

router.put('/category/:categoryId',
    updateCategory
)

router.delete('/category/:categoryId',
    deleteCategory
)

module.exports = router