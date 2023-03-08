const jwt = require("jsonwebtoken");

const corsDefaults = {
  origin: ["http://localhost:3000"],
  credentials: true,
};

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

function signJWT(token, expired) {
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

async function signTokens(access_token, refresh_token) {
  const accessToken = signJWT({ access_token }, "15m");
  const refreshToken = signJWT({ refresh_token }, "59m");
  return { accessToken, refreshToken };
}

const dummyData = [
  {
    id: 0,
    title: "Post 0",
    image: "1.jpg",
  },
  {
    id: 1,
    title: "Post 1",
    image: "2.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    image: "3.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    image: "4.jpg",
  },
  {
    id: 4,
    title: "Post 4",
    image: "5.webp",
  },
  {
    id: 5,
    title: "Post 5",
    image: "6.jpg",
  },
  {
    id: 6,
    title: "Post 6",
    image: "7.jpg",
  },
  {
    id: 7,
    title: "Post 7",
    image: "8.jpg",
  },
  {
    id: 8,
    title: "Post 8",
    image: "9.webp",
  },
  {
    id: 9,
    title: "Post 9",
    image: "10.jpg",
  },
  {
    id: 10,
    title: "Post 10",
    image: "11.jpg",
  },
  {
    id: 11,
    title: "Post 11",
    image: "12.jpg",
  },
  {
    id: 12,
    title: "Post 12",
    image: "13.jpg",
  },
  {
    id: 13,
    title: "Post 13",
    image: "14.jpg",
  },
  {
    id: 14,
    title: "Post 14",
    image: "15.jpeg",
  },
  {
    id: 15,
    title: "Post 15",
    image: "16.jpeg",
  },
  {
    id: 16,
    title: "Post 16",
    image: "17.jpeg",
  },
  {
    id: 17,
    title: "Post 17",
    image: "18.jpg",
  },
  {
    id: 18,
    title: "Post 18",
    image: "19.webp",
  },
  {
    id: 19,
    title: "Post 19",
    image: "1.jpg",
  },
  {
    id: 20,
    title: "Post 20",
    image: "2.jpg",
  },
  {
    id: 21,
    title: "Post 21",
    image: "3.jpg",
  },
  {
    id: 22,
    title: "Post 22",
    image: "4.jpg",
  },
  {
    id: 23,
    title: "Post 23",
    image: "5.webp",
  },
  {
    id: 24,
    title: "Post 24",
    image: "6.jpg",
  },
  {
    id: 25,
    title: "Post 25",
    image: "7.jpg",
  },
  {
    id: 26,
    title: "Post 26",
    image: "8.jpg",
  },
  {
    id: 27,
    title: "Post 27",
    image: "9.webp",
  },
  {
    id: 28,
    title: "Post 28",
    image: "10.jpg",
  },
  {
    id: 29,
    title: "Post 29",
    image: "11.jpg",
  },
  {
    id: 30,
    title: "Post 30",
    image: "12.jpg",
  },
  {
    id: 31,
    title: "Post 31",
    image: "13.jpg",
  },
  {
    id: 32,
    title: "Post 32",
    image: "14.jpg",
  },
  {
    id: 33,
    title: "Post 33",
    image: "15.jpeg",
  },
  {
    id: 34,
    title: "Post 34",
    image: "16.jpeg",
  },
  {
    id: 35,
    title: "Post 35",
    image: "17.jpeg",
  },
  {
    id: 36,
    title: "Post 36",
    image: "18.jpg",
  },
  {
    id: 37,
    title: "Post 37",
    image: "19.webp",
  },
  {
    id: 38,
    title: "Post 38",
    image: "1.jpg",
  },
  {
    id: 39,
    title: "Post 39",
    image: "2.jpg",
  },
  {
    id: 40,
    title: "Post 40",
    image: "3.jpg",
  },
  {
    id: 41,
    title: "Post 41",
    image: "4.jpg",
  },
  {
    id: 42,
    title: "Post 42",
    image: "5.webp",
  },
  {
    id: 43,
    title: "Post 43",
    image: "6.jpg",
  },
  {
    id: 44,
    title: "Post 44",
    image: "7.jpg",
  },
  {
    id: 45,
    title: "Post 45",
    image: "8.jpg",
  },
  {
    id: 46,
    title: "Post 46",
    image: "9.webp",
  },
  {
    id: 47,
    title: "Post 47",
    image: "10.jpg",
  },
  {
    id: 48,
    title: "Post 48",
    image: "11.jpg",
  },
  {
    id: 49,
    title: "Post 49",
    image: "12.jpg",
  },
  {
    id: 50,
    title: "Post 50",
    image: "13.jpg",
  },
  {
    id: 51,
    title: "Post 51",
    image: "14.jpg",
  },
  {
    id: 52,
    title: "Post 52",
    image: "15.jpeg",
  },
  {
    id: 53,
    title: "Post 53",
    image: "16.jpeg",
  },
  {
    id: 54,
    title: "Post 54",
    image: "17.jpeg",
  },
  {
    id: 55,
    title: "Post 55",
    image: "18.jpg",
  },
  {
    id: 56,
    title: "Post 56",
    image: "19.webp",
  },
  {
    id: 57,
    title: "Post 57",
    image: "1.jpg",
  },
  {
    id: 58,
    title: "Post 58",
    image: "2.jpg",
  },
  {
    id: 59,
    title: "Post 59",
    image: "3.jpg",
  },
  {
    id: 60,
    title: "Post 60",
    image: "4.jpg",
  },
  {
    id: 61,
    title: "Post 61",
    image: "5.webp",
  },
  {
    id: 62,
    title: "Post 62",
    image: "6.jpg",
  },
  {
    id: 63,
    title: "Post 63",
    image: "7.jpg",
  },
  {
    id: 64,
    title: "Post 64",
    image: "8.jpg",
  },
  {
    id: 65,
    title: "Post 65",
    image: "9.webp",
  },
  {
    id: 66,
    title: "Post 66",
    image: "10.jpg",
  },
  {
    id: 67,
    title: "Post 67",
    image: "11.jpg",
  },
  {
    id: 68,
    title: "Post 68",
    image: "12.jpg",
  },
  {
    id: 69,
    title: "Post 69",
    image: "13.jpg",
  },
  {
    id: 70,
    title: "Post 70",
    image: "14.jpg",
  },
  {
    id: 71,
    title: "Post 71",
    image: "15.jpeg",
  },
  {
    id: 72,
    title: "Post 72",
    image: "16.jpeg",
  },
  {
    id: 73,
    title: "Post 73",
    image: "17.jpeg",
  },
  {
    id: 74,
    title: "Post 74",
    image: "18.jpg",
  },
  {
    id: 75,
    title: "Post 75",
    image: "19.webp",
  },
  {
    id: 76,
    title: "Post 76",
    image: "1.jpg",
  },
  {
    id: 77,
    title: "Post 77",
    image: "2.jpg",
  },
  {
    id: 78,
    title: "Post 78",
    image: "3.jpg",
  },
  {
    id: 79,
    title: "Post 79",
    image: "4.jpg",
  },
  {
    id: 0,
    title: "Post 0",
    image: "1.jpg",
  },
  {
    id: 1,
    title: "Post 1",
    image: "2.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    image: "3.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    image: "4.jpg",
  },
  {
    id: 4,
    title: "Post 4",
    image: "5.webp",
  },
  {
    id: 5,
    title: "Post 5",
    image: "6.jpg",
  },
  {
    id: 6,
    title: "Post 6",
    image: "7.jpg",
  },
  {
    id: 7,
    title: "Post 7",
    image: "8.jpg",
  },
  {
    id: 8,
    title: "Post 8",
    image: "9.webp",
  },
  {
    id: 9,
    title: "Post 9",
    image: "10.jpg",
  },
  {
    id: 10,
    title: "Post 10",
    image: "11.jpg",
  },
  {
    id: 11,
    title: "Post 11",
    image: "12.jpg",
  },
  {
    id: 12,
    title: "Post 12",
    image: "13.jpg",
  },
  {
    id: 13,
    title: "Post 13",
    image: "14.jpg",
  },
  {
    id: 14,
    title: "Post 14",
    image: "15.jpeg",
  },
  {
    id: 15,
    title: "Post 15",
    image: "16.jpeg",
  },
  {
    id: 16,
    title: "Post 16",
    image: "17.jpeg",
  },
  {
    id: 17,
    title: "Post 17",
    image: "18.jpg",
  },
  {
    id: 18,
    title: "Post 18",
    image: "19.webp",
  },
  {
    id: 19,
    title: "Post 19",
    image: "1.jpg",
  },
  {
    id: 20,
    title: "Post 20",
    image: "2.jpg",
  },
  {
    id: 21,
    title: "Post 21",
    image: "3.jpg",
  },
  {
    id: 22,
    title: "Post 22",
    image: "4.jpg",
  },
  {
    id: 23,
    title: "Post 23",
    image: "5.webp",
  },
  {
    id: 24,
    title: "Post 24",
    image: "6.jpg",
  },
  {
    id: 25,
    title: "Post 25",
    image: "7.jpg",
  },
  {
    id: 26,
    title: "Post 26",
    image: "8.jpg",
  },
  {
    id: 27,
    title: "Post 27",
    image: "9.webp",
  },
  {
    id: 28,
    title: "Post 28",
    image: "10.jpg",
  },
  {
    id: 29,
    title: "Post 29",
    image: "11.jpg",
  },
  {
    id: 30,
    title: "Post 30",
    image: "12.jpg",
  },
  {
    id: 31,
    title: "Post 31",
    image: "13.jpg",
  },
  {
    id: 32,
    title: "Post 32",
    image: "14.jpg",
  },
  {
    id: 33,
    title: "Post 33",
    image: "15.jpeg",
  },
  {
    id: 34,
    title: "Post 34",
    image: "16.jpeg",
  },
  {
    id: 35,
    title: "Post 35",
    image: "17.jpeg",
  },
  {
    id: 36,
    title: "Post 36",
    image: "18.jpg",
  },
  {
    id: 37,
    title: "Post 37",
    image: "19.webp",
  },
  {
    id: 38,
    title: "Post 38",
    image: "1.jpg",
  },
  {
    id: 39,
    title: "Post 39",
    image: "2.jpg",
  },
  {
    id: 40,
    title: "Post 40",
    image: "3.jpg",
  },
  {
    id: 41,
    title: "Post 41",
    image: "4.jpg",
  },
  {
    id: 42,
    title: "Post 42",
    image: "5.webp",
  },
  {
    id: 43,
    title: "Post 43",
    image: "6.jpg",
  },
  {
    id: 44,
    title: "Post 44",
    image: "7.jpg",
  },
  {
    id: 45,
    title: "Post 45",
    image: "8.jpg",
  },
  {
    id: 46,
    title: "Post 46",
    image: "9.webp",
  },
  {
    id: 47,
    title: "Post 47",
    image: "10.jpg",
  },
  {
    id: 48,
    title: "Post 48",
    image: "11.jpg",
  },
  {
    id: 49,
    title: "Post 49",
    image: "12.jpg",
  },
  {
    id: 50,
    title: "Post 50",
    image: "13.jpg",
  },
  {
    id: 51,
    title: "Post 51",
    image: "14.jpg",
  },
  {
    id: 52,
    title: "Post 52",
    image: "15.jpeg",
  },
  {
    id: 53,
    title: "Post 53",
    image: "16.jpeg",
  },
  {
    id: 54,
    title: "Post 54",
    image: "17.jpeg",
  },
  {
    id: 55,
    title: "Post 55",
    image: "18.jpg",
  },
  {
    id: 56,
    title: "Post 56",
    image: "19.webp",
  },
  {
    id: 57,
    title: "Post 57",
    image: "1.jpg",
  },
  {
    id: 58,
    title: "Post 58",
    image: "2.jpg",
  },
  {
    id: 59,
    title: "Post 59",
    image: "3.jpg",
  },
  {
    id: 60,
    title: "Post 60",
    image: "4.jpg",
  },
  {
    id: 61,
    title: "Post 61",
    image: "5.webp",
  },
  {
    id: 62,
    title: "Post 62",
    image: "6.jpg",
  },
  {
    id: 63,
    title: "Post 63",
    image: "7.jpg",
  },
  {
    id: 64,
    title: "Post 64",
    image: "8.jpg",
  },
  {
    id: 65,
    title: "Post 65",
    image: "9.webp",
  },
  {
    id: 66,
    title: "Post 66",
    image: "10.jpg",
  },
  {
    id: 67,
    title: "Post 67",
    image: "11.jpg",
  },
  {
    id: 68,
    title: "Post 68",
    image: "12.jpg",
  },
  {
    id: 69,
    title: "Post 69",
    image: "13.jpg",
  },
  {
    id: 70,
    title: "Post 70",
    image: "14.jpg",
  },
  {
    id: 71,
    title: "Post 71",
    image: "15.jpeg",
  },
  {
    id: 72,
    title: "Post 72",
    image: "16.jpeg",
  },
  {
    id: 73,
    title: "Post 73",
    image: "17.jpeg",
  },
  {
    id: 74,
    title: "Post 74",
    image: "18.jpg",
  },
  {
    id: 75,
    title: "Post 75",
    image: "19.webp",
  },
  {
    id: 76,
    title: "Post 76",
    image: "1.jpg",
  },
  {
    id: 77,
    title: "Post 77",
    image: "2.jpg",
  },
  {
    id: 78,
    title: "Post 78",
    image: "3.jpg",
  },
  {
    id: 79,
    title: "Post 79",
    image: "4.jpg",
  },
  {
    id: 0,
    title: "Post 0",
    image: "1.jpg",
  },
  {
    id: 1,
    title: "Post 1",
    image: "2.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    image: "3.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    image: "4.jpg",
  },
  {
    id: 4,
    title: "Post 4",
    image: "5.webp",
  },
  {
    id: 5,
    title: "Post 5",
    image: "6.jpg",
  },
  {
    id: 6,
    title: "Post 6",
    image: "7.jpg",
  },
  {
    id: 7,
    title: "Post 7",
    image: "8.jpg",
  },
  {
    id: 8,
    title: "Post 8",
    image: "9.webp",
  },
  {
    id: 9,
    title: "Post 9",
    image: "10.jpg",
  },
  {
    id: 10,
    title: "Post 10",
    image: "11.jpg",
  },
  {
    id: 11,
    title: "Post 11",
    image: "12.jpg",
  },
  {
    id: 12,
    title: "Post 12",
    image: "13.jpg",
  },
  {
    id: 13,
    title: "Post 13",
    image: "14.jpg",
  },
  {
    id: 14,
    title: "Post 14",
    image: "15.jpeg",
  },
  {
    id: 15,
    title: "Post 15",
    image: "16.jpeg",
  },
  {
    id: 16,
    title: "Post 16",
    image: "17.jpeg",
  },
  {
    id: 17,
    title: "Post 17",
    image: "18.jpg",
  },
  {
    id: 18,
    title: "Post 18",
    image: "19.webp",
  },
  {
    id: 19,
    title: "Post 19",
    image: "1.jpg",
  },
  {
    id: 20,
    title: "Post 20",
    image: "2.jpg",
  },
  {
    id: 21,
    title: "Post 21",
    image: "3.jpg",
  },
  {
    id: 22,
    title: "Post 22",
    image: "4.jpg",
  },
  {
    id: 23,
    title: "Post 23",
    image: "5.webp",
  },
  {
    id: 24,
    title: "Post 24",
    image: "6.jpg",
  },
  {
    id: 25,
    title: "Post 25",
    image: "7.jpg",
  },
  {
    id: 26,
    title: "Post 26",
    image: "8.jpg",
  },
  {
    id: 27,
    title: "Post 27",
    image: "9.webp",
  },
  {
    id: 28,
    title: "Post 28",
    image: "10.jpg",
  },
  {
    id: 29,
    title: "Post 29",
    image: "11.jpg",
  },
  {
    id: 30,
    title: "Post 30",
    image: "12.jpg",
  },
  {
    id: 31,
    title: "Post 31",
    image: "13.jpg",
  },
  {
    id: 32,
    title: "Post 32",
    image: "14.jpg",
  },
  {
    id: 33,
    title: "Post 33",
    image: "15.jpeg",
  },
  {
    id: 34,
    title: "Post 34",
    image: "16.jpeg",
  },
  {
    id: 35,
    title: "Post 35",
    image: "17.jpeg",
  },
  {
    id: 36,
    title: "Post 36",
    image: "18.jpg",
  },
  {
    id: 37,
    title: "Post 37",
    image: "19.webp",
  },
  {
    id: 38,
    title: "Post 38",
    image: "1.jpg",
  },
  {
    id: 68,
    title: "Post 68",
    image: "12.jpg",
  },
  {
    id: 69,
    title: "Post 69",
    image: "13.jpg",
  },
  {
    id: 70,
    title: "Post 70",
    image: "14.jpg",
  },
  {
    id: 71,
    title: "Post 71",
    image: "15.jpeg",
  },
  {
    id: 72,
    title: "Post 72",
    image: "16.jpeg",
  },
  {
    id: 73,
    title: "Post 73",
    image: "17.jpeg",
  },
  {
    id: 74,
    title: "Post 74",
    image: "18.jpg",
  },
  {
    id: 75,
    title: "Post 75",
    image: "19.webp",
  },
  {
    id: 76,
    title: "Post 76",
    image: "1.jpg",
  },
  {
    id: 77,
    title: "Post 77",
    image: "2.jpg",
  },
  {
    id: 78,
    title: "Post 78",
    image: "3.jpg",
  },
  {
    id: 79,
    title: "Post 79",
    image: "4.jpg",
  },
  {
    id: 0,
    title: "Post 0",
    image: "1.jpg",
  },
  {
    id: 1,
    title: "Post 1",
    image: "2.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    image: "3.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    image: "4.jpg",
  },
  {
    id: 4,
    title: "Post 4",
    image: "5.webp",
  },
  {
    id: 5,
    title: "Post 5",
    image: "6.jpg",
  },
  {
    id: 6,
    title: "Post 6",
    image: "7.jpg",
  },
  {
    id: 7,
    title: "Post 7",
    image: "8.jpg",
  },
  {
    id: 8,
    title: "Post 8",
    image: "9.webp",
  },
  {
    id: 9,
    title: "Post 9",
    image: "10.jpg",
  },
  {
    id: 10,
    title: "Post 10",
    image: "11.jpg",
  },
  {
    id: 11,
    title: "Post 11",
    image: "12.jpg",
  },
  {
    id: 12,
    title: "Post 12",
    image: "13.jpg",
  },
  {
    id: 13,
    title: "Post 13",
    image: "14.jpg",
  },
  {
    id: 14,
    title: "Post 14",
    image: "15.jpeg",
  },
  {
    id: 15,
    title: "Post 15",
    image: "16.jpeg",
  },
  {
    id: 16,
    title: "Post 16",
    image: "17.jpeg",
  },
  {
    id: 17,
    title: "Post 17",
    image: "18.jpg",
  },
  {
    id: 18,
    title: "Post 18",
    image: "19.webp",
  },
  {
    id: 19,
    title: "Post 19",
    image: "1.jpg",
  },
  {
    id: 20,
    title: "Post 20",
    image: "2.jpg",
  },
  {
    id: 21,
    title: "Post 21",
    image: "3.jpg",
  },
  {
    id: 22,
    title: "Post 22",
    image: "4.jpg",
  },
  {
    id: 23,
    title: "Post 23",
    image: "5.webp",
  },
  {
    id: 24,
    title: "Post 24",
    image: "6.jpg",
  },
  {
    id: 25,
    title: "Post 25",
    image: "7.jpg",
  },
  {
    id: 26,
    title: "Post 26",
    image: "8.jpg",
  },
  {
    id: 27,
    title: "Post 27",
    image: "9.webp",
  },
  {
    id: 28,
    title: "Post 28",
    image: "10.jpg",
  },
  {
    id: 29,
    title: "Post 29",
    image: "11.jpg",
  },
  {
    id: 30,
    title: "Post 30",
    image: "12.jpg",
  },
  {
    id: 31,
    title: "Post 31",
    image: "13.jpg",
  },
  {
    id: 32,
    title: "Post 32",
    image: "14.jpg",
  },
  {
    id: 33,
    title: "Post 33",
    image: "15.jpeg",
  },
  {
    id: 34,
    title: "Post 34",
    image: "16.jpeg",
  },
  {
    id: 35,
    title: "Post 35",
    image: "17.jpeg",
  },
  {
    id: 36,
    title: "Post 36",
    image: "18.jpg",
  },
  {
    id: 37,
    title: "Post 37",
    image: "19.webp",
  },
  {
    id: 38,
    title: "Post 38",
    image: "1.jpg",
  },
  {
    id: 68,
    title: "Post 68",
    image: "12.jpg",
  },
  {
    id: 69,
    title: "Post 69",
    image: "13.jpg",
  },
  {
    id: 70,
    title: "Post 70",
    image: "14.jpg",
  },
  {
    id: 71,
    title: "Post 71",
    image: "15.jpeg",
  },
  {
    id: 72,
    title: "Post 72",
    image: "16.jpeg",
  },
  {
    id: 73,
    title: "Post 73",
    image: "17.jpeg",
  },
  {
    id: 74,
    title: "Post 74",
    image: "18.jpg",
  },
  {
    id: 75,
    title: "Post 75",
    image: "19.webp",
  },
  {
    id: 76,
    title: "Post 76",
    image: "1.jpg",
  },
  {
    id: 77,
    title: "Post 77",
    image: "2.jpg",
  },
  {
    id: 78,
    title: "Post 78",
    image: "3.jpg",
  },
  {
    id: 79,
    title: "Post 79",
    image: "4.jpg",
  },
  {
    id: 0,
    title: "Post 0",
    image: "1.jpg",
  },
  {
    id: 1,
    title: "Post 1",
    image: "2.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    image: "3.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    image: "4.jpg",
  },
  {
    id: 4,
    title: "Post 4",
    image: "5.webp",
  },
  {
    id: 5,
    title: "Post 5",
    image: "6.jpg",
  },
  {
    id: 6,
    title: "Post 6",
    image: "7.jpg",
  },
  {
    id: 7,
    title: "Post 7",
    image: "8.jpg",
  },
  {
    id: 8,
    title: "Post 8",
    image: "9.webp",
  },
  {
    id: 9,
    title: "Post 9",
    image: "10.jpg",
  },
  {
    id: 10,
    title: "Post 10",
    image: "11.jpg",
  },
  {
    id: 11,
    title: "Post 11",
    image: "12.jpg",
  },
  {
    id: 12,
    title: "Post 12",
    image: "13.jpg",
  },
  {
    id: 13,
    title: "Post 13",
    image: "14.jpg",
  },
  {
    id: 14,
    title: "Post 14",
    image: "15.jpeg",
  },
  {
    id: 15,
    title: "Post 15",
    image: "16.jpeg",
  },
  {
    id: 16,
    title: "Post 16",
    image: "17.jpeg",
  },
  {
    id: 17,
    title: "Post 17",
    image: "18.jpg",
  },
  {
    id: 18,
    title: "Post 18",
    image: "19.webp",
  },
  {
    id: 19,
    title: "Post 19",
    image: "1.jpg",
  },
  {
    id: 20,
    title: "Post 20",
    image: "2.jpg",
  },
  {
    id: 21,
    title: "Post 21",
    image: "3.jpg",
  },
  {
    id: 22,
    title: "Post 22",
    image: "4.jpg",
  },
  {
    id: 23,
    title: "Post 23",
    image: "5.webp",
  },
  {
    id: 24,
    title: "Post 24",
    image: "6.jpg",
  },
  {
    id: 25,
    title: "Post 25",
    image: "7.jpg",
  },
  {
    id: 26,
    title: "Post 26",
    image: "8.jpg",
  },
  {
    id: 27,
    title: "Post 27",
    image: "9.webp",
  },
  {
    id: 28,
    title: "Post 28",
    image: "10.jpg",
  },
  {
    id: 29,
    title: "Post 29",
    image: "11.jpg",
  },
  {
    id: 30,
    title: "Post 30",
    image: "12.jpg",
  },
  {
    id: 31,
    title: "Post 31",
    image: "13.jpg",
  },
  {
    id: 32,
    title: "Post 32",
    image: "14.jpg",
  },
  {
    id: 33,
    title: "Post 33",
    image: "15.jpeg",
  },
  {
    id: 34,
    title: "Post 34",
    image: "16.jpeg",
  },
  {
    id: 35,
    title: "Post 35",
    image: "17.jpeg",
  },
  {
    id: 36,
    title: "Post 36",
    image: "18.jpg",
  },
  {
    id: 37,
    title: "Post 37",
    image: "19.webp",
  },
  {
    id: 38,
    title: "Post 38",
    image: "1.jpg",
  },
  {
    id: 68,
    title: "Post 68",
    image: "12.jpg",
  },
  {
    id: 69,
    title: "Post 69",
    image: "13.jpg",
  },
  {
    id: 70,
    title: "Post 70",
    image: "14.jpg",
  },
  {
    id: 71,
    title: "Post 71",
    image: "15.jpeg",
  },
  {
    id: 72,
    title: "Post 72",
    image: "16.jpeg",
  },
  {
    id: 73,
    title: "Post 73",
    image: "17.jpeg",
  },
  {
    id: 74,
    title: "Post 74",
    image: "18.jpg",
  },
  {
    id: 75,
    title: "Post 75",
    image: "19.webp",
  },
  {
    id: 76,
    title: "Post 76",
    image: "1.jpg",
  },
  {
    id: 77,
    title: "Post 77",
    image: "2.jpg",
  },
  {
    id: 78,
    title: "Post 78",
    image: "3.jpg",
  },
  {
    id: 79,
    title: "Post 79",
    image: "4.jpg",
  },
  {
    id: 0,
    title: "Post 0",
    image: "1.jpg",
  },
  {
    id: 1,
    title: "Post 1",
    image: "2.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    image: "3.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    image: "4.jpg",
  },
  {
    id: 4,
    title: "Post 4",
    image: "5.webp",
  },
  {
    id: 5,
    title: "Post 5",
    image: "6.jpg",
  },
  {
    id: 6,
    title: "Post 6",
    image: "7.jpg",
  },
  {
    id: 7,
    title: "Post 7",
    image: "8.jpg",
  },
  {
    id: 8,
    title: "Post 8",
    image: "9.webp",
  },
  {
    id: 9,
    title: "Post 9",
    image: "10.jpg",
  },
  {
    id: 10,
    title: "Post 10",
    image: "11.jpg",
  },
  {
    id: 11,
    title: "Post 11",
    image: "12.jpg",
  },
  {
    id: 12,
    title: "Post 12",
    image: "13.jpg",
  },
  {
    id: 13,
    title: "Post 13",
    image: "14.jpg",
  },
  {
    id: 14,
    title: "Post 14",
    image: "15.jpeg",
  },
  {
    id: 15,
    title: "Post 15",
    image: "16.jpeg",
  },
  {
    id: 16,
    title: "Post 16",
    image: "17.jpeg",
  },
  {
    id: 17,
    title: "Post 17",
    image: "18.jpg",
  },
  {
    id: 18,
    title: "Post 18",
    image: "19.webp",
  },
  {
    id: 19,
    title: "Post 19",
    image: "1.jpg",
  },
  {
    id: 20,
    title: "Post 20",
    image: "2.jpg",
  },
  {
    id: 21,
    title: "Post 21",
    image: "3.jpg",
  },
  {
    id: 22,
    title: "Post 22",
    image: "4.jpg",
  },
  {
    id: 23,
    title: "Post 23",
    image: "5.webp",
  },
  {
    id: 24,
    title: "Post 24",
    image: "6.jpg",
  },
  {
    id: 25,
    title: "Post 25",
    image: "7.jpg",
  },
  {
    id: 26,
    title: "Post 26",
    image: "8.jpg",
  },
  {
    id: 27,
    title: "Post 27",
    image: "9.webp",
  },
  {
    id: 28,
    title: "Post 28",
    image: "10.jpg",
  },
  {
    id: 29,
    title: "Post 29",
    image: "11.jpg",
  },
  {
    id: 30,
    title: "Post 30",
    image: "12.jpg",
  },
  {
    id: 31,
    title: "Post 31",
    image: "13.jpg",
  },
  {
    id: 32,
    title: "Post 32",
    image: "14.jpg",
  },
  {
    id: 33,
    title: "Post 33",
    image: "15.jpeg",
  },
  {
    id: 34,
    title: "Post 34",
    image: "16.jpeg",
  },
  {
    id: 35,
    title: "Post 35",
    image: "17.jpeg",
  },
  {
    id: 36,
    title: "Post 36",
    image: "18.jpg",
  },
  {
    id: 37,
    title: "Post 37",
    image: "19.webp",
  },
  {
    id: 38,
    title: "Post 38",
    image: "1.jpg",
  },
  {
    id: 68,
    title: "Post 68",
    image: "12.jpg",
  },
  {
    id: 69,
    title: "Post 69",
    image: "13.jpg",
  },
  {
    id: 70,
    title: "Post 70",
    image: "14.jpg",
  },
  {
    id: 71,
    title: "Post 71",
    image: "15.jpeg",
  },
  {
    id: 72,
    title: "Post 72",
    image: "16.jpeg",
  },
  {
    id: 73,
    title: "Post 73",
    image: "17.jpeg",
  },
  {
    id: 74,
    title: "Post 74",
    image: "18.jpg",
  },
  {
    id: 75,
    title: "Post 75",
    image: "19.webp",
  },
  {
    id: 76,
    title: "Post 76",
    image: "1.jpg",
  },
  {
    id: 77,
    title: "Post 77",
    image: "2.jpg",
  },
  {
    id: 78,
    title: "Post 78",
    image: "3.jpg",
  },
  {
    id: 79,
    title: "Post 79",
    image: "4.jpg",
  },
  {
    id: 0,
    title: "Post 0",
    image: "1.jpg",
  },
  {
    id: 1,
    title: "Post 1",
    image: "2.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    image: "3.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    image: "4.jpg",
  },
  {
    id: 4,
    title: "Post 4",
    image: "5.webp",
  },
  {
    id: 5,
    title: "Post 5",
    image: "6.jpg",
  },
  {
    id: 6,
    title: "Post 6",
    image: "7.jpg",
  },
  {
    id: 7,
    title: "Post 7",
    image: "8.jpg",
  },
  {
    id: 8,
    title: "Post 8",
    image: "9.webp",
  },
  {
    id: 9,
    title: "Post 9",
    image: "10.jpg",
  },
  {
    id: 10,
    title: "Post 10",
    image: "11.jpg",
  },
  {
    id: 11,
    title: "Post 11",
    image: "12.jpg",
  },
  {
    id: 12,
    title: "Post 12",
    image: "13.jpg",
  },
  {
    id: 13,
    title: "Post 13",
    image: "14.jpg",
  },
  {
    id: 14,
    title: "Post 14",
    image: "15.jpeg",
  },
  {
    id: 15,
    title: "Post 15",
    image: "16.jpeg",
  },
  {
    id: 16,
    title: "Post 16",
    image: "17.jpeg",
  },
  {
    id: 17,
    title: "Post 17",
    image: "18.jpg",
  },
  {
    id: 18,
    title: "Post 18",
    image: "19.webp",
  },
  {
    id: 19,
    title: "Post 19",
    image: "1.jpg",
  },
  {
    id: 20,
    title: "Post 20",
    image: "2.jpg",
  },
  {
    id: 21,
    title: "Post 21",
    image: "3.jpg",
  },
  {
    id: 22,
    title: "Post 22",
    image: "4.jpg",
  },
  {
    id: 23,
    title: "Post 23",
    image: "5.webp",
  },
  {
    id: 24,
    title: "Post 24",
    image: "6.jpg",
  },
  {
    id: 25,
    title: "Post 25",
    image: "7.jpg",
  },
  {
    id: 26,
    title: "Post 26",
    image: "8.jpg",
  },
  {
    id: 27,
    title: "Post 27",
    image: "9.webp",
  },
  {
    id: 28,
    title: "Post 28",
    image: "10.jpg",
  },
  {
    id: 29,
    title: "Post 29",
    image: "11.jpg",
  },
  {
    id: 30,
    title: "Post 30",
    image: "12.jpg",
  },
  {
    id: 31,
    title: "Post 31",
    image: "13.jpg",
  },
  {
    id: 32,
    title: "Post 32",
    image: "14.jpg",
  },
  {
    id: 33,
    title: "Post 33",
    image: "15.jpeg",
  },
  {
    id: 34,
    title: "Post 34",
    image: "16.jpeg",
  },
  {
    id: 35,
    title: "Post 35",
    image: "17.jpeg",
  },
  {
    id: 36,
    title: "Post 36",
    image: "18.jpg",
  },
  {
    id: 37,
    title: "Post 37",
    image: "19.webp",
  },
  {
    id: 38,
    title: "Post 38",
    image: "1.jpg",
  },
  {
    id: 68,
    title: "Post 68",
    image: "12.jpg",
  },
  {
    id: 69,
    title: "Post 69",
    image: "13.jpg",
  },
  {
    id: 70,
    title: "Post 70",
    image: "14.jpg",
  },
  {
    id: 71,
    title: "Post 71",
    image: "15.jpeg",
  },
  {
    id: 72,
    title: "Post 72",
    image: "16.jpeg",
  },
  {
    id: 73,
    title: "Post 73",
    image: "17.jpeg",
  },
  {
    id: 74,
    title: "Post 74",
    image: "18.jpg",
  },
  {
    id: 75,
    title: "Post 75",
    image: "19.webp",
  },
  {
    id: 76,
    title: "Post 76",
    image: "1.jpg",
  },
  {
    id: 77,
    title: "Post 77",
    image: "2.jpg",
  },
  {
    id: 78,
    title: "Post 78",
    image: "3.jpg",
  },
  {
    id: 79,
    title: "Post 79",
    image: "4.jpg",
  },
  {
    id: 0,
    title: "Post 0",
    image: "1.jpg",
  },
  {
    id: 1,
    title: "Post 1",
    image: "2.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    image: "3.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    image: "4.jpg",
  },
  {
    id: 4,
    title: "Post 4",
    image: "5.webp",
  },
  {
    id: 5,
    title: "Post 5",
    image: "6.jpg",
  },
  {
    id: 6,
    title: "Post 6",
    image: "7.jpg",
  },
  {
    id: 7,
    title: "Post 7",
    image: "8.jpg",
  },
  {
    id: 8,
    title: "Post 8",
    image: "9.webp",
  },
  {
    id: 9,
    title: "Post 9",
    image: "10.jpg",
  },
  {
    id: 10,
    title: "Post 10",
    image: "11.jpg",
  },
  {
    id: 11,
    title: "Post 11",
    image: "12.jpg",
  },
  {
    id: 12,
    title: "Post 12",
    image: "13.jpg",
  },
  {
    id: 13,
    title: "Post 13",
    image: "14.jpg",
  },
  {
    id: 14,
    title: "Post 14",
    image: "15.jpeg",
  },
  {
    id: 15,
    title: "Post 15",
    image: "16.jpeg",
  },
  {
    id: 16,
    title: "Post 16",
    image: "17.jpeg",
  },
  {
    id: 17,
    title: "Post 17",
    image: "18.jpg",
  },
  {
    id: 18,
    title: "Post 18",
    image: "19.webp",
  },
  {
    id: 19,
    title: "Post 19",
    image: "1.jpg",
  },
  {
    id: 20,
    title: "Post 20",
    image: "2.jpg",
  },
  {
    id: 21,
    title: "Post 21",
    image: "3.jpg",
  },
  {
    id: 22,
    title: "Post 22",
    image: "4.jpg",
  },
  {
    id: 23,
    title: "Post 23",
    image: "5.webp",
  },
  {
    id: 24,
    title: "Post 24",
    image: "6.jpg",
  },
  {
    id: 25,
    title: "Post 25",
    image: "7.jpg",
  },
  {
    id: 26,
    title: "Post 26",
    image: "8.jpg",
  },
  {
    id: 27,
    title: "Post 27",
    image: "9.webp",
  },
  {
    id: 28,
    title: "Post 28",
    image: "10.jpg",
  },
  {
    id: 29,
    title: "Post 29",
    image: "11.jpg",
  },
  {
    id: 30,
    title: "Post 30",
    image: "12.jpg",
  },
  {
    id: 31,
    title: "Post 31",
    image: "13.jpg",
  },
  {
    id: 32,
    title: "Post 32",
    image: "14.jpg",
  },
  {
    id: 33,
    title: "Post 33",
    image: "15.jpeg",
  },
  {
    id: 34,
    title: "Post 34",
    image: "16.jpeg",
  },
  {
    id: 35,
    title: "Post 35",
    image: "17.jpeg",
  },
  {
    id: 36,
    title: "Post 36",
    image: "18.jpg",
  },
  {
    id: 37,
    title: "Post 37",
    image: "19.webp",
  },
  {
    id: 38,
    title: "Post 38",
    image: "1.jpg",
  },
  {
    id: 68,
    title: "Post 68",
    image: "12.jpg",
  },
  {
    id: 69,
    title: "Post 69",
    image: "13.jpg",
  },
  {
    id: 70,
    title: "Post 70",
    image: "14.jpg",
  },
  {
    id: 71,
    title: "Post 71",
    image: "15.jpeg",
  },
  {
    id: 72,
    title: "Post 72",
    image: "16.jpeg",
  },
  {
    id: 73,
    title: "Post 73",
    image: "17.jpeg",
  },
  {
    id: 74,
    title: "Post 74",
    image: "18.jpg",
  },
  {
    id: 75,
    title: "Post 75",
    image: "19.webp",
  },
  {
    id: 76,
    title: "Post 76",
    image: "1.jpg",
  },
  {
    id: 77,
    title: "Post 77",
    image: "2.jpg",
  },
  {
    id: 78,
    title: "Post 78",
    image: "3.jpg",
  },
  {
    id: 79,
    title: "Post 79",
    image: "4.jpg",
  },
  {
    id: 0,
    title: "Post 0",
    image: "1.jpg",
  },
  {
    id: 1,
    title: "Post 1",
    image: "2.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    image: "3.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    image: "4.jpg",
  },
  {
    id: 4,
    title: "Post 4",
    image: "5.webp",
  },
  {
    id: 5,
    title: "Post 5",
    image: "6.jpg",
  },
  {
    id: 6,
    title: "Post 6",
    image: "7.jpg",
  },
  {
    id: 7,
    title: "Post 7",
    image: "8.jpg",
  },
  {
    id: 8,
    title: "Post 8",
    image: "9.webp",
  },
  {
    id: 9,
    title: "Post 9",
    image: "10.jpg",
  },
  {
    id: 10,
    title: "Post 10",
    image: "11.jpg",
  },
  {
    id: 11,
    title: "Post 11",
    image: "12.jpg",
  },
  {
    id: 12,
    title: "Post 12",
    image: "13.jpg",
  },
  {
    id: 13,
    title: "Post 13",
    image: "14.jpg",
  },
  {
    id: 14,
    title: "Post 14",
    image: "15.jpeg",
  },
  {
    id: 15,
    title: "Post 15",
    image: "16.jpeg",
  },
  {
    id: 16,
    title: "Post 16",
    image: "17.jpeg",
  },
  {
    id: 17,
    title: "Post 17",
    image: "18.jpg",
  },
  {
    id: 18,
    title: "Post 18",
    image: "19.webp",
  },
  {
    id: 19,
    title: "Post 19",
    image: "1.jpg",
  },
  {
    id: 20,
    title: "Post 20",
    image: "2.jpg",
  },
  {
    id: 21,
    title: "Post 21",
    image: "3.jpg",
  },
  {
    id: 22,
    title: "Post 22",
    image: "4.jpg",
  },
  {
    id: 23,
    title: "Post 23",
    image: "5.webp",
  },
  {
    id: 24,
    title: "Post 24",
    image: "6.jpg",
  },
  {
    id: 25,
    title: "Post 25",
    image: "7.jpg",
  },
  {
    id: 26,
    title: "Post 26",
    image: "8.jpg",
  },
  {
    id: 27,
    title: "Post 27",
    image: "9.webp",
  },
  {
    id: 28,
    title: "Post 28",
    image: "10.jpg",
  },
  {
    id: 29,
    title: "Post 29",
    image: "11.jpg",
  },
  {
    id: 30,
    title: "Post 30",
    image: "12.jpg",
  },
  {
    id: 31,
    title: "Post 31",
    image: "13.jpg",
  },
  {
    id: 32,
    title: "Post 32",
    image: "14.jpg",
  },
  {
    id: 33,
    title: "Post 33",
    image: "15.jpeg",
  },
  {
    id: 34,
    title: "Post 34",
    image: "16.jpeg",
  },
  {
    id: 35,
    title: "Post 35",
    image: "17.jpeg",
  },
  {
    id: 36,
    title: "Post 36",
    image: "18.jpg",
  },
  {
    id: 37,
    title: "Post 37",
    image: "19.webp",
  },
  {
    id: 38,
    title: "Post 38",
    image: "1.jpg",
  },
  {
    id: 68,
    title: "Post 68",
    image: "12.jpg",
  },
  {
    id: 69,
    title: "Post 69",
    image: "13.jpg",
  },
  {
    id: 70,
    title: "Post 70",
    image: "14.jpg",
  },
  {
    id: 71,
    title: "Post 71",
    image: "15.jpeg",
  },
  {
    id: 72,
    title: "Post 72",
    image: "16.jpeg",
  },
  {
    id: 73,
    title: "Post 73",
    image: "17.jpeg",
  },
  {
    id: 74,
    title: "Post 74",
    image: "18.jpg",
  },
  {
    id: 75,
    title: "Post 75",
    image: "19.webp",
  },
  {
    id: 76,
    title: "Post 76",
    image: "1.jpg",
  },
  {
    id: 77,
    title: "Post 77",
    image: "2.jpg",
  },
  {
    id: 78,
    title: "Post 78",
    image: "3.jpg",
  },
  {
    id: 79,
    title: "Post 79",
    image: "4.jpg",
  },
  {
    id: 0,
    title: "Post 0",
    image: "1.jpg",
  },
  {
    id: 1,
    title: "Post 1",
    image: "2.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    image: "3.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    image: "4.jpg",
  },
  {
    id: 4,
    title: "Post 4",
    image: "5.webp",
  },
  {
    id: 5,
    title: "Post 5",
    image: "6.jpg",
  },
  {
    id: 6,
    title: "Post 6",
    image: "7.jpg",
  },
  {
    id: 7,
    title: "Post 7",
    image: "8.jpg",
  },
  {
    id: 8,
    title: "Post 8",
    image: "9.webp",
  },
  {
    id: 9,
    title: "Post 9",
    image: "10.jpg",
  },
  {
    id: 10,
    title: "Post 10",
    image: "11.jpg",
  },
  {
    id: 11,
    title: "Post 11",
    image: "12.jpg",
  },
  {
    id: 12,
    title: "Post 12",
    image: "13.jpg",
  },
  {
    id: 13,
    title: "Post 13",
    image: "14.jpg",
  },
  {
    id: 14,
    title: "Post 14",
    image: "15.jpeg",
  },
  {
    id: 15,
    title: "Post 15",
    image: "16.jpeg",
  },
  {
    id: 16,
    title: "Post 16",
    image: "17.jpeg",
  },
  {
    id: 17,
    title: "Post 17",
    image: "18.jpg",
  },
  {
    id: 18,
    title: "Post 18",
    image: "19.webp",
  },
  {
    id: 19,
    title: "Post 19",
    image: "1.jpg",
  },
  {
    id: 20,
    title: "Post 20",
    image: "2.jpg",
  },
  {
    id: 21,
    title: "Post 21",
    image: "3.jpg",
  },
  {
    id: 22,
    title: "Post 22",
    image: "4.jpg",
  },
  {
    id: 23,
    title: "Post 23",
    image: "5.webp",
  },
  {
    id: 24,
    title: "Post 24",
    image: "6.jpg",
  },
  {
    id: 25,
    title: "Post 25",
    image: "7.jpg",
  },
  {
    id: 26,
    title: "Post 26",
    image: "8.jpg",
  },
  {
    id: 27,
    title: "Post 27",
    image: "9.webp",
  },
  {
    id: 28,
    title: "Post 28",
    image: "10.jpg",
  },
  {
    id: 29,
    title: "Post 29",
    image: "11.jpg",
  },
  {
    id: 30,
    title: "Post 30",
    image: "12.jpg",
  },
  {
    id: 31,
    title: "Post 31",
    image: "13.jpg",
  },
  {
    id: 32,
    title: "Post 32",
    image: "14.jpg",
  },
  {
    id: 33,
    title: "Post 33",
    image: "15.jpeg",
  },
  {
    id: 34,
    title: "Post 34",
    image: "16.jpeg",
  },
  {
    id: 35,
    title: "Post 35",
    image: "17.jpeg",
  },
  {
    id: 36,
    title: "Post 36",
    image: "18.jpg",
  },
  {
    id: 37,
    title: "Post 37",
    image: "19.webp",
  },
  {
    id: 38,
    title: "Post 38",
    image: "1.jpg",
  },
  {
    id: 68,
    title: "Post 68",
    image: "12.jpg",
  },
  {
    id: 69,
    title: "Post 69",
    image: "13.jpg",
  },
  {
    id: 70,
    title: "Post 70",
    image: "14.jpg",
  },
  {
    id: 71,
    title: "Post 71",
    image: "15.jpeg",
  },
  {
    id: 72,
    title: "Post 72",
    image: "16.jpeg",
  },
  {
    id: 73,
    title: "Post 73",
    image: "17.jpeg",
  },
  {
    id: 74,
    title: "Post 74",
    image: "18.jpg",
  },
  {
    id: 75,
    title: "Post 75",
    image: "19.webp",
  },
  {
    id: 76,
    title: "Post 76",
    image: "1.jpg",
  },
  {
    id: 77,
    title: "Post 77",
    image: "2.jpg",
  },
  {
    id: 78,
    title: "Post 78",
    image: "3.jpg",
  },
  {
    id: 79,
    title: "Post 79",
    image: "4.jpg",
  },
  {
    id: 0,
    title: "Post 0",
    image: "1.jpg",
  },
  {
    id: 1,
    title: "Post 1",
    image: "2.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    image: "3.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    image: "4.jpg",
  },
  {
    id: 4,
    title: "Post 4",
    image: "5.webp",
  },
  {
    id: 5,
    title: "Post 5",
    image: "6.jpg",
  },
  {
    id: 6,
    title: "Post 6",
    image: "7.jpg",
  },
  {
    id: 7,
    title: "Post 7",
    image: "8.jpg",
  },
  {
    id: 8,
    title: "Post 8",
    image: "9.webp",
  },
  {
    id: 9,
    title: "Post 9",
    image: "10.jpg",
  },
  {
    id: 10,
    title: "Post 10",
    image: "11.jpg",
  },
  {
    id: 11,
    title: "Post 11",
    image: "12.jpg",
  },
  {
    id: 12,
    title: "Post 12",
    image: "13.jpg",
  },
  {
    id: 13,
    title: "Post 13",
    image: "14.jpg",
  },
  {
    id: 14,
    title: "Post 14",
    image: "15.jpeg",
  },
  {
    id: 15,
    title: "Post 15",
    image: "16.jpeg",
  },
  {
    id: 16,
    title: "Post 16",
    image: "17.jpeg",
  },
  {
    id: 17,
    title: "Post 17",
    image: "18.jpg",
  },
  {
    id: 18,
    title: "Post 18",
    image: "19.webp",
  },
  {
    id: 19,
    title: "Post 19",
    image: "1.jpg",
  },
  {
    id: 20,
    title: "Post 20",
    image: "2.jpg",
  },
  {
    id: 21,
    title: "Post 21",
    image: "3.jpg",
  },
  {
    id: 22,
    title: "Post 22",
    image: "4.jpg",
  },
  {
    id: 23,
    title: "Post 23",
    image: "5.webp",
  },
  {
    id: 24,
    title: "Post 24",
    image: "6.jpg",
  },
  {
    id: 25,
    title: "Post 25",
    image: "7.jpg",
  },
  {
    id: 26,
    title: "Post 26",
    image: "8.jpg",
  },
  {
    id: 27,
    title: "Post 27",
    image: "9.webp",
  },
  {
    id: 28,
    title: "Post 28",
    image: "10.jpg",
  },
  {
    id: 29,
    title: "Post 29",
    image: "11.jpg",
  },
  {
    id: 30,
    title: "Post 30",
    image: "12.jpg",
  },
  {
    id: 31,
    title: "Post 31",
    image: "13.jpg",
  },
  {
    id: 32,
    title: "Post 32",
    image: "14.jpg",
  },
  {
    id: 33,
    title: "Post 33",
    image: "15.jpeg",
  },
  {
    id: 34,
    title: "Post 34",
    image: "16.jpeg",
  },
  {
    id: 35,
    title: "Post 35",
    image: "17.jpeg",
  },
  {
    id: 36,
    title: "Post 36",
    image: "18.jpg",
  },
  {
    id: 37,
    title: "Post 37",
    image: "19.webp",
  },
  {
    id: 38,
    title: "Post 38",
    image: "1.jpg",
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

module.exports = {
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
  verifyJWT,
  signJWT,
  dummyData,
  sleep,
  corsDefaults,
  signTokens,
};
