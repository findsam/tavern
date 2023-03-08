const {
  getDiscordTokens,
  revokeAccessToken,
  getDiscordUser,
} = require("../auth/services");
const {
  refreshTokenCookieOptions,
  signJWT,
  verifyJWT,
  dummyData,
  sleep,
  signTokens,
} = require("../constants.js");
const { generateCookies, clearCookies } = require("../auth/tokens.js");

async function handleLogin(req, res) {
  if (req.query.error) return res.redirect("http://localhost:3000/landing");
  const { code } = req.query;
  const { accessToken, refreshToken } = await getDiscordTokens(code);
  await generateCookies(res, req, accessToken, refreshToken);
  res.redirect("http://localhost:3000/feed");
  console.log("creating cookies and successfully gained access");
}

async function handleLogout(req, res) {
  if (
    await revokeAccessToken(
      verifyJWT(res.locals.at || req.cookies.accessToken).payload.access_token
    )
  ) {
    await clearCookies(res);
    console.log("deleting cookies and successfully revoked access");
    res.status(200).json("deleted");
  } else {
    console.log("couldnt delete cookies wtf :(");
    res.status(400).json("couldn't revoked");
  }
}

async function fetchUserDetails(req, res) {
  try {
    res
      .status(200)
      .json(
        await getDiscordUser(
          verifyJWT(res.locals.at || req.cookies.accessToken).payload.access_token
        )
      );
  } catch (err) {
    res.status(404).json("error while fetching user, please relogin.");
  }
}

module.exports = {
  handleLogin,
  handleLogout,
  fetchUserDetails,
  // fetchMultipleThreads,
  // fetchIndividualThread,
};
