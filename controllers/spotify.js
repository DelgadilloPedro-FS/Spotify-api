const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
const { SpotifyToken } = require("../models/");
const axios = require("axios")
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

const requestToken = (code, grant_type, token) => {
    let data;
    if (grant_type === "refresh_token") {
      data = new URLSearchParams();
      data.append('refresh_token', code);
      data.append('grant_type', grant_type);
    } else {
      data = new URLSearchParams();
      data.append('code', code);
      data.append('grant_type', grant_type);
      if (redirect_uri) {
        data.append('redirect_uri', redirect_uri);
      }
    }  
    return axios({
        method: 'POST',
        url: 'https://accounts.spotify.com/api/token', 
        data,
        headers: {
          'Authorization': basicAuth,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(({ data }) => {
        data.expires_in = new Date().getTime() + data.expires_in
        token.update( data )
        return token.save()
      }).catch((error) => { return false })
  }

const jwt = async (req, res, next) => {
  req.token = await SpotifyToken.findOne({ where: {} });
  if (!req.token && !req.query.code) { return next() }
  if (!req.token && req.query.code) {
    req.token = await requestToken(req.query.code, 'authorization_code', SpotifyToken.build({}))
  } else if (now > req.token.expires_in) {
    req.token = await requestToken(req.token.refresh_token, 'refresh_token', req.token)
  }
  if (!req.token) {
    res.json({ error: 'JWT could not be requested...' })
  }
  return next()
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
