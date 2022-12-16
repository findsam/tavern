const jwt = require('jsonwebtoken')
const accessTokenCookieOptions = {
  maxAge: 900000, // 15 mins
  httpOnly: true,
  domain: "localhost",
  path: "/",
  sameSite: "strict",
  secure: false,
};
const refreshTokenCookieOptions = {
  ...accessTokenCookieOptions,
  maxAge: 1.8e6,
};

function signJWT(token, expired){
  return jwt.sign(token, process.env.PRIV_KEY, {
      expiresIn: expired,
    });
}

function verifyJWT(token) {
  try {
    return { payload: jwt.verify(token, process.env.PRIV_KEY), expired: false };
  } catch (error) {
    return { payload: null, expired: true };
  }
}

async function generateCookies(res, req, accessToken, refreshToken) {
  res.cookie("accessToken", accessToken, accessTokenCookieOptions);
  res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);
}


module.exports = { accessTokenCookieOptions, refreshTokenCookieOptions, verifyJWT, signJWT, generateCookies};
