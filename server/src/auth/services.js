const axios = require("axios");
const qs = require("qs");
const { signTokens } = require("../constants.js");

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

    const { accessToken, refreshToken } = await signTokens(
      res.data.access_token,
      res.data.refresh_token
    );
    return { accessToken, refreshToken };
  } catch (err) {
    console.log(err);
  }
}

async function generateAccessToken(refresh_token) {
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
    // return res.data;
    const { accessToken, refreshToken } = await signTokens(
      res.data.access_token,
      res.data.refresh_token
    );
    return { accessToken, refreshToken };
  } catch (err) {
    console.log(err);
  }
}

async function getDiscordUser(access_token) {
  try {
    const TOKEN_CONFIG = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    return await axios
      .all([
        axios.get("https://discord.com/api/users/@me", TOKEN_CONFIG),
        axios.get("https://discord.com/api/users/@me/connections", TOKEN_CONFIG),
        axios.get("https://discord.com/api/users/@me/guilds", TOKEN_CONFIG),
      ])
      .then(
        axios.spread((...responses) => {
          return responses
            .map((item, index) => ({
              [item.config.url
                .substring(item.config.url.lastIndexOf("/") + 1)
                .replace("@", "")]: item.data,
            }))
            .reduce(
              (acc, curr) => ({
                ...acc,
                [Object.keys(curr)]: Object.values(curr)[0],
              }),
              {}
            );
        })
      )
      .catch((err) => {
        return err.response.status;
      });
  } catch (err) {
    return err.response.status;
  }
}

async function revokeAccessToken(access_token) {
  try {
    const res = await axios.post(
      "https://discord.com/api/oauth2/token//revoke",
      qs.stringify({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        token: access_token,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

module.exports = {
  getDiscordTokens,
  getDiscordUser,
  generateAccessToken,
  revokeAccessToken,
};
