const express = require('express')
const { validateArtist } = require('../middleware/validator')
const { 
  createArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
  replaceArtist,
  destroyArtist
} = require('../controllers/artist')
const {
  createAlbum,
  getAlbums,
} = require('../controllers/album')
const upload = require('../middleware/upload')


const router = express.Router()

router
  .route('/')
  .post(validateArtist, createArtist)
  .get(getAllArtists)

router 
  .route('/:id')
  .get(getArtistById)
  .patch(updateArtist)
  .put(validateArtist, replaceArtist)
  .delete(destroyArtist)

router
  .route('/:id/albums')
  .post(upload.single('cover_image'), createAlbum)
  .get(getAlbums)

module.exports = router
