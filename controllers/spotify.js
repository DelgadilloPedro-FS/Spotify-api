const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
const { SpotifyToken } = require("../models/spotifytoken");
const randomstring = require("randomstring");

const basicAuth =
  "Basic " +
  new Buffer.from(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET).toString(
    "base64"
  );

const redirect_uri = "http://localhost:3001/pp3/v1/auth";
const now = new Date().getTime()

const login = async (req, res) => {
  const state = randomstring.generate(16);
  const urlParams = new URLSearchParams();
  urlParams.append("response_type", "code");
  urlParams.append("client_id", SPOTIFY_CLIENT_ID);
  urlParams.append("redirect_uri", redirect_uri);
  urlParams.append("state", state);

  const loginUrl =
    "https://accounts.spotify.com/authorize?" + urlParams.toString();
  res.redirect(loginUrl);
};

const jwt = async (req, res, next) => {
  req.token = await SpotifyToken.findOne({ where: {} });
  if (!req.token && !req.query.code) {
    return next();
  }
  if (!req.token) {
    res.json({ error: "JWT could not be requested..." });
  }
  return next();
};

const auth = async (req, res) => {
  if (req.token) {
    res.redirect("http://localhost:3000");
  } else {
    res.redirect("http://localhost:3000/login");
  }
};

module.exports = {
  login,
  jwt,
  auth
};
