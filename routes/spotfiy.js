const express = require("express");
const router = express.Router();
const spotifyCtrl = require('../controllers/spotify')

router.get("/login", spotifyCtrl.login);
router.get('/auth', spotifyCtrl.jwt, spotifyCtrl.auth);

module.exports = router