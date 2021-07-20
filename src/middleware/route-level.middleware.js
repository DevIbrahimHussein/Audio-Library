exports.dataHandler = (req, res) => {

    const data = req.data

    if(!data){
        return res.sendStatus(204)
    }
    res.status(200).json(data)
    
}
