export const getDiscordURL = () => {
  const rootUrl =
    "https://discord.com/api/oauth2/authorize?client_id=1052066188080975924&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Fdiscord%2Fredirect&response_type=code&scope=identify%20email%20connections%20guilds";
  // const options = {
  //   redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL,
  //   client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
  //   acces_type: "offline",
  //   response_type: "code",
  //   prompt: "consent",
  // };
  // const qs = new URLSearchParams(options);
  // return `${rootUrl}?${qs.toString()}`;
  return rootUrl;
};
