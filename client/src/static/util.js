const getDiscordURL = () => {
  const rootUrl =
    "https://discord.com/api/oauth2/authorize?client_id=1052066188080975924&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Fdiscord%2Fredirect&response_type=code&scope=identify%20connections%20email%20guilds";
  return rootUrl;
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export { sleep, getDiscordURL };
