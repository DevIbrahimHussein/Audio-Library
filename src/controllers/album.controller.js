const { allAlbums, insertAlbum, updateAlbumById, deleteAlbumById, createModel, findById } = require('../service/album.service')
const { convertToObject } = require('../utils/helpers')

exports.listAlbums = async (req, res) => {
    
    try {

        const data = await allAlbums()
        return res.json(data)

    } catch(e) {
        return res.status(500).json({msg: e})
    }


}

exports.getAlbum = async (req, res) => {
    
    try {

        const data = await findById(convertToObject(req.params.albumId))
    
        return res.json(data)

    } catch(e) {
        return res.status(500).json({msg: e})
    }


}

exports.addAlbum = async (req, res) => {
    
    try {
        
        const model = createModel(req.body)
        const data = await insertAlbum(model)
        return res.json(data)

    } catch(e) {
        return res.status(500).json({msg: e})
    }

}

exports.updateAlbum = async (req, res) => {
    
    try {
        
        const isExist = await findById(convertToObject(req.params.albumId))
        if(!isExist) return res.status(400).json({ msg: 'ALbum is not exist' })

        const data = await updateAlbumById(convertToObject(req.params.albumId), req.body)
        return res.json(data)
    } catch(e) {
        return res.status(500).json({msg: e})
    }


}

exports.deleteAlbum = async (req, res) => {
    try {
        const isExist = await findById(convertToObject(req.params.albumId))
        if(!isExist) return res.status(400).json({ msg: 'ALbum is not exist' })
        
        const data = await deleteAlbumById(convertToObject(req.params.albumId))
        return res.json(data)
    } catch(e) {
        return res.status(500).json({msg: e})    
    }

}

