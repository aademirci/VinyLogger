const express = require('express')
const router = express.Router()
const { createAlbum, showAlbums, moveAlbumToCollection, removeAlbumFromUser } = require('../controllers/album')
const verifyToken = require('../middleware/auth')

router.get('/:username/:place', verifyToken, showAlbums)
router.post('/album/create', verifyToken, createAlbum)
router.put('/album/move/:id', verifyToken, moveAlbumToCollection)
router.put('/album/remove/:place/:id', verifyToken, removeAlbumFromUser)

module.exports = router