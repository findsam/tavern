const axios = require("axios");
const qs = require("qs");

async function getDiscordTokens(code) {
  try {
    const res = await axios.post(
      "https://discord.com/api/oauth2/token",
      qs.stringify({
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: process.env.REDIRECT_URL,
        grant_type: "authorization_code",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

async function generateNewAccessToken(refresh_token) {
  try {
    const res = await axios.post(
      "https://discord.com/api/oauth2/token",
      qs.stringify({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: refresh_token,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

async function getDiscordUser(access_token) {
  try {
    const res = await axios.get(`https://discord.com/api/users/@me`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getDiscordTokens, getDiscordUser, generateNewAccessToken };
