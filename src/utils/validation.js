const isEmpty = require('is-empty')

module.exports = {

    validateAlbumRequest(data){

        let errors = {}

        if(!data.name) 
            errors.name = "Name is required" 
        if(!data.description)
            errors.name = "Description is required" 

        return {
            errors, 
            isValid: isEmpty(errors)
        }

    },

    validateCategoryRequest(data){

        let errors = {}

        if(!data.name) 
            errors.name = "Name is required" 
        if(!data.description)
            errors.description = "Description is required" 

        return {
            errors, 
            isValid: isEmpty(errors)
        }

    },

    validateTrackRequest(data){

        let errors = {}

        if(!data.name) 
            errors.name = "Name is required" 
        if(!data.singer)
            errors.singer = "Singer is required" 

        return {
            errors, 
            isValid: isEmpty(errors)
        }

    }

}