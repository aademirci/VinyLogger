const albumModel = require('../models/album')
const userModel = require('../models/user')

const createAlbum = async (req, res) => {
    try {
        const newAlbum = req.body
        const owner = await userModel.findOne({ username: req.user.username })
        if (owner) {
            const createdAlbum = await albumModel.create({ artist: newAlbum.artist, title: newAlbum.title, year: newAlbum.year, genre: newAlbum.genre })
            if (req.body.place === 'owned') owner.owned.push(createdAlbum)
            else if (req.body.place === 'wishlist') owner.wishlist.push(createdAlbum)
            else return res.send({ msg: 'Where to place the album is not specified.' })

            owner.save()
            return res.send({ msg: 'Album added successfully.', album: createdAlbum })
        } else {
            return res.send({ msg: 'User is not available.' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Internal server error' })
    }
}

const showAlbums = async (req, res) => {
    try {
        const username = req.params.username
        const place = req.params.place
        const owner = await userModel.findOne({ username })
        await owner.populate(place)

        res.json(owner)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Internal server error' })
    }
}

const moveAlbumToCollection = async (req, res) => {
    try {
        const albumId = req.params.id
        const username = req.user.username
        const owner = await userModel.findOne({ username })
        const i = owner.wishlist.indexOf(albumId)
        if (i !== -1) owner.wishlist.splice(i, 1)
        owner.owned.push(albumId)
        owner.save()
    
        return res.send({ msg: 'Album is moved to the collection' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Internal server error' })
    }
}

const removeAlbumFromUser = async (req, res) => {
    try {
        const albumId = req.params.id
        const place = req.params.place
        const username = req.user.username
        const owner = await userModel.findOne({ username })
        const i = owner[place].indexOf(albumId)
        if (i !== -1) owner[place].splice(i, 1)
        owner.save()

        return res.send({ msg: 'Album is removed from the collection.' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Internal server error' })
    }
}

module.exports = { createAlbum, showAlbums, moveAlbumToCollection, removeAlbumFromUser }